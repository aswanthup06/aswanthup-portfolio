"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring, type Variants } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
import { PREMIUM_EASE } from "../../lib/animations";
import { CHAPTERS, KIND_CONFIG } from "../../data/about";
import type { ChapterKind } from "@/types";

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

export default function AboutJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.6"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      aria-labelledby="story-heading"
      className="mt-16 md:mt-24 grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-16"
    >
      <div className="lg:sticky lg:top-28 lg:self-start">
        <motion.div variants={item} {...inView}>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary">
            My Journey
          </p>
          <h2
            id="story-heading"
            className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-text-primary"
          >
            From fundamentals{" "}
            <span className="font-medium text-text-muted">to production UI</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-text-body">
            BSc Computer Science graduate building component systems, responsive
            web apps, and Figma-to-code interfaces.
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {(Object.keys(KIND_CONFIG) as ChapterKind[]).map((k) => (
              <li
                key={k}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${KIND_CONFIG[k].chip}`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${KIND_CONFIG[k].dot}`} />
                {KIND_CONFIG[k].label}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div ref={ref} className="relative pl-8 sm:pl-10">
        {/* track + scroll-filled line */}
        <div
          aria-hidden="true"
          className="absolute bottom-2 left-2 sm:left-3 top-2 w-0.5 bg-border-default"
        >
          <motion.div
            style={{ scaleY }}
            className="h-full w-full origin-top bg-gradient-to-b from-primary to-primary-secondary"
          />
        </div>

        <ol className="space-y-12">
          {CHAPTERS.map((c) => (
            <motion.li
              key={c.title}
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="relative"
            >
              {/* dot */}
              <span
                aria-hidden="true"
                className="absolute -left-7 sm:-left-9 top-1 flex h-4 w-4 items-center justify-center"
              >
                {c.now && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/40" />
                )}
                <span
                  className={`relative h-4 w-4 rounded-full border-4 border-surface-card shadow-sm ring-2 ring-primary/20 ${KIND_CONFIG[c.kind].dot}`}
                />
              </span>

              <article>
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-xs font-medium text-text-muted">
                    {c.period}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${KIND_CONFIG[c.kind].chip}`}
                  >
                    {KIND_CONFIG[c.kind].label}
                  </span>
                  {c.now && (
                    <span className="rounded-full bg-primary-subtle px-2.5 py-0.5 text-xs font-semibold text-primary">
                      Now
                    </span>
                  )}
                </div>

                <h3 className="mt-3 text-xl font-bold text-text-primary">
                  {c.title}
                </h3>
                <p className="text-sm font-medium text-text-muted">
                  {c.org}
                  {c.place ? ` · ${c.place}` : ""}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-text-body">
                  {c.text}
                </p>

                {c.points && (
                  <ul className="mt-3 space-y-1.5">
                    {c.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-2 text-sm leading-relaxed text-text-body"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                )}

                {c.sub && (
                  <div className="mt-4 rounded-lg border border-dashed border-border-default bg-surface-muted/60 p-4">
                    <p className="text-xs font-semibold text-primary">
                      {c.sub.period} · {c.sub.place}
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-text-primary">
                      {c.sub.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-text-body">
                      {c.sub.text}
                    </p>
                  </div>
                )}

                {(c.tags || c.links) && (
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {c.tags?.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-surface-muted px-2.5 py-1 text-xs font-medium text-text-body"
                      >
                        {t}
                      </span>
                    ))}
                    {c.links?.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="inline-flex items-center gap-1 rounded-md border border-border-default px-2.5 py-1 text-xs font-semibold text-primary transition-colors hover:bg-surface-muted"
                      >
                        {l.label}
                        <MdOutlineArrowOutward />
                      </Link>
                    ))}
                  </div>
                )}
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
