import type { Metadata } from "next";

export const SITE_URL = "https://www.aswanthup.online";
export const OG_IMAGE_URL = `${SITE_URL}/og-image.jpg`;

export const DEFAULT_OG_IMAGE = {
  url: OG_IMAGE_URL,
  secureUrl: OG_IMAGE_URL,
  width: 1200,
  height: 630,
  alt: "Aswanth UP — UI Developer & UI/UX Designer",
  type: "image/jpeg",
};

export function createPageMetadata({
  title,
  description,
  path = "",
  image = OG_IMAGE_URL,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const isJpg = image.endsWith(".jpg") || image.endsWith(".jpeg");

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Aswanth UP Portfolio",
      title: `${title} | Aswanth UP`,
      description,
      url,
      images: [
        {
          url: image,
          secureUrl: image,
          width: 1200,
          height: 630,
          alt: `${title} — Aswanth UP`,
          type: isJpg ? "image/jpeg" : "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Aswanth UP`,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} — Aswanth UP`,
        },
      ],
    },
  };
}

