import { IoLogoReact, IoLogoJavascript } from "react-icons/io5";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFigma,
  SiGit,
  SiFramer,
  SiOpenai,
  SiClaude,
  SiGooglegemini,
  SiSass,
} from "react-icons/si";
import { FaRulerCombined, FaPuzzlePiece, FaPencil } from "react-icons/fa6";
import CursorIcon from "../components/ui/icons/CursorIcon";
import { FEATURED, LIVE_SITES, DESIGN_WORK } from "./projects";
import type {
  Chapter,
  ChapterKind,
  ToolkitGroup,
  Principle,
  Award,
  ToolItem,
  AboutStat,
} from "@/types";

export const TOOLS: ToolItem[] = [
  { name: "JavaScript", Icon: IoLogoJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: IoLogoReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Sass / SCSS", Icon: SiSass },
  { name: "Figma", Icon: SiFigma },
  { name: "Cursor", Icon: CursorIcon },
  { name: "Claude", Icon: SiClaude },
  { name: "Antigravity", Icon: SiGooglegemini },
  { name: "ChatGPT", Icon: SiOpenai },
  { name: "Framer Motion", Icon: SiFramer },
  { name: "Git", Icon: SiGit },
];

export const ABOUT_STATS: AboutStat[] = [
  { to: 3, suffix: "+", label: "Years building UI" },
  { to: FEATURED.length, suffix: "", label: "Product case studies" },
  { to: LIVE_SITES.length, suffix: "", label: "Live client websites" },
  { to: DESIGN_WORK.length, suffix: "", label: "Visual & icon systems" },
];

export const KIND_CONFIG: Record<
  ChapterKind,
  { label: string; chip: string; dot: string }
> = {
  study: {
    label: "Study",
    chip: "bg-surface-muted text-text-secondary border border-border-default",
    dot: "bg-text-muted",
  },
  work: {
    label: "Work",
    chip: "bg-primary-subtle text-primary",
    dot: "bg-primary",
  },
};

export const CHAPTERS: Chapter[] = [
  {
    period: "2016 – 2019",
    kind: "study",
    title: "BSc Computer Science",
    org: "Hi-Tech Arts and Science College",
    place: "Kallachi, Kerala",
    text: "Completed my BSc in Computer Science, building academic projects that put practical skills next to the theory.",
  },
  {
    period: "Nov 2022 – Mar 2023",
    kind: "work",
    title: "UI/UX Design Intern",
    org: "Futura Labs",
    place: "Kozhikode, Kerala",
    text: "Started in UI/UX design and frontend fundamentals, including HTML5, CSS3 / SCSS basics, JavaScript, and Figma.",
    tags: ["HTML5", "CSS3 / SCSS", "JavaScript", "Figma"],
  },
  {
    period: "Jun 2023 – Jul 2026",
    kind: "work",
    title: "UI Developer",
    org: "Chaavie Solutions",
    place: "Kozhikode, Kerala",
    text: "Worked across UI/UX design, UI development, and design systems.",
    points: [
      "Built responsive UI and admin dashboards for healthcare and enterprise products",
      "Mentored junior developers",
      "Built dashboards, SaaS platforms and reusable component systems for web and mobile",
    ],
    tags: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind",
      "Figma",
    ],
    links: [
      { label: "Happy ERP", href: "/projects/happy-erp" },
      { label: "Doctor One", href: "/projects/doctor-one" },
    ],
    sub: {
      period: "Jan – Aug 2025",
      title:
        "UI Developer (Contract via Chaavie Solutions) · 6solve IT Services",
      place: "Tirunelveli, Tamil Nadu",
      text: "Collaborated on Next.js projects, improving performance and scalability while strengthening modern UI architecture and component systems.",
    },
  },
];

export const PRINCIPLES: Principle[] = [
  {
    tag: "Architecture",
    title: "Plan before pixels",
    text: "Layout, spacing and tokens get settled in Figma with Auto Layout, so the build is one clean pass instead of rework.",
  },
  {
    tag: "Polish & A11y",
    title: "Details that hold it together",
    text: "Responsive behavior, states and accessibility are invisible when they work, and that’s exactly the point.",
  },
  {
    tag: "Fundamentals",
    title: "Depth over buzzwords",
    text: "JavaScript (ES6+), TypeScript, React, Next.js, Tailwind CSS, and Figma Dev Mode, used daily and understood well enough to bend when needed.",
  },
];

export const TOOLKIT_GROUPS: ToolkitGroup[] = [
  {
    kicker: "Core Stack",
    title: "UI Development",
    desc: "Production-tested technologies for clean component architecture, responsive layouts, and interactive UI systems.",
    items: [
      {
        name: "JavaScript (ES6+)",
        role: "Modern DOM, Async & Web APIs",
        Icon: IoLogoJavascript,
      },
      {
        name: "TypeScript",
        role: "Type Safety & Reliability",
        Icon: SiTypescript,
      },
      { name: "React", role: "Component Architecture", Icon: IoLogoReact },
      { name: "Next.js", role: "SSR & App Architecture", Icon: SiNextdotjs },
      {
        name: "Tailwind CSS",
        role: "Design Tokens & Utility UI",
        Icon: SiTailwindcss,
      },
      {
        name: "SCSS / CSS3",
        role: "Modular styling (Working knowledge)",
        Icon: SiSass,
      },
      {
        name: "Framer Motion",
        role: "Micro-interactions & Physics",
        Icon: SiFramer,
      },
      { name: "Git", role: "Version Control & Branching", Icon: SiGit },
    ],
  },
  {
    kicker: "Visual & Systems",
    title: "Design & Systems",
    desc: "Translating concepts into design tokens, accessible components, and polished prototypes.",
    items: [
      { name: "Figma", role: "Dev Mode & Auto Layout", Icon: SiFigma },
      {
        name: "Design Tokens",
        role: "Spacing, Color & Typography",
        Icon: FaRulerCombined,
      },
      {
        name: "Adobe Illustrator",
        role: "Vector Assets & Icons",
        Icon: FaPencil,
      },
      {
        name: "Component Systems",
        role: "Scalable atomic patterns",
        Icon: FaPuzzlePiece,
      },
    ],
  },
  {
    kicker: "Velocity & Multipliers",
    title: "AI-Augmented Engineering",
    desc: "Modern AI tooling integrated into daily development for faster prototyping, component refactoring, and edge-case checks.",
    highlight: true,
    items: [
      {
        name: "Cursor",
        role: "AI-native code editor & completions",
        Icon: CursorIcon,
        pill: "AI Code Editor",
        textColor: "text-blue-600",
      },
      {
        name: "Claude",
        role: "Complex logic & architectural reasoning",
        Icon: SiClaude,
        pill: "Architecture",
        textColor: "text-amber-600",
      },
      {
        name: "Antigravity",
        role: "Agentic coding & multi-file refactoring",
        Icon: SiGooglegemini,
        pill: "Agentic Assistant",
        textColor: "text-violet-600",
      },
      {
        name: "ChatGPT",
        role: "Ideation & rapid documentation",
        Icon: SiOpenai,
        pill: "Ideation",
        textColor: "text-emerald-600",
      },
    ],
  },
];

export const EARLY_AWARDS: Award[] = [
  {
    title: "5× State-level A Grade",
    detail: "Wood Carving · Kerala State School Sasthrolsavam",
  },
  {
    title: "5 District Prizes",
    detail: "4× First Prize · 1× Second Prize",
  },
  {
    title: "Sub-district Winner",
    detail: "Pencil Drawing & Painting",
  },
];
