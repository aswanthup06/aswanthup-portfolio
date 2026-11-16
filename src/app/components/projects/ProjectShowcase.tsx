import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuCircleCheck, LuSparkles } from "react-icons/lu";
import type { ProjectMetaItem } from "@/types";
import NextProject from "./NextProject";
import ContactModalButton from "../ui/ContactModalButton";

export interface HighlightItem {
  title: string;
  desc: string;
}

export interface ProjectShowcaseProps {
  slug: string;
  eyebrow: ReactNode;
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  imageBadges?: {
    left?: string;
    right?: string;
  };
  caption?: string;
  narrative: ReactNode;
  specs: ProjectMetaItem[];
  curriculum?: {
    title: string;
    icon?: React.ComponentType<{ className?: string }>;
    items: string[];
  };
  highlights?: {
    title: string;
    icon?: React.ComponentType<{ className?: string }>;
    items: HighlightItem[];
  };
  tags?: string[];
  tagsLabel?: string;
  contactText?: string;
  children?: ReactNode;
}

export default function ProjectShowcase({
  slug,
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  imageBadges,
  caption,
  narrative,
  specs,
  curriculum,
  highlights,
  tags,
  tagsLabel = "Disciplines & Skills",
  contactText = "Inquire for Work",
  children,
}: ProjectShowcaseProps) {
  const HighlightIcon = highlights?.icon || LuSparkles;

  return (
    <div className="relative min-h-screen bg-background text-text-primary pt-28 md:pt-36 pb-4 md:pb-6">
      {/* Background Texture */}
      <div
        className="grid-bg absolute inset-x-0 top-0 h-[650px] -z-10 pointer-events-none"
        style={{
          maskImage:
            "radial-gradient(ellipse 95% 80% at 50% 25%, black 40%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 95% 80% at 50% 25%, black 40%, transparent 95%)",
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Showcase */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Sticky Square Media Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div
              data-cursor="view"
              data-cursor-label="Preview"
              className="group relative aspect-square w-full rounded-2xl overflow-hidden border border-border-default bg-surface-muted shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
            >
              <Image
                src={image}
                alt={imageAlt}
                fill
                priority
                unoptimized
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

              {imageBadges && (imageBadges.left || imageBadges.right) && (
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                  {imageBadges.left && (
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 font-medium">
                      {imageBadges.left}
                    </span>
                  )}
                  {imageBadges.right && (
                    <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-medium">
                      {imageBadges.right}
                    </span>
                  )}
                </div>
              )}
            </div>

            {caption && (
              <p className="mt-3 text-xs text-text-muted text-center lg:text-left">
                {caption}
              </p>
            )}
          </div>

          {/* Right Column: Editorial Details */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Category Tag / Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {eyebrow}
            </div>

            {/* Title & Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight leading-[1.15]">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg sm:text-xl text-primary font-medium mt-2">
                {subtitle}
              </p>
            )}

            {/* Narrative Overview */}
            <div className="mt-6 space-y-4 text-text-body text-sm sm:text-base leading-relaxed">
              {narrative}
            </div>

            {/* Specification Grid */}
            {specs && specs.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
                {specs.map(({ label, value, icon: Icon }) => (
                  <div
                    key={label}
                    className="rounded-xl border border-border-default bg-surface-card p-3.5 shadow-2xs"
                  >
                    {Icon && <Icon className="text-primary text-base mb-1.5" />}
                    <p className="text-[11px] text-text-muted uppercase tracking-wider font-medium">
                      {label}
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-text-primary mt-0.5 truncate">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Optional Curriculum / Structured Items */}
            {curriculum && (
              <div className="mt-8 rounded-2xl border border-border-default bg-surface-subtle p-5 sm:p-6">
                <h2 className="text-base sm:text-lg font-semibold tracking-tight text-text-primary flex items-center gap-2 mb-4">
                  {curriculum.icon && <curriculum.icon className="text-primary" />}
                  {curriculum.title}
                </h2>

                <div className="grid sm:grid-cols-2 gap-2.5">
                  {curriculum.items.map((topic, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs sm:text-sm text-text-secondary bg-surface-card px-3.5 py-2.5 rounded-lg border border-border-subtle"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Optional Highlights */}
            {highlights && (
              <div className="mt-6 rounded-2xl border border-border-default bg-surface-card p-5 sm:p-6 shadow-2xs">
                <h2 className="text-base sm:text-lg font-semibold tracking-tight text-text-primary flex items-center gap-2 mb-4">
                  <HighlightIcon className="text-primary" />
                  {highlights.title}
                </h2>

                <div className="space-y-3.5">
                  {highlights.items.map((item, idx) => (
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
            )}

            {/* Custom Children Content if any */}
            {children}

            {/* Tags / Tools */}
            {tags && tags.length > 0 && (
              <div className="mt-8">
                <p className="text-xs uppercase tracking-wider font-semibold text-text-muted mb-3">
                  {tagsLabel}
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
            )}

            {/* CTA Buttons */}
            <div className="mt-10 pt-6 border-t border-border-default flex flex-wrap items-center gap-4">
              <ContactModalButton size="lg">
                {contactText}
              </ContactModalButton>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg border border-border-default bg-surface-card px-5 py-3 text-sm font-semibold text-text-primary hover:bg-surface-muted transition-colors"
              >
                All Projects
              </Link>
            </div>
          </div>
        </div>
      </div>

      <NextProject currentSlug={slug} />
    </div>
  );
}
