"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, animate, MotionConfig, type Variants } from "framer-motion";
import { MdOutlineArrowOutward, MdArrowForward } from "react-icons/md";
import { IoLogoReact } from "react-icons/io5";
import { SiFigma } from "react-icons/si";

import { PREMIUM_EASE } from "../../lib/animations";
import {
  type Project,
  FEATURED,
  LIVE_SITES,
  DESIGN_WORK,
} from "../../data/projects";
import { useContactModal } from "../../context/ContactModalContext";

const EMAIL = "aswanthup06@gmail.com";

/* -------------------------------------------------------------------------- */
/*  Motion (same easing/timing as the rest of the site)                       */
/* -------------------------------------------------------------------------- */

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: PREMIUM_EASE },
  },
};

const reveal = {
  variants: item,
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.15 },
} as const;

/* -------------------------------------------------------------------------- */
/*  Shared                                                                    */
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
    <motion.div
      {...reveal}
      className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end md:mb-10"
    >
      <div>
        {kicker && (
          <p className="mb-1 text-sm font-bold text-primary">{kicker}</p>
        )}
        <h2
          id={id}
          className="text-2xl font-semibold text-text-primary md:text-3xl"
        >
          {title}{" "}
          {highlight && (
            <span className="font-medium text-text-muted">{highlight}</span>
          )}
        </h2>
      </div>
      {note && <p className="text-xs font-medium text-text-muted md:text-sm">{note}</p>}
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero (same layout language as About: copy left, visual right)             */
/* -------------------------------------------------------------------------- */

function Stat({
  to,
  suffix = "",
  label,
}: {
  to: number;
  suffix?: string;
  label: string;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, to, {
      duration: 1.2,
      delay: 0.5,
      ease: PREMIUM_EASE,
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [to]);

  return (
    <div>
      <dt className="text-2xl font-bold tabular-nums text-text-primary md:text-3xl">
        {value}
        <span className="text-primary">{suffix}</span>
      </dt>
      <dd className="mt-0.5 text-xs text-text-body md:text-sm">{label}</dd>
    </div>
  );
}

function Hero() {
  const { openModal } = useContactModal();

  return (
    <section
      aria-label="Introduction"
      className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-start text-left"
      >
        <motion.div
          variants={item}
          className="mb-5 inline-flex items-center gap-2 text-xs font-medium text-text-body md:text-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Selected Work · Design to production
        </motion.div>

        {/* h1 stays static so it never delays LCP */}
        <h1 className="text-4xl font-bold leading-[1.1] text-text-primary md:text-5xl lg:text-6xl">
          Products I designed
          <span className="block bg-gradient-to-r from-blue-600 via-primary to-cyan-500 bg-clip-text text-transparent">
            and built.
          </span>
        </h1>

        <motion.p
          variants={item}
          className="mt-5 max-w-xl text-sm leading-relaxed text-text-body md:text-lg"
        >
          Full-scale web applications, production client websites, and design
          work. Bridging the gap between Figma design and high-performance
          React code.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-7 flex flex-wrap items-center gap-3"
        >
          <a
            href="#case-studies"
            className="btn-primary inline-flex items-center gap-2 rounded-md px-6 py-2.5 text-sm font-medium shadow-md shadow-blue-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
          >
            View case studies
            <MdArrowForward aria-hidden="true" className="rotate-90 text-base" />
          </a>

          <button
            type="button"
            onClick={openModal}
            className="inline-flex items-center gap-2 rounded-md border border-border-default bg-white px-5 py-2.5 text-sm font-medium text-text-primary transition-colors hover:bg-surface-muted"
          >
            Get in Touch
            <MdOutlineArrowOutward aria-hidden="true" className="text-base" />
          </button>
        </motion.div>

        {/* Proof strip: a rule, not a box */}
        <motion.dl
          variants={item}
          className="mt-9 grid w-full max-w-md grid-cols-3 gap-6 border-t border-border-default pt-6"
        >
          <Stat to={FEATURED.length} label="Case studies" />
          <Stat to={LIVE_SITES.length} label="Live websites" />
          <Stat to={DESIGN_WORK.length} label="Design works" />
        </motion.dl>
      </motion.div>

      <ShotStack />
    </section>
  );
}

/* Fanned stack of real project screenshots */
const SHOT_STYLE = [
  { pos: "bottom-0 right-[4%] w-[66%] z-20", rotate: 2, float: [0, -8, 0], d: 6, delay: 0.35 },
  { pos: "left-0 top-[20%] w-[60%] z-10", rotate: -5, float: [0, 7, 0], d: 7, delay: 0.2 },
  { pos: "right-0 top-0 w-[56%]", rotate: 5, float: [0, -6, 0], d: 8, delay: 0.05 },
];

function ShotStack() {
  const shots = FEATURED.slice(0, 3);

  return (
    <div
      aria-hidden="true"
      className="relative mx-auto h-[340px] w-full max-w-[460px] sm:h-[420px] lg:h-[460px]"
    >
      {shots.map((p, i) => {
        const s = SHOT_STYLE[i];
        return (
          <motion.div
            key={p.slug}
            className={`absolute ${s.pos}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: s.delay, ease: PREMIUM_EASE }}
          >
            <motion.div
              style={{ rotate: s.rotate }}
              animate={{ y: s.float }}
              transition={{ duration: s.d, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border-default bg-surface-muted shadow-xl shadow-black/10"
            >
              <Image
                src={p.image}
                alt=""
                fill
                priority={i < 2}
                sizes="(min-width: 1024px) 300px, 60vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        );
      })}

      {/* slow spinning dashed ring */}
      <motion.div
        className="absolute -right-4 -top-6 h-24 w-24 rounded-full border-2 border-dashed border-primary/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <Sticker
        className="-left-1 bottom-14 md:-left-6"
        float={[0, -9, 0]}
        duration={5}
        delay={0.9}
      >
        <SiFigma className="text-red-500" /> Designed in Figma
      </Sticker>

      <Sticker
        className="-right-1 top-[50%] md:-right-5"
        float={[0, 9, 0]}
        duration={6}
        delay={1.1}
      >
        <IoLogoReact className="text-sky-500" /> Shipped in React
      </Sticker>

      <Sticker
        className="left-4 top-2"
        float={[0, -7, 0]}
        duration={5.5}
        delay={1.3}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        {FEATURED.length} case studies
      </Sticker>
    </div>
  );
}

function Sticker({
  children,
  className,
  float,
  duration,
  delay,
}: {
  children: ReactNode;
  className: string;
  float: number[];
  duration: number;
  delay: number;
}) {
  return (
    <motion.div
      className={`absolute z-20 ${className}`}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4, ease: PREMIUM_EASE }}
    >
      <motion.div
        animate={{ y: float }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-border-default bg-white px-3 py-1.5 text-[11px] font-semibold text-text-primary shadow-lg shadow-black/5 md:text-xs"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Featured: open layout, no card box. Rules separate the entries.           */
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
      className={`group grid items-center gap-6 md:grid-cols-12 md:gap-12 ${index > 0 ? "border-t border-border-default pt-12 md:pt-16" : ""
        }`}
    >
      <ProjectLink
        project={project}
        decorative
        className={`block md:col-span-7 ${flip ? "md:order-2" : ""}`}
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border-default bg-surface-muted shadow-sm transition-shadow duration-500 group-hover:shadow-xl">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 1024px) 58vw, (min-width: 768px) 55vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
      </ProjectLink>

      <div className="flex flex-col justify-center md:col-span-5">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-primary">
          <span className="font-mono">0{index + 1}</span>
          <span aria-hidden="true" className="h-px w-6 bg-primary/40" />
          {project.role}
        </div>

        <h3 className="mt-3 text-2xl font-bold text-text-primary md:text-3xl">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-text-body md:text-base">
          {project.summary}
        </p>

        <p className="mt-4 text-sm font-medium text-text-muted">
          {project.tech.join(" · ")}
        </p>

        <div className="mt-6">
          <ProjectLink
            project={project}
            className="btn-primary inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium shadow-md shadow-blue-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {ctaLabel(project)}
            {project.href ? (
              <MdOutlineArrowOutward aria-hidden="true" className="text-base" />
            ) : (
              <MdArrowForward aria-hidden="true" className="text-base" />
            )}
            {project.href && (
              <span className="sr-only">(opens in a new tab)</span>
            )}
          </ProjectLink>
        </div>
      </div>
    </motion.article>
  );
}

/* -------------------------------------------------------------------------- */
/*  Compact item: image + text underneath, no outer box                       */
/* -------------------------------------------------------------------------- */

function CompactItem({ project }: { project: Project }) {
  return (
    <motion.li {...reveal}>
      <ProjectLink project={project} className="group block">
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border-default bg-surface-muted shadow-sm transition-shadow duration-300 group-hover:shadow-lg">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="mt-3.5 flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold leading-snug text-text-primary transition-colors group-hover:text-primary">
            {project.title}
            {project.href && (
              <span className="sr-only"> (opens in a new tab)</span>
            )}
          </h3>
          <MdOutlineArrowOutward
            aria-hidden="true"
            className="mt-0.5 shrink-0 text-base text-text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
          />
        </div>

        <p className="mt-1 text-xs font-medium text-text-muted">
          {project.role} · {project.tech.join(", ")}
        </p>

        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-text-body">
          {project.summary}
        </p>
      </ProjectLink>
    </motion.li>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function Projects() {
  const { openModal } = useContactModal();

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen pb-20 pt-28 md:pb-28 md:pt-36">
        <div className="grid-bg absolute inset-0 -z-10" />

        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Hero />

          {/* Featured case studies */}
          <section
            id="case-studies"
            aria-labelledby="featured-heading"
            className="mt-24 scroll-mt-24 md:mt-32"
          >
            <h2 id="featured-heading" className="sr-only">
              Featured case studies
            </h2>
            <div className="space-y-12 md:space-y-16">
              {FEATURED.map((p, i) => (
                <FeaturedProject key={p.slug} project={p} index={i} />
              ))}
            </div>
          </section>

          {/* Client websites */}
          <section
            id="websites"
            aria-labelledby="websites-heading"
            className="mt-24 scroll-mt-24 md:mt-32"
          >
            <SectionHeading
              id="websites-heading"
              kicker="Production deployments"
              title="Client websites"
              highlight="& platforms"
              note="Live in production · Click to visit"
            />
            <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {LIVE_SITES.map((p) => (
                <CompactItem key={p.slug} project={p} />
              ))}
            </ul>
          </section>

          {/* Design & illustration */}
          <section
            id="design-work"
            aria-labelledby="design-heading"
            className="mt-24 scroll-mt-24 md:mt-32"
          >
            <SectionHeading
              id="design-heading"
              kicker="Creative archive"
              title="Design & illustration"
              note="Icons, posters, vector art & sketches"
            />
            <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {DESIGN_WORK.map((p) => (
                <CompactItem key={p.slug} project={p} />
              ))}
            </ul>
          </section>

          {/* Closing CTA: open, with a rule on top instead of a box */}
          <motion.section
            {...reveal}
            aria-labelledby="cta-heading"
            className="mt-24 grid items-end gap-8 border-t border-border-default pt-12 md:mt-32 md:pt-16 lg:grid-cols-[1fr_auto]"
          >
            <div className="max-w-2xl">
              <p className="text-sm font-bold text-primary">
                Have a project in mind?
              </p>
              <h2
                id="cta-heading"
                className="mt-2 text-3xl font-bold leading-tight text-text-primary md:text-4xl"
              >
                Let&apos;s build something{" "}
                <span className="bg-gradient-to-r from-blue-600 via-primary to-cyan-500 bg-clip-text text-transparent">
                  exceptional together.
                </span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-text-body md:text-base">
                Open for UI development, frontend engineering, and UI/UX design
                opportunities.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={openModal}
                className="btn-primary inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-medium shadow-md shadow-blue-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
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
          </motion.section>
        </div>
      </div>
    </MotionConfig>
  );
}