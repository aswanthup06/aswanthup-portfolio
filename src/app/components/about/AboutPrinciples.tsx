"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { PREMIUM_EASE } from "../../lib/animations";
import { PRINCIPLES } from "../../data/about";
import SectionHeading from "../ui/SectionHeading";

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

const inView = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.15 },
} as const;

export default function AboutPrinciples() {
  return (
    <section aria-labelledby="principles-heading" className="mt-16 md:mt-24 lg:mt-28">
      <SectionHeading
        kicker="How I work"
        align="center"
        title="Engineering principles,"
        highlight="applied to UI"
        id="principles-heading"
      />

      <motion.div
        variants={container}
        {...inView}
        className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8"
      >
        {PRINCIPLES.map(({ tag, title, text }, i) => (
          <motion.article key={title} variants={item}>
            <span className="font-mono text-xs font-bold text-primary">
              0{i + 1}
            </span>

            <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-primary">
              {tag}
            </p>
            <h3 className="mt-1 text-lg font-bold text-text-primary">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-body">
              {text}
            </p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
