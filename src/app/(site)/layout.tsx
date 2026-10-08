import type { Metadata } from "next";
import { Questrial } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ContactModalProvider } from "../context/ContactModalContext";
import ContactModal from "../components/ContactModal";

import "../globals.css";

const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.aswanthup.online";
const ogImage = `${siteUrl}/assets/banner/banner.webp`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Aswanth UP | UI Developer & UI/UX Designer",
    template: "%s | Aswanth UP",
  },

  description:
    "Portfolio of Aswanth UP, a UI Developer and UI/UX Designer specializing in React, Next.js, Tailwind CSS, web applications, mobile app design, and modern user experiences.",

  keywords: [
    "Aswanth UP",
    "Aswanth",
    "UI Developer",
    "UI Designer",
    "UI UX Designer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Tailwind CSS",
    "Web Designer",
    "Web Developer",
    "Portfolio",
    "Kozhikode",
    "Kerala",
  ],

  authors: [
    {
      name: "Aswanth UP",
      url: siteUrl,
    },
  ],

  creator: "Aswanth UP",
  publisher: "Aswanth UP",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: "Aswanth UP | UI Developer & UI/UX Designer",

    description:
      "Explore the portfolio of Aswanth UP featuring UI/UX design, React development, Next.js projects, Tailwind CSS, and modern digital experiences.",

    url: siteUrl,

    siteName: "Aswanth UP Portfolio",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: ogImage,
        width: 1734,
        height: 907,
        alt: "Aswanth UP — UI Developer & UI/UX Designer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Aswanth UP | UI Developer & UI/UX Designer",

    description:
      "Portfolio showcasing UI/UX design, React development, Next.js projects, and modern digital experiences.",

    images: [ogImage],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={questrial.className}>
        <ContactModalProvider>
          <Navbar />

          {children}

          <ContactModal />

          <Footer />
        </ContactModalProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
