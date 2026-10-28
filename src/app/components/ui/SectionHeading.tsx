"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, blurFadeUp } from "../../lib/animations";

export interface SectionHeadingProps {
  badge?: ReactNode;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
}) => {
  const alignClasses = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl mb-14 ${alignClasses} ${className}`}>
      {badge && (
        <motion.div variants={fadeUp} className="inline-block mb-3">
          {typeof badge === "string" ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-200/60 uppercase tracking-wider">
              {badge}
            </span>
          ) : (
            badge
          )}
        </motion.div>
      )}

      <motion.h2
        variants={blurFadeUp}
        className="text-2xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={fadeUp}
          className="text-gray-500 text-sm md:text-base mt-3 leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
