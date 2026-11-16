import React, { ReactNode } from "react";
import Link from "next/link";
import type { Project } from "@/types";

export interface ProjectLinkProps {
  project: Project;
  className?: string;
  children: ReactNode;
  /** Image links duplicate the text link, so hide them from keyboard/AT. */
  decorative?: boolean;
}

export function ProjectLink({
  project,
  className,
  children,
  decorative = false,
}: ProjectLinkProps) {
  const a11y = decorative
    ? ({ "aria-hidden": true, tabIndex: -1 } as const)
    : {};

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...a11y}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={project.slug} className={className} {...a11y}>
      {children}
    </Link>
  );
}

export default ProjectLink;
