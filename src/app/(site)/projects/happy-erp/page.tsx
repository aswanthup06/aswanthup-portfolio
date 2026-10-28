"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LuPackage,
  LuTruck,
  LuUsers,
  LuChartColumn,
  LuLayoutDashboard,
  LuCode,
  LuWorkflow,
  LuCircleCheck,
  LuPlay,
  LuArrowUpRight,
  LuLayers,
  LuClock,
  LuUserCheck,
} from "react-icons/lu";
import { useContactModal } from "../../../context/ContactModalContext";

export default function HappyERPPage() {
  const { openModal } = useContactModal();
  const galleryRef = useRef<HTMLDivElement>(null);

  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const projectMeta = [
    { label: "Timeline", value: "3 Months", icon: LuClock },
    { label: "Role", value: "UI/UX & Frontend Lead", icon: LuUserCheck },
    { label: "Tech Stack", value: "React · Next.js · Tailwind", icon: LuCode },
    { label: "Deliverables", value: "40+ Screens · Design System", icon: LuLayers },
  ];

  const stats = [
    { value: "40+", label: "Custom Screens", detail: "End-to-end interface architecture" },
    { value: "5", label: "Core Modules", detail: "Inventory, sales, procurement & analytics" },
    { value: "60%", label: "Manual Effort Cut", detail: "Streamlined order entry & fulfillment" },
    { value: "100%", label: "Responsive", detail: "Optimized for warehouse & desktop displays" },
  ];

  const screens = [
    {
      id: 1,
      image: "/images/projects/happy-erp/happy1.webp",
      alt: "Happy ERP Dashboard Overview",
      title: "Executive Dashboard",
      description: "Real-time metrics tracking daily revenue, active warehouse orders, and critical stock alerts.",
      tag: "Live Analytics",
    },
    {
      id: 2,
      image: "/images/projects/happy-erp/happy2.webp",
      alt: "Happy ERP Inventory Management",
      title: "Inventory & Stock Control",
      description: "Granular SKU tracking, multi-warehouse stock levels, reorder threshold automations, and batch audits.",
      tag: "Warehouse Ops",
    },
    {
      id: 3,
      image: "/images/projects/happy-erp/happy3.webp",
      alt: "Happy ERP Product List & Catalog",
      title: "Product Catalog & Master Data",
      description: "Comprehensive product specifications, vendor associations, category trees, and pricing tiers.",
      tag: "Catalog Management",
    },
    {
      id: 4,
      image: "/images/projects/happy-erp/happy4.webp",
      alt: "Happy ERP Sales Orders & Invoicing",
      title: "Sales Orders & Fulfillment",
      description: "End-to-end order processing lifecycle from quotation and picking slip to shipping and invoicing.",
      tag: "Order Lifecycle",
    },
  ];

  const features = [
    {
      icon: LuPackage,
      title: "Smart Inventory Tracking",
      desc: "Live stock level tracking with automated reorder triggers and safety stock buffers preventing retail stockouts.",
    },
    {
      icon: LuTruck,
      title: "Supplier & Vendor Management",
      desc: "Centralized vendor scorecard, automated purchase requisition workflows, and shipping lead-time tracking.",
    },
    {
      icon: LuUsers,
      title: "Multi-Tier Customer Hub",
      desc: "Consolidated wholesale and retail accounts with customized credit terms, historical orders, and communication logs.",
    },
    {
      icon: LuChartColumn,
      title: "Business Intelligence",
      desc: "Actionable revenue forecasting, seasonal toy sales trends, margin analysis, and inventory turnover reports.",
    },
  ];

  const roles = [
    {
      icon: LuLayoutDashboard,
      title: "UI/UX Architecture",
      desc: "Created structured wireframes, component design tokens, and high-fidelity prototypes tailored for data-dense work.",
    },
    {
      icon: LuCode,
      title: "Frontend Engineering",
      desc: "Built scalable, reusable React components and responsive dashboard layouts with clean state management.",
    },
    {
      icon: LuWorkflow,
      title: "Workflow Integration",
      desc: "Integrated REST APIs for real-time inventory updates, modal dialogs, search indexing, and bulk record edits.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white text-text-primary pt-28 md:pt-36 pb-16">
      {/* Background Texture */}
      <div className="grid-bg absolute inset-0 -z-10 pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---------------- BREADCRUMB ---------------- */}
        <nav aria-label="Breadcrumb" className="mb-8 md:mb-12">
          <ol className="flex items-center gap-2 text-xs md:text-sm text-text-muted">
            <li>
              <Link href="/" className="hover:text-primary transition-colors font-medium">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-300">/</li>
            <li>
              <Link href="/projects" className="hover:text-primary transition-colors font-medium">
                Projects
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-300">/</li>
            <li className="font-semibold text-text-primary truncate">Happy ERP</li>
          </ol>
        </nav>

        {/* ---------------- SECTION 1: SPLIT HERO ---------------- */}
        <section className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center pb-16 border-b border-border-default">
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Live Indicator Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Enterprise Resource Planning · Case Study
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight leading-[1.12]">
              HAPPY ERP
              <span className="text-primary">.</span>
            </h1>

            <p className="text-lg sm:text-xl text-primary font-medium mt-2">
              Cloud ERP Platform for Toy Manufacturers &amp; Distributors
            </p>

            <p className="mt-5 text-sm sm:text-base text-text-body leading-relaxed max-w-xl">
              HAPPY is a unified enterprise resource planning platform engineered to replace error-prone spreadsheets with real-time inventory management, automated procurement workflows, and executive analytics tailored for multi-channel toy businesses.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={scrollToGallery}
                className="btn-primary inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                <LuPlay className="text-xs" />
                Explore Platform Screens
              </button>

              <button
                type="button"
                onClick={openModal}
                className="inline-flex items-center gap-2 rounded-lg border border-border-default bg-white px-5 py-3 text-sm font-semibold text-text-primary hover:bg-surface-muted transition-colors"
              >
                Discuss Similar Project
              </button>
            </div>

            {/* Quick Meta Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-6 border-t border-border-subtle">
              {projectMeta.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx}>
                    <div className="flex items-center gap-1.5 text-xs text-text-muted uppercase tracking-wider font-medium">
                      <Icon className="text-text-caption" />
                      <span>{item.label}</span>
                    </div>
                    <p className="font-semibold text-text-primary text-sm mt-1">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Hero Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full rounded-2xl border border-border-default bg-white shadow-2xl overflow-hidden group">
              {/* Browser Header Bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border-subtle bg-surface-subtle">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <div className="mx-auto text-[11px] font-medium text-text-muted bg-white/80 border border-border-default px-3 py-0.5 rounded-md">
                  happy-erp.internal/dashboard
                </div>
              </div>

              {/* Main Preview Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-muted">
                <Image
                  src="/images/projects/happy-erp/happy-erp-hero.webp"
                  alt="HAPPY ERP Platform Hero Preview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- SECTION 2: STATS & OVERVIEW ---------------- */}
        <section className="py-16 border-b border-border-default">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Executive Summary
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
                Built to solve the operational friction of high-velocity toy commerce.
              </h2>
              <p className="text-text-body leading-relaxed text-sm sm:text-base">
                Toy businesses face intense seasonal spikes, hundreds of rapid SKUs, and fragmented vendor networks. Prior to HAPPY ERP, inventory was scattered across disconnected spreadsheets, causing recurring stockouts and delayed fulfillment during peak sales quarters.
              </p>
              <p className="text-text-body leading-relaxed text-sm sm:text-base">
                The platform bridges inventory management, warehouse receipts, vendor purchase orders, and sales distribution into one coherent, low-latency interface.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-border-default bg-surface-subtle hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <p className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-sm font-semibold text-text-primary mt-1">
                    {stat.label}
                  </p>
                  <p className="text-xs text-text-muted mt-1 leading-snug">
                    {stat.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- SECTION 3: THE CHALLENGE & SOLUTION ---------------- */}
        <section className="py-16 border-b border-border-default">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-border-default bg-surface-subtle">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-3">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                The Core Challenge
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                Fragmented Data &amp; Blind Purchasing
              </h3>
              <p className="text-text-body text-sm leading-relaxed">
                The client operated across disjointed spreadsheets and paper picking lists. Warehouse teams had zero real-time visibility into supplier ship windows or cross-channel sales velocity. This caused frequent stockouts on best-selling toy categories while capital sat locked in slow-moving inventory.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-border-default bg-surface-subtle">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                The Solution
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">
                A Unified, High-Density ERP System
              </h3>
              <p className="text-text-body text-sm leading-relaxed">
                An engineered enterprise application delivering real-time stock sync across warehouses, automated purchase recommendations based on seasonal sales patterns, structured supplier scorecards, and a sub-second response dashboard for operators.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------- SECTION 4: MY ROLE ---------------- */}
        <section className="py-16 border-b border-border-default">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Core Responsibilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight mt-1">
              My Engineering &amp; Design Ownership
            </h2>
            <p className="text-text-muted text-sm mt-2">
              Leading the frontend implementation and design system creation from Figma concept to production.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {roles.map((role, idx) => {
              const Icon = role.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-border-default bg-white hover:border-primary/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-surface-muted flex items-center justify-center text-primary mb-5">
                    <Icon className="text-xl" />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary">
                    {role.title}
                  </h3>
                  <p className="text-sm text-text-body mt-2 leading-relaxed">
                    {role.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ---------------- SECTION 5: KEY FEATURES ---------------- */}
        <section className="py-16 border-b border-border-default">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Functional Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight mt-1">
              Key Platform Modules
            </h2>
            <p className="text-text-muted text-sm mt-2">
              Designed for speed, data accuracy, and minimal cognitive overhead.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-border-default bg-surface-subtle hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-white border border-border-default flex items-center justify-center text-primary mb-4 shadow-sm">
                      <Icon className="text-lg" />
                    </div>
                    <h3 className="text-base font-bold text-text-primary">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-body mt-2 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ---------------- SECTION 6: SCREEN GALLERY (WALKTHROUGH) ---------------- */}
        <section ref={galleryRef} className="py-16 border-b border-border-default scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Visual Walkthrough
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight mt-1">
              Screens &amp; Interface Design
            </h2>
            <p className="text-text-muted text-sm mt-2">
              High-density information displays engineered for rapid data entry, filtering, and auditability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {screens.map((screen) => (
              <div
                key={screen.id}
                className="group rounded-2xl border border-border-default bg-white p-4 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300"
              >
                {/* Browser-style frame */}
                <div className="rounded-xl overflow-hidden border border-border-subtle bg-surface-subtle">
                  <div className="flex items-center justify-between px-3 py-2 border-b border-border-subtle bg-surface-subtle text-[11px] text-text-muted">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-gray-300" />
                      <span className="w-2 h-2 rounded-full bg-gray-300" />
                      <span className="w-2 h-2 rounded-full bg-gray-300" />
                    </div>
                    <span className="font-mono text-[10px] text-text-caption">
                      module-0{screen.id}.screen
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-primary/10 text-primary">
                      {screen.tag}
                    </span>
                  </div>

                  <div className="relative aspect-[16/10] w-full bg-surface-muted overflow-hidden">
                    <Image
                      src={screen.image}
                      alt={screen.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="pt-4 px-1">
                  <h3 className="text-base font-bold text-text-primary group-hover:text-primary transition-colors">
                    {screen.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-body mt-1 leading-relaxed">
                    {screen.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- SECTION 7: RESULTS & IMPACT ---------------- */}
        <section className="py-16 border-b border-border-default">
          <div className="rounded-2xl bg-text-primary text-white p-8 sm:p-12 shadow-xl">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                Measurable Impact
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
                Tangible Business Outcomes
              </h2>
              <p className="text-gray-400 text-sm mt-2">
                Delivered significant time savings and stock transparency across wholesale and distribution channels.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <p className="text-4xl sm:text-5xl font-bold text-blue-400">60%</p>
                <p className="text-white font-semibold text-sm mt-2">Reduction in Manual Entry</p>
                <p className="text-xs text-gray-400 mt-1">Automated purchase workflows &amp; batch updates</p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <p className="text-4xl sm:text-5xl font-bold text-blue-400">2x</p>
                <p className="text-white font-semibold text-sm mt-2">Faster Order Dispatch</p>
                <p className="text-xs text-gray-400 mt-1">Instant picking slip generation &amp; validation</p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <p className="text-4xl sm:text-5xl font-bold text-blue-400">100%</p>
                <p className="text-white font-semibold text-sm mt-2">Inventory Accuracy</p>
                <p className="text-xs text-gray-400 mt-1">Zero unaccounted warehouse discrepancies</p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- SECTION 8: LEARNINGS & BOTTOM CTA ---------------- */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Retrospective
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight mt-1">
                Key Engineering Insights
              </h2>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl border border-border-default bg-surface-subtle">
                <h3 className="font-bold text-text-primary text-base flex items-center gap-2">
                  <LuCircleCheck className="text-primary text-lg" />
                  High-Density Information Architecture
                </h3>
                <p className="text-sm text-text-body mt-2 leading-relaxed">
                  Enterprise ERP software demands careful visual hierarchy: minimizing wasted padding while avoiding clutter, using monospace numeric tabular alignments, and providing immediate keyboard shortcuts for rapid warehouse data entry.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-border-default bg-surface-subtle">
                <h3 className="font-bold text-text-primary text-base flex items-center gap-2">
                  <LuCircleCheck className="text-primary text-lg" />
                  Optimistic State &amp; Resilient State Management
                </h3>
                <p className="text-sm text-text-body mt-2 leading-relaxed">
                  Handling concurrent inventory updates across warehouse and sales departments required modular component state machines and instant feedback patterns to prevent race conditions during order bookings.
                </p>
              </div>
            </div>

            {/* Bottom Contact Banner */}
            <div className="mt-12 p-8 rounded-2xl border border-border-default bg-white text-center shadow-sm">
              <h3 className="text-xl font-bold text-text-primary">
                Interested in building or modernizing an enterprise tool?
              </h3>
              <p className="text-sm text-text-muted mt-2 max-w-md mx-auto">
                Let&apos;s collaborate to design and engineer intuitive, high-performance dashboards and business applications.
              </p>
              <div className="mt-6 flex justify-center gap-4">
                <button
                  type="button"
                  onClick={openModal}
                  className="btn-primary inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold shadow-md shadow-blue-500/20"
                >
                  Get in Touch
                  <LuArrowUpRight />
                </button>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-lg border border-border-default bg-white px-5 py-3 text-sm font-semibold text-text-primary hover:bg-surface-muted transition-colors"
                >
                  View All Projects
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
