'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Questrial } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import {
  RotateCcw,
  Home,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  FolderGit2,
  User,
} from "lucide-react";
import { MdOutlineArrowOutward } from "react-icons/md";
import "./globals.css";

const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  const [showDetails, setShowDetails] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    console.error("Application error captured:", error);
  }, [error]);

  const handleCopyDetails = async () => {
    const errorPayload = [
      `Message: ${error?.message || "Unknown error"}`,
      error?.digest ? `Digest: ${error.digest}` : null,
      error?.stack ? `Stack: ${error.stack}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    try {
      await navigator.clipboard.writeText(errorPayload);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback if clipboard API is restricted
    }
  };

  return (
    <div
      className={`${questrial.className} relative flex min-h-screen w-full items-center justify-center overflow-x-clip bg-background px-4 py-12 text-text-primary selection:bg-primary-subtle selection:text-primary`}
    >
      {/* ----------------- Atmospheric Background ----------------- */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Subtle geometric grid with smooth fade-out */}
        <div
          className="grid-bg absolute inset-0 opacity-60"
          style={{
            maskImage:
              "radial-gradient(ellipse 85% 70% at 50% 50%, black 20%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 85% 70% at 50% 50%, black 20%, transparent 85%)",
          }}
        />

        {/* Ambient brand glow */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[560px] rounded-full blur-3xl"
          style={{
            background: "linear-gradient(135deg, var(--color-blob-1), var(--color-blob-2))",
          }}
        />
      </div>

      {/* ----------------- Error Card ----------------- */}
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-lg rounded-2xl border border-border-default bg-surface-card/90 p-6 shadow-xl backdrop-blur-xl sm:p-10"
      >
        {/* Top subtle highlight border */}
        <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        {/* Brand identity pill */}
        <div className="mb-6 flex justify-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full border border-border-default bg-surface-card/90 px-3 py-1 text-xs font-medium text-text-body shadow-2xs transition-colors hover:border-border-accent hover:text-primary"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary transition-transform group-hover:scale-125" />
            <span>Aswanth UP · Portfolio</span>
          </Link>
        </div>

        {/* Status Beacon & Icon */}
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-rose-200/80 bg-rose-50/80 text-rose-600 shadow-xs ring-4 ring-rose-500/10">
          <AlertTriangle className="h-6 w-6 text-rose-600" strokeWidth={2.2} />
        </div>

        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-200/70 bg-rose-50/70 px-3 py-1 text-xs font-medium text-rose-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500" />
            </span>
            System Notice · 500
          </span>
        </div>

        {/* Headline & Description */}
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
          Something went wrong
        </h1>

        <p className="mx-auto mt-2.5 max-w-sm text-sm leading-relaxed text-text-body">
          An unexpected error occurred while processing this interface. You can
          attempt to recover the page or return to safety.
        </p>

        {/* Action Buttons */}
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={() => reset()}
            className="btn-primary inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg text-white text-sm font-medium transition-all duration-200 cursor-pointer active:scale-[0.98]"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Try again</span>
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg border border-border-default bg-surface-card hover:bg-surface-subtle text-text-secondary hover:text-primary hover:border-border-accent text-sm font-medium transition-all duration-200 shadow-2xs hover:shadow-xs active:scale-[0.98]"
          >
            <Home className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Technical Error Details Accordion */}
        <div className="mt-6 border-t border-border-subtle pt-4 text-left">
          <button
            type="button"
            onClick={() => setShowDetails(!showDetails)}
            className="group flex w-full items-center justify-between py-1 text-xs font-medium text-text-muted transition-colors hover:text-text-primary"
          >
            <span className="flex items-center gap-1.5">
              <span>Technical details</span>
              {error?.digest && (
                <span className="rounded bg-surface-muted px-1.5 py-0.5 font-mono text-[10px] text-text-body">
                  ID: {error.digest}
                </span>
              )}
            </span>
            {showDetails ? (
              <ChevronUp className="h-3.5 w-3.5 text-text-caption group-hover:text-text-body" />
            ) : (
              <ChevronDown className="h-3.5 w-3.5 text-text-caption group-hover:text-text-body" />
            )}
          </button>

          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="mt-2.5 rounded-lg border border-border-default bg-surface-subtle p-3 font-mono text-xs text-text-secondary">
                  <div className="flex items-center justify-between pb-1.5 border-b border-border-subtle mb-2">
                    <span className="text-[11px] text-text-caption">
                      Error Information
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyDetails}
                      className="inline-flex items-center gap-1 rounded px-2 py-0.5 text-[11px] font-medium text-text-body hover:bg-surface-muted transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3 w-3 text-emerald-600" />
                          <span className="text-emerald-600">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3 text-text-muted" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="break-all font-mono text-[11px] leading-relaxed text-text-secondary">
                    {error?.message || "An unexpected error occurred."}
                  </p>
                  {error?.digest && (
                    <p className="mt-1 font-mono text-[10px] text-text-muted">
                      Digest: {error.digest}
                    </p>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Quick Navigation Strip */}
        <div className="mt-6 border-t border-border-subtle pt-5">
          <p className="text-[11px] font-medium uppercase tracking-wider text-text-caption text-center mb-3">
            Explore Aswanth&apos;s Portfolio
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 rounded-md border border-border-default bg-surface-subtle px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-border-accent hover:text-primary hover:bg-surface-card"
            >
              <FolderGit2 className="h-3.5 w-3.5 text-primary" />
              <span>Projects</span>
              <MdOutlineArrowOutward className="text-xs text-text-caption" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 rounded-md border border-border-default bg-surface-subtle px-3 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-border-accent hover:text-primary hover:bg-surface-card"
            >
              <User className="h-3.5 w-3.5 text-primary" />
              <span>About</span>
              <MdOutlineArrowOutward className="text-xs text-text-caption" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
