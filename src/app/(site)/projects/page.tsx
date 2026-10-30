"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, MotionConfig, type Variants } from "framer-motion";
import { MdOutlineArrowOutward, MdArrowForward } from "react-icons/md";

import { PREMIUM_EASE } from "../../lib/animations";
import {
  type Project,
  FEATURED,
  LIVE_SITES,
  DESIGN_WORK,
} from "../../data/projects";
import { useContactModal } from "../../context/ContactModalContext";

const EMAIL = "aswanthup06@gmail.com";

/* Entrance animation matching site system */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: PREMIUM_EASE },
  },
};

const reveal = {
  variants: fadeUp,
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.15 },
} as const;

/* -------------------------------------------------------------------------- */
/*  Shared Link Component                                                     */
/* -------------------------------------------------------------------------- */

function ProjectLink({
  project,
  className,
  children,
  decorative = false,
}: {
  project: Project;
  className?: string;
  children: ReactNode;
  /** Image links duplicate the text link, so hide them from keyboard/AT. */
  decorative?: boolean;
}) {
  const a11y = decorative
    ? ({ "aria-hidden": true, tabIndex: -1 } as const)
    : {};

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...a11y}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={project.slug} className={className} {...a11y}>
      {children}
    </Link>
  );
}

function ctaLabel(p: Project) {
  if (p.kind === "live") return "Visit Live Site";
  if (p.kind === "case-study") return "View Case Study";
  return "View Project";
}

function SectionHeading({
  id,
  kicker,
  title,
  highlight,
  note,
}: {
  id: string;
  kicker?: string;
  title: string;
  highlight?: string;
  note?: string;
}) {
  return (
    <motion.div {...reveal} className="mb-8 md:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
      <div>
        {kicker && (
          <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
            {kicker}
          </p>
        )}
        <h2 id={id} className="text-2xl font-bold text-text-primary md:text-3xl">
          {title}{" "}
          {highlight && (
            <span className="font-medium text-text-muted">{highlight}</span>
          )}
        </h2>
      </div>
      {note && (
        <p className="text-xs md:text-sm text-text-muted font-medium">{note}</p>
      )}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Featured Case Study Card                                                  */
/* -------------------------------------------------------------------------- */

function FeaturedProject({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const flip = index % 2 === 1;

  return (
    <motion.article
      {...reveal}
      className="group grid items-center gap-8 md:grid-cols-12 md:gap-12 p-6 md:p-8 rounded-2xl border border-border-default bg-surface-card shadow-xs transition-shadow duration-300 hover:shadow-xl relative overflow-hidden"
    >
      <ProjectLink
        project={project}
        decorative
        className={`block md:col-span-7 ${flip ? "md:order-2" : ""}`}
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border-default bg-surface-muted shadow-sm transition-shadow duration-500 group-hover:shadow-md">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            priority={index < 2}
            sizes="(min-width: 1024px) 58vw, (min-width: 768px) 55vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
      </ProjectLink>

      <div className="md:col-span-5 flex flex-col justify-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {project.role}
        </div>

        <h3 className="mt-2 text-2xl font-bold text-text-primary md:text-3xl">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-text-body md:text-base">
          {project.summary}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-md bg-surface-muted border border-border-subtle px-2.5 py-1 text-xs font-medium text-text-body"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <ProjectLink
            project={project}
            className="btn-primary rounded-md px-5 py-2.5 text-sm font-medium inline-flex items-center gap-2 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer"
          >
            {ctaLabel(project)}
            {project.href ? (
              <MdOutlineArrowOutward aria-hidden="true" className="text-base" />
            ) : (
              <MdArrowForward aria-hidden="true" className="text-base" />
            )}
            {project.href && <span className="sr-only">(opens in a new tab)</span>}
          </ProjectLink>
        </div>
      </div>
    </motion.article>
  );
}

/* -------------------------------------------------------------------------- */
/*  Compact Card: Live Sites & Design Pieces                                  */
/* -------------------------------------------------------------------------- */

function CompactCard({
  project,
  aspect = "aspect-[16/10]",
  priority = false,
}: {
  project: Project;
  aspect?: string;
  priority?: boolean;
}) {
  return (
    <motion.li {...reveal}>
      <ProjectLink project={project} className="group block h-full">
        <div className="h-full flex flex-col justify-between rounded-xl border border-border-default bg-surface-card p-3 sm:p-3.5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div>
            <div
              className={`relative ${aspect} overflow-hidden rounded-lg border border-border-default bg-surface-muted shadow-xs transition-shadow duration-300 group-hover:shadow-sm`}
            >
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                priority={priority}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="mt-3.5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-base font-semibold text-text-primary transition-colors group-hover:text-primary leading-snug">
                  {project.title}
                  {project.href && (
                    <span className="sr-only"> (opens in a new tab)</span>
                  )}
                </h3>
                <MdOutlineArrowOutward
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-base text-text-muted transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>

              <p className="mt-1 text-xs font-medium text-text-muted">
                {project.role}
              </p>

              <p className="mt-1.5 text-xs text-text-body line-clamp-2 leading-relaxed">
                {project.summary}
              </p>
            </div>
          </div>

          <ul className="mt-3.5 flex flex-wrap gap-1.5 pt-2.5 border-t border-border-subtle">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded bg-surface-muted border border-border-subtle px-2 py-0.5 text-[11px] font-medium text-text-body"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </ProjectLink>
    </motion.li>
  );
}

/* -------------------------------------------------------------------------- */
/*  Main Page                                                                 */
/* -------------------------------------------------------------------------- */

export default function Projects() {
  const { openModal } = useContactModal();

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen pb-20 pt-28 md:pb-28 md:pt-36">
        <div className="grid-bg absolute inset-0 -z-10" />

        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border-default bg-white/70 px-3 py-1 text-xs font-semibold text-text-body shadow-xs">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-primary"
              />
              Selected Work
            </div>

            <h1 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-tight text-text-primary sm:text-5xl md:text-6xl">
              Products I designed{" "}
              <span className="font-medium text-text-muted">and built.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-text-body md:text-lg">
              Full-scale web applications, production client websites, and design systems.
              Bridging the gap between Figma design and high-performance React code.
            </p>

            {/* Quick stats */}
            <dl className="mt-8 flex flex-wrap gap-x-12 gap-y-4 border-y border-border-default py-5">
              {[
                { n: FEATURED.length, label: "Case Studies" },
                { n: LIVE_SITES.length, label: "Live Websites" },
                { n: DESIGN_WORK.length, label: "Design Works" },
              ].map((s) => (
                <div key={s.label}>
                  <dd className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl tabular-nums">
                    {s.n}
                  </dd>
                  <dt className="text-xs md:text-sm font-medium text-text-muted mt-0.5">{s.label}</dt>
                </div>
              ))}
            </dl>

            {/* Jump links */}
            <nav
              aria-label="Jump to section"
              className="mt-8 flex flex-wrap gap-2.5"
            >
              {[
                { href: "#case-studies", label: "Case Studies" },
                { href: "#websites", label: "Client Websites" },
                { href: "#design-work", label: "Design & Visuals" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border-default bg-surface-card px-4 py-2 text-xs md:text-sm font-medium text-text-body shadow-xs transition-all duration-200 hover:border-primary/40 hover:text-primary hover:shadow-sm"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </header>

          {/* Section 1: Featured Case Studies */}
          <section
            id="case-studies"
            aria-labelledby="featured-heading"
            className="mt-16 scroll-mt-24 md:mt-24"
          >
            <h2 id="featured-heading" className="sr-only">
              Featured Case Studies
            </h2>
            <div className="space-y-12 md:space-y-16">
              {FEATURED.map((p, i) => (
                <FeaturedProject key={p.slug} project={p} index={i} />
              ))}
            </div>
          </section>

          {/* Section 2: Live Client Websites */}
          <section
            id="websites"
            aria-labelledby="websites-heading"
            className="mt-20 scroll-mt-24 md:mt-28"
          >
            <SectionHeading
              id="websites-heading"
              kicker="Production Deployments"
              title="Client Websites"
              highlight="& Platforms"
              note="Live in production · Click to visit"
            />
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {LIVE_SITES.map((p) => (
                <CompactCard key={p.slug} project={p} aspect="aspect-[16/10]" />
              ))}
            </ul>
          </section>

          {/* Section 3: Design & Illustration */}
          <section
            id="design-work"
            aria-labelledby="design-heading"
            className="mt-20 scroll-mt-24 md:mt-28"
          >
            <SectionHeading
              id="design-heading"
              kicker="Creative Archive"
              title="Design & Illustration"
              highlight="Showcase"
              note="Design systems, vector art & sketches"
            />
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {DESIGN_WORK.map((p) => (
                <CompactCard key={p.slug} project={p} aspect="aspect-[16/10]" />
              ))}
            </ul>
          </section>

          {/* Closing CTA */}
          <motion.section
            {...reveal}
            className="mt-24 md:mt-32 rounded-2xl border border-border-default bg-surface-card p-8 md:p-14 text-center shadow-xs relative overflow-hidden"
          >
            <div className="grid-bg absolute inset-0 opacity-40 pointer-events-none" />
            <div className="relative z-10 max-w-xl mx-auto">
              <p className="text-xs md:text-sm font-bold uppercase tracking-wider text-primary">
                Have a project in mind?
              </p>
              <h2 className="mt-2 text-3xl font-bold leading-tight text-text-primary md:text-4xl">
                Let&apos;s build something{" "}
                <span className="bg-gradient-to-r from-blue-600 via-primary to-cyan-500 bg-clip-text text-transparent">
                  exceptional together.
                </span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-text-body md:text-base">
                Open for UI development, frontend engineering, and UI/UX design opportunities.
              </p>
              <div className="mt-7 flex flex-wrap justify-center items-center gap-3">
                <button
                  type="button"
                  onClick={openModal}
                  className="btn-primary inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-medium shadow-md shadow-blue-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 cursor-pointer"
                >
                  Get in Touch
                  <MdOutlineArrowOutward aria-hidden="true" className="text-base" />
                </button>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 rounded-md border border-border-default bg-white px-5 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-surface-muted"
                >
                  Send Email
                </a>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </MotionConfig>
  );
}
