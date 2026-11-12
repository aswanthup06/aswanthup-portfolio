import { GoogleGenAI } from "@google/genai";
import { NextRequest } from "next/server";
import {
  PORTFOLIO_SYSTEM_INSTRUCTION,
  shouldSuggestContact,
} from "../../lib/chatContext";

const MODELS = [
  "gemini-3.5-flash-lite",
  "gemini-3.8-flash",
  "gemini-3.1-flash-lite",
] as const;
const MAX_MESSAGE_LENGTH = 1000;

async function resolveApiKey(): Promise<string | undefined> {
  const envKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;
  if (envKey) return envKey;

  try {
    const fs = await import("fs");
    const path = await import("path");
    const envPath = path.join(process.cwd(), ".env.local");
    if (fs.existsSync(envPath)) {
      const envContent = fs.readFileSync(envPath, "utf-8");
      const match = envContent.match(
        /(?:GEMINI_API_KEY|GOOGLE_API_KEY)\s*=\s*([^\r\n]+)/
      );
      if (match) {
        return match[1].trim().replace(/^["']|["']$/g, "");
      }
    }
  } catch (err) {
    console.error("Error reading .env.local fallback:", err);
  }

  return undefined;
}

function encodeEvent(payload: Record<string, unknown>): Uint8Array {
  return new TextEncoder().encode(`${JSON.stringify(payload)}\n`);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const rawMessage =
      typeof body?.message === "string" ? body.message.trim() : "";
    const previousInteractionId =
      typeof body?.previousInteractionId === "string" &&
      body.previousInteractionId.trim()
        ? body.previousInteractionId.trim()
        : undefined;

    if (!rawMessage) {
      return Response.json(
        { success: false, message: "Please enter a message." },
        { status: 400 }
      );
    }

    if (rawMessage.length > MAX_MESSAGE_LENGTH) {
      return Response.json(
        {
          success: false,
          message: `Message must be ${MAX_MESSAGE_LENGTH} characters or fewer.`,
        },
        { status: 400 }
      );
    }

    const apiKey = await resolveApiKey();
    if (!apiKey) {
      return Response.json(
        {
          success: false,
          code: "MISSING_API_KEY",
          message:
            "Gemini API is not configured yet. Add GEMINI_API_KEY in .env.local and restart the dev server.",
        },
        { status: 503 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    const streamResponse = new ReadableStream<Uint8Array>({
      async start(controller) {
        const openStream = (model: string, prevId?: string) =>
          ai.interactions.create({
            model,
            input: rawMessage,
            system_instruction: PORTFOLIO_SYSTEM_INSTRUCTION,
            ...(prevId ? { previous_interaction_id: prevId } : {}),
            stream: true,
          });

        let streamedAnyText = false;
        let interactionId: string | undefined;
        let fullReply = "";
        let lastError: unknown;

        for (const model of MODELS) {
          try {
            let stream;
            try {
              stream = await openStream(model, previousInteractionId);
            } catch (err) {
              if (previousInteractionId) {
                stream = await openStream(model, undefined);
              } else {
                throw err;
              }
            }

            for await (const event of stream) {
              if (event.event_type === "interaction.created" && event.interaction?.id) {
                interactionId = event.interaction.id;
              } else if (
                event.event_type === "step.delta" &&
                event.delta?.type === "text" &&
                event.delta.text
              ) {
                streamedAnyText = true;
                fullReply += event.delta.text;
                controller.enqueue(
                  encodeEvent({ type: "delta", text: event.delta.text })
                );
              } else if (
                event.event_type === "interaction.completed" &&
                event.interaction?.id
              ) {
                interactionId = event.interaction.id;
              }
            }

            if (streamedAnyText) {
              const actions = shouldSuggestContact(rawMessage, fullReply)
                ? [{ label: "Open Contact Form", actionType: "open-contact" }]
                : [];
              controller.enqueue(
                encodeEvent({ type: "done", interactionId, actions })
              );
              controller.close();
              return;
            }
          } catch (err) {
            lastError = err;
            // If tokens already streamed to the client, don't retry with another model mid-message
            if (streamedAnyText) break;
          }
        }

        const errMessage =
          lastError instanceof Error && lastError.message
            ? lastError.message
            : "Unable to reach Gemini right now. Please try again.";
        controller.enqueue(encodeEvent({ type: "error", message: errMessage }));
        controller.close();
      },
    });

    return new Response(streamResponse, {
      headers: {
        "Content-Type": "application/x-ndjson; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
      },
    });
  } catch (error: unknown) {
    console.error("Gemini Chat API Error:", error);
    const message =
      error instanceof Error
        ? error.message
        : "Something went wrong while contacting Gemini.";
    return Response.json({ success: false, message }, { status: 500 });
  }
}
