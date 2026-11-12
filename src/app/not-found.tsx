'use client';

import React from "react";
import Link from "next/link";
import { Questrial } from "next/font/google";
import { motion } from "framer-motion";
import {
  Home,
  FolderGit2,
  User,
  Compass,
} from "lucide-react";
import { MdOutlineArrowOutward } from "react-icons/md";
import "./globals.css";

const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function NotFound() {
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

      {/* ----------------- 404 Card ----------------- */}
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-lg rounded-2xl border border-border-default bg-surface-card/90 p-6 shadow-xl backdrop-blur-xl sm:p-10 text-center"
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

        {/* Status Beacon & 404 Emblem */}
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary-border bg-primary-subtle text-primary shadow-xs ring-4 ring-primary/10">
          <Compass className="h-6 w-6 text-primary" strokeWidth={2.2} />
        </div>

        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-border bg-primary-subtle px-3 py-1 text-xs font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-light opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Error 404 · Page Not Found
          </span>
        </div>

        {/* Large Gradient Display */}
        <div className="mt-4">
          <span className="text-brand-gradient text-5xl sm:text-6xl font-bold tracking-tight">
            404
          </span>
        </div>

        <h1 className="mt-2 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
          Lost in cyberspace?
        </h1>

        <p className="mx-auto mt-2.5 max-w-sm text-sm leading-relaxed text-text-body">
          The link you followed might be broken, outdated, or the page may have
          been moved to a new destination.
        </p>

        {/* Action Buttons */}
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="btn-primary inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg text-white text-sm font-medium transition-all duration-200 cursor-pointer active:scale-[0.98]"
          >
            <Home className="h-4 w-4" />
            <span>Return Home</span>
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg border border-border-default bg-surface-card hover:bg-surface-subtle text-text-secondary hover:text-primary hover:border-border-accent text-sm font-medium transition-all duration-200 shadow-2xs hover:shadow-xs active:scale-[0.98]"
          >
            <FolderGit2 className="h-4 w-4" />
            <span>View Projects</span>
          </Link>
        </div>

        {/* Quick Navigation Strip */}
        <div className="mt-8 border-t border-border-subtle pt-5">
          <p className="text-[11px] font-medium uppercase tracking-wider text-text-caption text-center mb-3">
            Quick Navigation
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
              <span>About Aswanth</span>
              <MdOutlineArrowOutward className="text-xs text-text-caption" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
