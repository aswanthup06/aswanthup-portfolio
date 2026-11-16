"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { MdOutlineArrowOutward, MdArrowForward } from "react-icons/md";
import { IoLogoReact } from "react-icons/io5";
import { SiFigma } from "react-icons/si";
import { PREMIUM_EASE } from "../../lib/animations";
import { FEATURED, LIVE_SITES, DESIGN_WORK } from "../../data/projects";
import { useContactModal } from "../../context/ContactModalContext";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: PREMIUM_EASE },
  },
};

function Stat({
  to,
  suffix = "",
  label,
}: {
  to: number;
  suffix?: string;
  label: string;
}) {
  return (
    <div>
      <dt className="text-2xl font-bold tabular-nums text-text-primary md:text-3xl">
        {to}
        <span className="text-primary">{suffix}</span>
      </dt>
      <dd className="mt-0.5 text-xs text-text-body md:text-sm">{label}</dd>
    </div>
  );
}

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
      className={`absolute z-30 ${className}`}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4, ease: PREMIUM_EASE }}
    >
      <motion.div
        animate={{ y: float }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-border-default bg-surface-card/95 backdrop-blur-xs px-2.5 py-1 text-[10px] font-semibold text-text-primary shadow-md shadow-black/5 sm:px-3 sm:py-1.5 sm:text-xs"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

const SHOT_STYLE = [
  {
    // Foreground card (Zenoway)
    pos: "bottom-1 right-[4%] sm:bottom-0 sm:right-[6%] z-20",
    rotate: 2,
    float: [0, -6, 0],
    d: 6,
    delay: 0.35,
  },
  {
    // Middle card (Happy ERP)
    pos: "left-1 top-[24%] sm:left-2 sm:top-[26%] z-10",
    rotate: -4,
    float: [0, 5, 0],
    d: 7,
    delay: 0.2,
  },
  {
    // Back card (NVOCC)
    pos: "right-1 top-1 sm:right-2 sm:top-0 z-0",
    rotate: 4,
    float: [0, -5, 0],
    d: 8,
    delay: 0.05,
  },
];

function ShotStack() {
  const shots = FEATURED.slice(0, 3);

  return (
    <div
      aria-hidden="true"
      className="relative mx-auto h-[330px] w-full max-w-[340px] sm:h-[390px] sm:max-w-[390px] lg:h-[430px] lg:max-w-[420px]"
    >
      {shots.map((p, i) => {
        const s = SHOT_STYLE[i];
        return (
          <motion.div
            key={p.slug}
            className={`absolute ${s.pos} w-[60%] sm:w-[58%]`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: s.delay, ease: PREMIUM_EASE }}
          >
            <motion.div
              style={{ rotate: s.rotate }}
              animate={{ y: s.float }}
              transition={{
                duration: s.d,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border-default bg-surface-muted shadow-xl shadow-black/10"
            >
              <Image
                src={p.image}
                alt=""
                fill
                priority={i < 2}
                sizes="(min-width: 1280px) 260px, (min-width: 1024px) 240px, (min-width: 640px) 240px, 60vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        );
      })}

      {/* slow spinning dashed ring */}
      <motion.div
        className="absolute right-2 -top-3 sm:-right-2 sm:-top-5 h-16 w-16 sm:h-20 sm:w-20 rounded-full border-2 border-dashed border-primary/30 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <Sticker
        className="left-1 sm:-left-2 md:-left-4 bottom-5 sm:bottom-9"
        float={[0, -7, 0]}
        duration={5}
        delay={0.9}
      >
        <SiFigma className="text-red-500" /> Designed in Figma
      </Sticker>

      <Sticker
        className="right-1 sm:-right-1 md:-right-3 top-[46%] sm:top-[48%]"
        float={[0, 7, 0]}
        duration={6}
        delay={1.1}
      >
        <IoLogoReact className="text-sky-500" /> Shipped in React
      </Sticker>

      <Sticker
        className="left-2 top-1 sm:left-3 sm:top-2"
        float={[0, -5, 0]}
        duration={5.5}
        delay={1.3}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        {FEATURED.length} case studies
      </Sticker>
    </div>
  );
}

export default function ProjectsHero() {
  const { openModal } = useContactModal();

  return (
    <section
      aria-label="Introduction"
      className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 overflow-x-clip py-4 sm:py-6"
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
            <span className="absolute inline-flex h-full w-full animate-ping motion-reduce:animate-none rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Selected Work · Design to production
        </motion.div>

        {/* h1 stays static so it never delays LCP */}
        <h1 className="text-3xl font-semibold leading-[1.08] tracking-tight text-text-primary sm:text-4xl lg:text-5xl xl:text-[56px]">
          Products I designed
          <span className="mt-1.5 block text-brand-gradient">
            and built.
          </span>
        </h1>

        <motion.p
          variants={item}
          className="mt-5 max-w-lg text-sm leading-relaxed text-text-body sm:text-base"
        >
          Case studies, live client sites, and visual systems—showing both the
          Figma architecture and the shipped React &amp; Next.js code.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
        >
          <a
            href="#case-studies"
            className="btn-primary inline-flex items-center gap-2 rounded-md px-6 py-2.5 text-sm font-medium transition-all duration-300"
          >
            View case studies
            <MdArrowForward aria-hidden="true" className="rotate-90 text-base" />
          </a>

          <button
            type="button"
            onClick={openModal}
            className="inline-flex items-center gap-2 rounded-md border border-border-default bg-surface-card px-5 py-2.5 text-sm font-medium text-text-primary transition-colors hover:bg-surface-muted cursor-pointer"
          >
            Get in Touch
            <MdOutlineArrowOutward aria-hidden="true" className="text-base" />
          </button>
        </motion.div>

        {/* Proof strip */}
        <motion.dl
          variants={item}
          className="mx-auto mt-8 grid w-full max-w-md grid-cols-3 gap-3 sm:gap-6 lg:mx-0"
        >
          <Stat to={FEATURED.length} label="Case studies" />
          <Stat to={LIVE_SITES.length} label="Live websites" />
          <Stat to={DESIGN_WORK.length} label="Visual systems" />
        </motion.dl>
      </motion.div>

      <ShotStack />
    </section>
  );
}
