import React from "react";
import type { Metadata } from "next";
import {
  LuCalendar,
  LuUser,
  LuTag,
  LuEye,
  LuBrush,
  LuPalette,
} from "react-icons/lu";
import { createPageMetadata } from "../../../lib/siteMetadata";
import ProjectShowcase from "../../../components/projects/ProjectShowcase";

export const metadata: Metadata = createPageMetadata({
  title: "Rent My Thing — Brand Identity & Logo Design",
  description:
    "A modern and memorable logo designed for 'Rent My Thing' — a peer-to-peer rental platform connecting sharers.",
  path: "/projects/rent",
  image: "https://www.aswanthup.online/images/projects/rent/r2.webp",
});

const specs = [
  { label: "Year", value: "2024", icon: LuCalendar },
  { label: "Client", value: "Rent My Thing", icon: LuUser },
  { label: "Category", value: "Brand Identity", icon: LuTag },
  { label: "Status", value: "Approved", icon: LuEye },
];

const logoVariants = [
  "Primary Logo",
  "Horizontal Version",
  "Icon Only",
  "Monochrome",
];

const tools = [
  { name: "Adobe Illustrator", icon: LuBrush },
  { name: "Adobe Photoshop", icon: LuPalette },
  { name: "Figma" },
];

export default function PosterPage() {
  return (
    <ProjectShowcase
      slug="rent"
      eyebrow="Brand Identity Project"
      title="Rent My Thing"
      subtitle="Logo Design & Brand Identity"
      image="/images/projects/rent/r2.webp"
      imageAlt="Rent My Thing logo design preview"
      caption="Peer-to-peer sharing economy platform visual branding."
      narrative={
        <p>
          A modern and memorable logo designed for &ldquo;Rent My Thing&rdquo; —
          a peer-to-peer rental platform that connects people looking to rent
          items with those who have things to share. The logo captures the
          essence of sharing economy with a friendly, approachable, and
          trustworthy visual identity.
        </p>
      }
      specs={specs}
    >
      {/* Logo Variants */}
      <div className="mt-6">
        <p className="text-sm font-semibold text-text-secondary mb-3">
          Logo Variants
        </p>
        <div className="flex flex-wrap gap-2">
          {logoVariants.map((variant) => (
            <span
              key={variant}
              className="px-3 py-1 bg-surface-muted text-text-body text-xs font-medium rounded-full"
            >
              {variant}
            </span>
          ))}
        </div>
      </div>

      {/* Tools Used */}
      <div className="mt-6">
        <p className="text-sm font-semibold text-text-secondary mb-3">
          Tools Used
        </p>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <span
                key={tool.name}
                className="px-3 py-1 bg-surface-muted text-text-body text-xs font-medium rounded-lg flex items-center gap-1"
              >
                {Icon && <Icon className="text-sm" />}
                {tool.name}
              </span>
            );
          })}
        </div>
      </div>
    </ProjectShowcase>
  );
}
