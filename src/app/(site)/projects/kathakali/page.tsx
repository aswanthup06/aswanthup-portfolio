"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import {
  LuCalendar,
  LuShirt,
  LuLayers,
  LuPalette,
  LuSparkles,
  LuCircleCheck,
} from "react-icons/lu";
import { useContactModal } from "../../../context/ContactModalContext";

export default function KathakaliPage() {
  const { openModal } = useContactModal();

  const specs = [
    { label: "Year", value: "2024", icon: LuCalendar },
    { label: "Category", value: "Apparel & Print", icon: LuShirt },
    { label: "Format", value: "Vector / DTG Print", icon: LuLayers },
    { label: "Medium", value: "Digital Illustration", icon: LuPalette },
  ];

  const highlights = [
    {
      title: "Anatomical Expression Geometry",
      desc: "High-contrast vector lines tracing traditional Navarasa expressions with theatrical precision.",
    },
    {
      title: "Screen & DTG Print Optimization",
      desc: "Clean vector paths and separated color layers engineered specifically for textile printing.",
    },
    {
      title: "Kerala Performing Arts Heritage",
      desc: "Authentic ornamentation capturing the intricate Paccha makeup and ornate Theyyam headgear.",
    },
  ];

  const tags = [
    "Kathakali Art",
    "Theyyam Headgear",
    "Vector Linework",
    "Apparel Graphics",
    "Screen Printing",
    "Adobe Illustrator",
    "Photoshop",
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
              Kathakali &amp; Theyyam
            </li>
          </ol>
        </nav>

        {/* 2-Column Showcase */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Sticky Square Artwork Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div
              data-cursor="view"
              data-cursor-label="Preview"
              className="group relative aspect-square w-full rounded-2xl overflow-hidden border border-border-default bg-surface-muted shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
            >
              <Image
                src="/images/projects/kathakali/kadha.webp"
                alt="Kathakali & Theyyam Digital Artwork for Apparel"
                fill
                priority
                unoptimized
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 font-medium">
                  Apparel Graphic Art
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-medium">
                  2024
                </span>
              </div>
            </div>

            <p className="mt-3 text-xs text-text-muted text-center lg:text-left">
              High-resolution vector artwork optimized for direct-to-garment &amp; screen printing.
            </p>
          </div>

          {/* Right Column: Editorial Details */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Digital Art &amp; Apparel Series
            </div>

            {/* Title & Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight leading-[1.15]">
              Kathakali &amp; Theyyam
            </h1>
            <p className="text-lg sm:text-xl text-primary font-medium mt-2">
              Digital Artwork for Cultural Apparel &amp; Merchandise
            </p>

            {/* Narrative Overview */}
            <div className="mt-6 space-y-4 text-text-body text-sm sm:text-base leading-relaxed">
              <p>
                A bold digital illustration collection honoring the rich performative traditions of Kerala—Kathakali and Theyyam. Crafted specifically for apparel and merchandise, the series translates the dramatic facial makeup, ceremonial headgear, and symbolic expressions into modern, high-contrast streetwear graphics.
              </p>
              <p>
                Each vector composition was balanced for garment reproduction, ensuring rich line weights, zero raster artifacting at any scale, and clean color separation suited for modern direct-to-garment (DTG) printing and traditional screen printing methods.
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

            {/* Key Design Highlights */}
            <div className="mt-8 rounded-2xl border border-border-default bg-surface-subtle p-5 sm:p-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-text-primary flex items-center gap-2 mb-4">
                <LuSparkles className="text-primary" />
                Craft &amp; Execution Highlights
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
                Themes &amp; Tools
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
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg border border-border-default bg-white px-5 py-3 text-sm font-semibold text-text-primary hover:bg-surface-muted transition-colors"
              >
                All Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
