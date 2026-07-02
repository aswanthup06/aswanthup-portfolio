import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ContactModalProvider } from "../context/ContactModalContext";
import ContactModal from "../components/ContactModal";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aswanthup.art"),

  title: {
    default: "Aswanth UP | UI Developer & UI/UX Designer",
    template: "%s | Aswanth UP",
  },

  description:
    "Portfolio of Aswanth UP, a UI Developer and UI/UX Designer specializing in React, Next.js, Tailwind CSS, web applications, mobile app design, and modern user experiences.",

  keywords: [
    "Aswanth UP",
    "UI Developer",
    "UI Designer",
    "UI UX Designer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Tailwind CSS",
    "Portfolio",
    "Web Designer",
    "Web Developer",
    "Kozhikode",
    "Kerala",
  ],

  authors: [
    {
      name: "Aswanth UP",
      url: "https://www.aswanthup.art",
    },
  ],

  creator: "Aswanth UP",
  publisher: "Aswanth UP",

  alternates: {
    canonical: "https://www.aswanthup.art",
  },

  openGraph: {
    title: "Aswanth UP | UI Developer & UI/UX Designer",
    description:
      "Explore the portfolio of Aswanth UP featuring web applications, UI/UX design projects, React development, Next.js solutions, and creative digital experiences.",
    url: "https://www.aswanthup.art",
    siteName: "Aswanth UP Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aswanth UP Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Aswanth UP | UI Developer & UI/UX Designer",
    description:
      "Portfolio showcasing UI/UX design, React development, Next.js projects, and modern digital experiences.",
    images: ["/og-image.png"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ContactModalProvider>
          <Navbar />
          {children}
          <ContactModal />
          <Footer />
        </ContactModalProvider>
      </body>
    </html>
  );
}