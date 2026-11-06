import type { Metadata } from "next";
import { createPageMetadata } from "../../lib/siteMetadata";

export const metadata: Metadata = createPageMetadata({
  title: "UI Development Training",
  description:
    "Comprehensive UI Development Training covering HTML5, CSS3, JavaScript, React, Next.js, and modern frontend practices by Aswanth UP.",
  path: "/UIDevelopmentTraining",
});

export default function TrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
