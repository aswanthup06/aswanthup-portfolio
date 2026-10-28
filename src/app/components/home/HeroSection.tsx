"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  motion,
  animate,
  MotionConfig,
  type Variants,
} from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
import {
  IoLogoReact,
  IoLogoCss3,
  IoLogoJavascript,
} from "react-icons/io5";
import {
  SiNextdotjs,
  SiFigma,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

import { useContactModal } from "../../context/ContactModalContext";
import { PREMIUM_EASE } from "../../lib/animations";
import { Button } from "../ui";

/* -------------------------------------------------------------------------- */
/*  Variants                                                                  */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/*  Hero                                                                      */
/* -------------------------------------------------------------------------- */

export default function HeroSection() {
  const { openModal } = useContactModal();

  return (
    // Respects the user's reduced-motion setting for all transform animations
    <MotionConfig reducedMotion="user">
      <section className="relative w-full overflow-x-clip pt-24 pb-8 md:pt-28 md:pb-12">
        <Backdrop />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
          {/* ------------------------------ Copy ------------------------------ */}
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
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Aswanth UP · UI Developer · Open to work
            </motion.div>

            {/* h1 is the LCP element: no hidden initial state, no delay */}
            <h1 className="text-4xl font-bold leading-[1.1] text-text-primary md:text-5xl lg:text-6xl">
              I design it in Figma,
              <span className="relative mt-1 block w-fit lg:mx-0 mx-auto">
                <span className="bg-gradient-to-r from-blue-600 via-primary to-cyan-500 bg-clip-text text-transparent">
                  then ship it in React.
                </span>
                <Underline />
              </span>
            </h1>

            <motion.p
              variants={item}
              className="mt-5 max-w-xl text-sm leading-relaxed text-text-body md:text-lg"
            >
              UI/UX design and clean, performant frontend code from one person.
              I turn complex workflows into intuitive web applications, from
              first sketch to production.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <Button
                onClick={openModal}
                size="md"
                icon={<MdOutlineArrowOutward className="text-base" />}
                className="px-6 shadow-md shadow-blue-500/20"
              >
                Get in Touch
              </Button>

              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-gray-400 hover:bg-gray-50"
              >
                View projects
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </motion.div>

            {/* Proof strip */}
            <motion.dl
              variants={item}
              className="mt-9 grid grid-cols-3 gap-6 border-t border-gray-200 pt-6 text-left"
            >
              <Stat to={3} suffix="+" label="Years building UI" />
              <Stat to={10} suffix="+" label="Flagship Projects" />
              <Stat to={99} suffix="%" label="Figma-to-code match" />
            </motion.dl>

            {/* Tech */}
            <motion.ul
              variants={item}
              className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-3 lg:justify-start"
            >
              {TECH.map(({ name, Icon }) => (
                <li
                  key={name}
                  className="flex items-center gap-1.5 text-sm font-medium text-text-body transition-colors hover:text-text-primary"
                >
                  <Icon aria-hidden="true" className="text-base" />
                  {name}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* ----------------------------- Graphic ---------------------------- */}
          <DesignToCode />
        </div>
      </section>
    </MotionConfig>
  );
}

const TECH = [
  { name: "React", Icon: IoLogoReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Figma", Icon: SiFigma },
];

/* -------------------------------------------------------------------------- */
/*  Background                                                                */
/* -------------------------------------------------------------------------- */

function Backdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 -top-32"
    >
      {/* dotted grid, faded at the edges */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(rgba(100,116,139,0.28) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(ellipse 80% 75% at 60% 30%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 75% at 60% 30%, black 30%, transparent 80%)",
        }}
      />
      {/* drifting colour blobs */}
      <motion.div
        className="absolute top-0 right-[8%] h-80 w-80 rounded-full bg-blue-400/25 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-[4%] h-64 w-64 rounded-full bg-cyan-300/25 blur-3xl"
        animate={{ x: [0, -24, 0], y: [0, -18, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Headline underline (draws itself)                                         */
/* -------------------------------------------------------------------------- */

function Underline() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 300 12"
      preserveAspectRatio="none"
      className="absolute -bottom-2 left-0 h-2.5 w-full text-primary"
      fill="none"
    >
      <motion.path
        d="M2 8 C 60 2, 120 11, 180 5 S 270 4, 298 7"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.55 }}
        transition={{ duration: 0.9, delay: 0.7, ease: PREMIUM_EASE }}
      />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Count-up stat                                                             */
/* -------------------------------------------------------------------------- */

function Stat({
  to,
  suffix,
  label,
}: {
  to: number;
  suffix: string;
  label: string;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, to, {
      duration: 1.4,
      delay: 0.5,
      ease: PREMIUM_EASE,
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [to]);

  return (
    <div>
      <dt className="text-2xl font-bold tabular-nums text-text-primary md:text-3xl">
        {value}
        <span className="text-primary">{suffix}</span>
      </dt>
      <dd className="mt-0.5 text-xs text-text-body md:text-sm">{label}</dd>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Right-hand graphic: design frame -> code window                           */
/* -------------------------------------------------------------------------- */

type Tok = { t: string; c: string };

const CODE: Tok[][] = [
  [
    { t: "const ", c: "text-pink-400" },
    { t: "Hero", c: "text-sky-300" },
    { t: " = () => {", c: "text-slate-300" },
  ],
  [
    { t: "  return ", c: "text-pink-400" },
    { t: "(", c: "text-slate-300" },
  ],
  [
    { t: "    <", c: "text-slate-400" },
    { t: "Section ", c: "text-emerald-300" },
    { t: "from", c: "text-amber-200" },
    { t: "=", c: "text-slate-400" },
    { t: '"figma"', c: "text-orange-300" },
    { t: ">", c: "text-slate-400" },
  ],
  [
    { t: "      <", c: "text-slate-400" },
    { t: "Pixel ", c: "text-emerald-300" },
    { t: "perfect ", c: "text-amber-200" },
    { t: "/>", c: "text-slate-400" },
  ],
  [
    { t: "    </", c: "text-slate-400" },
    { t: "Section", c: "text-emerald-300" },
    { t: ">", c: "text-slate-400" },
  ],
  [{ t: "  );", c: "text-slate-300" }],
  [{ t: "};", c: "text-slate-300" }],
];

function DesignToCode() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease: PREMIUM_EASE }}
      className="relative mx-auto h-[360px] w-full max-w-[520px] md:h-[440px]"
      aria-hidden="true"
    >
      {/* ---------------------------- Figma frame ---------------------------- */}
      <motion.div
        className="absolute left-0 top-4 w-[64%]"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="mb-1.5 flex items-center gap-1.5 text-[10px] font-medium text-blue-600 md:text-xs">
          <SiFigma className="text-red-500" />
          Hero / Desktop
          <span className="ml-auto text-blue-500/70">1440 × 900</span>
        </div>

        <div className="relative rounded-xl border-2 border-blue-500 bg-white p-3 shadow-xl shadow-blue-500/10 md:p-4">
          {/* selection handles */}
          {["-left-1 -top-1", "-right-1 -top-1", "-left-1 -bottom-1", "-right-1 -bottom-1"].map(
            (pos) => (
              <span
                key={pos}
                className={`absolute ${pos} h-2 w-2 rounded-[2px] border border-blue-500 bg-white`}
              />
            ),
          )}

          {/* tiny dashboard skeleton */}
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-md bg-gradient-to-br from-blue-500 to-cyan-400" />
            <div className="h-2 w-16 rounded-full bg-gray-200" />
            <div className="ml-auto h-2 w-8 rounded-full bg-gray-200" />
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="rounded-lg bg-gray-50 p-2"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.12, duration: 0.4 }}
              >
                <div className="h-1.5 w-6 rounded-full bg-gray-200" />
                <div className="mt-1.5 h-3 w-9 rounded bg-gray-300" />
              </motion.div>
            ))}
          </div>

          {/* bar chart */}
          <div className="mt-3 flex h-20 items-end gap-1.5 rounded-lg bg-gray-50 p-2 md:h-24">
            {[45, 70, 52, 88, 63, 95, 74].map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 origin-bottom rounded-sm bg-gradient-to-t from-blue-600 to-cyan-400"
                style={{ height: `${h}%` }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  delay: 0.9 + i * 0.08,
                  duration: 0.6,
                  ease: PREMIUM_EASE,
                }}
              />
            ))}
          </div>
        </div>

        {/* collaborator cursor */}
        <motion.div
          className="absolute left-[55%] top-[58%]"
          animate={{ x: [0, 28, -6, 0], y: [0, -18, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" className="text-primary drop-shadow">
            <path
              d="M4 3l16 7-7 2.5L10 20 4 3z"
              fill="currentColor"
              stroke="white"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <span className="ml-3 -mt-0.5 inline-block rounded-md rounded-tl-none bg-primary px-1.5 py-0.5 text-[10px] font-semibold text-white">
            Aswanth
          </span>
        </motion.div>
      </motion.div>

      {/* ------------------------- Connector (dashed) ------------------------ */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 520 440"
        preserveAspectRatio="none"
        fill="none"
      >
        <motion.path
          d="M300 200 C 380 220, 400 250, 360 290"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeDasharray="6 6"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 1, delay: 1.3, ease: PREMIUM_EASE }}
        />
      </svg>

      {/* ---------------------------- Code window ---------------------------- */}
      <motion.div
        className="absolute bottom-0 right-0 w-[70%]"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-2xl shadow-slate-900/30">
          <div className="flex items-center gap-1.5 border-b border-slate-800 px-3 py-2">
            <span className="h-2 w-2 rounded-full bg-red-400" />
            <span className="h-2 w-2 rounded-full bg-yellow-400" />
            <span className="h-2 w-2 rounded-full bg-green-400" />
            <span className="ml-2 font-mono text-[10px] text-slate-400">
              Hero.tsx
            </span>
          </div>

          <pre className="px-3 py-3 font-mono text-[10px] leading-5 md:text-xs md:leading-6">
            {CODE.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + i * 0.12, duration: 0.3 }}
                className="whitespace-pre"
              >
                {line.map((tok, j) => (
                  <span key={j} className={tok.c}>
                    {tok.t}
                  </span>
                ))}
                {i === CODE.length - 1 && (
                  <motion.span
                    className="ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 bg-sky-300"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                )}
              </motion.div>
            ))}
          </pre>
        </div>
      </motion.div>

      {/* --------------------------- Floating chips -------------------------- */}
      <Chip
        className="right-2 top-0 md:right-6"
        delay={1.0}
        float={{ y: [0, -10, 0] }}
        duration={5}
      >
        <IoLogoReact className="text-sky-500" /> React
      </Chip>

      <Chip
        className="-left-1 bottom-24 md:left-2"
        delay={1.2}
        float={{ y: [0, 10, 0] }}
        duration={6}
      >
        <SiTypescript className="text-blue-600" /> TypeScript
      </Chip>

      <Chip
        className="right-0 top-[46%]"
        delay={1.4}
        float={{ y: [0, -8, 0] }}
        duration={5.5}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
        99% match
      </Chip>
    </motion.div>
  );
}

function Chip({
  children,
  className,
  delay,
  float,
  duration,
}: {
  children: React.ReactNode;
  className: string;
  delay: number;
  float: { y: number[] };
  duration: number;
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4, ease: PREMIUM_EASE }}
    >
      <motion.div
        animate={float}
        transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-text-primary shadow-lg shadow-black/5 md:text-xs"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}