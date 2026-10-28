"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import {
  LuStethoscope,
  LuFlaskConical,
  LuBuilding2,
  LuPill,
  LuShieldCheck,
  LuActivity,
  LuCircleCheck,
  LuCode,
  LuPlay,
} from "react-icons/lu";
import { useContactModal } from "../../../context/ContactModalContext";

export default function DoctorOneCaseStudy() {
  const { openModal } = useContactModal();
  const walkthroughRef = useRef<HTMLDivElement>(null);

  const scrollToWalkthrough = () => {
    walkthroughRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const projectMeta = [
    { label: "Role", value: "Lead UI Developer & Designer" },
    { label: "Timeline", value: "3 Months (End-to-End)" },
    { label: "Core Stack", value: "Next.js · React · Tailwind · Figma" },
    { label: "Deliverables", value: "Web Platform · Design System · Video Showcase" },
  ];

  const stats = [
    { value: "500+", label: "Verified Physicians", detail: "Across 25+ medical specializations" },
    { value: "50k+", label: "Monthly Consultations", detail: "Active patient telehealth interactions" },
    { value: "4-in-1", label: "Unified Health Hub", detail: "Clinic, lab, pharmacy & emergency locator" },
    { value: "99%", label: "Design Accuracy", detail: "Pixel-perfect Figma to Next.js components" },
  ];

  const pillars = [
    {
      icon: LuStethoscope,
      title: "Telehealth Consultations",
      badge: "Virtual Care",
      desc: "Instant discovery, appointment scheduling, and encrypted video consultations with accredited specialists.",
    },
    {
      icon: LuFlaskConical,
      title: "Diagnostic Labs",
      badge: "Home Testing",
      desc: "Certified pathology lab directory with home sample collection tracking and digital health report vault.",
    },
    {
      icon: LuBuilding2,
      title: "Hospital Network",
      badge: "Emergency Care",
      desc: "Geospatial location-aware discovery of multi-speciality medical centers, trauma units, and ICU facilities.",
    },
    {
      icon: LuPill,
      title: "Digital Pharmacy",
      badge: "E-Prescriptions",
      desc: "Instant prescription uploads, smart drug interaction checks, automated refills, and door-to-door tracking.",
    },
  ];

  const problems = [
    {
      number: "01",
      title: "Fragmented Patient Journey",
      desc: "Patients routinely juggle 3 to 4 disconnected portals for doctor appointments, blood reports, and medicine orders, causing severe cognitive friction during urgent healthcare needs.",
    },
    {
      number: "02",
      title: "Cluttered Clinical Dashboards",
      desc: "Traditional healthcare software burdens medical professionals with outdated, dense table layouts that delay record lookups and slow down patient consultations.",
    },
    {
      number: "03",
      title: "Poor Cross-Device Accessibility",
      desc: "Most regional healthcare systems fail on mobile viewports, leaving elderly patients and caregivers unable to book consultations or review emergency care details on the move.",
    },
  ];

  const principles = [
    {
      title: "Low-Cognitive Load Interfaces",
      desc: "Calm visual hierarchy with large typography, generous touch targets (min 48px), and high-contrast color coding for critical vital metrics.",
    },
    {
      title: "Strict 8pt & 24px Optical Grid",
      desc: "Every component, slot picker, and modal dialog is built upon an 8pt mathematical rhythm ensuring balanced spacing and zero visual discord.",
    },
    {
      title: "Sub-Second Data Transitions",
      desc: "Instant frontend state updates for time-slot booking, lab test filtering, and cart checkout utilizing optimistic UI patterns.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white text-text-primary pt-28 md:pt-36 pb-8 md:pb-12">
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
            <li className="font-semibold text-text-primary truncate">Doctor ONE</li>
          </ol>
        </nav>

        {/* ---------------- SECTION 1: SPLIT HERO ---------------- */}
        <section className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Case Study Editorial Summary */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Live Indicator Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary mb-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Clinical Ecosystem · UI/UX Case Study
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight leading-[1.12]">
              Doctor ONE
              <span className="text-primary">.</span>
            </h1>

            <p className="text-lg sm:text-xl text-primary font-medium mt-2">
              Unifying Telehealth, Diagnostics, Hospitals &amp; Pharmacy
            </p>

            <p className="mt-5 text-sm sm:text-base text-text-body leading-relaxed max-w-xl">
              An end-to-end digital health platform designed and engineered to replace disjointed medical workflows with one fluid experience—from symptom search and video appointments to encrypted pathology reports and prescription fulfillment.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={scrollToWalkthrough}
                className="btn-primary inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                <LuPlay className="text-xs" />
                Explore Platform Flow
              </button>

              <button
                type="button"
                onClick={openModal}
                className="inline-flex items-center gap-2 rounded-lg border border-border-default bg-white px-5 py-3 text-sm font-semibold text-text-primary hover:bg-surface-muted transition-colors"
              >
                Discuss Similar Project
                <MdOutlineArrowOutward className="text-base text-text-muted" />
              </button>
            </div>

            {/* Metadata Spec Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10 pt-8 border-t border-border-default">
              {projectMeta.map(({ label, value }) => (
                <div key={label}>
                  <p className="text-[11px] font-semibold text-text-muted uppercase tracking-wider">
                    {label}
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-text-primary mt-1 leading-snug">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Floating Device Mockup with Video */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Subtle ambient lighting */}
              <div className="absolute -inset-3 bg-blue-500/10 rounded-2xl blur-xl -z-10 pointer-events-none" />

              <div className="rounded-2xl border border-border-default bg-surface-card shadow-[0_20px_50px_rgba(37,99,235,0.08)] overflow-hidden">
                {/* Modern Browser Chrome Header */}
                <div className="px-4 py-3 border-b border-border-subtle bg-surface-subtle flex items-center justify-between text-xs text-text-muted">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                    <span className="font-medium text-text-primary">doctor-one.health</span>
                  </div>
                  <span className="text-[11px] text-primary font-medium">Verified Live UI</span>
                </div>

                {/* Autoplaying Live Platform Video */}
                <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden">
                  <video
                    className="w-full h-full object-cover block motion-reduce:hidden"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-label="Doctor ONE interactive clinical platform demonstration"
                  >
                    <source src="/videos/doctor-one/dr1.mp4" type="video/mp4" />
                  </video>

                  {/* Fallback Image for Reduced Motion */}
                  <div className="hidden motion-reduce:block relative w-full h-full">
                    <Image
                      src="/images/projects/doctor-one/dr1banner.webp"
                      alt="Doctor ONE Clinical Platform Interface"
                      fill
                      unoptimized
                      priority
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-3 px-1 flex items-center justify-between text-xs text-text-muted">
                <span>Phase 1 live interactive clinical suite</span>
                <span className="text-primary font-medium">React · Next.js · Tailwind</span>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- SECTION 2: IMPACT STATS ---------------- */}
        <section className="mt-20 md:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-border-default bg-surface-card p-5 sm:p-6 shadow-2xs text-center hover:border-primary/40 transition-colors"
            >
              <p className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
                {stat.value}
              </p>
              <p className="font-semibold text-text-primary text-sm mt-1.5">
                {stat.label}
              </p>
              <p className="text-xs text-text-muted mt-1">
                {stat.detail}
              </p>
            </div>
          ))}
        </section>

        {/* ---------------- SECTION 3: THE CHALLENGE ---------------- */}
        <section className="mt-20 md:mt-28 py-12 border-t border-b border-border-default">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
              THE CHALLENGE
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
              Healthcare navigation shouldn&apos;t feel fragmented.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-text-body leading-relaxed">
              When patients or caregivers require clinical assistance, navigation delays and disjointed portals compound stress. Doctor ONE was engineered to streamline these friction points into a single seamless journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-6">
            {problems.map((p) => (
              <div
                key={p.number}
                className="rounded-2xl border border-border-default bg-surface-subtle p-6"
              >
                <span className="font-mono text-xs font-bold text-primary">
                  {p.number}
                </span>
                <h3 className="text-base font-semibold text-text-primary mt-2">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-muted mt-2 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- SECTION 4: 4-PILLAR ARCHITECTURE ---------------- */}
        <section className="mt-20 md:mt-28">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
              PLATFORM ARCHITECTURE
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
              Four Core Pillars, One Cohesive Hub.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-text-body leading-relaxed">
              Every medical touchpoint was broken down into specialized modules sharing a unified design token system.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-border-default bg-surface-card p-6 shadow-2xs hover:shadow-md hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary-subtle text-primary flex items-center justify-center text-xl mb-4 border border-blue-100">
                      <Icon />
                    </div>
                    <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">
                      {pillar.badge}
                    </span>
                    <h3 className="text-base font-bold text-text-primary mt-1 mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ---------------- SECTION 5: PRODUCT WALKTHROUGHS ---------------- */}
        <section ref={walkthroughRef} className="mt-20 md:mt-28 scroll-mt-28">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
              PRODUCT WALKTHROUGH
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
              High-Fidelity Interface Engineering.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-text-body leading-relaxed">
              Explore the core interfaces engineered to handle appointment booking, clinical telemetry, and pharmacy logistics.
            </p>
          </div>

          {/* Walkthrough 1: Unified Clinical Platform Overview */}
          <div className="rounded-2xl border border-border-default bg-surface-card overflow-hidden shadow-2xs mb-10">
            <div className="p-6 md:p-8 border-b border-border-subtle bg-surface-subtle">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Module 01 · Patient Discovery &amp; Overview
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary mt-1">
                Unified Telemedicine &amp; Specialty Care Portal
              </h3>
              <p className="text-xs sm:text-sm text-text-body mt-2 max-w-2xl leading-relaxed">
                The primary landing interface introduces instant physician discovery by specialization, immediate emergency contact hotlines, and quick-action access to prescription refills.
              </p>
            </div>

            <div className="relative aspect-[16/9] w-full bg-slate-100">
              <Image
                src="/images/projects/doctor-one/dr1banner.webp"
                alt="Doctor ONE Telehealth Discovery Platform"
                fill
                unoptimized
                sizes="(max-width: 1200px) 100vw, 1152px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Walkthrough 2: Clinical Dashboard & Doctor Consultations */}
          <div className="grid lg:grid-cols-12 gap-8 items-center rounded-2xl border border-border-default bg-surface-card p-6 md:p-8 shadow-2xs mb-10">
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-xl overflow-hidden border border-border-default bg-slate-100">
              <Image
                src="/images/projects/doctor-one/dr1.webp"
                alt="Doctor ONE Consultation Scheduling & Dashboard"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Module 02 · Clinical Consultation Suite
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary mt-1">
                Frictionless Slot Reservation &amp; Doctor Vetting
              </h3>
              <p className="text-xs sm:text-sm text-text-body mt-3 leading-relaxed">
                Rather than multi-page redirects, patients select real-time availability slots directly on the physician card. Includes instant verified badge checks, patient reviews, and encrypted video link generation.
              </p>

              <div className="space-y-2.5 mt-6">
                {[
                  "Real-time timetable slot availability with zero page refresh",
                  "Verified medical council accreditation credentials display",
                  "Automated calendar invitations & SMS reminder dispatch",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-text-secondary">
                    <LuCircleCheck className="text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Walkthrough 3: Digital Pharmacy & Laboratory Testing */}
          <div className="grid lg:grid-cols-12 gap-8 items-center rounded-2xl border border-border-default bg-surface-card p-6 md:p-8 shadow-2xs">
            <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Module 03 · Pharmacy &amp; Diagnostic Labs
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary mt-1">
                E-Prescription Uploads &amp; Lab Sample Logistics
              </h3>
              <p className="text-xs sm:text-sm text-text-body mt-3 leading-relaxed">
                Streamlined diagnostic lab booking with home sample collection tracking, paired with digital prescription fulfillment. Built with custom iconography and high-clarity medication carts.
              </p>

              <div className="space-y-2.5 mt-6">
                {[
                  "OCR-assisted prescription image verification system",
                  "Automated recurring medication refill schedules",
                  "Encrypted digital report download vault with biometric access",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-text-secondary">
                    <LuCircleCheck className="text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 relative aspect-[4/3] rounded-xl overflow-hidden border border-border-default bg-slate-100">
              <Image
                src="/images/projects/icon/Pharmacy.webp"
                alt="Doctor ONE Digital Pharmacy Module"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ---------------- SECTION 6: UI/UX PRINCIPLES ---------------- */}
        <section className="mt-20 md:mt-28 py-12 border-t border-border-default">
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
              DESIGN PHILOSOPHY
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
              Clinical Empathy Through Clean Code.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-text-body leading-relaxed">
              Healthcare interfaces demand heightened precision. How design systems and frontend engineering aligned to serve both physicians and patients:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((pr, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border-default bg-surface-card p-6 shadow-2xs"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-subtle text-primary flex items-center justify-center mb-4">
                  {idx === 0 && <LuShieldCheck className="text-lg" />}
                  {idx === 1 && <LuActivity className="text-lg" />}
                  {idx === 2 && <LuCode className="text-lg" />}
                </div>
                <h3 className="text-base font-bold text-text-primary">
                  {pr.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-muted mt-2 leading-relaxed">
                  {pr.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- SECTION 7: TECH STACK BADGES ---------------- */}
        <section className="mt-16 md:mt-20 rounded-2xl border border-border-default bg-surface-subtle p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-border-default">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                ENGINEERING SPECIFICATION
              </p>
              <h3 className="text-lg sm:text-xl font-bold text-text-primary mt-1">
                Technologies &amp; Frontend Stack
              </h3>
            </div>
            <span className="text-xs text-text-muted">
              Built with Next.js, React, Tailwind CSS &amp; Figma
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5 mt-6">
            {[
              "React 18",
              "Next.js App Router",
              "TypeScript",
              "Tailwind CSS",
              "Figma Tokens",
              "Custom Icon System",
              "Optimistic UI State",
              "Video Telemetry",
              "Responsive Layouts",
              "WCAG AA Accessible",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-lg bg-surface-card border border-border-default text-xs font-medium text-text-secondary shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* ---------------- SECTION 8: CLOSING CTA ---------------- */}
        <section className="mt-16 md:mt-24 pt-10 border-t border-border-default flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
              Interested in building a healthcare or enterprise platform?
            </h3>
            <p className="text-xs sm:text-sm text-text-muted mt-1.5">
              Let&apos;s collaborate on your next telemedicine portal, web application, or design system.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={openModal}
              className="btn-primary inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              Get in Touch
              <MdOutlineArrowOutward className="text-base" />
            </button>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg border border-border-default bg-white px-5 py-3 text-sm font-semibold text-text-primary hover:bg-surface-muted transition-colors"
            >
              All Projects
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
