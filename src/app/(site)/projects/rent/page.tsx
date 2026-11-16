import NextProject from "../../../components/projects/NextProject";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LuArrowUpRight,
  LuCalendar,
  LuUser,
  LuTag,
  LuEye,
  LuBrush,
  LuPalette,
} from "react-icons/lu";

export default function PosterPage() {
  return (
    <div className="min-h-screen bg-brand-banner pt-28 md:pt-36 pb-4 md:pb-6">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* LEFT - Square Poster */}
          <div className="aspect-square bg-gradient-to-br from-primary-subtle to-surface-muted rounded-2xl overflow-hidden shadow-2xl border-2 border-white/50 flex items-center justify-center relative">
            <Image
              src="/images/projects/rent/r2.webp"
              alt="Rent My Thing logo design preview"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover"
              priority
            />
          </div>

          {/* RIGHT - Details */}
          <div>
            <div className="inline-flex items-center gap-2 bg-surface-card/85 backdrop-blur-sm px-3 py-1 rounded-full mb-5 shadow-sm border border-border-default">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Brand Identity Project</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight leading-[1.12]">
              Rent My Thing
            </h1>
            <p className="text-lg sm:text-xl font-medium text-primary mt-2">
              Logo Design &amp; Brand Identity
            </p>

            <p className="text-text-body text-sm sm:text-base mt-4 leading-relaxed">
              A modern and memorable logo designed for &ldquo;Rent My Thing&rdquo; — a peer-to-peer 
              rental platform that connects people looking to rent items with those who 
              have things to share. The logo captures the essence of sharing economy 
              with a friendly, approachable, and trustworthy visual identity.
            </p>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              <div className="flex items-center gap-3 bg-surface-card/85 rounded-xl p-3 shadow-sm border border-border-default">
                <div className="w-9 h-9 bg-primary-subtle rounded-lg flex items-center justify-center">
                  <LuCalendar className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-text-muted">Year</p>
                  <p className="text-sm font-semibold text-text-primary">2024</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-surface-card/85 rounded-xl p-3 shadow-sm border border-border-default">
                <div className="w-9 h-9 bg-primary-subtle rounded-lg flex items-center justify-center">
                  <LuUser className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-text-muted">Client</p>
                  <p className="text-sm font-semibold text-text-primary">Rent My Thing</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-surface-card/85 rounded-xl p-3 shadow-sm border border-border-default">
                <div className="w-9 h-9 bg-primary-subtle rounded-lg flex items-center justify-center">
                  <LuTag className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-text-muted">Category</p>
                  <p className="text-sm font-semibold text-text-primary">Brand Identity</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-surface-card/85 rounded-xl p-3 shadow-sm border border-border-default">
                <div className="w-9 h-9 bg-primary-subtle rounded-lg flex items-center justify-center">
                  <LuEye className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-text-muted">Status</p>
                  <p className="text-sm font-semibold text-primary">Approved</p>
                </div>
              </div>
            </div>

            {/* Logo Variants */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-text-secondary mb-3">Logo Variants</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface-muted text-text-body text-xs font-medium rounded-full">Primary Logo</span>
                <span className="px-3 py-1 bg-surface-muted text-text-body text-xs font-medium rounded-full">Horizontal Version</span>
                <span className="px-3 py-1 bg-surface-muted text-text-body text-xs font-medium rounded-full">Icon Only</span>
                <span className="px-3 py-1 bg-surface-muted text-text-body text-xs font-medium rounded-full">Monochrome</span>
              </div>
            </div>

            {/* Tools Used */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-text-secondary mb-3">Tools Used</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface-muted text-text-body text-xs font-medium rounded-lg flex items-center gap-1">
                  <LuBrush className="text-sm" /> Adobe Illustrator
                </span>
                <span className="px-3 py-1 bg-surface-muted text-text-body text-xs font-medium rounded-lg flex items-center gap-1">
                  <LuPalette className="text-sm" /> Adobe Photoshop
                </span>
                <span className="px-3 py-1 bg-surface-muted text-text-body text-xs font-medium rounded-lg">Figma</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/projects"
              className="btn-primary inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300"
            >
              All Projects
              <LuArrowUpRight className="text-base" />
            </Link>
          </div>
        </div>
      </div>
      <NextProject currentSlug="rent" />
    </div>
  );
}
