"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { Sparkles } from "lucide-react";
import { PREMIUM_EASE } from "../../lib/animations";
import { TOOLKIT_GROUPS } from "../../data/about";
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

const hover = { y: -4, transition: { duration: 0.25 } };

const inView = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.15 },
} as const;

const card =
  "bg-surface-card border border-border-default rounded-xl transition-shadow duration-300 hover:shadow-xl";

export default function AboutWorkbench() {
  return (
    <section aria-labelledby="workbench-heading" className="mt-16 md:mt-24">
      <SectionHeading
        kicker="Tech Stack"
        align="center"
        title="Tools & modern"
        highlight="AI workflow"
        sub="Production-tested frontend technologies and modern AI tooling used daily to ship clean, maintainable interfaces."
        id="workbench-heading"
      />

      <motion.div
        variants={container}
        {...inView}
        className="mt-10 sm:mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {TOOLKIT_GROUPS.map((group) => {
          const isHighlight = Boolean(group.highlight);

          return (
            <motion.div
              key={group.title}
              variants={item}
              whileHover={hover}
              className={`${card} relative flex flex-col justify-between p-5 sm:p-6 ${
                isHighlight
                  ? "!border-2 !border-primary shadow-sm md:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              {isHighlight && (
                <div className="absolute -top-[1px] -translate-y-1/2 right-4 sm:right-6 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 sm:py-1.5 text-xs font-semibold text-[var(--color-btn-primary-text,#ffffff)] shadow-sm select-none">
                  <Sparkles className="h-3.5 w-3.5 shrink-0" />
                  Productivity Multiplier
                </div>
              )}

              <div>
                <div
                  className={`flex items-center justify-between gap-2 ${
                    isHighlight ? "pr-44 sm:pr-48 md:pr-0 lg:pr-48" : ""
                  }`}
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    {group.kicker}
                  </span>
                </div>

                <h3 className="mt-2 text-xl font-bold text-text-primary">
                  {group.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-text-body">
                  {group.desc}
                </p>

                <ul
                  className={`mt-6 divide-y divide-border-subtle/70 ${
                    isHighlight
                      ? "md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-3 md:divide-y-0 lg:block lg:divide-y lg:divide-border-subtle/70"
                      : ""
                  }`}
                >
                  {group.items.map(({ name, role, Icon, pill, textColor }) => (
                    <li
                      key={name}
                      className="flex items-start sm:items-center justify-between gap-3 py-2.5 first:pt-0 last:pb-0 md:py-2 lg:py-2.5"
                    >
                      <div className="flex min-w-0 items-start sm:items-center gap-3">
                        <span className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center text-text-secondary mt-0.5 sm:mt-0">
                          <Icon className="text-base" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-text-primary">
                            {name}
                          </p>
                          <p className="text-[11px] leading-snug text-text-muted mt-0.5">
                            {role}
                          </p>
                        </div>
                      </div>

                      {pill && (
                        <span
                          className={`shrink-0 text-[11px] font-semibold text-right ${
                            textColor || "text-text-muted"
                          }`}
                        >
                          {pill}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {isHighlight && (
                <p className="mt-6 border-t border-border-subtle pt-4 text-[11px] italic leading-relaxed text-text-muted">
                  &ldquo;I treat AI as a high-precision power tool: it doesn’t replace foundational knowledge, but it multiplies speed and shortens the loop from idea to production.&rdquo;
                </p>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
