"use client";

import { forwardRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  MotionConfig,
  type Variants,
} from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";

import { PREMIUM_EASE } from "../../lib/animations";

/* -------------------------------------------------------------------------- */
/*  Data (unchanged except "Graph Design" -> "Graphic Design")                */
/* -------------------------------------------------------------------------- */

type Project = {
  title: string;
  slug: string;
  category: string[];
  image: string;
  tech: string[];
};

const CATEGORIES = [
  "All",
  "Web Application",
  "UI Design",
  "Website",
  "Graphic Design",
  "Drawings",
];

const PROJECTS: Project[] = [
  {
    title: "Happy ERP",
    slug: "/projects/happy-erp",
    category: ["Web Application", "UI Design"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    tech: ["ReactJS", "Bootstrap 5"],
  },
  {
    title: "ZENOWAY",
    slug: "/projects/zenoway",
    category: ["Web Application", "UI Design"],
    image:
      "https://images.unsplash.com/photo-1582079767878-082f4300d386?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: ["NextJS", "Tailwind CSS"],
  },
  {
    title: "Doctor One",
    slug: "/projects/doctor-one",
    category: ["Web Application", "UI Design"],
    image: "/images/projects/doctor-one/doctor.webp",
    tech: ["ReactJS", "Tailwind CSS"],
  },
  {
    title: "NVOCC",
    slug: "/projects/nvocc",
    category: ["Web Application"],
    image: "/images/projects/nvocc/ship.webp",
    tech: ["NextJS", "Tailwind CSS"],
  },
  {
    title: "MG Orbis",
    slug: "https://www.mgorbis.com/",
    category: ["Website"],
    image: "/images/projects/posters/mg2.png",
    tech: ["NextJS", "TailwindCSS"],
  },
  {
    title: "Fotiq",
    slug: "https://www.fotiq.uk/",
    category: ["Website"],
    image: "/images/projects/web/web3.webp",
    tech: ["React", "TailwindCSS"],
  },
  {
    title: "Studio1Life",
    slug: "https://studio1life.com/",
    category: ["Website"],
    image: "/images/projects/web/web1.webp",
    tech: ["React", "Bootstrap"],
  },
  {
    title: "Car Care Mechanic",
    slug: "https://carcaremechanic.com/",
    category: ["Website"],
    image: "/images/projects/web/web2.webp",
    tech: ["React", "TailwindCSS"],
  },
  {
    title: "Kathakali & Theyyam",
    slug: "/projects/kathakali",
    category: ["Graphic Design"],
    image: "/images/projects/kathakali/kadha.webp",
    tech: ["Illustrator"],
  },
  {
    title: "DR1 - Icon Design",
    slug: "/projects/icon",
    category: ["Graphic Design"],
    image: "/images/projects/icon/Pharmacy.webp",
    tech: ["Illustrator"],
  },
  {
    title: "ASTRO BYTE",
    slug: "/projects/astrobyte",
    category: ["Graphic Design"],
    image: "/images/projects/posters/poster1.png",
    tech: ["Photoshop"],
  },
  {
    title: "Chaavie Solutions Poster",
    slug: "/projects/chaaviesolutions",
    category: ["Graphic Design"],
    image: "/images/projects/posters/poster2.png",
    tech: ["Photoshop"],
  },
  {
    title: "EID Poster",
    slug: "/projects/eidposter",
    category: ["Graphic Design"],
    image: "/images/projects/posters/poster3.png",
    tech: ["Photoshop"],
  },
  {
    title: "Sketch Art",
    slug: "/projects/sketch-art",
    category: ["Drawings"],
    image: "/images/projects/posters/drawing.webp",
    tech: ["Pencil Art"],
  },
];

/* -------------------------------------------------------------------------- */
/*  Motion (same easing/timing as the rest of the site, no blur / no scale)   */
/* -------------------------------------------------------------------------- */

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: PREMIUM_EASE },
  },
};

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.includes(active));

  const count = (cat: string) =>
    cat === "All"
      ? PROJECTS.length
      : PROJECTS.filter((p) => p.category.includes(cat)).length;

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen px-4 sm:px-6 lg:px-8 pb-8 md:pb-12 pt-32 md:pt-36">
        <div className="grid-bg absolute inset-0 -z-10" />

        <div className="mx-auto max-w-6xl">
          {/* Header (h1 is static so it never delays LCP) */}
          <motion.header
            variants={container}
            initial="hidden"
            animate="show"
            className="mx-auto max-w-2xl text-center"
          >
            <motion.p variants={item} className="text-sm font-bold text-primary">
              Selected Work
            </motion.p>

            <h1 className="mt-2 text-4xl font-semibold leading-tight text-text-primary md:text-5xl">
              Crafted Digital{" "}
              <span className="font-medium text-text-muted">Experiences</span>
            </h1>

            <motion.p
              variants={item}
              className="mt-4 text-sm leading-relaxed text-text-body md:text-base"
            >
              A collection of UI development, design, branding, and creative
              works built with attention to detail and user-focused thinking.
            </motion.p>
          </motion.header>

          {/* Filters */}
          <motion.div
            role="group"
            aria-label="Filter projects by category"
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap justify-center gap-2"
          >
            {CATEGORIES.map((cat) => {
              const on = active === cat;

              return (
                <motion.button
                  key={cat}
                  type="button"
                  variants={item}
                  onClick={() => setActive(cat)}
                  aria-pressed={on}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${on ? "text-white" : "text-text-body hover:text-primary"
                    }`}
                >
                  {on ? (
                    <motion.span
                      layoutId="activeCategory"
                      className="absolute inset-0 rounded-full bg-primary shadow-md shadow-blue-500/20"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 32,
                      }}
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full border border-border-default bg-white/70"
                    />
                  )}

                  <span className="relative">
                    {cat}
                    <span
                      className={`ml-1.5 text-xs ${on ? "text-white/70" : "text-text-muted"
                        }`}
                    >
                      {count(cat)}
                    </span>
                  </span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Grid */}
          <ul className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                // key is the slug only: an index in the key remounts cards
                // on every filter change and replays their entrance.
                <ProjectCard key={project.slug} project={project} />
              ))}
            </AnimatePresence>
          </ul>
        </div>
      </div>
    </MotionConfig>
  );
}

/* -------------------------------------------------------------------------- */
/*  Card (forwardRef: AnimatePresence popLayout needs a ref on its child)     */
/* -------------------------------------------------------------------------- */

const ProjectCard = forwardRef<HTMLLIElement, { project: Project }>(
  function ProjectCard({ project }, ref) {
    const external = project.slug.startsWith("http");
    const remote = project.image.startsWith("http");

    const src = remote
      ? `${project.image}${project.image.includes("?") ? "&" : "?"}auto=format&fit=crop&w=800&q=80`
      : project.image;

    const badge = external
      ? "Live site"
      : project.category.includes("Web Application")
        ? "Case study"
        : null;

    const body = (
      <>
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border-default bg-surface-muted shadow-sm transition-shadow duration-500 group-hover:shadow-xl">
          <Image
            src={src}
            alt={`${project.title} preview`}
            fill
            unoptimized={remote}
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

          {badge && (
            <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-text-primary shadow-sm backdrop-blur-sm">
              {badge}
            </span>
          )}

          <span
            aria-hidden="true"
            className="absolute right-3 top-3 flex h-8 w-8 -translate-y-1 items-center justify-center rounded-full bg-white/90 text-text-primary opacity-0 shadow-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <MdOutlineArrowOutward />
          </span>
        </div>

        <div className="mt-4">
          <h3 className="text-lg font-semibold text-text-primary transition-colors group-hover:text-primary">
            {project.title}
            {external && (
              <span className="sr-only"> (opens in a new tab)</span>
            )}
          </h3>

          <p className="mt-0.5 text-sm text-text-muted">
            {project.category.join(" · ")}
          </p>

          <ul className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-md bg-surface-muted px-2.5 py-1 text-xs font-medium text-text-body"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </>
    );

    return (
      <motion.li
        ref={ref}
        layout
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18, margin: "0px 0px -40px 0px" }}
        exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
        transition={{ layout: { duration: 0.35 } }}
      >
        {external ? (
          <a
            href={project.slug}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            {body}
          </a>
        ) : (
          <Link href={project.slug} className="group block">
            {body}
          </Link>
        )}
      </motion.li>
    );
  },
);