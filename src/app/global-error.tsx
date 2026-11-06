'use client';

import React, { useEffect } from "react";
import Link from "next/link";
import { Questrial } from "next/font/google";
import { RotateCcw, Home, AlertTriangle } from "lucide-react";
import "./globals.css";

const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global application error captured:", error);
  }, [error]);

  return (
    <html lang="en">
      <body
        className={`${questrial.className} relative flex min-h-screen w-full items-center justify-center overflow-x-clip bg-white px-4 py-12 text-gray-900 selection:bg-blue-100 selection:text-blue-900`}
      >
        {/* Atmospheric Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div
            className="grid-bg absolute inset-0 opacity-60"
            style={{
              maskImage:
                "radial-gradient(ellipse 85% 70% at 50% 50%, black 20%, transparent 85%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 85% 70% at 50% 50%, black 20%, transparent 85%)",
            }}
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[560px] rounded-full bg-gradient-to-tr from-blue-400/15 via-indigo-400/10 to-sky-300/15 blur-3xl" />
        </div>

        {/* Global Error Card */}
        <div className="relative z-10 w-full max-w-lg rounded-2xl border border-gray-200/90 bg-white/90 p-6 shadow-xl shadow-blue-900/5 backdrop-blur-xl sm:p-10 text-center">
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

          {/* Icon */}
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-rose-200/80 bg-rose-50/80 text-rose-600 shadow-xs ring-4 ring-rose-500/10">
            <AlertTriangle className="h-6 w-6 text-rose-600" strokeWidth={2.2} />
          </div>

          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-200/70 bg-rose-50/70 px-3 py-1 text-xs font-medium text-rose-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-rose-500" />
              </span>
              Critical Application Error
            </span>
          </div>

          <h1 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Something went wrong
          </h1>

          <p className="mx-auto mt-2.5 max-w-sm text-sm leading-relaxed text-gray-600">
            A critical error interrupted the application shell. You can try reloading or return to the main site.
          </p>

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
        </div>
      </body>
    </html>
  );
}

