"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoLogoReact } from "react-icons/io5";
import { SiFigma } from "react-icons/si";
import { FaLocationDot, FaBriefcase, FaDownload, FaRulerCombined } from "react-icons/fa6";
import { useContactModal } from "../../context/ContactModalContext";
import { PREMIUM_EASE } from "../../lib/animations";
import { SITE_CONFIG } from "../../data/site";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: PREMIUM_EASE },
  },
};

function Sticker({
  children,
  className,
  float,
  duration,
  delay,
}: {
  children: ReactNode;
  className: string;
  float: number[];
  duration: number;
  delay: number;
}) {
  return (
    <motion.div
      className={`absolute z-20 ${className}`}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4, ease: PREMIUM_EASE }}
    >
      <motion.div
        animate={{ y: float }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-border-default bg-surface-card/95 backdrop-blur-xs px-2.5 py-1 text-[10px] font-semibold text-text-primary shadow-lg shadow-black/5 sm:px-3 sm:py-1.5 sm:text-[11px] md:text-xs"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function Portrait() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15, ease: PREMIUM_EASE }}
      className="relative mx-auto w-[240px] sm:w-[260px] md:w-[320px]"
    >
      {/* offset outline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 rounded-t-[999px] rounded-b-3xl border-2 border-primary/30 -z-10"
      />

      {/* arch photo */}
      <div className="relative z-10 aspect-[4/5] rounded-t-[999px] rounded-b-3xl bg-brand-gradient p-[3px] shadow-xl">
        <div className="relative h-full w-full overflow-hidden rounded-t-[999px] rounded-b-[22px] bg-surface-card">
          <Image
            src="/images/about/me.webp"
            alt={SITE_CONFIG.name}
            fill
            priority
            sizes="(min-width: 768px) 320px, (min-width: 640px) 260px, 240px"
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* slow spinning dashed ring */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-3 -top-5 sm:-right-8 sm:-top-8 md:-right-10 h-16 w-16 sm:h-24 sm:w-24 md:h-28 md:w-28 rounded-full border-2 border-dashed border-primary/30 -z-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Top Left: UI Engineering (floats outside above shoulder, well clear of hair/face) */}
      <Sticker
        className="-left-4 sm:-left-6 md:-left-12 top-2 sm:top-6 md:top-14"
        float={[0, -9, 0]}
        duration={5}
        delay={0.35}
      >
        <FaRulerCombined className="text-primary" /> UI Engineering
      </Sticker>

      {/* Mid/Lower Right: React · Next.js (floats on right shoulder edge, completely clear of face) */}
      <Sticker
        className="-right-4 sm:-right-6 md:-right-12 bottom-14 sm:bottom-18 md:bottom-auto md:top-[52%]"
        float={[0, 9, 0]}
        duration={6}
        delay={0.45}
      >
        <IoLogoReact className="text-sky-500" /> React · Next.js
      </Sticker>

      {/* Bottom Left: Figma */}
      <Sticker
        className="-left-3 sm:-left-5 md:-left-10 bottom-3 sm:bottom-5 md:bottom-8"
        float={[0, -7, 0]}
        duration={5.5}
        delay={0.55}
      >
        <SiFigma className="text-red-500" /> Figma
      </Sticker>
    </motion.div>
  );
}

export default function AboutHero() {
  const { openModal } = useContactModal();

  return (
    <section
      aria-label="Introduction"
      className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center text-center lg:items-start lg:text-left"
      >
        <motion.div
          variants={item}
          className="mb-5 inline-flex items-center gap-2 text-xs font-medium text-text-body md:text-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping motion-reduce:animate-none rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Open to work · Remote or on-site across India
        </motion.div>

        {/* h1 stays static so it never delays LCP */}
        <h1 className="text-3xl font-semibold leading-[1.08] tracking-tight text-text-primary sm:text-4xl lg:text-5xl xl:text-[56px]">
          Design thinking,
          <span className="mt-1.5 block text-brand-gradient">
            built for production.
          </span>
        </h1>

        <motion.p
          variants={item}
          className="mt-5 max-w-lg text-sm leading-relaxed text-text-body sm:text-base"
        >
          I’m Aswanth, a UI Developer and Designer from Kozhikode, Kerala,
          with a BSc in Computer Science. I turn Figma design systems into
          fast, accessible React and Next.js applications—sweating spacing,
          states, and visual consistency.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
        >
          <button
            onClick={openModal}
            className="btn-primary inline-flex items-center gap-2 rounded-md px-6 py-2.5 text-sm font-semibold transition-all duration-300"
          >
            Get in Touch
            <MdOutlineArrowOutward className="text-base" />
          </button>

          <a
            href={SITE_CONFIG.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            download="Aswanth_UP_Resume.pdf"
            className="group inline-flex items-center gap-2 rounded-md border border-border-default bg-surface-card px-5 py-2.5 text-sm font-medium text-text-primary transition-all duration-300 hover:border-border-strong hover:bg-surface-muted"
          >
            <FaDownload className="text-xs text-text-muted transition-transform group-hover:-translate-y-0.5" />
            <span>Download Resume</span>
          </a>
        </motion.div>

        <motion.ul
          variants={item}
          className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-text-muted lg:justify-start"
        >
          <li className="flex items-center gap-2">
            <FaLocationDot aria-hidden="true" className="text-primary" />
            {SITE_CONFIG.location}
          </li>
          <li className="flex items-center gap-2">
            <FaBriefcase aria-hidden="true" className="text-primary" />
            {SITE_CONFIG.experienceYears} years in UI
          </li>
        </motion.ul>
      </motion.div>

      <Portrait />
    </section>
  );
}
