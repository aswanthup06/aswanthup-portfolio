"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import {
  LuCalendar,
  LuLayoutGrid,
  LuLayers,
  LuSparkles,
  LuCircleCheck,
  LuHeartPulse,
} from "react-icons/lu";
import { useContactModal } from "../../../context/ContactModalContext";

export default function DoctorIconShowcase() {
  const { openModal } = useContactModal();

  const specs = [
    { label: "Year", value: "2024", icon: LuCalendar },
    { label: "Category", value: "Icon System", icon: LuLayoutGrid },
    { label: "Grid Standard", value: "24px Optical Grid", icon: LuLayers },
    { label: "Domain", value: "Telehealth / MedTech", icon: LuHeartPulse },
  ];

  const highlights = [
    {
      title: "Strict 24×24 Optical Grid Geometry",
      desc: "Uniform 2px stroke weights with carefully balanced negative space and standardized corner radii.",
    },
    {
      title: "Instant Clinical Recognition",
      desc: "Designed to minimize cognitive load during high-urgency clinical appointments and pharmacy lookups.",
    },
    {
      title: "Scalable Multi-Platform SVG Tokens",
      desc: "Exported as optimized, tree-shakeable SVG components compatible with React, Next.js, and mobile Flutter apps.",
    },
  ];

  const categories = [
    "Telehealth & Video Care",
    "Digital Pharmacy & Prescriptions",
    "Diagnostic Lab Testing",
    "Hospital & Emergency Locator",
    "Clinical Vitals Monitoring",
    "Patient Medical Records",
  ];

  const tags = [
    "Icon Design",
    "Figma Tokens",
    "SVG Architecture",
    "Healthcare UI",
    "Telemedicine",
    "Design System",
    "Vector Curves",
  ];

  return (
    <div className="relative min-h-screen bg-white text-text-primary pt-28 md:pt-36 pb-8 md:pb-12">
      {/* Background Texture */}
      <div className="grid-bg absolute inset-0 -z-10 pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 md:mb-12">
          <ol className="flex items-center gap-2 text-xs md:text-sm text-text-muted">
            <li>
              <Link
                href="/"
                className="hover:text-primary transition-colors font-medium"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-300">
              /
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-primary transition-colors font-medium"
              >
                Projects
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-300">
              /
            </li>
            <li className="font-semibold text-text-primary truncate">
              Doctor Platform Icons
            </li>
          </ol>
        </nav>

        {/* 2-Column Showcase */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Sticky Square Showcase Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div
              data-cursor="view"
              data-cursor-label="Preview"
              className="group relative aspect-square w-full rounded-2xl overflow-hidden border border-border-default bg-surface-muted shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
            >
              <Image
                src="/images/projects/icon/Pharmacy.webp"
                alt="Doctor Platform Healthcare Icon Design System"
                fill
                priority
                unoptimized
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 font-medium">
                  Icon Design System
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-medium">
                  24px Grid
                </span>
              </div>
            </div>

            <p className="mt-3 text-xs text-text-muted text-center lg:text-left">
              Custom vector iconography created for clinical telehealth and pharmacy workflows.
            </p>
          </div>

          {/* Right Column: Editorial Details */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Design System · Iconography
            </div>

            {/* Title & Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight leading-[1.15]">
              Doctor Platform
            </h1>
            <p className="text-lg sm:text-xl text-primary font-medium mt-2">
              Healthcare &amp; Telemedicine Visual Icon Language
            </p>

            {/* Narrative Overview */}
            <div className="mt-6 space-y-4 text-text-body text-sm sm:text-base leading-relaxed">
              <p>
                A bespoke, medical-grade iconography system developed for modern healthcare platforms and doctor consultation portals. Constructed on a disciplined 24×24 pixel optical bounding box, the icon family guarantees immediate legibility in fast-paced clinical environments and consumer health apps.
              </p>
              <p>
                Every glyph adheres to precise stroke terminal curvatures and proportional visual weights, preventing visual fatigue across both high-density mobile interfaces and expansive hospital administrative dashboards.
              </p>
            </div>

            {/* Specification Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
              {specs.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="rounded-xl border border-border-default bg-surface-card p-3.5 shadow-2xs"
                >
                  <Icon className="text-primary text-base mb-1.5" />
                  <p className="text-[11px] text-text-muted uppercase tracking-wider font-medium">
                    {label}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-text-primary mt-0.5 truncate">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* Icon Categories Covered */}
            <div className="mt-8 rounded-2xl border border-border-default bg-surface-subtle p-5 sm:p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-text-primary flex items-center gap-2 mb-4">
                <LuLayoutGrid className="text-primary" />
                Domain Modules Covered
              </h2>

              <div className="grid sm:grid-cols-2 gap-2.5">
                {categories.map((cat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs sm:text-sm text-text-secondary bg-surface-card px-3.5 py-2.5 rounded-lg border border-border-subtle"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>{cat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Craft Highlights */}
            <div className="mt-6 rounded-2xl border border-border-default bg-surface-card p-5 sm:p-6 shadow-2xs">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-text-primary flex items-center gap-2 mb-4">
                <LuSparkles className="text-primary" />
                Engineering &amp; System Highlights
              </h2>

              <div className="space-y-3.5">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <LuCircleCheck className="text-primary shrink-0 mt-0.5 text-base" />
                    <div>
                      <p className="text-sm font-semibold text-text-primary">
                        {item.title}
                      </p>
                      <p className="text-xs sm:text-sm text-text-muted mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags / Tools */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-wider font-semibold text-text-muted mb-3">
                Technologies &amp; Architecture
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md bg-surface-muted border border-border-default text-xs font-medium text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 pt-6 border-t border-border-default flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={openModal}
                className="btn-primary inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                Inquire for Work
                <MdOutlineArrowOutward className="text-base" />
              </button>

              <Link
                href="/projects/doctor-one"
                className="inline-flex items-center gap-2 rounded-lg border border-border-default bg-white px-5 py-3 text-sm font-semibold text-text-primary hover:bg-surface-muted transition-colors"
              >
                View Doctor One Platform
                <MdOutlineArrowOutward className="text-sm text-text-muted" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
