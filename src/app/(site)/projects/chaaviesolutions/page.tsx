import React from "react";
import type { Metadata } from "next";
import {
  LuCalendar,
  LuBriefcase,
  LuLayers,
  LuSparkles,
  LuServer,
} from "react-icons/lu";
import { createPageMetadata } from "../../../lib/siteMetadata";
import ProjectShowcase from "../../../components/projects/ProjectShowcase";

export const metadata: Metadata = createPageMetadata({
  title: "Chaavie Solutions — Brand Visuals & Capabilities",
  description:
    "Agency brand identity visuals and promotional collateral reflecting modern digital product studio aesthetics.",
  path: "/projects/chaaviesolutions",
  image: "https://www.aswanthup.online/images/projects/chaaviesolutions/p3.webp",
});

const specs = [
  { label: "Year", value: "2024", icon: LuCalendar },
  { label: "Category", value: "Brand Architecture", icon: LuBriefcase },
  { label: "Format", value: "Corporate Showcase", icon: LuLayers },
  { label: "Focus", value: "Enterprise Services", icon: LuServer },
];

const services = [
  {
    title: "Custom Web Application Engineering",
    desc: "Robust, performant full-stack platforms designed with scalable component architectures.",
  },
  {
    title: "Digital Transformation Consulting",
    desc: "Strategic advisory modernizing legacy software workflows and operational infrastructure.",
  },
  {
    title: "Mobile Application Development",
    desc: "Cross-platform mobile experiences prioritizing fluid gesture navigation and responsive UI.",
  },
  {
    title: "UI/UX Systems & Design Systems",
    desc: "Comprehensive Figma-to-code design tokens ensuring brand consistency across multi-tier products.",
  },
];

const highlights = [
  {
    title: "Corporate Visual Maturity",
    desc: "Disciplined layout architecture combining deep tech accents with generous negative space to project enterprise stability.",
  },
  {
    title: "Service Hierarchy Clarity",
    desc: "Instant scanability separating complex technical capabilities into three digestible strategic service pillars.",
  },
  {
    title: "Collateral Multipurposing",
    desc: "Engineered for executive investor presentations, corporate headquarters displays, and digital onboarding decks.",
  },
];

const tags = [
  "Corporate Branding",
  "Service Architecture",
  "Poster Design",
  "Visual Hierarchy",
  "Figma",
  "Adobe Illustrator",
  "Enterprise Solutions",
];

export default function ChaavieSolutionsPage() {
  return (
    <ProjectShowcase
      slug="chaaviesolutions"
      eyebrow="Corporate Identity · Service Architecture"
      title="Chaavie Solutions"
      subtitle="Enterprise Technology Services & Capabilities Showcase"
      image="/images/projects/chaaviesolutions/p3.webp"
      imageAlt="Chaavie Solutions Enterprise Services Poster"
      imageBadges={{
        left: "Brand Collateral",
        right: "Enterprise",
      }}
      caption="Brand poster and capabilities showcase created for Chaavie Solutions."
      narrative={
        <>
          <p>
            An enterprise capabilities poster and visual collateral suite
            developed for Chaavie Solutions, a technology consultancy
            specializing in custom web applications, digital transformation, and
            mobile development.
          </p>
          <p>
            The visual communication balances technical sophistication with
            clear corporate messaging, utilizing an organized typographical
            grid to establish immediate authority for prospective clients,
            enterprise stakeholders, and recruitment drives.
          </p>
        </>
      }
      specs={specs}
      highlights={{
        title: "Strategic Execution Highlights",
        icon: LuSparkles,
        items: highlights,
      }}
      tags={tags}
    >
      {/* Core Services Breakdown */}
      <div className="mt-8 rounded-2xl border border-border-default bg-surface-subtle p-5 sm:p-6">
        <h2 className="text-base sm:text-lg font-semibold tracking-tight text-text-primary flex items-center gap-2 mb-4">
          <LuServer className="text-primary" />
          Featured Capabilities
        </h2>

        <div className="space-y-3">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-surface-card p-3.5 rounded-xl border border-border-subtle"
            >
              <p className="text-sm font-semibold text-text-primary">
                {item.title}
              </p>
              <p className="text-xs sm:text-sm text-text-muted mt-0.5 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </ProjectShowcase>
  );
}
