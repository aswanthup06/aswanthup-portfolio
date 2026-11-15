import NextProject from "../../../components/projects/NextProject";
import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ExternalLink,
  Search,
  FileText,
  Send,
  Smartphone,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Compass,
  Code2,
  Palette,
  QrCode,
  Sliders,
  Sparkles,
  Laptop,
  Check,
  Copy,
  Terminal,
  ArrowUpRight,
  Lock,
  Cpu,
  RefreshCw,
  Eye,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Zenoway — UI Developer & Frontend Engineering Case Study | Aswanth U P",
  description:
    "A comprehensive UI/UX development case study on Zenoway: Tailwind v4 design tokens, desktop workbench layout, canvas social poster studio, and zero-friction recruitment UX.",
};

export default function ZenowayCaseStudy() {
  return (
    <main className="min-h-screen bg-background text-text-primary selection:bg-primary-subtle selection:text-primary">
      {/* ---------------- SECTION 1: HERO & TECHNICAL SPECIFICATION ---------------- */}
      <section className="relative pt-28 md:pt-36 pb-14 md:pb-20 bg-gradient-to-b from-primary-subtle/55 via-surface-subtle/40 to-background overflow-hidden border-b border-border-default">
        <div
          className="grid-bg absolute inset-x-0 top-0 h-[650px] z-0 pointer-events-none"
          style={{
            maskImage:
              "radial-gradient(ellipse 95% 80% at 50% 25%, black 40%, transparent 95%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 95% 80% at 50% 25%, black 40%, transparent 95%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Case Study Header */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>UI Developer &amp; Design Engineer Case Study</span>
              </div>

              {/* Title & Subheadline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[48px] font-bold tracking-tight text-text-primary leading-[1.14]">
                Zenoway: Engineering a Zero-Friction Career Platform &amp; Design System
              </h1>

              <p className="text-base sm:text-lg text-text-body leading-relaxed max-w-2xl">
                A production-grade recruitment portal engineered from the ground up for UI/UX and
                Frontend professionals. Replaces traditional 10-step applicant forms with a
                direct-to-HR action model, an in-browser Social Poster Studio, and an isolated
                desktop workbench powered by Tailwind CSS v4.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="https://www.zenoway.online"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-white btn-primary transition-all rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                  Launch Live App
                  <ExternalLink size={16} />
                </a>

                <a
                  href="https://www.zenoway.online/jobs"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-text-primary hover:text-primary bg-surface-card border border-border-default hover:border-primary/50 transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-2xs"
                >
                  Explore Jobs Feed
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Technical Spec Strip */}
              <div className="pt-6 border-t border-border-default grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-text-muted uppercase tracking-wider block mb-1">
                    My Role
                  </span>
                  <span className="font-medium text-text-primary">
                    Solo UI &amp; Frontend Engineer
                  </span>
                </div>
                <div>
                  <span className="text-text-muted uppercase tracking-wider block mb-1">
                    Styling Architecture
                  </span>
                  <span className="font-medium text-text-primary">
                    Tailwind CSS v4 (@theme)
                  </span>
                </div>
                <div>
                  <span className="text-text-muted uppercase tracking-wider block mb-1">
                    Frontend Core
                  </span>
                  <span className="font-medium text-primary">
                    Next.js 16 · React 19
                  </span>
                </div>
                <div>
                  <span className="text-text-muted uppercase tracking-wider block mb-1">
                    Data &amp; Security
                  </span>
                  <span className="font-medium text-text-primary">
                    Supabase · Edge HMAC Auth
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Mockup / Video Showcase */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-3 bg-primary/20 rounded-2xl blur-xl -z-10 pointer-events-none" />

                <div className="rounded-2xl border border-border-default bg-surface-card shadow-[0_20px_50px_rgba(0,0,0,0.12)] overflow-hidden">
                  <div className="px-4 py-3 border-b border-border-default bg-surface-subtle flex items-center justify-between text-xs text-text-body">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      <span className="font-medium text-text-primary">zenoway.online</span>
                    </div>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface-muted text-text-muted">
                      Production Live
                    </span>
                  </div>

                  <div className="relative aspect-[16/11] w-full bg-slate-900/5 overflow-hidden">
                    <video
                      className="w-full h-full object-cover block motion-reduce:hidden"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      aria-label="Zenoway live platform preview demonstrating direct job discovery"
                    >
                      <source src="/images/projects/zenoway/hiring.mp4" type="video/mp4" />
                      <source src="/images/projects/zenoway/zenoway.mp4" type="video/mp4" />
                    </video>

                    {/* Static Fallback with 3D Laptop/Mobile Mockup */}
                    <div className="hidden motion-reduce:block relative w-full h-full">
                      <Image
                        src="/images/projects/zenoway/zenoway-mock.webp"
                        alt="Zenoway platform responsive cross-device layout"
                        fill
                        sizes="(max-width: 1024px) 100vw, 560px"
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-3.5 px-1 flex items-center justify-between text-xs text-text-muted">
                  <span>Cross-device responsive design</span>
                  <span className="text-primary font-medium">Next.js 16 App Router</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 2: THE UI ENGINEERING CHALLENGE ---------------- */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
              THE PROBLEM &amp; SYSTEM GOALS
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
              Eliminating recruitment friction through design engineering.
            </h2>
            <p className="text-base md:text-lg text-text-body leading-relaxed">
              Standard hiring boards (Naukri, Indeed, LinkedIn) impose massive cognitive and
              interaction overhead on job seekers: forced multi-step account registration,
              clunky modal-inside-page double scrollbars, unverified dead HR emails, and opaque ATS
              rejections. Zenoway was engineered to replace this with high-performance UI patterns.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Challenge 01 */}
            <div className="p-7 rounded-2xl border border-border-default bg-surface-card space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-primary-subtle text-primary flex items-center justify-center font-mono font-bold text-sm">
                01
              </div>
              <h3 className="text-lg font-semibold text-text-primary">
                Desktop Workbench Double-Scrollbars
              </h3>
              <p className="text-sm text-text-body leading-relaxed">
                When combining fixed-width filter sidebars with dynamic job feeds, browsers
                frequently produce nested double-scrollbars. I solved this by locking the root
                viewport to <code className="text-xs bg-surface-muted px-1.5 py-0.5 rounded text-primary font-mono">h-dvh</code> and
                implementing isolated scroll containers with overscroll containment.
              </p>
            </div>

            {/* Challenge 02 */}
            <div className="p-7 rounded-2xl border border-border-default bg-surface-card space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-primary-subtle text-primary flex items-center justify-center font-mono font-bold text-sm">
                02
              </div>
              <h3 className="text-lg font-semibold text-text-primary">
                The "1-Action" Application Paradigm
              </h3>
              <p className="text-sm text-text-body leading-relaxed">
                Instead of requiring users to register before applying, every role features an
                interactive apply modal providing direct recruiter emails, pre-composed subject lines,
                instant <code className="text-xs bg-surface-muted px-1.5 py-0.5 rounded text-primary font-mono">mailto:</code> deep links,
                and an asynchronous clipboard copy tracker with legacy textarea fallbacks.
              </p>
            </div>

            {/* Challenge 03 */}
            <div className="p-7 rounded-2xl border border-border-default bg-surface-card space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-primary-subtle text-primary flex items-center justify-center font-mono font-bold text-sm">
                03
              </div>
              <h3 className="text-lg font-semibold text-text-primary">
                Automated Listing &amp; Mail Verification
              </h3>
              <p className="text-sm text-text-body leading-relaxed">
                To guarantee zero dead-end applications, I engineered a background DNS MX record
                validator (<code className="text-xs bg-surface-muted px-1.5 py-0.5 rounded text-primary font-mono">dns/promises</code>)
                that verifies employer domains have active mail exchange servers before allowing a
                job to be published to the catalog.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 3: DESIGN SYSTEM & TAILWIND V4 ARCHITECTURE ---------------- */}
      <section className="py-16 md:py-24 bg-surface-subtle/70 border-y border-border-default">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: Design System Explanation */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider">
                <Palette size={16} />
                <span>CSS-First Design Tokens</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
                The "Zenoway Emerald" Design System in Tailwind CSS v4.
              </h2>

              <p className="text-base text-text-body leading-relaxed">
                Rather than relying on legacy JavaScript configuration files (<code className="text-xs bg-surface-muted px-1.5 py-0.5 rounded text-primary font-mono">tailwind.config.ts</code>),
                Zenoway adopts Tailwind CSS v4's modern <code className="text-xs bg-surface-muted px-1.5 py-0.5 rounded text-primary font-mono">@theme</code> directive.
                All tokens are defined directly as native CSS custom properties across three distinct layers.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl border border-border-default bg-surface-card flex items-start gap-3.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-600 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary">1. Raw Primitives (:root)</h4>
                    <p className="text-xs text-text-body mt-0.5">
                      Fixed values (<code className="text-primary font-mono">#087f50</code>, <code className="text-primary font-mono">1200px</code>)
                      that are never invoked directly within component classes.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-border-default bg-surface-card flex items-start gap-3.5">
                  <div className="w-3 h-3 rounded-full bg-primary mt-1 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary">2. Semantic Roles (@theme)</h4>
                    <p className="text-xs text-text-body mt-0.5">
                      Purpose-driven classes like <code className="text-primary font-mono">bg-brand</code>, <code className="text-primary font-mono">text-text-primary</code>,
                      and <code className="text-primary font-mono">border-border-default</code> that components consume.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-border-default bg-surface-card flex items-start gap-3.5">
                  <div className="w-3 h-3 rounded-full bg-amber-500 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary">3. Interaction &amp; Focus Spectrum</h4>
                    <p className="text-xs text-text-body mt-0.5">
                      Strict 4px focus ring spreads (<code className="text-primary font-mono">rgba(8, 127, 80, 0.2)</code>)
                      and reduced-motion fallbacks capping animation durations to 0.01ms.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Code Token Preview Card */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-border-default bg-surface-card overflow-hidden shadow-lg">
                <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Terminal size={14} className="text-primary" />
                    <span className="font-mono text-slate-200">src/app/globals.css</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">Tailwind CSS v4</span>
                </div>

                <div className="p-5 bg-slate-950 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto">
                  <pre>
                    {`@import "tailwindcss";

@theme {
  --font-sans: var(--font-manrope);

  /* Brand Palette (Zenoway Emerald) */
  --color-brand: #087f50;
  --color-brand-hover: #066640;
  --color-brand-accent: #0fa968;
  --color-brand-soft: #edf7f1;

  /* Surfaces & Backgrounds */
  --color-surface-base: #ffffff;
  --color-surface-subtle: #f8faf8;
  --color-surface-card: #ffffff;

  /* Typography / Text Roles */
  --color-text-primary: #17251f;
  --color-text-secondary: #536258;
  --color-text-muted: #596b5e;

  /* Radii & Focus Tokens */
  --radius-control: 4px;
  --radius-card: 8px;
  --radius-pill: 9999px;
  --color-focus-ring: rgba(8, 127, 80, 0.2);
}`}
                  </pre>
                </div>

                <div className="p-4 bg-surface-card border-t border-border-default text-xs text-text-muted flex items-center justify-between">
                  <span>Single source of truth in CSS</span>
                  <span className="font-semibold text-primary">0 Runtime JS Overrides</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 4: SCREEN 1 - DUAL-PANE DESKTOP WORKBENCH (zenoway1.webp) ---------------- */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Visual Figure matching live-jobs-catalog.png */}
            <div className="lg:col-span-7">
              <figure className="rounded-2xl border border-border-default bg-surface-card overflow-hidden shadow-md">
                <a
                  href="/images/projects/zenoway/live-jobs-catalog.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group cursor-zoom-in relative aspect-[16/10] w-full bg-slate-100 overflow-hidden"
                  title="Click to view full uncropped screenshot"
                >
                  <Image
                    src="/images/projects/zenoway/live-jobs-catalog.png"
                    alt="Zenoway Desktop Job Discovery Catalog showing left filter sidebar and job cards grid captured live from zenoway.online"
                    fill
                    sizes="(max-width: 1024px) 100vw, 750px"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
                    loading="lazy"
                    unoptimized
                  />
                </a>
                <figcaption className="px-5 py-3.5 border-t border-border-default bg-surface-subtle text-xs text-text-body flex justify-between items-center">
                  <span className="font-medium">Primary Job Discovery Feed &amp; Left Filter Sidebar</span>
                  <a
                    href="https://www.zenoway.online/jobs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted font-mono flex items-center gap-1.5 hover:text-primary transition-colors"
                  >
                    zenoway.online/jobs <ExternalLink size={12} />
                  </a>
                </figcaption>
              </figure>
            </div>

            {/* Description accurately matching zenoway1.webp */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider">
                <Laptop size={16} />
                <span>Screen 01: Catalog Architecture</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Desktop Workbench &amp; Dual-Pane Job Catalog
              </h3>

              <p className="text-sm md:text-base text-text-body leading-relaxed">
                The primary discovery surface at <code className="text-xs bg-surface-muted px-1.5 py-0.5 rounded text-primary font-mono">/jobs</code>.
                Designed for high information density without visual clutter:
              </p>

              <ul className="space-y-3 text-sm text-text-body">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>
                    <strong>Left Filter Sidebar:</strong> Granular facets for Job Types (Full-time, Internship),
                    Department categories with live job counts, and experience sliders.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>
                    <strong>Accessible Location Combobox:</strong> Autocomplete input supporting Indian city/state aliases
                    (typing "Bangalore" resolves to "Bengaluru") with full keyboard navigation (<code className="text-xs bg-surface-muted px-1 py-0.5 rounded text-primary font-mono">ArrowDown</code>, <code className="text-xs bg-surface-muted px-1 py-0.5 rounded text-primary font-mono">Enter</code>).
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>
                    <strong>1-Click Work Mode Switcher:</strong> Instant segmented pill controls for All modes, Remote, Hybrid, and On-site.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 5: SCREEN 2 - INTERACTIVE ROLE PREVIEW MODAL (zenoway3.webp) ---------------- */}
      <section className="py-16 md:py-24 bg-surface-subtle/70 border-y border-border-default">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Description accurately matching zenoway3.webp */}
            <div className="lg:col-span-5 space-y-5 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider">
                <Layers size={16} />
                <span>Screen 02: Quick Preview</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Zero-Friction Quick Details &amp; Role Preview Modal
              </h3>

              <p className="text-sm md:text-base text-text-body leading-relaxed">
                Clicking any job card on desktop triggers an in-feed preview modal without page navigation,
                keeping candidates anchored to their search location:
              </p>

              <div className="space-y-3.5 pt-1">
                <div className="p-3.5 rounded-xl border border-border-default bg-surface-card">
                  <div className="flex items-center gap-2 text-xs font-semibold text-text-primary">
                    <CheckCircle2 size={14} className="text-primary" />
                    <span>Key Specs at a Glance</span>
                  </div>
                  <p className="text-xs text-text-body mt-1">
                    Structured 4-column overview displaying Salary, Experience requirement, Location, and Work Setup.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-border-default bg-surface-card">
                  <div className="flex items-center gap-2 text-xs font-semibold text-text-primary">
                    <Compass size={14} className="text-primary" />
                    <span>Location Preference Callout</span>
                  </div>
                  <p className="text-xs text-text-body mt-1">
                    Explicitly informs candidates if an employer prioritizes local residency (e.g., "Kerala preferred").
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-border-default bg-surface-card">
                  <div className="flex items-center gap-2 text-xs font-semibold text-text-primary">
                    <Send size={14} className="text-primary" />
                    <span>One-Click Action Bar</span>
                  </div>
                  <p className="text-xs text-text-body mt-1">
                    Instant access to Save Job (persisted via <code className="text-primary font-mono text-xs">localStorage</code>),
                    native Web Share API, and the primary "Apply via Email" trigger.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Figure matching live-jobs-modal.png */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <figure className="rounded-2xl border border-border-default bg-surface-card overflow-hidden shadow-md">
                <a
                  href="/images/projects/zenoway/live-jobs-modal.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group cursor-zoom-in relative aspect-[16/10] w-full bg-slate-100 overflow-hidden"
                  title="Click to view full uncropped screenshot"
                >
                  <Image
                    src="/images/projects/zenoway/live-jobs-modal.png"
                    alt="Zenoway Quick Details Preview Modal captured live on zenoway.online showing role details, company metadata, and direct email actions"
                    fill
                    sizes="(max-width: 1024px) 100vw, 750px"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
                    loading="lazy"
                    unoptimized
                  />
                </a>
                <figcaption className="px-5 py-3.5 border-t border-border-default bg-surface-subtle text-xs text-text-body flex justify-between items-center">
                  <span className="font-medium">Quick Preview Modal (In-Feed Inspection &amp; Direct Actions)</span>
                  <span className="text-text-muted font-mono">Modal.tsx / Live Capture</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 6: SCREEN 3 - CANONICAL SEO & STRUCTURED DETAILS (zenoway2.webp) ---------------- */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Visual Figure matching live-job-detail.png */}
            <div className="lg:col-span-7">
              <figure className="rounded-2xl border border-border-default bg-surface-card overflow-hidden shadow-md">
                <a
                  href="/images/projects/zenoway/live-job-detail.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group cursor-zoom-in relative aspect-[16/10] w-full bg-slate-100 overflow-hidden"
                  title="Click to view full uncropped screenshot"
                >
                  <Image
                    src="/images/projects/zenoway/live-job-detail.png"
                    alt="Zenoway Dedicated Canonical Job Detail View captured live from zenoway.online/jobs/JOB1074"
                    fill
                    sizes="(max-width: 1024px) 100vw, 750px"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
                    loading="lazy"
                    unoptimized
                  />
                </a>
                <figcaption className="px-5 py-3.5 border-t border-border-default bg-surface-subtle text-xs text-text-body flex justify-between items-center">
                  <span className="font-medium">Dedicated Job Detail Page &amp; Canonical URL</span>
                  <a
                    href="https://www.zenoway.online/jobs/JOB1074"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted font-mono flex items-center gap-1.5 hover:text-primary transition-colors"
                  >
                    zenoway.online/jobs/JOB1074 <ExternalLink size={12} />
                  </a>
                </figcaption>
              </figure>
            </div>

            {/* Description accurately matching zenoway2.webp */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider">
                <FileText size={16} />
                <span>Screen 03: Canonical Job Architecture</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Dedicated Job Route &amp; Schema.org Structured Data
              </h3>

              <p className="text-sm md:text-base text-text-body leading-relaxed">
                Every listing is server-rendered at its own canonical permalink (<code className="text-xs bg-surface-muted px-1.5 py-0.5 rounded text-primary font-mono">/jobs/[id]</code>)
                for direct link sharing, deep linking, and automated search engine indexing:
              </p>

              <ul className="space-y-3 text-sm text-text-body">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>
                    <strong>Editorial Metadata Header:</strong> Breadcrumb hierarchy, verified company website link,
                    posting date, and salary/remote tags displayed with clean typography.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>
                    <strong>Automated JSON-LD Schema:</strong> Generates Google <code className="text-xs bg-surface-muted px-1 py-0.5 rounded text-primary font-mono">JobPosting</code> structured
                    markup with <code className="text-xs bg-surface-muted px-1 py-0.5 rounded text-primary font-mono">TELECOMMUTE</code> flags and regional requirements.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>
                    <strong>Instant Google Indexing:</strong> Integrated with the Google Indexing API to notify search crawlers within minutes of job approval.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 7: SCREEN 4 - JOB ADDING FLOW & AI WIZARD (post-job-wizard.png) ---------------- */}
      <section className="py-16 md:py-24 bg-surface-subtle/70 border-y border-border-default">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Description */}
            <div className="lg:col-span-5 space-y-5 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider">
                <Sparkles size={16} />
                <span>Screen 04: Employer Job Posting Suite</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary">
                Multi-Step Job Creation Wizard &amp; Gemini AI Importer
              </h3>

              <p className="text-sm md:text-base text-text-body leading-relaxed">
                To simplify posting new roles for founders and HR managers, the <code className="text-xs bg-surface-muted px-1.5 py-0.5 rounded text-primary font-mono">/post-job</code> flow
                combines structured progressive disclosure with generative AI assistance:
              </p>

              <div className="space-y-3.5 pt-1">
                <div className="p-3.5 rounded-xl border border-border-default bg-surface-card">
                  <div className="flex items-center gap-2 text-xs font-semibold text-text-primary">
                    <Sparkles size={14} className="text-primary" />
                    <span>Gemini AI Smart Importer</span>
                  </div>
                  <p className="text-xs text-text-body mt-1">
                    Recruiters can paste messy, raw text from an email, WhatsApp note, or PDF; Google Gemini
                    auto-parses the title, company, requirements, and fills all 4 steps in under 3 seconds.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-border-default bg-surface-card">
                  <div className="flex items-center gap-2 text-xs font-semibold text-text-primary">
                    <Sliders size={14} className="text-primary" />
                    <span>4-Step Guided Wizard</span>
                  </div>
                  <p className="text-xs text-text-body mt-1">
                    Progressive steps for Role details, Office Locations &amp; candidate residency, Compensation
                    brackets with monthly salary sliders, and final Markdown review.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-border-default bg-surface-card">
                  <div className="flex items-center gap-2 text-xs font-semibold text-text-primary">
                    <Zap size={14} className="text-primary" />
                    <span>Keyboard-First Navigation</span>
                  </div>
                  <p className="text-xs text-text-body mt-1">
                    Power users can switch wizard steps using number keys <code className="text-primary font-mono text-[11px]">1–4</code> or
                    arrow keys <code className="text-primary font-mono text-[11px]">← / →</code> with instant client validation.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Figure matching live-post-job.png */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <figure className="rounded-2xl border border-border-default bg-surface-card overflow-hidden shadow-md">
                <a
                  href="/images/projects/zenoway/live-post-job.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group cursor-zoom-in relative aspect-[16/10] w-full bg-slate-100 overflow-hidden"
                  title="Click to view full uncropped screenshot"
                >
                  <Image
                    src="/images/projects/zenoway/live-post-job.png"
                    alt="Zenoway Post Job Multi-Step Publishing Wizard and Gemini AI Smart Importer captured live from zenoway.online"
                    fill
                    sizes="(max-width: 1024px) 100vw, 750px"
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
                    loading="lazy"
                    unoptimized
                  />
                </a>
                <figcaption className="px-5 py-3.5 border-t border-border-default bg-surface-subtle text-xs text-text-body flex justify-between items-center">
                  <span className="font-medium">Live Job Creation Wizard with Gemini AI</span>
                  <a
                    href="https://www.zenoway.online/post-job"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted font-mono flex items-center gap-1.5 hover:text-primary transition-colors"
                  >
                    zenoway.online/post-job <ExternalLink size={12} />
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 8: SOCIAL POSTER CREATOR WORKSPACE & OUTPUTS ---------------- */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider mb-3">
              <QrCode size={16} />
              <span>Canvas Tooling &amp; Live Studio</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
              Social Job Poster Creator: Live Studio &amp; Real Outputs.
            </h2>

            <p className="text-base md:text-lg text-text-body leading-relaxed">
              To amplify job listings across LinkedIn, Instagram, and WhatsApp communities, I built a
              complete browser-based graphics studio (<code className="text-xs bg-surface-muted px-1.5 py-0.5 rounded text-primary font-mono">JobPosterCreator.tsx</code>)
              allowing one-click generation of high-resolution branded posters with dynamic vector QR codes.
            </p>
          </div>

          {/* Live Poster Studio Workspace Screenshot */}
          <figure className="rounded-2xl border border-border-default bg-surface-card overflow-hidden shadow-lg mb-12">
            <a
              href="/images/projects/zenoway/live-job-posters.png"
              target="_blank"
              rel="noopener noreferrer"
              className="block group cursor-zoom-in relative aspect-[16/9] sm:aspect-[21/10] w-full bg-slate-100 overflow-hidden"
              title="Click to view full uncropped screenshot"
            >
              <Image
                src="/images/projects/zenoway/live-job-posters.png"
                alt="Zenoway Social Job Poster Creator Studio live interface showing template options and live canvas preview"
                fill
                sizes="(max-width: 1200px) 100vw, 1100px"
                className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
                loading="lazy"
                unoptimized
              />
            </a>
            <figcaption className="px-5 py-3.5 border-t border-border-default bg-surface-subtle text-xs text-text-body flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="font-semibold text-text-primary">Live Poster Studio Workspace (zenoway.online/job-posters)</span>
              <a
                href="https://www.zenoway.online/job-posters"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted font-mono flex items-center gap-1.5 hover:text-primary transition-colors"
              >
                zenoway.online/job-posters <ExternalLink size={12} />
              </a>
            </figcaption>
          </figure>

          {/* Real Generated Outputs Grid */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Real Poster 1: Bold Emerald Feed Template */}
            <figure className="rounded-2xl border border-border-default bg-surface-card p-4 shadow-sm space-y-3">
              <a
                href="/images/projects/zenoway/poster-bold.png"
                target="_blank"
                rel="noopener noreferrer"
                className="block group cursor-zoom-in relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-slate-900/5"
                title="Click to view full 2160x2700 poster"
              >
                <Image
                  src="/images/projects/zenoway/poster-bold.png"
                  alt="Real exported Zenoway Bold Template Job Poster with dynamic QR code"
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  className="object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                  loading="lazy"
                  unoptimized
                />
              </a>
              <figcaption className="pt-2 px-1 text-xs text-text-body flex justify-between items-center">
                <span className="font-semibold text-text-primary">Exported: Bold Hiring Template</span>
                <span className="text-text-muted font-mono">4:5 Feed · Vector QR Code</span>
              </figcaption>
            </figure>

            {/* Real Poster 2: Portrait Creative Editorial Template */}
            <figure className="rounded-2xl border border-border-default bg-surface-card p-4 shadow-sm space-y-3">
              <a
                href="/images/projects/zenoway/poster-portrait.png"
                target="_blank"
                rel="noopener noreferrer"
                className="block group cursor-zoom-in relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-slate-900/5"
                title="Click to view full 2160x2700 poster"
              >
                <Image
                  src="/images/projects/zenoway/poster-portrait.png"
                  alt="Real exported Zenoway Portrait Template Job Poster with cutout photography"
                  fill
                  sizes="(max-width: 768px) 100vw, 550px"
                  className="object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                  loading="lazy"
                  unoptimized
                />
              </a>
              <figcaption className="pt-2 px-1 text-xs text-text-body flex justify-between items-center">
                <span className="font-semibold text-text-primary">Exported: Editorial Portrait Template</span>
                <span className="text-text-muted font-mono">4:5 Feed · Optical Typography</span>
              </figcaption>
            </figure>
          </div>

          <div className="mt-8 p-5 rounded-xl border border-border-default bg-surface-card text-xs text-text-body flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <strong className="text-text-primary">Client-Side Canvas Rasterization: </strong>
              <span>Pre-decodes images (<code className="text-primary font-mono text-[11px]">img.decode()</code>) and embeds base64 Google Fonts to guarantee 2x retina sharpness without layout shifts.</span>
            </div>
            <span className="font-mono text-primary shrink-0">html-to-image + @ttsalpha/qrcode</span>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 8: ADMIN OPERATIONS & SECURITY (zenad1, zenad2, zenad3) ---------------- */}
      <section className="py-16 md:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
              PLATFORM MANAGEMENT &amp; SECURITY
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
              Administrative Suite &amp; Edge Security.
            </h2>
            <p className="text-base md:text-lg text-text-body leading-relaxed">
              To maintain listing quality and manage employer submissions safely, I built a comprehensive
              admin suite protected by Next.js 16 Edge proxy middleware (<code className="text-xs bg-surface-muted px-1.5 py-0.5 rounded text-primary font-mono">src/proxy.ts</code>)
              and cryptographic HMAC-SHA256 session tokens.
            </p>
          </div>

          {/* Admin Screenshots Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Screen 1: zenad1.webp */}
            <figure className="rounded-xl border border-border-default bg-surface-card overflow-hidden shadow-xs hover:shadow-md transition-shadow">
              <a
                href="/images/projects/zenoway/zenad1.webp"
                target="_blank"
                rel="noopener noreferrer"
                className="block group cursor-zoom-in relative aspect-[16/9] w-full bg-white overflow-hidden"
                title="Click to view full uncropped screenshot"
              >
                <Image
                  src="/images/projects/zenoway/zenad1.webp"
                  alt="Zenoway Admin Portal Dashboard Overview"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </a>
              <figcaption className="p-4 bg-surface-card border-t border-border-default">
                <h4 className="text-sm font-semibold text-text-primary mb-1">
                  1. Real-Time Admin Dashboard
                </h4>
                <p className="text-xs text-text-body leading-relaxed">
                  Metrics dashboard tracking active jobs, pending moderation queues, and timeframe-based filters (today, 7d, 30d).
                </p>
              </figcaption>
            </figure>

            {/* Screen 2: zenad2.webp */}
            <figure className="rounded-xl border border-border-default bg-surface-card overflow-hidden shadow-xs hover:shadow-md transition-shadow">
              <a
                href="/images/projects/zenoway/zenad2.webp"
                target="_blank"
                rel="noopener noreferrer"
                className="block group cursor-zoom-in relative aspect-[16/9] w-full bg-white overflow-hidden"
                title="Click to view full uncropped screenshot"
              >
                <Image
                  src="/images/projects/zenoway/zenad2.webp"
                  alt="Zenoway Admin Portal Job Management Table"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </a>
              <figcaption className="p-4 bg-surface-card border-t border-border-default">
                <h4 className="text-sm font-semibold text-text-primary mb-1">
                  2. Catalog Management &amp; Actions
                </h4>
                <p className="text-xs text-text-body leading-relaxed">
                  Fast search, view count audits, instant social poster generation, and inline publishing controls.
                </p>
              </figcaption>
            </figure>

            {/* Screen 3: zenad3.webp */}
            <figure className="rounded-xl border border-border-default bg-surface-card overflow-hidden shadow-xs hover:shadow-md transition-shadow">
              <a
                href="/images/projects/zenoway/zenad3.webp"
                target="_blank"
                rel="noopener noreferrer"
                className="block group cursor-zoom-in relative aspect-[16/9] w-full bg-white overflow-hidden"
                title="Click to view full uncropped screenshot"
              >
                <Image
                  src="/images/projects/zenoway/zenad3.webp"
                  alt="Zenoway Admin Portal 5-Step Publishing Wizard"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </a>
              <figcaption className="p-4 bg-surface-card border-t border-border-default">
                <h4 className="text-sm font-semibold text-text-primary mb-1">
                  3. 5-Step Publishing Wizard
                </h4>
                <p className="text-xs text-text-body leading-relaxed">
                  Captures work setups (Hybrid, Onsite, Remote), canonical Indian cities, salary ranges, and Google Gemini AI description enhancement.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 9: ACCESSIBILITY & DATA RESILIENCE ---------------- */}
      <section className="py-16 md:py-24 bg-surface-subtle/70 border-t border-border-default">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
              ENGINEERING RIGOR
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
              Accessibility (a11y) &amp; Edge Resilience.
            </h2>
            <p className="text-base md:text-lg text-text-body leading-relaxed">
              A great UI developer cares as much about keyboard navigation, edge fallbacks, and
              database pagination as visual polish.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-border-default bg-surface-card space-y-3">
              <div className="flex items-center gap-2.5 text-text-primary font-semibold text-base">
                <ShieldCheck size={18} className="text-primary" />
                <span>WCAG Accessible Combobox</span>
              </div>
              <p className="text-sm text-text-body leading-relaxed">
                The location filter popover features full keyboard arrow navigation (<code className="text-primary font-mono text-xs">ArrowDown</code>, <code className="text-primary font-mono text-xs">Enter</code>, <code className="text-primary font-mono text-xs">Escape</code>)
                and alias resolution (typing "Bangalore" resolves to "Bengaluru").
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border-default bg-surface-card space-y-3">
              <div className="flex items-center gap-2.5 text-text-primary font-semibold text-base">
                <Zap size={18} className="text-primary" />
                <span>DNS Mail Server Checks</span>
              </div>
              <p className="text-sm text-text-body leading-relaxed">
                Node.js <code className="text-primary font-mono text-xs">dns/promises</code> validates employer email domains
                have live MX records before allowing postings, preventing dead-end applications without third-party fees.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border-default bg-surface-card space-y-3">
              <div className="flex items-center gap-2.5 text-text-primary font-semibold text-base">
                <RefreshCw size={18} className="text-primary" />
                <span>PostgREST Chunking</span>
              </div>
              <p className="text-sm text-text-body leading-relaxed">
                Supabase database queries execute in 500-row chunks to prevent silent pagination
                truncation caused by PostgREST row limits, integrated with Next.js <code className="text-primary font-mono text-xs">unstable_cache</code>.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border-default bg-surface-card space-y-3">
              <div className="flex items-center gap-2.5 text-text-primary font-semibold text-base">
                <Lock size={18} className="text-primary" />
                <span>HMAC-SHA256 Admin Auth</span>
              </div>
              <p className="text-sm text-text-body leading-relaxed">
                Cryptographically signed admin session tokens with constant-time string comparisons
                (<code className="text-primary font-mono text-xs">timingSafeEqualStrings</code>) defend administrative surfaces against timing attacks.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border-default bg-surface-card space-y-3 sm:col-span-2">
              <div className="flex items-center gap-2.5 text-text-primary font-semibold text-base">
                <CheckCircle2 size={18} className="text-primary" />
                <span>Rich Google JobPosting JSON-LD</span>
              </div>
              <p className="text-sm text-text-body leading-relaxed">
                Every job detail route automatically renders Schema.org <code className="text-primary font-mono text-xs">JobPosting</code> structured
                data with <code className="text-primary font-mono text-xs">TELECOMMUTE</code> flags and geographical applicant requirements, directly
                integrated with the Google Indexing API.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 10: CLOSING CTA & NEXT PROJECT ---------------- */}
      <section className="py-16 md:py-20 border-t border-border-default">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="rounded-3xl border border-primary-border bg-primary-subtle/50 p-8 sm:p-12 md:p-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              EXPLORE THE LIVE CODE
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
              Interested in how I engineer responsive user interfaces?
            </h2>

            <p className="text-base md:text-lg text-text-body max-w-xl mx-auto mb-8 leading-relaxed">
              Explore Zenoway live in production or get in touch to discuss UI Developer and
              Frontend Engineering opportunities.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://www.zenoway.online"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-white btn-primary transition-all rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
              >
                Visit zenoway.online
                <ExternalLink size={16} />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-text-primary hover:text-primary bg-surface-card border border-border-default hover:border-primary/40 transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                Get in Touch
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <NextProject currentSlug="zenoway" />
    </main>
  );
}
