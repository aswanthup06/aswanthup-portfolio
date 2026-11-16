import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import {
  LuCalendar,
  LuLayoutGrid,
  LuLayers,
  LuSparkles,
  LuHeartPulse,
} from "react-icons/lu";
import { createPageMetadata } from "../../../lib/siteMetadata";
import ProjectShowcase from "../../../components/projects/ProjectShowcase";

export const metadata: Metadata = createPageMetadata({
  title: "DR1 Icon System — Healthcare UI Iconography",
  description:
    "Custom SVG icon system engineered for the Doctor One digital healthcare ecosystem with consistent stroke weights.",
  path: "/projects/icon",
  image: "https://www.aswanthup.online/images/projects/icon/Pharmacy.webp",
});

const specs = [
  { label: "Year", value: "2024", icon: LuCalendar },
  { label: "Category", value: "Icon System", icon: LuLayoutGrid },
  { label: "Grid Standard", value: "24px Optical Grid", icon: LuLayers },
  { label: "Domain", value: "Telehealth / MedTech", icon: LuHeartPulse },
];

const highlights = [
  {
    title: "Strict 24×24 Optical Grid Geometry",
    desc: "Uniform 2px stroke weights with carefully balanced negative space and standardized corner radii.",
  },
  {
    title: "Instant Clinical Recognition",
    desc: "Designed to minimize cognitive load during high-urgency clinical appointments and pharmacy lookups.",
  },
  {
    title: "Scalable Multi-Platform SVG Tokens",
    desc: "Exported as optimized, tree-shakeable SVG components compatible with React, Next.js, and mobile Flutter apps.",
  },
];

const categories = [
  "Telehealth & Video Care",
  "Digital Pharmacy & Prescriptions",
  "Diagnostic Lab Testing",
  "Hospital & Emergency Locator",
  "Clinical Vitals Monitoring",
  "Patient Medical Records",
];

const tags = [
  "Icon Design",
  "Figma Tokens",
  "SVG Architecture",
  "Healthcare UI",
  "Telemedicine",
  "Design System",
  "Vector Curves",
];

export default function DoctorIconShowcase() {
  return (
    <ProjectShowcase
      slug="icon"
      eyebrow="Design System · Iconography"
      title="Doctor Platform"
      subtitle="Healthcare & Telemedicine Visual Icon Language"
      image="/images/projects/icon/Pharmacy.webp"
      imageAlt="Doctor Platform Healthcare Icon Design System"
      imageBadges={{
        left: "Icon Design System",
        right: "24px Grid",
      }}
      caption="Custom vector iconography created for clinical telehealth and pharmacy workflows."
      narrative={
        <>
          <p>
            A bespoke, medical-grade iconography system developed for modern
            healthcare platforms and doctor consultation portals. Constructed on
            a disciplined 24×24 pixel optical bounding box, the icon family
            guarantees immediate legibility in fast-paced clinical environments
            and consumer health apps.
          </p>
          <p>
            Every glyph adheres to precise stroke terminal curvatures and
            proportional visual weights, preventing visual fatigue across both
            high-density mobile interfaces and expansive hospital administrative
            dashboards.
          </p>
        </>
      }
      specs={specs}
      curriculum={{
        title: "Domain Modules Covered",
        icon: LuLayoutGrid,
        items: categories,
      }}
      highlights={{
        title: "Engineering & System Highlights",
        icon: LuSparkles,
        items: highlights,
      }}
      tags={tags}
      tagsLabel="Technologies & Architecture"
    >
      <div className="mt-4">
        <Link
          href="/projects/doctor-one"
          className="inline-flex items-center gap-2 rounded-lg border border-border-default bg-surface-card px-5 py-3 text-sm font-semibold text-text-primary hover:bg-surface-muted transition-colors"
        >
          View Doctor One Platform
          <MdOutlineArrowOutward className="text-sm text-text-muted" />
        </Link>
      </div>
    </ProjectShowcase>
  );
}
