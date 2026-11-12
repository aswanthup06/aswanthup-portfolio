"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  RotateCcw,
  SendHorizontal,
  Sparkles,
  X,
} from "lucide-react";
import { useContactModal } from "../context/ContactModalContext";
import { useModal } from "../context/ModalContext";
import { PREMIUM_EASE, SPRING_SMOOTH } from "../lib/animations";
import {
  INITIAL_MESSAGES,
  type ChatAction,
  type ChatMessage,
} from "../lib/chatContext";

function createMessageId(prefix: string): string {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="rounded-[18px] rounded-tl-[4px] bg-surface-muted/75 border border-border-default px-3.5 py-2.5 flex items-center gap-1.5">
        {[0, 1, 2].map((dot) => (
          <motion.span
            key={dot}
            className="h-1.5 w-1.5 rounded-full bg-text-muted"
            animate={{ opacity: [0.35, 1, 0.35], y: [0, -3, 0] }}
            transition={{
              duration: 0.9,
              repeat: Infinity,
              delay: dot * 0.16,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function ActionButton({
  action,
  onOpenContact,
  onNavigate,
}: {
  action: ChatAction;
  onOpenContact: () => void;
  onNavigate: () => void;
}) {
  const baseClass =
    "inline-flex items-center gap-1 rounded-full border border-border-default bg-surface-card hover:border-border-accent hover:bg-primary-subtle px-2.5 py-1 text-[11px] font-medium text-text-secondary hover:text-text-primary transition-colors";

  if (action.actionType === "open-contact") {
    return (
      <button type="button" onClick={onOpenContact} className={baseClass}>
        <span>{action.label}</span>
        <ArrowUpRight className="h-3 w-3 text-text-accent" />
      </button>
    );
  }

  if (action.href && action.external) {
    return (
      <a
        href={action.href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
      >
        <span>{action.label}</span>
        <ArrowUpRight className="h-3 w-3 text-text-accent" />
      </a>
    );
  }

  if (action.href) {
    return (
      <Link href={action.href} onClick={onNavigate} className={baseClass}>
        <span>{action.label}</span>
        <ArrowUpRight className="h-3 w-3 text-text-accent" />
      </Link>
    );
  }

  return null;
}

function FormattedMessageText({
  text,
  onNavigate,
}: {
  text: string;
  onNavigate: () => void;
}) {
  const tokenRegex = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g;
  const parts = text.split(tokenRegex);

  return (
    <p className="whitespace-pre-wrap break-words">
      {parts.map((part, idx) => {
        const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (linkMatch) {
          const [, label, href] = linkMatch;
          const isInternal = href.startsWith("/");
          const isSafeExternal =
            href.startsWith("https://") ||
            href.startsWith("http://") ||
            href.startsWith("mailto:");

          if (isInternal) {
            return (
              <Link
                key={idx}
                href={href}
                onClick={onNavigate}
                className="font-medium text-text-accent underline decoration-primary-border underline-offset-2 hover:opacity-80"
              >
                {label}
              </Link>
            );
          }
          if (isSafeExternal) {
            return (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-text-accent underline decoration-primary-border underline-offset-2 hover:opacity-80"
              >
                {label}
              </a>
            );
          }
        }

        const boldMatch = part.match(/^\*\*([^*]+)\*\*$/);
        if (boldMatch) {
          return (
            <strong key={idx} className="font-semibold text-text-primary">
              {boldMatch[1]}
            </strong>
          );
        }

        return <React.Fragment key={idx}>{part}</React.Fragment>;
      })}
    </p>
  );
}

function MessageBubble({
  message,
  onOpenContact,
  onNavigate,
}: {
  message: ChatMessage;
  onOpenContact: () => void;
  onNavigate: () => void;
}) {
  const isUser = message.role === "user";

  if (isUser) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: PREMIUM_EASE }}
        className="flex justify-end"
      >
        <div className="max-w-[82%] rounded-[18px] rounded-tr-[4px] bg-primary-subtle border border-primary-border px-3.5 py-2.5 text-xs sm:text-[13px] leading-relaxed text-text-primary">
          <p className="whitespace-pre-wrap break-words">{message.content}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: PREMIUM_EASE }}
      className="flex justify-start"
    >
      <div className="max-w-[88%] space-y-2">
        <div className="rounded-[18px] rounded-tl-[4px] bg-surface-muted/75 border border-border-default px-3.5 py-2.5 text-xs sm:text-[13px] leading-relaxed text-text-primary">
          <FormattedMessageText text={message.content} onNavigate={onNavigate} />
        </div>
        {message.actions && message.actions.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {message.actions.map((action, idx) => (
              <ActionButton
                key={`${message.id}-action-${idx}`}
                action={action}
                onOpenContact={onOpenContact}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

const LAUNCHER_PROMPTS = [
  "Ask about my projects",
  "Figma → React workflow",
  "Stack & experience",
  "Open to roles?",
] as const;

export default function ChatWidget() {
  const { isOpen: isContactOpen, openModal: openContactModal } = useContactModal();
  const { isModalOpen, openModal, closeModal } = useModal();
  const isOpen = isModalOpen("chat");
  const prefersReducedMotion = useReducedMotion();
  const [promptIndex, setPromptIndex] = useState(0);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [interactionId, setInteractionId] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [isWaitingForFirstToken, setIsWaitingForFirstToken] = useState(false);

  const widgetRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const [mobileViewport, setMobileViewport] = useState<{
    isMobile: boolean;
    height: number | null;
    offsetTop: number;
  }>({
    isMobile: false,
    height: null,
    offsetTop: 0,
  });

  const scrollMessagesToBottom = useCallback((smooth: boolean) => {
    const container = messagesContainerRef.current;
    if (!container) return;
    if (smooth) {
      container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
    } else {
      container.scrollTop = container.scrollHeight;
    }
  }, []);

  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort();
    };
  }, []);

  useEffect(() => {
    if (isOpen || isContactOpen || prefersReducedMotion) return;

    const timer = setInterval(() => {
      setPromptIndex((prev) => (prev + 1) % LAUNCHER_PROMPTS.length);
    }, 3400);

    return () => clearInterval(timer);
  }, [isOpen, isContactOpen, prefersReducedMotion]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (window.innerWidth < 640) return;
      if (widgetRef.current && !widgetRef.current.contains(e.target as Node)) {
        closeModal("chat");
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal("chat");
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeModal]);

  useEffect(() => {
    if (!isOpen) return;

    const lenis = (
      window as unknown as { lenis?: { stop: () => void; start: () => void } }
    ).lenis;
    let isCurrentlyLocked = false;

    const syncLock = (isMobile: boolean) => {
      if (isMobile && !isCurrentlyLocked) {
        document.documentElement.classList.add("modal-open");
        lenis?.stop();
        isCurrentlyLocked = true;
      } else if (!isMobile && isCurrentlyLocked) {
        document.documentElement.classList.remove("modal-open");
        lenis?.start();
        isCurrentlyLocked = false;
      }
    };

    const updateViewport = () => {
      const isMobile = window.innerWidth < 640;
      syncLock(isMobile);

      if (!isMobile) {
        setMobileViewport({ isMobile: false, height: null, offsetTop: 0 });
        return;
      }

      const vv = window.visualViewport;
      const height = vv ? Math.round(vv.height) : window.innerHeight;
      const offsetTop = vv ? Math.round(vv.offsetTop) : 0;

      setMobileViewport({ isMobile: true, height, offsetTop });
      requestAnimationFrame(() => scrollMessagesToBottom(false));
    };

    updateViewport();

    const vv = window.visualViewport;
    vv?.addEventListener("resize", updateViewport);
    vv?.addEventListener("scroll", updateViewport);
    window.addEventListener("resize", updateViewport);

    return () => {
      vv?.removeEventListener("resize", updateViewport);
      vv?.removeEventListener("scroll", updateViewport);
      window.removeEventListener("resize", updateViewport);
      if (isCurrentlyLocked) {
        document.documentElement.classList.remove("modal-open");
        lenis?.start();
      }
    };
  }, [isOpen, scrollMessagesToBottom]);

  useEffect(() => {
    if (!isOpen) return;
    scrollMessagesToBottom(!isStreaming);
  }, [
    messages,
    isWaitingForFirstToken,
    isStreaming,
    isOpen,
    scrollMessagesToBottom,
  ]);

  const resetInputHeight = () => {
    const el = inputRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.overflowY = "hidden";
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const el = e.target;
    setInput(el.value);
    el.style.height = "auto";
    const nextHeight = Math.min(el.scrollHeight, 96);
    el.style.height = `${nextHeight}px`;
    el.style.overflowY = el.scrollHeight > 96 ? "auto" : "hidden";
  };

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed || isStreaming) return;

    const userMsg: ChatMessage = {
      id: createMessageId("user"),
      role: "user",
      content: trimmed,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    resetInputHeight();
    inputRef.current?.focus({ preventScroll: true });
    setIsStreaming(true);
    setIsWaitingForFirstToken(true);

    abortControllerRef.current?.abort();
    const controller = new AbortController();
    abortControllerRef.current = controller;

    const assistantId = createMessageId("assistant");
    let assistantCreated = false;

    const appendAssistantDelta = (delta: string) => {
      if (!assistantCreated) {
        assistantCreated = true;
        setIsWaitingForFirstToken(false);
        setMessages((prev) => [
          ...prev,
          { id: assistantId, role: "assistant", content: delta },
        ]);
      } else {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId ? { ...m, content: m.content + delta } : m
          )
        );
      }
    };

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: trimmed,
          previousInteractionId: interactionId,
        }),
        signal: controller.signal,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.message || "Unable to reach the assistant right now.");
      }

      if (!res.body) {
        throw new Error("Streaming is not supported in this browser.");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";

        for (const line of lines) {
          const trimmedLine = line.trim();
          if (!trimmedLine) continue;

          const event = JSON.parse(trimmedLine) as {
            type: "delta" | "done" | "error";
            text?: string;
            interactionId?: string;
            actions?: ChatAction[];
            message?: string;
          };

          if (event.type === "delta" && event.text) {
            appendAssistantDelta(event.text);
          } else if (event.type === "done") {
            if (event.interactionId) {
              setInteractionId(event.interactionId);
            }
            if (Array.isArray(event.actions) && event.actions.length > 0) {
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantId ? { ...m, actions: event.actions } : m
                )
              );
            }
          } else if (event.type === "error") {
            throw new Error(event.message || "Unable to generate a response.");
          }
        }
      }
    } catch (error: unknown) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return;
      }
      const fallbackMessage =
        error instanceof Error && error.message
          ? error.message
          : "Something went wrong. Please try again or reach out via the contact form.";
      setIsWaitingForFirstToken(false);
      if (!assistantCreated) {
        setMessages((prev) => [
          ...prev,
          {
            id: assistantId,
            role: "assistant",
            content: fallbackMessage,
            actions: [{ label: "Open Contact Form", actionType: "open-contact" }],
          },
        ]);
      }
    } finally {
      if (abortControllerRef.current === controller) {
        abortControllerRef.current = null;
      }
      setIsWaitingForFirstToken(false);
      setIsStreaming(false);
    }
  };

  const handleReset = () => {
    abortControllerRef.current?.abort();
    abortControllerRef.current = null;
    setIsWaitingForFirstToken(false);
    setIsStreaming(false);
    setInteractionId(null);
    setMessages(INITIAL_MESSAGES);
    setInput("");
    resetInputHeight();
    inputRef.current?.focus({ preventScroll: true });
  };

  const handleLauncherClick = () => {
    if (isOpen) {
      closeModal("chat");
      return;
    }

    flushSync(() => {
      openModal("chat");
    });
    inputRef.current?.focus({ preventScroll: true });
  };

  const handleOpenContact = () => {
    openContactModal();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (isContactOpen) return null;

  const mobileWrapperStyle =
    isOpen && mobileViewport.isMobile && mobileViewport.height !== null
      ? {
          top: `${mobileViewport.offsetTop}px`,
          bottom: "auto",
          height: `${mobileViewport.height}px`,
        }
      : undefined;

  return (
    <div
      ref={widgetRef}
      style={mobileWrapperStyle}
      className={`fixed z-60 flex flex-col pointer-events-none ${
        isOpen
          ? "inset-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:items-end sm:gap-3"
          : "bottom-4 right-4 sm:bottom-6 sm:right-6 items-end gap-3"
      }`}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.section
            role="dialog"
            aria-label="Portfolio chat assistant"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={SPRING_SMOOTH}
            className="pointer-events-auto w-full h-full rounded-none border-0 sm:w-[390px] sm:h-[min(520px,calc(100dvh-9.5rem))] sm:rounded-[20px] sm:border sm:border-border-default bg-surface-card sm:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.45)] flex flex-col overflow-hidden overscroll-contain"
          >
            {/* Header */}
            <header className="px-4 py-3.5 pt-[max(0.875rem,env(safe-area-inset-top))] sm:pt-3.5 border-b border-border-default bg-surface-subtle/80 backdrop-blur-md flex items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="h-9 w-9 shrink-0 rounded-full bg-brand-gradient flex items-center justify-center text-white shadow-primary-glow">
                  <Bot className="h-4.5 w-4.5" />
                </div>
                <div className="min-w-0">
                  <h2 className="text-sm font-semibold text-text-primary leading-tight truncate">
                    Ask Aswanth&apos;s AI
                  </h2>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-[11px] text-text-muted truncate">
                      Portfolio Assistant
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={handleReset}
                  aria-label="Reset conversation"
                  title="New chat"
                  className="h-8 w-8 rounded-full flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-surface-muted transition-colors"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => closeModal("chat")}
                  aria-label="Close chat"
                  title="Close"
                  className="h-8 w-8 rounded-full flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-surface-muted transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </header>

            {/* Messages */}
            <div
              ref={messagesContainerRef}
              data-lenis-prevent
              className="flex-1 min-h-0 overflow-y-auto overscroll-contain chat-scrollbar px-4 py-4 space-y-4"
            >
              {messages.map((msg) => (
                <MessageBubble
                  key={msg.id}
                  message={msg}
                  onOpenContact={handleOpenContact}
                  onNavigate={() => closeModal("chat")}
                />
              ))}

              {isWaitingForFirstToken && <TypingIndicator />}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:pb-3 border-t border-border-default bg-surface-subtle/60 shrink-0"
            >
              <div className="flex items-end gap-2 rounded-[14px] border border-border-default bg-surface-card px-3 py-2 focus-within:border-border-accent transition-colors">
                <textarea
                  ref={inputRef}
                  rows={1}
                  value={input}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  enterKeyHint="send"
                  placeholder="Message Aswanth's AI..."
                  aria-label="Chat message"
                  className="chat-scrollbar flex-1 resize-none overflow-y-hidden bg-transparent text-base sm:text-[13px] text-text-primary placeholder:text-text-muted focus:outline-none max-h-24 py-1 leading-relaxed"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isStreaming}
                  onMouseDown={(e) => e.preventDefault()}
                  aria-label="Send message"
                  className="btn-primary h-8 w-8 shrink-0 rounded-full flex items-center justify-center text-white disabled:opacity-40 disabled:pointer-events-none"
                >
                  <SendHorizontal className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Floating Launcher */}
      <motion.button
        type="button"
        onClick={handleLauncherClick}
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.96 }}
        aria-label={isOpen ? "Close chat assistant" : "Open Aswanth's AI assistant"}
        aria-expanded={isOpen}
        className={`group pointer-events-auto glass-panel rounded-lg items-center text-left transition-all duration-200 hover:border-border-accent hover:shadow-primary-glow ${
          isOpen
            ? "hidden sm:flex h-11 w-11 justify-center border-border-accent"
            : "flex py-1.5 pl-1.5 pr-3.5 gap-2.5 shadow-[0_12px_32px_-8px_rgba(0,0,0,0.4)]"
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.16 }}
              className="flex items-center justify-center text-text-primary"
            >
              <X className="h-4.5 w-4.5" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.16 }}
              className="flex items-center gap-2.5"
            >
              <span className="relative h-9 w-9 shrink-0 rounded bg-brand-gradient flex items-center justify-center text-white shadow-primary-glow">
                <Sparkles className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping motion-reduce:animate-none rounded-full bg-primary-light opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary-light ring-2 ring-surface-card" />
                </span>
              </span>

              <span className="flex flex-col min-w-[132px] sm:min-w-[144px]">
                <span className="text-xs sm:text-[13px] font-semibold leading-tight text-text-primary flex items-center gap-1.5">
                  <span>Aswanth.ai</span>
                </span>
                <span className="relative h-4 overflow-hidden text-[11px] leading-4 text-text-muted">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={LAUNCHER_PROMPTS[promptIndex]}
                      initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={prefersReducedMotion ? undefined : { opacity: 0, y: -6 }}
                      transition={{ duration: 0.22, ease: PREMIUM_EASE }}
                      className="block truncate"
                    >
                      {LAUNCHER_PROMPTS[promptIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </span>

              <ArrowUpRight
                aria-hidden="true"
                className="h-3.5 w-3.5 shrink-0 text-text-muted transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-text-accent"
              />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

