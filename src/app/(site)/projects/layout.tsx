import type { Metadata } from "next";
import { createPageMetadata } from "../../lib/siteMetadata";

export const metadata: Metadata = createPageMetadata({
  title: "Projects",
  description:
    "Explore case studies, web applications, and UI/UX design projects built by Aswanth UP using React, Next.js, and modern frontend tools.",
  path: "/projects",
});

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
