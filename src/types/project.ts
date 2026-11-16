import type React from "react";

export type ProjectKind = "case-study" | "live" | "design";

export interface Project {
  title: string;
  /** Internal route or unique identifier. */
  slug: string;
  /** External URL if the card links offsite. */
  href?: string;
  kind: ProjectKind;
  featured?: boolean;
  /** Primary role or deliverable context on the project. */
  role: string;
  /** One-line concise summary. */
  summary: string;
  /** Detailed description (used in expanded cards/sections). */
  description?: string;
  /** Category tags, e.g. ["Web Application", "UI Design"]. */
  category: string[];
  /** Thumbnail image path. */
  image: string;
  /** List of technologies or tools used. */
  tech: string[];
  /** Sub-headline or client descriptor, e.g. "Chaavie Solutions · Dashboard & Website". */
  type?: string;
}

export interface ProjectMetaItem {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
}
