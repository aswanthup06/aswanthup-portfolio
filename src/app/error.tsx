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
      className={`${questrial.className} relative flex min-h-screen w-full items-center justify-center overflow-x-clip bg-white px-4 py-12 text-gray-900 selection:bg-blue-100 selection:text-blue-900`}
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
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[560px] rounded-full bg-gradient-to-tr from-blue-400/15 via-indigo-400/10 to-sky-300/15 blur-3xl" />
      </div>

      {/* ----------------- Error Card ----------------- */}
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-lg rounded-2xl border border-gray-200/90 bg-white/85 p-6 shadow-xl shadow-blue-900/5 backdrop-blur-xl sm:p-10"
      >
        {/* Top subtle highlight border */}
        <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

        {/* Brand identity pill */}
        <div className="mb-6 flex justify-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full border border-gray-200/80 bg-white/90 px-3 py-1 text-xs font-medium text-gray-600 shadow-2xs transition-colors hover:border-blue-300 hover:text-blue-600"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 transition-transform group-hover:scale-125" />
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
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Something went wrong
        </h1>

        <p className="mx-auto mt-2.5 max-w-sm text-sm leading-relaxed text-gray-600">
          An unexpected error occurred while processing this interface. You can
          attempt to recover the page or return to safety.
        </p>

        {/* Action Buttons */}
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg bg-linear-to-b from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white text-sm font-medium shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.18)] shadow-blue-500/20 transition-all duration-200 cursor-pointer active:scale-[0.98]"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Try again</span>
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 hover:text-blue-600 hover:border-blue-300 text-sm font-medium transition-all duration-200 shadow-2xs hover:shadow-xs active:scale-[0.98]"
          >
            <Home className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Technical Error Details Accordion */}
        <div className="mt-6 border-t border-gray-100 pt-4 text-left">
          <button
            type="button"
            onClick={() => setShowDetails(!showDetails)}
            className="group flex w-full items-center justify-between py-1 text-xs font-medium text-gray-500 transition-colors hover:text-gray-900"
          >
            <span className="flex items-center gap-1.5">
              <span>Technical details</span>
              {error?.digest && (
                <span className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[10px] text-gray-600">
                  ID: {error.digest}
                </span>
              )}
            </span>
            {showDetails ? (
              <ChevronUp className="h-3.5 w-3.5 text-gray-400 group-hover:text-gray-600" />
            ) : (
              <ChevronDown className="h-3.5 w-3.5 text-gray-400 group-hover:text-gray-600" />
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
                <div className="mt-2.5 rounded-lg border border-gray-200 bg-gray-50/80 p-3 font-mono text-xs text-gray-700">
                  <div className="flex items-center justify-between pb-1.5 border-b border-gray-200/60 mb-2">
                    <span className="text-[11px] text-gray-400">
                      Error Information
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyDetails}
                      className="inline-flex items-center gap-1 rounded px-2 py-0.5 text-[11px] font-medium text-gray-600 hover:bg-gray-200/60 transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3 w-3 text-emerald-600" />
                          <span className="text-emerald-700">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3 text-gray-500" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="break-all font-mono text-[11px] leading-relaxed text-gray-700">
                    {error?.message || "An unexpected error occurred."}
                  </p>
                  {error?.digest && (
                    <p className="mt-1 font-mono text-[10px] text-gray-500">
                      Digest: {error.digest}
                    </p>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Quick Navigation Strip */}
        <div className="mt-6 border-t border-gray-100 pt-5">
          <p className="text-[11px] font-medium uppercase tracking-wider text-gray-400 text-center mb-3">
            Explore Aswanth&apos;s Portfolio
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 rounded-md border border-gray-200/80 bg-white/70 px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:border-blue-300 hover:text-blue-600 hover:bg-white"
            >
              <FolderGit2 className="h-3.5 w-3.5 text-blue-500" />
              <span>Projects</span>
              <MdOutlineArrowOutward className="text-xs text-gray-400" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 rounded-md border border-gray-200/80 bg-white/70 px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:border-blue-300 hover:text-blue-600 hover:bg-white"
            >
              <User className="h-3.5 w-3.5 text-blue-500" />
              <span>About</span>
              <MdOutlineArrowOutward className="text-xs text-gray-400" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
