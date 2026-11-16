import React from "react";
import type { Metadata } from "next";
import {
  LuCalendar,
  LuShirt,
  LuLayers,
  LuPalette,
  LuSparkles,
} from "react-icons/lu";
import { createPageMetadata } from "../../../lib/siteMetadata";
import ProjectShowcase from "../../../components/projects/ProjectShowcase";

export const metadata: Metadata = createPageMetadata({
  title: "Kathakali Vector Art — Traditional Performing Arts",
  description:
    "Intricate digital vector illustrations celebrating traditional Kerala performing arts with geometric precision.",
  path: "/projects/kathakali",
  image: "https://www.aswanthup.online/images/projects/kathakali/kadha.webp",
});

const specs = [
  { label: "Year", value: "2024", icon: LuCalendar },
  { label: "Category", value: "Apparel & Print", icon: LuShirt },
  { label: "Format", value: "Vector / DTG Print", icon: LuLayers },
  { label: "Medium", value: "Digital Illustration", icon: LuPalette },
];

const highlights = [
  {
    title: "Anatomical Expression Geometry",
    desc: "High-contrast vector lines tracing traditional Navarasa expressions with theatrical precision.",
  },
  {
    title: "Screen & DTG Print Optimization",
    desc: "Clean vector paths and separated color layers engineered specifically for textile printing.",
  },
  {
    title: "Kerala Performing Arts Heritage",
    desc: "Authentic ornamentation capturing the intricate Paccha makeup and ornate Theyyam headgear.",
  },
];

const tags = [
  "Kathakali Art",
  "Theyyam Headgear",
  "Vector Linework",
  "Apparel Graphics",
  "Screen Printing",
  "Adobe Illustrator",
  "Photoshop",
];

export default function KathakaliPage() {
  return (
    <ProjectShowcase
      slug="kathakali"
      eyebrow="Digital Art & Apparel Series"
      title="Kathakali & Theyyam"
      subtitle="Digital Artwork for Cultural Apparel & Merchandise"
      image="/images/projects/kathakali/kadha.webp"
      imageAlt="Kathakali & Theyyam Digital Artwork for Apparel"
      imageBadges={{
        left: "Apparel Graphic Art",
        right: "2024",
      }}
      caption="High-resolution vector artwork optimized for direct-to-garment & screen printing."
      narrative={
        <>
          <p>
            A bold digital illustration collection honoring the rich
            performative traditions of Kerala—Kathakali and Theyyam. Crafted
            specifically for apparel and merchandise, the series translates the
            dramatic facial makeup, ceremonial headgear, and symbolic expressions
            into modern, high-contrast streetwear graphics.
          </p>
          <p>
            Each vector composition was balanced for garment reproduction,
            ensuring rich line weights, zero raster artifacting at any scale, and
            clean color separation suited for modern direct-to-garment (DTG)
            printing and traditional screen printing methods.
          </p>
        </>
      }
      specs={specs}
      highlights={{
        title: "Craft & Execution Highlights",
        icon: LuSparkles,
        items: highlights,
      }}
      tags={tags}
      tagsLabel="Themes & Tools"
    />
  );
}
