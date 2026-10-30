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
  /** One-line outcome. */
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
    role: "Lead UI Developer & Designer",
    summary:
      "Modern job discovery platform and direct application pipeline with candidate tracking, real-time filtering, and a comprehensive admin portal.",
    category: ["Web Application", "UI Design"],
    image: "/images/projects/zenoway/zenoway-mock.webp",
    tech: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    title: "Happy ERP",
    slug: "/projects/happy-erp",
    kind: "case-study",
    featured: true,
    role: "UI/UX Designer & Frontend Engineer",
    summary:
      "Enterprise ERP suite for toy manufacturers and retailers, unifying inventory control, purchase orders, customer ledgers, and multi-branch billing.",
    category: ["Web Application", "UI Design"],
    image: "/images/projects/happy-erp/happy-erp-hero.webp",
    tech: ["React.js", "Bootstrap 5", "Figma"],
  },
  {
    title: "Doctor One",
    slug: "/projects/doctor-one",
    kind: "case-study",
    featured: true,
    role: "Lead UI Developer & Designer",
    summary:
      "Unified clinical telehealth hub connecting 500+ verified doctors with digital appointment booking, video consultations, and lab test vaults.",
    category: ["Web Application", "UI Design"],
    image: "/images/projects/doctor-one/doctor.webp",
    tech: ["Next.js", "Tailwind CSS", "React"],
  },
  {
    title: "NVOCC",
    slug: "/projects/nvocc",
    kind: "case-study",
    featured: true,
    role: "Frontend Engineer",
    summary:
      "Global maritime logistics portal facilitating container tracking, cargo manifest auditing, line schedules, and port operations coordination.",
    category: ["Web Application"],
    image: "/images/projects/nvocc/nvocc-hero.webp",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
  },

  // ---------- Live client sites ----------
  {
    title: "MG Orbis",
    slug: "mgorbis",
    href: "https://www.mgorbis.com/",
    kind: "live",
    role: "Frontend Developer",
    summary: "Corporate web platform for global business consulting and international trade logistics.",
    category: ["Website"],
    image: "/images/projects/posters/mg2.webp",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Fotiq",
    slug: "fotiq",
    href: "https://www.fotiq.uk/",
    kind: "live",
    role: "Frontend Developer",
    summary: "Creative digital photography and multimedia studio showcase with responsive gallery layouts.",
    category: ["Website"],
    image: "/images/projects/web/web3.webp",
    tech: ["React.js", "Tailwind CSS"],
  },
  {
    title: "Studio1Life",
    slug: "studio1life",
    href: "https://studio1life.com/",
    kind: "live",
    role: "Frontend Developer",
    summary: "Brand identity and commercial production portfolio for an Indian media and cinematography studio.",
    category: ["Website"],
    image: "/images/projects/web/web1.webp",
    tech: ["React.js", "Bootstrap"],
  },
  {
    title: "Car Care Mechanic",
    slug: "carcaremechanic",
    href: "https://carcaremechanic.com/",
    kind: "live",
    role: "Frontend Developer",
    summary: "Automotive service directory and repair booking web application with service breakdown flows.",
    category: ["Website"],
    image: "/images/projects/web/web2.webp",
    tech: ["React.js", "Tailwind CSS"],
  },

  // ---------- Design & illustration ----------
  {
    title: "Kathakali & Theyyam",
    slug: "/projects/kathakali",
    kind: "design",
    role: "Visual Designer & Illustrator",
    summary: "Vector illustrations celebrating the rich cultural traditions and ritual costumes of Kerala.",
    category: ["Graphic Design"],
    image: "/images/projects/kathakali/kadha.webp",
    tech: ["Adobe Illustrator"],
  },
  {
    title: "DR1 - Icon Design",
    slug: "/projects/icon",
    kind: "design",
    role: "Icon & Design System Specialist",
    summary: "Clinical, pharmacy, and diagnostic icon set designed for digital healthcare design systems.",
    category: ["Graphic Design"],
    image: "/images/projects/icon/Pharmacy.webp",
    tech: ["Adobe Illustrator"],
  },
  {
    title: "ASTRO BYTE",
    slug: "/projects/astrobyte",
    kind: "design",
    role: "Graphic Designer",
    summary: "Branded promotional poster for college technical symposium and developer workshops.",
    category: ["Graphic Design"],
    image: "/images/projects/posters/poster1.webp",
    tech: ["Adobe Photoshop"],
  },
  {
    title: "Chaavie Solutions Poster",
    slug: "/projects/chaaviesolutions",
    kind: "design",
    role: "Graphic Designer",
    summary: "Promotional marketing campaign visual for an enterprise software solutions company.",
    category: ["Graphic Design"],
    image: "/images/projects/posters/poster2.webp",
    tech: ["Adobe Photoshop"],
  },
  {
    title: "EID Poster",
    slug: "/projects/eidposter",
    kind: "design",
    role: "Visual Designer",
    summary: "Festive celebration poster featuring custom typography, lighting geometry, and spatial harmony.",
    category: ["Graphic Design"],
    image: "/images/projects/posters/poster3.webp",
    tech: ["Adobe Photoshop"],
  },
  {
    title: "Sketch Art",
    slug: "/projects/sketch-art",
    kind: "design",
    role: "Traditional Artist",
    summary: "Hand-drawn graphite pencil sketches exploring realistic facial portraiture, light, and depth.",
    category: ["Drawings"],
    image: "/images/projects/posters/drawing.webp",
    tech: ["Graphite Pencil"],
  },
];

export const FEATURED = PROJECTS.filter((p) => p.featured);
export const LIVE_SITES = PROJECTS.filter((p) => p.kind === "live");
export const DESIGN_WORK = PROJECTS.filter((p) => p.kind === "design");
