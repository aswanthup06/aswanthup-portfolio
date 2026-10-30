export type Project = {
  title: string;
  slug: string;
  category: string[];
  image: string;
  tech: string[];
};

export const CATEGORIES = [
  "All",
  "Web Application",
  "UI Design",
  "Website",
  "Graphic Design",
  "Drawings",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const PROJECTS: Project[] = [
  {
    title: "ZENOWAY",
    slug: "/projects/zenoway",
    category: ["Web Application", "UI Design"],
    image: "/images/projects/zenoway/zenoway-mock.webp",
    tech: ["NextJS", "Tailwind CSS"],
  },
  {
    title: "Happy ERP",
    slug: "/projects/happy-erp",
    category: ["Web Application", "UI Design"],
    image: "/images/projects/happy-erp/happy-erp-hero.webp",
    tech: ["ReactJS", "Bootstrap 5"],
  },
  {
    title: "NVOCC",
    slug: "/projects/nvocc",
    category: ["Web Application"],
    image: "/images/projects/nvocc/nvocc-hero.webp",
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
    title: "MG Orbis",
    slug: "https://www.mgorbis.com/",
    category: ["Website"],
    image: "/images/projects/posters/mg2.webp",
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
    image: "/images/projects/posters/poster1.webp",
    tech: ["Photoshop"],
  },
  {
    title: "Chaavie Solutions Poster",
    slug: "/projects/chaaviesolutions",
    category: ["Graphic Design"],
    image: "/images/projects/posters/poster2.webp",
    tech: ["Photoshop"],
  },
  {
    title: "EID Poster",
    slug: "/projects/eidposter",
    category: ["Graphic Design"],
    image: "/images/projects/posters/poster3.webp",
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

