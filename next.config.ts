import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  async redirects() {
    return [
      {
        source: "/resume.pdf",
        destination: "/Aswanth_UP_Resume.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
