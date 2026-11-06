import type { Metadata } from "next";
import { createPageMetadata } from "../../lib/siteMetadata";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Learn more about Aswanth UP — UI Developer & UI/UX Designer specializing in React, Next.js, Tailwind CSS, and modern user experiences.",
  path: "/about",
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
