import type { Project, ProjectKind, ProjectMetaItem } from "@/types";

export type { Project, ProjectKind, ProjectMetaItem };

export const PROJECTS: Project[] = [
  // ---------- Featured case studies ----------
  {
    title: "Zenoway",
    slug: "/projects/zenoway",
    kind: "case-study",
    featured: true,
    role: "Founder · Design & UI Development",
    summary:
      "My own job portal, built end to end by myself, from product idea and UI/UX design to the live site.",
    description:
      "A career portal that skips accounts and application forms in favor of one action — a direct email to HR. Designed and built end to end, from job discovery through the admin dashboard.",
    category: ["Web Application", "UI Design"],
    image: "/images/projects/zenoway/zenoway-mock.webp",
    tech: ["NextJS", "Tailwind CSS"],
    type: "Own Project · Career Platform",
  },
  {
    title: "Happy ERP",
    slug: "/projects/happy-erp",
    kind: "case-study",
    featured: true,
    role: "UI Design & UI Development",
    summary:
      "An ERP platform for toy businesses covering inventory, orders and billing in one place.",
    description:
      "Enterprise ERP system built to replace spreadsheet workflows with structured inventory tables, order flows, and real-time operational views.",
    category: ["Web Application", "UI Design"],
    image: "/images/projects/happy-erp/happy-erp-hero.webp",
    tech: ["ReactJS", "Bootstrap 5"],
    type: "Chaavie Solutions · Dashboard & Website",
  },
  {
    title: "NVOCC",
    slug: "/projects/nvocc",
    kind: "case-study",
    featured: true,
    role: "UI Development",
    summary:
      "A modern logistics and shipping management platform engineered for intuitive tracking and container operations.",
    description:
      "Ocean freight and vessel logistics platform featuring export, import, and container maintenance dashboards translated directly from Figma.",
    category: ["Web Application"],
    image: "/images/projects/nvocc/nvocc-hero.webp",
    tech: ["NextJS", "Tailwind CSS"],
    type: "6solve (via Chaavie) · Dashboard",
  },
  {
    title: "Doctor One",
    slug: "/projects/doctor-one",
    kind: "case-study",
    featured: true,
    role: "UI Design & UI Development",
    summary:
      "A healthcare-focused digital platform simplifying patient interactions, appointments, and medical record accessibility.",
    description:
      "Healthcare consultation and clinic management platform designed for clear patient scheduling, prescription access, and mobile booking.",
    category: ["Web Application", "UI Design"],
    image: "/images/projects/doctor-one/dr1.webp",
    tech: ["ReactJS", "Tailwind CSS"],
    type: "Chaavie Solutions · Dashboard & Website",
  },

  // ---------- Live client sites ----------
  {
    title: "MG Orbis",
    slug: "mgorbis",
    href: "https://www.mgorbis.com/",
    kind: "live",
    role: "Corporate Platform",
    summary:
      "Corporate web platform built with Next.js and Tailwind CSS, featuring responsive service workflows.",
    category: ["Website"],
    image: "/images/projects/posters/mg2.webp",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Fotiq",
    slug: "fotiq",
    href: "https://www.fotiq.uk/",
    kind: "live",
    role: "Digital Agency",
    summary:
      "UK digital company presence engineered with React and Tailwind CSS, featuring interactive product catalogs.",
    category: ["Website"],
    image: "/images/projects/web/web3.webp",
    tech: ["React", "Tailwind CSS"],
  },
  {
    title: "Studio1Life",
    slug: "studio1life",
    href: "https://studio1life.com/",
    kind: "live",
    role: "Creative Studio",
    summary:
      "Media-rich creative studio portfolio engineered with React and custom layout transitions.",
    category: ["Website"],
    image: "/images/projects/web/web1.webp",
    tech: ["React", "Tailwind CSS"],
  },
  {
    title: "Car Care Mechanic",
    slug: "carcaremechanic",
    href: "https://carcaremechanic.com/",
    kind: "live",
    role: "Automotive Hub",
    summary:
      "Mobile-first automotive service portal featuring direct WhatsApp appointment routing.",
    category: ["Website"],
    image: "/images/projects/web/web2.webp",
    tech: ["React", "Tailwind CSS"],
  },

  // ---------- Design systems & visual craft ----------
  {
    title: "DR1 Icon System",
    slug: "/projects/icon",
    kind: "design",
    role: "Healthcare UI",
    summary:
      "Custom SVG icon system engineered for the Doctor One digital healthcare ecosystem with consistent stroke weights.",
    category: ["Design Systems"],
    image: "/images/projects/icon/Pharmacy.webp",
    tech: ["SVG", "Figma"],
  },
  {
    title: "Kathakali Vector Art",
    slug: "/projects/kathakali",
    kind: "design",
    role: "Traditional Art",
    summary:
      "Intricate digital vector illustrations celebrating traditional Kerala performing arts with geometric precision.",
    category: ["Vector Systems"],
    image: "/images/projects/kathakali/kadha.webp",
    tech: ["Illustrator", "Vector"],
  },
  {
    title: "Astro Byte Brand",
    slug: "/projects/astrobyte",
    kind: "design",
    role: "Developer Academy",
    summary:
      "Developer academy promotional identity and typography architecture designed for omnichannel campaigns.",
    category: ["Brand Identity"],
    image: "/images/projects/posters/poster1.webp",
    tech: ["Brand", "Typography"],
  },
  {
    title: "Chaavie Brand Visuals",
    slug: "/projects/chaaviesolutions",
    kind: "design",
    role: "Product Studio",
    summary:
      "Agency brand identity visuals and promotional collateral reflecting modern digital product studio aesthetics.",
    category: ["Brand Identity"],
    image: "/images/projects/posters/poster2.webp",
    tech: ["Brand", "Visual Design"],
  },
];

export const FEATURED: Project[] = PROJECTS.filter((p) => p.featured);
export const LIVE_SITES: Project[] = PROJECTS.filter((p) => p.kind === "live");
export const DESIGN_WORK: Project[] = PROJECTS.filter((p) => p.kind === "design");

/**
 * Filter out the currently active project and return the top N featured projects.
 */
export function getTopProjects(currentSlug?: string, limit: number = 3): Project[] {
  const normalizedCurrent = currentSlug?.toLowerCase().replace(/^\/projects\//, "");
  return FEATURED.filter((p) => {
    const slugWithoutPrefix = p.slug.toLowerCase().replace(/^\/projects\//, "");
    return slugWithoutPrefix !== normalizedCurrent;
  }).slice(0, limit);
}
