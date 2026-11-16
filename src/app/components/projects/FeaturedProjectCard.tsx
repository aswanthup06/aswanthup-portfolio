"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { MdOutlineArrowOutward, MdArrowForward } from "react-icons/md";
import type { Project } from "@/types";
import { PREMIUM_EASE } from "../../lib/animations";
import ProjectLink from "./ProjectLink";

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

function ctaLabel(p: Project) {
  if (p.kind === "live") return "Visit Live Site";
  if (p.kind === "case-study") return "View Case Study";
  return "View Project";
}

export interface FeaturedProjectCardProps {
  project: Project;
  index: number;
}

export default function FeaturedProjectCard({
  project,
  index,
}: FeaturedProjectCardProps) {
  const flip = index % 2 === 1;

  return (
    <motion.article
      {...reveal}
      className="group grid items-center gap-6 md:grid-cols-12 md:gap-12"
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
            className="btn-primary inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
