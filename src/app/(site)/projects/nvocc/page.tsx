"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LuShip,
  LuCompass,
  LuContainer,
  LuWrench,
  LuArrowUpRight,
  LuCode,
  LuCircleCheck,
  LuLayers,
  LuClock,
  LuUserCheck,
  LuPlay,
  LuFileSpreadsheet,
} from "react-icons/lu";
import { useContactModal } from "../../../context/ContactModalContext";

export default function NvoccPage() {
  const { openModal } = useContactModal();
  const modulesRef = useRef<HTMLDivElement>(null);

  const scrollToModules = () => {
    modulesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const projectMeta = [
    { label: "Duration", value: "4 Months", icon: LuClock },
    { label: "Role", value: "Lead UI Developer", icon: LuUserCheck },
    { label: "Tech Stack", value: "Next.js · Tailwind · React", icon: LuCode },
    { label: "Deliverables", value: "50+ Pages · 3 Core Modules", icon: LuLayers },
  ];

  const stats = [
    { value: "50+", label: "Pages Developed", detail: "Comprehensive maritime logistics workflows" },
    { value: "3", label: "Core Modules", detail: "Export, Import, and Maintenance & Repair (M&R)" },
    { value: "90%", label: "Figma Fidelity", detail: "High-precision component implementation" },
    { value: "100%", label: "Responsive", detail: "Full coverage across desktop, tablet, and mobile" },
  ];

  const modules = [
    {
      id: "01",
      badge: "Module 01",
      icon: LuContainer,
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      accentColor: "bg-blue-500",
      title: "Export Module",
      subtitle: "Outbound Container Logistics & Stuffing",
      description:
        "Manages export-bound containers from booking allocation through optimal container sizing, type selection, and terminal stuffing verification.",
      bulletPoints: [
        "Real-time container allocation and tracking across depot stations",
        "Automated container size and payload optimization algorithms",
        "Complete export bill of lading and customs documentation management",
      ],
      screens: [
        {
          src: "/images/projects/nvocc/exp1.webp",
          alt: "NVOCC Export module container booking interface",
          caption: "Export Booking & Allocation",
        },
        {
          src: "/images/projects/nvocc/exp2.webp",
          alt: "NVOCC Export container tracking details",
          caption: "Container Manifest & Stuffing Verification",
        },
      ],
    },
    {
      id: "02",
      badge: "Module 02",
      icon: LuShip,
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      accentColor: "bg-emerald-500",
      title: "Import Module",
      subtitle: "Inbound Port Ingestion & Destuffing",
      description:
        "Controls imported shipments arriving at sea terminals, coordinating container receipt, destuffing staging, cargo clearance, and routing empties.",
      bulletPoints: [
        "Vessel arrival manifest ingestion and terminal discharge logging",
        "Guided destuffing workflows with discrepancy and damage logging",
        "Automated empty container turn-in and dispatch routing",
      ],
      screens: [
        {
          src: "/images/projects/nvocc/imp1.webp",
          alt: "NVOCC Import vessel schedule and container status",
          caption: "Terminal Discharge & Ingestion",
        },
        {
          src: "/images/projects/nvocc/imp2.webp",
          alt: "NVOCC Import destuffing and cargo delivery order",
          caption: "Destuffing & Empty Routing",
        },
      ],
    },
    {
      id: "03",
      badge: "Module 03",
      icon: LuWrench,
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      accentColor: "bg-amber-500",
      title: "Maintenance & Repair (M&R)",
      subtitle: "Container Fleet Health & Depot Inspections",
      description:
        "Comprehensive life-cycle tracking of shipping containers. Records physical inspections, surveyor damage assessments, repair cost authorizations, and seaworthy certifications.",
      bulletPoints: [
        "Visual damage code mapping and severity grading",
        "Depot work order estimates and tariff-based invoicing",
        "Historical maintenance audits and sound condition certification",
      ],
      screens: [
        {
          src: "/images/projects/nvocc/mr1.webp",
          alt: "NVOCC Maintenance and repair damage assessment",
          caption: "Depot Damage Assessment & Tariff Codes",
        },
        {
          src: "/images/projects/nvocc/mr2.webp",
          alt: "NVOCC Repair approval and certified condition tracking",
          caption: "Repair Work Orders & Sound Condition Registry",
        },
      ],
    },
  ];

  const roles = [
    {
      icon: LuFileSpreadsheet,
      title: "Figma to Next.js Architecture",
      desc: "Translated 50+ complex maritime workflow screens into clean, modular Next.js components with strict design fidelity.",
    },
    {
      icon: LuCode,
      title: "SVG & Asset Optimization",
      desc: "Converted complex shipping and status vector icons into lightweight React components, dramatically decreasing bundle size.",
    },
    {
      icon: LuCompass,
      title: "Cross-Device Responsiveness",
      desc: "Engineered responsive layouts adapting heavy data tables and filter bars seamlessly from wide monitors down to mobile viewports.",
    },
  ];

  const techStack = [
    "Next.js",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Sequelize ORM",
    "RESTful APIs",
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
            <li className="font-semibold text-text-primary truncate">NVOCC Platform</li>
          </ol>
        </nav>

        {/* ---------------- SECTION 1: SPLIT HERO ---------------- */}
        <section className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center pb-16 border-b border-border-default">
          {/* Left Column: Editorial Summary */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Live Indicator Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Logistics &amp; Maritime · UI Development
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight leading-[1.12]">
              NVOCC Platform
              <span className="text-primary">.</span>
            </h1>

            <p className="text-lg sm:text-xl text-primary font-medium mt-2">
              Non-Vessel Operating Common Carrier Web Application
            </p>

            <p className="mt-5 text-sm sm:text-base text-text-body leading-relaxed max-w-xl">
              Contracted by 6solve IT Services to engineer the end-to-end user interface for global shipping logistics. Developed three mission-critical modules—Export, Import, and Maintenance &amp; Repair—transforming 50+ Figma designs into responsive Next.js components.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={scrollToModules}
                className="btn-primary inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                <LuPlay className="text-xs" />
                Explore Core Modules
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

          {/* Right Column: Hero Preview Mockup */}
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
                  nvocc.6solve.app/dashboard
                </div>
              </div>

              {/* Main Preview Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-muted">
                <Image
                  src="/images/projects/nvocc/nvocc-hero.webp"
                  alt="NVOCC Logistics Platform Hero Preview"
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
                Project Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
                Modernizing global ocean freight operations with unified digital workflows.
              </h2>
              <p className="text-text-body leading-relaxed text-sm sm:text-base">
                International logistics demands real-time synchronization between freight forwarders, container depots, port terminals, and customs authorities. The NVOCC platform was designed to bridge disparate shipping workflows into one coherent, cloud-enabled web platform.
              </p>
              <p className="text-text-body leading-relaxed text-sm sm:text-base">
                With centralized data access, historical audits, and container health records, the system increases operational turnaround, curtails detention charges, and ensures compliance with international maritime standards.
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

        {/* ---------------- SECTION 3: MY ROLE ---------------- */}
        <section className="py-16 border-b border-border-default">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Frontend Engineering Ownership
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight mt-1">
              My Role &amp; Technical Scope
            </h2>
            <p className="text-text-muted text-sm mt-2">
              End-to-end user interface development for enterprise maritime software.
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

        {/* ---------------- SECTION 4: CORE MODULES WALKTHROUGH ---------------- */}
        <section ref={modulesRef} className="py-16 border-b border-border-default scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              System Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight mt-1">
              Three Core Shipping Modules
            </h2>
            <p className="text-text-muted text-sm mt-2">
              A comprehensive breakdown of the platform workflows engineered for ocean carriers.
            </p>
          </div>

          <div className="space-y-20">
            {modules.map((mod, index) => {
              const isEven = index % 2 === 1;
              const ModIcon = mod.icon;
              return (
                <div
                  key={mod.id}
                  className="grid lg:grid-cols-12 gap-10 items-center"
                >
                  {/* Text Column */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border mb-4 ${mod.badgeColor}`}
                    >
                      <ModIcon className="text-xs" />
                      {mod.badge}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-text-primary">
                      {mod.title}
                    </h3>
                    <p className="text-sm font-medium text-text-muted mt-1">
                      {mod.subtitle}
                    </p>
                    <p className="text-text-body text-sm leading-relaxed mt-4">
                      {mod.description}
                    </p>

                    <ul className="mt-6 space-y-2.5">
                      {mod.bulletPoints.map((point, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary"
                        >
                          <LuCircleCheck className="text-primary text-base mt-0.5 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Screenshots Column */}
                  <div
                    className={`lg:col-span-7 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      {mod.screens.map((scr, sIdx) => (
                        <div
                          key={sIdx}
                          className="group rounded-xl border border-border-default bg-white p-2.5 shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                          <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-surface-muted">
                            <Image
                              src={scr.src}
                              alt={scr.alt}
                              fill
                              sizes="(max-width: 640px) 100vw, 350px"
                              className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                            />
                          </div>
                          <p className="text-xs font-semibold text-text-primary mt-2.5 px-1 truncate">
                            {scr.caption}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ---------------- SECTION 5: TECHNICAL IMPLEMENTATION ---------------- */}
        <section className="py-16 border-b border-border-default">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 p-8 rounded-2xl border border-border-default bg-surface-subtle">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Technical Highlights
              </span>
              <h2 className="text-2xl font-bold text-text-primary mt-1">
                Precision Implementation &amp; Reusable Systems
              </h2>
              <div className="w-12 h-1 bg-primary mt-3 mb-5" />

              <div className="space-y-4 text-sm text-text-body leading-relaxed">
                <p>
                  As part of my lead UI role, I translated over 50 dense Figma wireframes and design systems into clean Next.js code using Tailwind CSS, achieving <strong className="text-text-primary">90% design accuracy</strong> without compromising page performance.
                </p>
                <p>
                  To optimize application load times, all maritime SVG iconography and custom status tags were refactored into modular React components, minimizing render delays and ensuring consistency across shipping views.
                </p>
                <p>
                  Complex tabular interfaces containing container identifiers, detention dates, and multi-tier fee structures were built with strict accessibility standards and tested on viewports ranging from rugged depot tablets to ultra-wide operations room screens.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative w-full rounded-2xl overflow-hidden border border-border-default shadow-xl group">
                <div className="relative aspect-[4/3] w-full bg-surface-muted">
                  <Image
                    src="/images/projects/nvocc/ship.webp"
                    alt="Ocean freight logistics carrier"
                    fill
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-semibold text-blue-300 uppercase tracking-wider">
                      Global Freight Operations
                    </p>
                    <p className="text-sm font-medium mt-0.5">
                      Streamlined maritime workflows from ocean booking to empty depot turn-in.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- SECTION 6: RESULTS & METRICS ---------------- */}
        <section className="py-16 border-b border-border-default">
          <div className="rounded-2xl bg-text-primary text-white p-8 sm:p-12 shadow-xl">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                Performance Outcomes
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">
                Delivered on Time with High Fidelity
              </h2>
              <p className="text-gray-400 text-sm mt-2">
                Proven delivery for mission-critical logistics software contracted by 6solve IT Services.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <p className="text-4xl sm:text-5xl font-bold text-blue-400">50+</p>
                <p className="text-white font-semibold text-sm mt-2">Pages Developed</p>
                <p className="text-xs text-gray-400 mt-1">Full shipping life-cycle coverage</p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <p className="text-4xl sm:text-5xl font-bold text-blue-400">90%</p>
                <p className="text-white font-semibold text-sm mt-2">Figma Accuracy</p>
                <p className="text-xs text-gray-400 mt-1">Pixel-perfect component fidelity</p>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <p className="text-4xl sm:text-5xl font-bold text-blue-400">100%</p>
                <p className="text-white font-semibold text-sm mt-2">Responsive Coverage</p>
                <p className="text-xs text-gray-400 mt-1">Desktop, tablet, and mobile tested</p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- SECTION 7: TECH STACK & CTA ---------------- */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Core Technologies
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight mt-1">
              Technology Stack
            </h2>
            <p className="text-text-muted text-sm mt-2">
              Modern frontend and backend stack powering high-scale maritime data operations.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-surface-subtle border border-border-default text-text-secondary hover:border-primary/40 hover:text-primary transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Bottom Contact Banner */}
            <div className="mt-14 p-8 rounded-2xl border border-border-default bg-white text-center shadow-sm">
              <h3 className="text-xl font-bold text-text-primary">
                Need enterprise-grade web development for your team?
              </h3>
              <p className="text-sm text-text-muted mt-2 max-w-md mx-auto">
                Let&apos;s build fast, accessible, and scalable platforms with modern Next.js and Tailwind CSS.
              </p>
              <div className="mt-6 flex justify-center gap-4">
                <button
                  type="button"
                  onClick={openModal}
                  className="btn-primary inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold shadow-md shadow-blue-500/20"
                >
                  Discuss a Project
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
