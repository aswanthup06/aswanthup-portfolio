import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    const trimmedName = typeof name === "string" ? name.trim() : "";
    const trimmedEmail = typeof email === "string" ? email.trim() : "";
    const trimmedMessage = typeof message === "string" ? message.trim() : "";

    // Validation
    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        {
          status: 400,
        }
      );
    }

    if (trimmedName.length < 2) {
      return NextResponse.json(
        {
          success: false,
          message: "Name must be at least 2 characters",
        },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid email address",
        },
        { status: 400 }
      );
    }

    if (trimmedMessage.length < 10) {
      return NextResponse.json(
        {
          success: false,
          message: "Message must be at least 10 characters",
        },
        { status: 400 }
      );
    }

    let apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      try {
        const fs = await import("fs");
        const path = await import("path");
        const envPath = path.join(process.cwd(), ".env.local");
        if (fs.existsSync(envPath)) {
          const envContent = fs.readFileSync(envPath, "utf-8");
          const match = envContent.match(/RESEND_API_KEY\s*=\s*([^\r\n]+)/);
          if (match) {
            apiKey = match[1].trim().replace(/^["']|["']$/g, "");
          }
        }
      } catch (err) {
        console.error("Error reading .env.local fallback:", err);
      }
    }

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable. If you recently updated .env.local, please restart npm run dev.");
      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured (missing RESEND_API_KEY). Please add RESEND_API_KEY in .env.local or restart your dev server.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // Send email
    const { data, error: resendError } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["aswanthup06@gmail.com"],
      subject: `New message from ${trimmedName}`,
      html: `
        <div style="font-family:sans-serif;padding:24px;max-width:600px;margin:auto;border:1px solid #e5e7eb;border-radius:12px">
          <h2 style="color:#111827;margin-top:0">New Portfolio Message</h2>
          <p style="margin:8px 0"><strong>Name:</strong> ${trimmedName}</p>
          <p style="margin:8px 0"><strong>Email:</strong> <a href="mailto:${trimmedEmail}">${trimmedEmail}</a></p>
          <p style="margin:16px 0 8px"><strong>Message:</strong></p>
          <div style="background:#f9fafb;padding:16px;border-radius:8px;border:1px solid #e5e7eb;white-space:pre-wrap;color:#374151">
            ${trimmedMessage}
          </div>
        </div>
      `,
    });

    if (resendError) {
      console.error("Resend API error:", resendError);
      return NextResponse.json(
        {
          success: false,
          message: resendError.message || "Failed to send email via Resend",
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error: any) {
    console.error("Contact API Exception:", error);
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Internal server error",
      },
      { status: 500 }
    );
  }
}
