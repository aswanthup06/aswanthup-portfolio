import React from "react";
import type { Metadata } from "next";
import {
  LuCalendar,
  LuCode,
  LuGraduationCap,
  LuLayers,
  LuSparkles,
} from "react-icons/lu";
import { createPageMetadata } from "../../../lib/siteMetadata";
import ProjectShowcase from "../../../components/projects/ProjectShowcase";

export const metadata: Metadata = createPageMetadata({
  title: "Astrobyte Academy — Course Visual Campaign",
  description:
    "Promotional campaign and structured curriculum poster created for Astrobyte Academy’s flagship Full Stack Development program.",
  path: "/projects/astrobyte",
  image: "https://www.aswanthup.online/images/projects/astrobyte/p2.webp",
});

const specs = [
  { label: "Year", value: "2024", icon: LuCalendar },
  { label: "Category", value: "Educational Media", icon: LuGraduationCap },
  { label: "Format", value: "Print & Social Campaign", icon: LuLayers },
  { label: "Focus", value: "Full Stack Curriculum", icon: LuCode },
];

const curriculum = [
  "React & Next.js Architecture",
  "Redux Toolkit & State Flow",
  "TypeScript & Type Safety",
  "Tailwind CSS & Responsive Layouts",
  "Node.js & Express Fundamentals",
  "RESTful API Design & Integration",
  "Component Testing Best Practices",
  "Production Cloud Deployment",
];

const highlights = [
  {
    title: "Typographic Information Architecture",
    desc: "Engineered bold visual hierarchy directing attention through program milestones, prerequisites, and career outcomes.",
  },
  {
    title: "Omnichannel Design Delivery",
    desc: "Calibrated for both large-format academy campus print installations (A2/A3) and high-conversion social media formats.",
  },
  {
    title: "Developer Identity Branding",
    desc: "Contemporary, technical aesthetic designed to resonate with aspiring software engineers and modern tech talent.",
  },
];

const tags = [
  "Poster Design",
  "Education Marketing",
  "Typography",
  "Information Architecture",
  "Figma",
  "Adobe Illustrator",
  "Full Stack Curriculum",
];

export default function AstrobyteProjectPage() {
  return (
    <ProjectShowcase
      slug="astrobyte"
      eyebrow="Graphic Design · Educational Campaign"
      title="Astrobyte Academy"
      subtitle="Full Stack Developer Course Visual Identity & Campaign"
      image="/images/projects/astrobyte/p2.webp"
      imageAlt="Astrobyte Full Stack Developer Course Poster"
      imageBadges={{
        left: "Course Poster Design",
        right: "Academy Print",
      }}
      caption="Visual identity and curriculum marketing campaign designed for Astrobyte Academy."
      narrative={
        <>
          <p>
            A promotional campaign and structured curriculum poster created for
            Astrobyte Academy’s flagship Full Stack Development program. The
            design translates an extensive technical roadmap into an
            approachable, high-impact visual piece that guides prospective
            students through the progression from basic markup to enterprise web
            engineering.
          </p>
          <p>
            By employing high-contrast typographic scales and disciplined
            geometric grid systems, the collateral maintains immediate visual
            authority across physical academy posters, billboards, and digital
            enrollment funnels.
          </p>
        </>
      }
      specs={specs}
      curriculum={{
        title: "Featured Curriculum Structure",
        icon: LuCode,
        items: curriculum,
      }}
      highlights={{
        title: "Campaign Execution Highlights",
        icon: LuSparkles,
        items: highlights,
      }}
      tags={tags}
    />
  );
}
