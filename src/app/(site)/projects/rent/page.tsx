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
    <div className="min-h-screen bg-brand-banner pt-32 pb-8 md:pb-12">
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
            <div className="inline-flex items-center gap-2 bg-surface-card/85 backdrop-blur-sm px-3 py-1 rounded-full mb-5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs text-text-body font-medium">Brand Identity Project</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">
              Rent My Thing
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-primary mt-1">
              Logo Design
            </h2>

            <p className="text-text-body mt-4 leading-relaxed">
              A modern and memorable logo designed for &ldquo;Rent My Thing&rdquo; — a peer-to-peer 
              rental platform that connects people looking to rent items with those who 
              have things to share. The logo captures the essence of sharing economy 
              with a friendly, approachable, and trustworthy visual identity.
            </p>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              <div className="flex items-center gap-3 bg-surface-card/85 rounded-xl p-3 shadow-sm">
                <div className="w-9 h-9 bg-primary-subtle rounded-lg flex items-center justify-center">
                  <LuCalendar className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Year</p>
                  <p className="font-medium text-text-primary">2024</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-surface-card/85 rounded-xl p-3 shadow-sm">
                <div className="w-9 h-9 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <LuUser className="text-indigo-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Client</p>
                  <p className="font-medium text-text-primary">Rent My Thing</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-surface-card/85 rounded-xl p-3 shadow-sm">
                <div className="w-9 h-9 bg-purple-100 rounded-lg flex items-center justify-center">
                  <LuTag className="text-purple-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Category</p>
                  <p className="font-medium text-text-primary">Brand Identity</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-surface-card/85 rounded-xl p-3 shadow-sm">
                <div className="w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center">
                  <LuEye className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Status</p>
                  <p className="font-medium text-green-600">Approved</p>
                </div>
              </div>
            </div>

            {/* Logo Variants */}
            <div className="mt-6">
              <p className="text-sm font-medium text-text-secondary mb-3">Logo Variants</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 bg-gray-100 text-text-body text-xs rounded-full">Primary Logo</span>
                <span className="px-3 py-1.5 bg-gray-100 text-text-body text-xs rounded-full">Horizontal Version</span>
                <span className="px-3 py-1.5 bg-gray-100 text-text-body text-xs rounded-full">Icon Only</span>
                <span className="px-3 py-1.5 bg-gray-100 text-text-body text-xs rounded-full">Monochrome</span>
              </div>
            </div>

            {/* Tools Used */}
            <div className="mt-6">
              <p className="text-sm font-medium text-text-secondary mb-3">Tools Used</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-gray-100 text-text-body text-xs rounded-lg flex items-center gap-1">
                  <LuBrush className="text-sm" /> Adobe Illustrator
                </span>
                <span className="px-3 py-1.5 bg-gray-100 text-text-body text-xs rounded-lg flex items-center gap-1">
                  <LuPalette className="text-sm" /> Adobe Photoshop
                </span>
                <span className="px-3 py-1.5 bg-gray-100 text-text-body text-xs rounded-lg">Figma</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/projects"
              className="btn-primary inline-flex items-center gap-2 mt-8 text-white px-6 py-3 rounded-lg  font-medium text-sm transition-all duration-300"
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
