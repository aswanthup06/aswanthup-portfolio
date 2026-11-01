"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";

export type ProjectItem = {
  slug: string;
  title: string;
  category: string;
  role: string;
  tech: string[];
  image: string;
  href: string;
  description: string;
};

export const TOP_PROJECTS: ProjectItem[] = [
  {
    slug: "zenoway",
    title: "Zenoway",
    category: "Career Platform · UI/UX",
    role: "Founder · Full Stack UI",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/images/projects/zenoway/zenoway-mock.webp",
    href: "/projects/zenoway",
    description:
      "Direct job discovery platform with zero forced logins and verified employer application routes.",
  },
  {
    slug: "happy-erp",
    title: "Happy ERP",
    category: "Enterprise Dashboard System",
    role: "UI/UX & Frontend Lead",
    tech: ["React", "Dashboard", "ERP"],
    image: "/images/projects/happy-erp/happy-erp-hero.webp",
    href: "/projects/happy-erp",
    description:
      "Complete enterprise ERP platform streamlining inventory, orders, and real-time operations.",
  },
  {
    slug: "nvocc",
    title: "ENVOCC",
    category: "Logistics & Vessel Management",
    role: "Frontend Engineering",
    tech: ["React", "Next.js", "Tailwind CSS"],
    image: "/images/projects/nvocc/nvocc-hero.webp",
    href: "/projects/nvocc",
    description:
      "Enterprise shipping and container logistics management system for tracking and port operations.",
  },
  {
    slug: "doctor-one",
    title: "Doctor One",
    category: "Healthcare Platform & Dashboard",
    role: "UI Design & Frontend",
    tech: ["Healthcare", "Next.js", "UI UX"],
    image: "/images/projects/doctor-one/dr1.webp",
    href: "/projects/doctor-one",
    description:
      "Modern clinical scheduling and patient management interface designed for effortless medical workflows.",
  },
];

export default function NextProject({ currentSlug }: { currentSlug: string }) {
  // Filter out the currently active project and take top 3
  const filtered = TOP_PROJECTS.filter(
    (p) => p.slug.toLowerCase() !== currentSlug.toLowerCase()
  );
  const featuredProjects = filtered.slice(0, 3);

  return (
    <section className="w-full pt-16 md:pt-24 pb-14 border-t border-border-default">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary mb-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>Selected Work</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight">
              Explore More Projects
            </h2>
          </div>

          <Link
            href="/projects"
            className="
              btn-primary
              rounded-md
              text-white
              h-10
              px-5
              font-medium
              text-sm
              inline-flex
              items-center
              gap-2
              w-fit
              shadow-md shadow-blue-500/20
              hover:shadow-lg hover:shadow-blue-500/30
              transition-all
              duration-200
            "
          >
            <span>View all projects</span>
            <MdOutlineArrowOutward className="text-base" />
          </Link>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={project.href}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border-default bg-surface-card hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-50 border-b border-border-default">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 360px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-xs font-medium text-primary">
                    {project.category}
                  </span>

                  <h3 className="text-xl font-semibold text-text-primary group-hover:text-primary transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <MdOutlineArrowOutward className="text-lg text-primary opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200" />
                  </h3>

                  <p className="text-xs sm:text-sm text-text-body leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-border-default/60">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-surface-muted text-text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
