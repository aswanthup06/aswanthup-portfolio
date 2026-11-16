"use client";

import React, { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { fadeUp, blurFadeUp } from "../../lib/animations";

export interface SectionHeadingProps {
  id?: string;
  badge?: ReactNode;
  kicker?: ReactNode;
  title: ReactNode;
  highlight?: ReactNode;
  subtitle?: ReactNode;
  sub?: ReactNode;
  note?: ReactNode;
  action?: ReactNode;
  align?: "center" | "left";
  layout?: "stacked" | "split";
  className?: string;
  variants?: Variants;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  id,
  badge,
  kicker = badge,
  title,
  highlight,
  subtitle,
  sub = subtitle,
  note,
  action,
  align = "center",
  layout = "stacked",
  className = "",
  variants = fadeUp,
}) => {
  const isSplit = layout === "split" || Boolean(note || action);

  if (isSplit) {
    return (
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className={`mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end md:mb-10 ${className}`}
      >
        <div className="max-w-2xl">
          {kicker && (
            <div className="mb-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary">
              {typeof kicker === "string" ? <span>{kicker}</span> : kicker}
            </div>
          )}
          <h2
            id={id}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-text-primary"
          >
            {title}
            {highlight && (
              <>
                {" "}
                <span className="font-medium text-text-muted">{highlight}</span>
              </>
            )}
          </h2>
          {sub && (
            <p className="mt-3 text-sm leading-relaxed text-text-body md:text-base">
              {sub}
            </p>
          )}
        </div>

        {note && (
          <p className="text-xs font-medium text-text-muted md:text-sm">
            {note}
          </p>
        )}
        {action && <div className="shrink-0">{action}</div>}
      </motion.div>
    );
  }

  const alignClasses =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={`max-w-2xl mb-10 md:mb-12 ${alignClasses} ${className}`}
    >
      {kicker && (
        <div className="inline-block mb-2.5">
          {typeof kicker === "string" ? (
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary">
              {kicker}
            </p>
          ) : (
            kicker
          )}
        </div>
      )}

      <motion.h2
        id={id}
        variants={blurFadeUp}
        className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-text-primary leading-tight"
      >
        {title}
        {highlight && (
          <>
            {" "}
            <span className="font-medium text-text-muted">{highlight}</span>
          </>
        )}
      </motion.h2>

      {sub && (
        <motion.p
          variants={fadeUp}
          className="text-text-body text-sm md:text-base mt-3 leading-relaxed"
        >
          {sub}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
