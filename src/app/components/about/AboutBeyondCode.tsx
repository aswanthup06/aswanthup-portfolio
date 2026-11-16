"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { PREMIUM_EASE } from "../../lib/animations";
import { EARLY_AWARDS } from "../../data/about";

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

export default function AboutBeyondCode() {
  return (
    <motion.section
      variants={item}
      {...inView}
      aria-labelledby="beyond-code-heading"
      className="mt-16 md:mt-20"
    >
      <div className="rounded-2xl border border-border-default bg-surface-subtle p-6 sm:p-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
            <span>Beyond Code</span>
            <span aria-hidden="true" className="text-border-strong">
              ·
            </span>
            <span className="text-text-muted font-medium">2013 – 2016</span>
          </div>

          <h2
            id="beyond-code-heading"
            className="mt-2 text-lg sm:text-xl font-bold text-text-primary"
          >
            Early visual &amp; drawing background
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-text-body">
            Before moving into software, I spent my school years competing in
            fine arts and wood carving—building the eye for proportion and
            detail I bring to UI design today.
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {EARLY_AWARDS.map((award) => (
            <div
              key={award.title}
              className="rounded-xl border border-border-default bg-surface-card p-4"
            >
              <p className="text-sm font-bold text-text-primary">
                {award.title}
              </p>
              <p className="mt-1 text-xs text-text-muted leading-relaxed">
                {award.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
