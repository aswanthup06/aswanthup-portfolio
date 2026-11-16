"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { PREMIUM_EASE } from "../../lib/animations";
import { ABOUT_STATS } from "../../data/about";

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

export default function AboutStats() {
  return (
    <motion.dl
      variants={container}
      {...inView}
      className="mt-14 md:mt-20 grid grid-cols-2 gap-y-8 border-y border-border-default py-8 lg:grid-cols-4 lg:divide-x lg:divide-border-default"
    >
      {ABOUT_STATS.map((s) => (
        <motion.div
          key={s.label}
          variants={item}
          className="px-4 text-center lg:px-8 lg:text-left lg:first:pl-0"
        >
          <dt className="text-4xl font-black tracking-tight tabular-nums text-text-primary md:text-5xl">
            {s.to}
            {s.suffix}
          </dt>
          <dd className="mt-1 text-sm font-medium text-text-muted">
            {s.label}
          </dd>
        </motion.div>
      ))}
    </motion.dl>
  );
}
