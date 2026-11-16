"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
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

export interface CompactProjectCardProps {
  project: Project;
}

export default function CompactProjectCard({ project }: CompactProjectCardProps) {
  return (
    <motion.li {...reveal}>
      <ProjectLink project={project} className="group block">
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border-default bg-surface-muted shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:border-primary/40">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="mt-3 flex items-center justify-between gap-2">
          <h3 className="text-sm font-semibold text-text-primary transition-colors group-hover:text-primary truncate">
            {project.title}
            {project.href && (
              <span className="sr-only"> (opens in a new tab)</span>
            )}
          </h3>
          <MdOutlineArrowOutward
            aria-hidden="true"
            className="shrink-0 text-sm text-text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
          />
        </div>

        <p className="mt-0.5 text-xs text-text-muted truncate">
          {project.role} · {project.tech.slice(0, 2).join(", ")}
        </p>
      </ProjectLink>
    </motion.li>
  );
}
