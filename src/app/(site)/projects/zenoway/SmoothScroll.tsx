"use client";

import { useEffect, useState } from "react";
import { ArrowUp, ExternalLink } from "lucide-react";

export default function SmoothScroll() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showPill, setShowPill] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalScroll > 0 ? currentScroll / totalScroll : 0;
      setScrollProgress(progress);
      setShowPill(currentScroll > 450);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const globalLenis = (window as unknown as { lenis?: { scrollTo: (target: number) => void } }).lenis;
    if (globalLenis) {
      globalLenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Subtle emerald scroll progress indicator at top */}
      <div
        className="fixed top-0 left-0 right-0 h-0.5 bg-[#0FA968] z-50 origin-left pointer-events-none transition-transform duration-75"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />

      {/* Floating Quick Action Pill */}
      <div
        className={`fixed bottom-6 right-6 z-40 flex items-center gap-2 transition-all duration-300 ${
          showPill
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#17251F] hover:text-[#087F50] bg-white/95 backdrop-blur-md border border-[#D5E2DA] rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:border-[#087F50]/40 transition-colors cursor-pointer"
        >
          <ArrowUp size={13} />
          <span className="hidden sm:inline">Top</span>
        </button>

        <a
          href="https://www.zenoway.online/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-white bg-[#087F50] hover:bg-[#0FA968] rounded-full shadow-[0_4px_16px_rgba(8,127,80,0.25)] transition-all cursor-pointer"
        >
          <span>Visit Zenoway</span>
          <ExternalLink size={12} />
        </a>
      </div>
    </>
  );
}
