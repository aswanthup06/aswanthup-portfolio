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
    summary: "TODO: one line on what NVOCC does and what you built.",
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
    summary: "TODO: one line on what Doctor One does and what you built.",
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
    role: "Frontend development",
    summary: "Company website.",
    category: ["Website"],
    image: "/images/projects/posters/mg2.webp",
    tech: ["NextJS", "TailwindCSS"],
  },
  {
    title: "Fotiq",
    slug: "fotiq",
    href: "https://www.fotiq.uk/",
    kind: "live",
    role: "Frontend development",
    summary: "Company website.",
    category: ["Website"],
    image: "/images/projects/web/web3.webp",
    tech: ["React", "TailwindCSS"],
  },
  {
    title: "Studio1Life",
    slug: "studio1life",
    href: "https://studio1life.com/",
    kind: "live",
    role: "Frontend development",
    summary: "Studio website.",
    category: ["Website"],
    image: "/images/projects/web/web1.webp",
    tech: ["React", "Bootstrap"],
  },
  {
    title: "Car Care Mechanic",
    slug: "carcaremechanic",
    href: "https://carcaremechanic.com/",
    kind: "live",
    role: "Frontend development",
    summary: "Service business website.",
    category: ["Website"],
    image: "/images/projects/web/web2.webp",
    tech: ["React", "TailwindCSS"],
  },

  // ---------- Design & illustration ----------
  {
    title: "Kathakali & Theyyam",
    slug: "/projects/kathakali",
    kind: "design",
    role: "Illustration",
    summary: "Illustrations of Kerala's traditional art forms.",
    category: ["Graphic Design"],
    image: "/images/projects/kathakali/kadha.webp",
    tech: ["Illustrator"],
  },
  {
    title: "DR1 - Icon Design",
    slug: "/projects/icon",
    kind: "design",
    role: "Icon design",
    summary: "Icon set for a healthcare product.",
    category: ["Graphic Design"],
    image: "/images/projects/icon/Pharmacy.webp",
    tech: ["Illustrator"],
  },
  {
    title: "ASTRO BYTE",
    slug: "/projects/astrobyte",
    kind: "design",
    role: "Poster design",
    summary: "Event poster.",
    category: ["Graphic Design"],
    image: "/images/projects/posters/poster1.webp",
    tech: ["Photoshop"],
  },
  {
    title: "Chaavie Solutions Poster",
    slug: "/projects/chaaviesolutions",
    kind: "design",
    role: "Poster design",
    summary: "Brand poster.",
    category: ["Graphic Design"],
    image: "/images/projects/posters/poster2.webp",
    tech: ["Photoshop"],
  },
  {
    title: "EID Poster",
    slug: "/projects/eidposter",
    kind: "design",
    role: "Poster design",
    summary: "Festive greeting poster.",
    category: ["Graphic Design"],
    image: "/images/projects/posters/poster3.webp",
    tech: ["Photoshop"],
  },
  {
    title: "Sketch Art",
    slug: "/projects/sketch-art",
    kind: "design",
    role: "Drawing",
    summary: "Pencil sketches.",
    category: ["Drawings"],
    image: "/images/projects/posters/drawing.webp",
    tech: ["Pencil Art"],
  },
];

export const FEATURED = PROJECTS.filter((p) => p.featured);
export const LIVE_SITES = PROJECTS.filter((p) => p.kind === "live");
export const DESIGN_WORK = PROJECTS.filter((p) => p.kind === "design");