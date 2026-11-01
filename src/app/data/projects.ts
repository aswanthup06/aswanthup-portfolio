export type ProjectKind = "case-study" | "live" | "design";

export type Project = {
  title: string;
  /** Internal route. For live sites, just a unique id. */
  slug: string;
  /** External URL. If set, the card opens in a new tab. */
  href?: string;
  kind: ProjectKind;
  featured?: boolean;
  /** What you did on it. */
  role: string;
  /** One-line outcome. Edit these, they're placeholders. */
  summary: string;
  category: string[];
  image: string;
  tech: string[];
};

export const PROJECTS: Project[] = [
  // ---------- Featured case studies ----------

  {
    title: "ZENOWAY",
    slug: "/projects/zenoway",
    kind: "case-study",
    featured: true,
    role: "Founder · Design + development",
    summary:
      "My own job portal, built end to end by myself, from product idea and UI/UX design to the live site.",
    category: ["Web Application", "UI Design"],
    image: "/images/projects/zenoway/zenoway-mock.webp",
    tech: ["NextJS", "Tailwind CSS"],
  },
  {
    title: "Happy ERP",
    slug: "/projects/happy-erp",
    kind: "case-study",
    featured: true,
    role: "UI/UX design + frontend",
    summary:
      "An ERP platform for toy businesses covering inventory, orders and billing in one place.",
    category: ["Web Application", "UI Design"],
    image: "/images/projects/happy-erp/happy-erp-hero.webp",
    tech: ["ReactJS", "Bootstrap 5"],
  },
  {
    title: "NVOCC",
    slug: "/projects/nvocc",
    kind: "case-study",
    featured: true,
    role: "Frontend development",
    summary:
      "A modern logistics and shipping management platform engineered for intuitive tracking and container operations.",
    category: ["Web Application"],
    image: "/images/projects/nvocc/nvocc-hero.webp",
    tech: ["NextJS", "Tailwind CSS"],
  },
  {
    title: "Doctor One",
    slug: "/projects/doctor-one",
    kind: "case-study",
    featured: true,
    role: "UI design + frontend",
    summary:
      "A healthcare-focused digital platform simplifying patient interactions, appointments, and medical record accessibility.",
    category: ["Web Application", "UI Design"],
    image: "/images/projects/doctor-one/doctor.webp",
    tech: ["ReactJS", "Tailwind CSS"],
  },

  // ---------- Live client sites ----------
  {
    title: "MG Orbis",
    slug: "mgorbis",
    href: "https://www.mgorbis.com/",
    kind: "live",
    role: "Frontend Engineering",
    summary:
      "Corporate web platform built with Next.js and Tailwind CSS, featuring responsive service workflows and optimized performance.",
    category: ["Website"],
    image: "/images/projects/posters/mg2.webp",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Fotiq",
    slug: "fotiq",
    href: "https://www.fotiq.uk/",
    kind: "live",
    role: "Frontend Engineering",
    summary:
      "UK digital company presence engineered with React and Tailwind CSS, featuring interactive product catalogs and responsive layouts.",
    category: ["Website"],
    image: "/images/projects/web/web3.webp",
    tech: ["React", "Tailwind CSS"],
  },
  {
    title: "Studio1Life",
    slug: "studio1life",
    href: "https://studio1life.com/",
    kind: "live",
    role: "Frontend Engineering",
    summary:
      "Media-rich creative studio portfolio engineered with React, custom layout transitions, and high-DPI asset optimization.",
    category: ["Website"],
    image: "/images/projects/web/web1.webp",
    tech: ["React", "Tailwind CSS"],
  },
  {
    title: "Car Care Mechanic",
    slug: "carcaremechanic",
    href: "https://carcaremechanic.com/",
    kind: "live",
    role: "Frontend Engineering",
    summary:
      "Mobile-first automotive service portal featuring direct WhatsApp appointment routing and localized SEO architecture.",
    category: ["Website"],
    image: "/images/projects/web/web2.webp",
    tech: ["React", "Tailwind CSS"],
  },

  // ---------- Design systems & visual craft ----------
  {
    title: "DR1 — Healthcare Icon System",
    slug: "/projects/icon",
    kind: "design",
    role: "Design Systems & Iconography",
    summary:
      "Custom SVG icon system engineered for the Doctor One digital healthcare ecosystem with consistent stroke weights and grid alignment.",
    category: ["Design Systems"],
    image: "/images/projects/icon/Pharmacy.webp",
    tech: ["Figma", "Illustrator", "SVG"],
  },
  {
    title: "Kathakali & Theyyam Vector Art",
    slug: "/projects/kathakali",
    kind: "design",
    role: "Vector Systems & Illustration",
    summary:
      "Intricate digital vector illustrations celebrating traditional Kerala performing arts with geometric precision and color theory.",
    category: ["Vector Systems"],
    image: "/images/projects/kathakali/kadha.webp",
    tech: ["Illustrator", "Vector Art"],
  },
  {
    title: "ASTRO BYTE Curriculum Brand",
    slug: "/projects/astrobyte",
    kind: "design",
    role: "Visual Design & Typography",
    summary:
      "Developer academy promotional identity and typography architecture designed for omnichannel print and digital campaigns.",
    category: ["Brand Identity"],
    image: "/images/projects/posters/poster1.webp",
    tech: ["Photoshop", "Typography"],
  },
  {
    title: "Chaavie Solutions Brand Visuals",
    slug: "/projects/chaaviesolutions",
    kind: "design",
    role: "Brand & Visual Identity",
    summary:
      "Agency brand identity visuals and promotional collateral reflecting modern digital product studio aesthetics.",
    category: ["Brand Identity"],
    image: "/images/projects/posters/poster2.webp",
    tech: ["Photoshop", "Brand Design"],
  },
];

export const FEATURED = PROJECTS.filter((p) => p.featured);
export const LIVE_SITES = PROJECTS.filter((p) => p.kind === "live");
export const DESIGN_WORK = PROJECTS.filter((p) => p.kind === "design");