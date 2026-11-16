import NextProject from "../../../components/projects/NextProject";
import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  ExternalLink,
  FileText,
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
  Copy,
  Terminal,
  Zap,
  BarChart3,
  Globe,
  TrendingUp,
  MousePointerClick,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Zenoway — UI Developer & Design Engineer Case Study | Aswanth U P",
  description:
    "A comprehensive UI/UX development case study on Zenoway: code-first design engineering, Tailwind v4 design tokens, desktop workbench layout, canvas social poster studio, and zero-friction recruitment UX.",
};

export default function ZenowayCaseStudy() {
  return (
    <main className="min-h-screen bg-background text-text-primary selection:bg-primary-subtle selection:text-primary">
      {/* ---------------- SECTION 1: HERO & TECHNICAL SPECIFICATION ---------------- */}
      <section className="relative pt-28 md:pt-36 pb-14 md:pb-20 bg-gradient-to-b from-primary-subtle/55 via-surface-subtle/40 to-background overflow-hidden">
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
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-text-primary leading-[1.12]">
                Zenoway: Engineering a Zero-Friction Career Platform &amp; Design System
              </h1>

              <p className="text-base sm:text-lg text-text-body leading-relaxed max-w-2xl">
                A production-grade recruitment portal designed and engineered code-first for UI/UX and
                Frontend professionals. Replaces traditional 10-step applicant forms with a
                direct-to-HR copy model, an in-browser Social Poster Studio, and an isolated
                desktop workbench powered by Tailwind CSS v4.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <a
                  href="https://www.zenoway.online"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold btn-primary transition-all rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
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
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-text-muted uppercase tracking-wider block mb-1">
                    My Role
                  </span>
                  <span className="font-medium text-text-primary">
                    UI Developer &amp; Design Engineer
                  </span>
                </div>
                <div>
                  <span className="text-text-muted uppercase tracking-wider block mb-1">
                    Methodology
                  </span>
                  <span className="font-medium text-text-primary">
                    Code-First Design Engineering
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
                    Styling Tokens
                  </span>
                  <span className="font-medium text-text-primary">
                    Tailwind CSS v4 (@theme)
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

      {/* ---------------- SECTION 2: MY ROLE & ENGINEERING OWNERSHIP ---------------- */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
              MY CONTRIBUTION &amp; OWNERSHIP
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
              Design Engineering from Concept to Production.
            </h2>
            <p className="text-base md:text-lg text-text-body leading-relaxed">
              As the UI Developer and creator of Zenoway, I designed and built the user interface code-first. Rather than translating static mockups with visual drift, I engineered the component hierarchy, interaction states, and accessibility tokens directly in the browser.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-7 rounded-2xl border border-border-default bg-surface-card space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-primary-subtle text-primary flex items-center justify-center font-mono font-medium text-sm">
                01
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-text-primary">
                Code-First Token Architecture
              </h3>
              <p className="text-sm text-text-body leading-relaxed">
                Authored the visual identity and complete CSS-first design token system in Tailwind CSS v4 (<code className="text-xs bg-surface-muted px-1.5 py-0.5 rounded text-primary font-mono">@theme</code>), eliminating legacy configuration scripts and establishing strict semantic roles for surfaces, borders, and interaction states.
              </p>
            </div>

            <div className="p-7 rounded-2xl border border-border-default bg-surface-card space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-primary-subtle text-primary flex items-center justify-center font-mono font-medium text-sm">
                02
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-text-primary">
                Bespoke Component Engineering
              </h3>
              <p className="text-sm text-text-body leading-relaxed">
                Engineered 100% custom UI components without heavy third-party UI runtime kits (no MUI, no AntD). Developed the viewport dual-pane layout (<code className="text-xs bg-surface-muted px-1.5 py-0.5 rounded text-primary font-mono">h-dvh</code>), the keyboard-accessible combobox, segmented filters, and in-feed preview drawer from scratch.
              </p>
            </div>

            <div className="p-7 rounded-2xl border border-border-default bg-surface-card space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-primary-subtle text-primary flex items-center justify-center font-mono font-medium text-sm">
                03
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-text-primary">
                In-Browser Social Poster Studio
              </h3>
              <p className="text-sm text-text-body leading-relaxed">
                Designed and engineered an in-browser social poster studio (<code className="text-xs bg-surface-muted px-1.5 py-0.5 rounded text-primary font-mono">JobPosterCreator.tsx</code>) with customizable layouts, live typography switching, and dynamic QR codes, allowing hiring teams to instantly export high-resolution social graphics for LinkedIn and Instagram without third-party design tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 3: THE RECRUITMENT FRICTION PROBLEM & UX DECISIONS ---------------- */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
              THE PROBLEM &amp; INTENTIONAL UX DECISIONS
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
              Eliminating recruitment friction through design engineering.
            </h2>
            <p className="text-base md:text-lg text-text-body leading-relaxed">
              Standard hiring boards (Naukri, Indeed, LinkedIn) impose massive interaction friction on candidates: forced multi-step registration, clunky double-scrollbars, dead HR inboxes, and frustrating OS-level <code className="text-xs bg-surface-muted px-1.5 py-0.5 rounded text-primary font-mono">mailto:</code> popups. Zenoway replaces these with deliberate, empathetic UI patterns:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* UX Decision 01 */}
            <div className="p-7 rounded-2xl border border-border-default bg-surface-card space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-primary-subtle text-primary flex items-center justify-center font-mono font-medium text-sm">
                <Copy size={18} />
              </div>
              <h3 className="text-lg font-medium text-text-primary">
                1-Click Copy Email (No mailto: Popups)
              </h3>
              <p className="text-sm text-text-body leading-relaxed">
                Clicking <code className="text-xs bg-surface-muted px-1.5 py-0.5 rounded text-primary font-mono">mailto:</code> links is notoriously frustrating on desktop because it forcefully opens unconfigured native mail clients (like Outlook or Apple Mail). Zenoway replaces this with an instant <strong>1-Click Copy HR Email</strong> action with tactile copied feedback, letting candidates paste directly into Gmail or their preferred webmail.
              </p>
            </div>

            {/* UX Decision 02 */}
            <div className="p-7 rounded-2xl border border-border-default bg-surface-card space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-primary-subtle text-primary flex items-center justify-center font-mono font-medium text-sm">
                <Laptop size={18} />
              </div>
              <h3 className="text-lg font-medium text-text-primary">
                Dual-Pane Layout Without Double-Scrollbars
              </h3>
              <p className="text-sm text-text-body leading-relaxed">
                Combining a fixed filter sidebar with dynamic job feeds usually causes annoying nested double-scrollbars. I locked the root container to <code className="text-xs bg-surface-muted px-1.5 py-0.5 rounded text-primary font-mono">h-dvh</code> and isolated scroll boundaries with <code className="text-xs bg-surface-muted px-1.5 py-0.5 rounded text-primary font-mono">overscroll-contain</code> so the sidebar and job cards scroll independently with zero viewport jumping.
              </p>
            </div>

            {/* UX Decision 03 */}
            <div className="p-7 rounded-2xl border border-border-default bg-surface-card space-y-4 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-primary-subtle text-primary flex items-center justify-center font-mono font-medium text-sm">
                <ShieldCheck size={18} />
              </div>
              <h3 className="text-lg font-medium text-text-primary">
                Automated DNS MX Record Verification
              </h3>
              <p className="text-sm text-text-body leading-relaxed">
                To guarantee zero dead-end applications, I engineered a background DNS MX record validator (<code className="text-xs bg-surface-muted px-1.5 py-0.5 rounded text-primary font-mono">dns/promises</code>) in the publishing pipeline. The system validates that employer domains possess active mail exchange servers before allowing listings into the public feed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 4: DESIGN SYSTEM & TAILWIND V4 ARCHITECTURE ---------------- */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: Design System Explanation */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider">
                <Palette size={16} />
                <span>CSS-First Design Tokens</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
                The &ldquo;Zenoway Emerald&rdquo; Design System in Tailwind CSS v4.
              </h2>

              <p className="text-base text-text-body leading-relaxed">
                Rather than relying on legacy JavaScript configuration files (<code className="text-xs bg-surface-muted px-1.5 py-0.5 rounded text-primary font-mono">tailwind.config.ts</code>),
                Zenoway adopts Tailwind CSS v4&apos;s modern <code className="text-xs bg-surface-muted px-1.5 py-0.5 rounded text-primary font-mono">@theme</code> directive.
                All tokens are defined directly as native CSS custom properties across three distinct layers.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl border border-border-default bg-surface-card flex items-start gap-3.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-600 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-text-primary">1. Raw Primitives (:root)</h4>
                    <p className="text-xs text-text-body mt-0.5">
                      Fixed values (<code className="text-primary font-mono">#087f50</code>, <code className="text-primary font-mono">1200px</code>)
                      that are never invoked directly within component classes.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-border-default bg-surface-card flex items-start gap-3.5">
                  <div className="w-3 h-3 rounded-full bg-primary mt-1 shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-text-primary">2. Semantic Roles (@theme)</h4>
                    <p className="text-xs text-text-body mt-0.5">
                      Purpose-driven classes like <code className="text-primary font-mono">bg-brand</code>, <code className="text-primary font-mono">text-text-primary</code>,
                      and <code className="text-primary font-mono">border-border-default</code> that components consume.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-border-default bg-surface-card flex items-start gap-3.5">
                  <div className="w-3 h-3 rounded-full bg-amber-500 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-text-primary">3. Interaction &amp; Focus Spectrum</h4>
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
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="flex items-center gap-1.5 ml-1">
                      <Terminal size={13} className="text-primary" />
                      <span className="font-mono text-slate-200">src/app/globals.css</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-primary border border-slate-700/60">
                    Tailwind CSS v4 · @theme
                  </span>
                </div>

                <div className="p-5 bg-slate-950 font-mono text-xs leading-relaxed overflow-x-auto">
                  <pre>
                    <span className="text-violet-400">@import</span> <span className="text-emerald-300">&quot;tailwindcss&quot;</span>;{'\n\n'}
                    <span className="text-violet-400">@theme</span> {'{\n'}
                    {'  '}<span className="text-slate-500">{'/* Micro-Typography Scale for High-Density Workbench */'}</span>{'\n'}
                    {'  '}<span className="text-sky-300">--text-3xs</span>: <span className="text-emerald-400">10px</span>;{'\n'}
                    {'  '}<span className="text-sky-300">--text-2xs</span>: <span className="text-emerald-400">11px</span>;{'\n'}
                    {'  '}<span className="text-sky-300">--text-xs-compact</span>: <span className="text-emerald-400">13px</span>;{'\n\n'}
                    {'  '}<span className="text-slate-500">{'/* Brand Semantic Palette: Zenoway Emerald */'}</span>{'\n'}
                    {'  '}<span className="text-sky-300">--color-brand</span>: <span className="text-emerald-400">#087f50</span>;{'\n'}
                    {'  '}<span className="text-sky-300">--color-brand-hover</span>: <span className="text-emerald-400">#066640</span>;{'\n'}
                    {'  '}<span className="text-sky-300">--color-brand-soft</span>: <span className="text-emerald-400">#edf7f1</span>;{'\n\n'}
                    {'  '}<span className="text-slate-500">{'/* Surfaces & Container Tokens */'}</span>{'\n'}
                    {'  '}<span className="text-sky-300">--color-surface-base</span>: <span className="text-emerald-400">#ffffff</span>;{'\n'}
                    {'  '}<span className="text-sky-300">--color-surface-subtle</span>: <span className="text-emerald-400">#f8faf8</span>;{'\n'}
                    {'  '}<span className="text-sky-300">--color-surface-card</span>: <span className="text-emerald-400">#ffffff</span>;{'\n\n'}
                    {'  '}<span className="text-slate-500">{'/* Interaction & Focus Rings */'}</span>{'\n'}
                    {'  '}<span className="text-sky-300">--radius-control</span>: <span className="text-emerald-400">4px</span>;{'\n'}
                    {'  '}<span className="text-sky-300">--radius-card</span>: <span className="text-emerald-400">8px</span>;{'\n'}
                    {'  '}<span className="text-sky-300">--color-focus-ring</span>: <span className="text-emerald-400">rgba(8, 127, 80, 0.2)</span>;{'\n'}
                    {'}'}
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

      {/* ---------------- SECTION 5: THE 5-STAGE USER JOURNEY & COMPONENT OWNERSHIP ---------------- */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
              END-TO-END PRODUCT ARCHITECTURE
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
              The 5-Stage User Journey &amp; Component Ownership.
            </h2>
            <p className="text-base md:text-lg text-text-body leading-relaxed">
              Every stage of the candidate and employer lifecycle is driven by bespoke, accessible React 19 components engineered code-first without third-party UI libraries:
            </p>
          </div>

          {/* 5-Stage Stepper Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {/* Stage 1 */}
            <div className="p-5 rounded-2xl border border-border-default bg-surface-card space-y-3 relative shadow-xs">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-primary-subtle text-primary font-mono text-xs font-medium flex items-center justify-center">
                  01
                </span>
                <span className="text-[10px] font-mono text-primary font-medium px-2 py-0.5 rounded-full bg-primary-subtle">
                  JobsClient.tsx
                </span>
              </div>
              <h4 className="text-sm font-medium text-text-primary">1. Discover</h4>
              <p className="text-xs text-text-body leading-relaxed">
                Dual-pane workbench with sticky facet sidebar, combobox autocomplete, and Indian alias resolution.
              </p>
            </div>

            {/* Stage 2 */}
            <div className="p-5 rounded-2xl border border-border-default bg-surface-card space-y-3 relative shadow-xs">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-primary-subtle text-primary font-mono text-xs font-medium flex items-center justify-center">
                  02
                </span>
                <span className="text-[10px] font-mono text-primary font-medium px-2 py-0.5 rounded-full bg-primary-subtle">
                  Modal.tsx
                </span>
              </div>
              <h4 className="text-sm font-medium text-text-primary">2. Inspect</h4>
              <p className="text-xs text-text-body leading-relaxed">
                In-feed quick preview modal without page navigation, displaying compensation and regional residency requirements.
              </p>
            </div>

            {/* Stage 3 */}
            <div className="p-5 rounded-2xl border border-border-default bg-surface-card space-y-3 relative shadow-xs">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-primary-subtle text-primary font-mono text-xs font-medium flex items-center justify-center">
                  03
                </span>
                <span className="text-[10px] font-mono text-primary font-medium px-2 py-0.5 rounded-full bg-primary-subtle">
                  JobDetailsClient.tsx
                </span>
              </div>
              <h4 className="text-sm font-medium text-text-primary">3. Apply</h4>
              <p className="text-xs text-text-body leading-relaxed">
                Frictionless 1-click HR email clipboard copy with tactile confirmation toast (eliminating disruptive mailto: popups).
              </p>
            </div>

            {/* Stage 4 */}
            <div className="p-5 rounded-2xl border border-border-default bg-surface-card space-y-3 relative shadow-xs">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-primary-subtle text-primary font-mono text-xs font-medium flex items-center justify-center">
                  04
                </span>
                <span className="text-[10px] font-mono text-primary font-medium px-2 py-0.5 rounded-full bg-primary-subtle">
                  JobFormWizard.tsx
                </span>
              </div>
              <h4 className="text-sm font-medium text-text-primary">4. Publish</h4>
              <p className="text-xs text-text-body leading-relaxed">
                4-step progressive disclosure wizard with Gemini AI raw text importer and keyboard-driven navigation (1–4, arrows).
              </p>
            </div>

            {/* Stage 5 */}
            <div className="p-5 rounded-2xl border border-border-default bg-surface-card space-y-3 relative shadow-xs">
              <div className="flex items-center justify-between">
                <span className="w-7 h-7 rounded-lg bg-primary-subtle text-primary font-mono text-xs font-medium flex items-center justify-center">
                  05
                </span>
                <span className="text-[10px] font-mono text-primary font-medium px-2 py-0.5 rounded-full bg-primary-subtle">
                  JobPosterCreator.tsx
                </span>
              </div>
              <h4 className="text-sm font-medium text-text-primary">5. Amplify</h4>
              <p className="text-xs text-text-body leading-relaxed">
                In-browser canvas graphics studio rendering 2160×2700px high-resolution social posters with dynamic vector QR codes.
              </p>
            </div>
          </div>

          {/* Component Ownership & Engineering Highlights Table */}
          <div className="rounded-2xl border border-border-default bg-surface-card overflow-hidden shadow-xs">
            <div className="px-5 py-3.5 border-b border-border-default bg-surface-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <span className="font-medium text-text-primary uppercase tracking-wider">Custom Component Ownership Matrix</span>
              <span className="font-mono text-primary font-medium">100% Bespoke Code · 0 UI Component Libraries</span>
            </div>
            <div className="divide-y divide-border-default text-xs">
              <div className="p-4 grid sm:grid-cols-12 gap-3 items-center">
                <div className="sm:col-span-3 font-mono font-medium text-text-primary">JobsClient.tsx</div>
                <div className="sm:col-span-3 text-primary font-medium">Desktop Viewport Workbench</div>
                <div className="sm:col-span-6 text-text-body">Root <code className="text-primary font-mono text-[11px]">h-dvh</code> container, isolated overscroll containment, dynamic category count filtering, and active work-mode segmented pills.</div>
              </div>
              <div className="p-4 grid sm:grid-cols-12 gap-3 items-center">
                <div className="sm:col-span-3 font-mono font-medium text-text-primary">Location Combobox</div>
                <div className="sm:col-span-3 text-primary font-medium">Accessible Autocomplete</div>
                <div className="sm:col-span-6 text-text-body">WCAG compliant <code className="text-primary font-mono text-[11px]">role=&quot;combobox&quot;</code> with arrow-key navigation (<code className="text-primary font-mono text-[11px]">ArrowDown/Up</code>, <code className="text-primary font-mono text-[11px]">Enter</code>, <code className="text-primary font-mono text-[11px]">Esc</code>) and Indian city alias fuzzy lookup.</div>
              </div>
              <div className="p-4 grid sm:grid-cols-12 gap-3 items-center">
                <div className="sm:col-span-3 font-mono font-medium text-text-primary">JobDetailsClient.tsx</div>
                <div className="sm:col-span-3 text-primary font-medium">1-Click Direct Application UX</div>
                <div className="sm:col-span-6 text-text-body">Replaces broken <code className="text-primary font-mono text-[11px]">mailto:</code> links with async clipboard copy, pre-composed subject lines, native Web Share API, and local storage job bookmarking.</div>
              </div>
              <div className="p-4 grid sm:grid-cols-12 gap-3 items-center">
                <div className="sm:col-span-3 font-mono font-medium text-text-primary">JobPosterCreator.tsx</div>
                <div className="sm:col-span-3 text-primary font-medium">In-Browser Social Poster Studio</div>
                <div className="sm:col-span-6 text-text-body">Interactive layout studio with live typography switches, dynamic vector QR codes, template format selection, and 1-click social poster export.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 6: SCREEN 1 - DUAL-PANE DESKTOP WORKBENCH (/jobs) ---------------- */}
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

            {/* Description */}
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
                    <span className="font-medium text-text-primary">Left Filter Sidebar:</span> Granular facets for Job Types (Full-time, Internship),
                    Department categories with live job counts, and experience sliders.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>
                    <span className="font-medium text-text-primary">Accessible Location Combobox:</span> Autocomplete input supporting Indian city/state aliases
                    (typing &ldquo;Bangalore&rdquo; resolves to &ldquo;Bengaluru&rdquo;) with full keyboard navigation (<code className="text-xs bg-surface-muted px-1 py-0.5 rounded text-primary font-mono">ArrowDown</code>, <code className="text-xs bg-surface-muted px-1 py-0.5 rounded text-primary font-mono">Enter</code>).
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>
                    <span className="font-medium text-text-primary">1-Click Work Mode Switcher:</span> Instant segmented pill controls for All modes, Remote, Hybrid, and On-site.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 6: SCREEN 2 - INTERACTIVE ROLE PREVIEW MODAL ---------------- */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Description */}
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
                  <div className="flex items-center gap-2 text-xs font-medium text-text-primary">
                    <CheckCircle2 size={14} className="text-primary" />
                    <span>Key Specs at a Glance</span>
                  </div>
                  <p className="text-xs text-text-body mt-1">
                    Structured 4-column overview displaying Salary, Experience requirement, Location, and Work Setup.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-border-default bg-surface-card">
                  <div className="flex items-center gap-2 text-xs font-medium text-text-primary">
                    <Compass size={14} className="text-primary" />
                    <span>Location Preference Callout</span>
                  </div>
                  <p className="text-xs text-text-body mt-1">
                    Explicitly informs candidates if an employer prioritizes local residency (e.g., &ldquo;Kerala preferred&rdquo;).
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-border-default bg-surface-card">
                  <div className="flex items-center gap-2 text-xs font-medium text-text-primary">
                    <Copy size={14} className="text-primary" />
                    <span>1-Click Copy Email Action Bar</span>
                  </div>
                  <p className="text-xs text-text-body mt-1">
                    Instant clipboard copy with tactile confirmation toast, Save Job (persisted via <code className="text-primary font-mono text-xs">localStorage</code>), and native Web Share API.
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

      {/* ---------------- SECTION 7: SCREEN 3 - CANONICAL SEO & STRUCTURED DETAILS ---------------- */}
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

            {/* Description */}
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
                    <span className="font-medium text-text-primary">Editorial Metadata Header:</span> Breadcrumb hierarchy, verified company website link,
                    posting date, and salary/remote tags displayed with clean typography.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>
                    <span className="font-medium text-text-primary">Automated JSON-LD Schema:</span> Generates Google <code className="text-xs bg-surface-muted px-1 py-0.5 rounded text-primary font-mono">JobPosting</code> structured
                    markup with <code className="text-xs bg-surface-muted px-1 py-0.5 rounded text-primary font-mono">TELECOMMUTE</code> flags and regional requirements.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>
                    <span className="font-medium text-text-primary">Instant Google Indexing:</span> Integrated with the Google Indexing API to notify search crawlers within minutes of job approval.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 8: SCREEN 4 - JOB ADDING FLOW & AI WIZARD ---------------- */}
      <section className="py-16 md:py-24">
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
                  <div className="flex items-center gap-2 text-xs font-medium text-text-primary">
                    <Sparkles size={14} className="text-primary" />
                    <span>Gemini AI Smart Importer</span>
                  </div>
                  <p className="text-xs text-text-body mt-1">
                    Recruiters can paste messy, raw text from an email, WhatsApp note, or PDF; Google Gemini
                    auto-parses the title, company, requirements, and fills all 4 steps in under 3 seconds.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-border-default bg-surface-card">
                  <div className="flex items-center gap-2 text-xs font-medium text-text-primary">
                    <Sliders size={14} className="text-primary" />
                    <span>4-Step Guided Wizard</span>
                  </div>
                  <p className="text-xs text-text-body mt-1">
                    Progressive steps for Role details, Office Locations &amp; candidate residency, Compensation
                    brackets with monthly salary sliders, and final Markdown review.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-border-default bg-surface-card">
                  <div className="flex items-center gap-2 text-xs font-medium text-text-primary">
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

      {/* ---------------- SECTION 9: SOCIAL POSTER CREATOR WORKSPACE & OUTPUTS ---------------- */}
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
              <span className="font-medium text-text-primary">Live Poster Studio Workspace (zenoway.online/job-posters)</span>
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
                <span className="font-medium text-text-primary">Exported: Bold Hiring Template</span>
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
                <span className="font-medium text-text-primary">Exported: Editorial Portrait Template</span>
                <span className="text-text-muted font-mono">4:5 Feed · Optical Typography</span>
              </figcaption>
            </figure>
          </div>

          <div className="mt-8 p-5 rounded-xl border border-border-default bg-surface-card text-xs text-text-body flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="font-medium text-text-primary">Studio UI Capabilities: </span>
              <span>Supports real-time typography switching, dynamic vector QR codes linked to the live job URL, aspect-ratio previews (4:5 Feed &amp; 9:16 Story), and 1-click high-resolution social downloads.</span>
            </div>
            <span className="font-mono text-primary shrink-0">Custom Studio Controls + @ttsalpha/qrcode</span>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 10: ADMIN OPERATIONS & SECURITY ---------------- */}
      <section className="py-16 md:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
              PLATFORM MANAGEMENT &amp; SECURITY
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
              Administrative Operations &amp; Moderation Workflow.
            </h2>
            <p className="text-base md:text-lg text-text-body leading-relaxed">
              To maintain high listing quality and curate employer submissions before publication, I engineered a responsive
              administrative moderation interface with status filtering, review queues, and instant social poster generation.
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
                <h4 className="text-sm font-medium text-text-primary mb-1">
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
                <h4 className="text-sm font-medium text-text-primary mb-1">
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
                <h4 className="text-sm font-medium text-text-primary mb-1">
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

      {/* ---------------- SECTION 11: VERIFIED PRODUCTION IMPACT & REAL-WORLD TRAFFIC ---------------- */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider mb-3">
              <TrendingUp size={16} />
              <span>Verified Analytics &amp; Adoption</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
              Real-World Adoption &amp; Production Metrics.
            </h2>

            <p className="text-base md:text-lg text-text-body leading-relaxed">
              Unlike theoretical concepts, Zenoway serves live job seekers across India. Live telemetry from Vercel Analytics and Google Analytics (GA4) demonstrates real-world organic traction, peak concurrent concurrency, and cross-state engagement:
            </p>
          </div>

          {/* Metric Highlights Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-14">
            <div className="space-y-2">
              <span className="text-xs font-medium text-text-muted uppercase tracking-wider block">
                Real-Time Concurrency
              </span>
              <div className="flex items-center gap-2.5">
                <span className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary leading-none">
                  128
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/15 border border-emerald-500/25 px-2.5 py-1 rounded-full leading-none shrink-0 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  peak live
                </span>
              </div>
              <p className="text-xs text-text-body leading-relaxed">
                Active candidates exploring live jobs simultaneously
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-medium text-text-muted uppercase tracking-wider block">
                24h Page Views
              </span>
              <div className="flex items-center gap-2.5">
                <span className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary leading-none">
                  654
                </span>
                <span className="inline-flex items-center text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/15 border border-emerald-500/25 px-2.5 py-1 rounded-full leading-none shrink-0 whitespace-nowrap">
                  +91%
                </span>
              </div>
              <p className="text-xs text-text-body leading-relaxed">
                High catalog browsing depth across design roles
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-medium text-text-muted uppercase tracking-wider block">
                Unique Visitors
              </span>
              <div className="flex items-center gap-2.5">
                <span className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary leading-none">
                  306
                </span>
                <span className="inline-flex items-center text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/15 border border-emerald-500/25 px-2.5 py-1 rounded-full leading-none shrink-0 whitespace-nowrap">
                  +132%
                </span>
              </div>
              <p className="text-xs text-text-body leading-relaxed">
                Organic discovery surge from LinkedIn &amp; Search
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-medium text-text-muted uppercase tracking-wider block">
                Organic Reach
              </span>
              <div className="flex items-center gap-2.5">
                <span className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary leading-none">
                  10+
                </span>
                <span className="inline-flex items-center text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/15 border border-emerald-500/25 px-2.5 py-1 rounded-full leading-none shrink-0 whitespace-nowrap">
                  metro hubs
                </span>
              </div>
              <p className="text-xs text-text-body leading-relaxed">
                Bengaluru, Mumbai, Pune, Kerala, Jaipur, Lucknow
              </p>
            </div>
          </div>

          {/* Real Analytics Dashboards Grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Analytics Figure 1: Vercel Analytics */}
            <figure className="rounded-2xl border border-border-default bg-surface-card overflow-hidden shadow-sm space-y-0">
              <div className="px-4 py-3 border-b border-border-default bg-surface-subtle flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <BarChart3 size={15} className="text-primary" />
                  <span className="font-medium text-text-primary">Vercel Production Analytics</span>
                </div>
                <span className="font-mono text-text-muted text-[11px]">24-Hour Surge Telemetry</span>
              </div>
              <a
                href="/images/projects/zenoway/analytics-vercel.png"
                target="_blank"
                rel="noopener noreferrer"
                className="block group cursor-zoom-in relative aspect-[16/10] w-full bg-slate-950 overflow-hidden"
                title="Click to view full uncropped Vercel Analytics screenshot"
              >
                <Image
                  src="/images/projects/zenoway/analytics-vercel.png"
                  alt="Vercel Analytics dashboard showing 306 visitors, 654 page views, 128 live online, and top referrers"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
                  loading="lazy"
                  unoptimized
                />
              </a>
              <figcaption className="p-4 border-t border-border-default bg-surface-card text-xs text-text-body flex justify-between items-center">
                <span>Verified 306 visitors, 654 pageviews, and 128 online users</span>
                <span className="text-text-muted font-mono">uxion (zenoway.com)</span>
              </figcaption>
            </figure>

            {/* Analytics Figure 2: Google Analytics GA4 Realtime */}
            <figure className="rounded-2xl border border-border-default bg-surface-card overflow-hidden shadow-sm space-y-0">
              <div className="px-4 py-3 border-b border-border-default bg-surface-subtle flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Globe size={15} className="text-primary" />
                  <span className="font-medium text-text-primary">Google Analytics (GA4) Realtime Map</span>
                </div>
                <span className="font-mono text-text-muted text-[11px]">Live Geographical Distribution</span>
              </div>
              <a
                href="/images/projects/zenoway/analytics-ga.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="block group cursor-zoom-in relative aspect-[16/10] w-full bg-slate-100 overflow-hidden"
                title="Click to view full uncropped Google Analytics screenshot"
              >
                <Image
                  src="/images/projects/zenoway/analytics-ga.jpg"
                  alt="Google Analytics Realtime Overview showing 72 active users in last 30 minutes across India cities"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
                  loading="lazy"
                  unoptimized
                />
              </a>
              <figcaption className="p-4 border-t border-border-default bg-surface-card text-xs text-text-body flex justify-between items-center">
                <span>Verified 72 active users in 30m across Bengaluru, Mumbai, Pune, Kerala</span>
                <span className="text-text-muted font-mono">GA4 Realtime Feed</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 12: TECHNICAL INTERVIEW DEFENSE TALKING POINTS ---------------- */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
              TECHNICAL INTERVIEW PREPARATION
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
              How I Explain Zenoway in UI Engineering Interviews.
            </h2>
            <p className="text-base md:text-lg text-text-body leading-relaxed">
              When technical hiring managers ask about frontend architecture, responsive layout trade-offs, and design systems, here is how I defend my engineering decisions:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-border-default bg-surface-card space-y-3">
              <div className="flex items-center gap-2 text-primary font-medium text-sm">
                <Code2 size={16} />
                <span>Q1: Why design code-first instead of starting in Figma?</span>
              </div>
              <p className="text-xs sm:text-sm text-text-body leading-relaxed">
                &ldquo;Designing directly in code using Tailwind CSS v4 design tokens allowed me to eliminate the &apos;translation gap&apos; between static mockups and production. I could stress-test responsive breakpoints, dynamic text wrapping, keyboard navigation states, and micro-interactions with real live data from day one, rather than discovering layout breaks after building a Figma file.&rdquo;
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border-default bg-surface-card space-y-3">
              <div className="flex items-center gap-2 text-primary font-medium text-sm">
                <MousePointerClick size={16} />
                <span>Q2: Why choose 1-Click Copy Email over a standard mailto: link?</span>
              </div>
              <p className="text-xs sm:text-sm text-text-body leading-relaxed">
                &ldquo;<code className="text-xs font-mono bg-surface-muted px-1 rounded text-primary">mailto:</code> links are one of the most frustrating patterns on desktop web: clicking them launches unconfigured native email clients (like Outlook or Apple Mail), which jars candidates and breaks their flow. I replaced this with an asynchronous clipboard copy with tactile confirmation toast, allowing job seekers to paste cleanly into Gmail or webmail without interruption.&rdquo;
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border-default bg-surface-card space-y-3">
              <div className="flex items-center gap-2 text-primary font-medium text-sm">
                <Laptop size={16} />
                <span>Q3: How did you eliminate double-scrollbars in the desktop workbench?</span>
              </div>
              <p className="text-xs sm:text-sm text-text-body leading-relaxed">
                &ldquo;Traditional dual-pane layouts suffer from nested viewport jumping. I solved this by locking the root container to <code className="text-xs font-mono bg-surface-muted px-1 rounded text-primary">h-dvh</code> and applying <code className="text-xs font-mono bg-surface-muted px-1 rounded text-primary">overscroll-behavior: contain</code> to both the sticky filter sidebar and the primary job stream. This isolates scroll chaining and gives the web app the solid, fluid feel of a native desktop application.&rdquo;
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border-default bg-surface-card space-y-3">
              <div className="flex items-center gap-2 text-primary font-medium text-sm">
                <QrCode size={16} />
                <span>Q4: Why build an in-browser Poster Studio instead of letting employers create graphics in Canva?</span>
              </div>
              <p className="text-xs sm:text-sm text-text-body leading-relaxed">
                &ldquo;Most hiring managers and early-stage founders don&apos;t have in-house designers, leading to messy, text-heavy job posts on LinkedIn and WhatsApp. By building a dedicated studio directly inside Zenoway, live job data (title, company, salary, work mode) instantly populates branded templates with scannable QR codes, enabling 1-click professional social sharing.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      <NextProject currentSlug="zenoway" />
    </main>
  );
}
