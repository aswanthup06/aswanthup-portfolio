"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
import { PREMIUM_EASE } from "../../lib/animations";
import { useContactModal } from "../../context/ContactModalContext";
import CopyButton from "../ui/CopyButton";

const item: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: PREMIUM_EASE },
  },
};

const reveal = {
  variants: item,
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.15 },
} as const;

export default function ProjectsCta() {
  const { openModal } = useContactModal();

  return (
    <motion.section
      {...reveal}
      aria-labelledby="cta-heading"
      className="mt-16 md:mt-24 flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between"
    >
      <div className="max-w-2xl text-left">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary">
          Have a project in mind?
        </p>
        <h2
          id="cta-heading"
          className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-text-primary"
        >
          Let&apos;s ship interfaces{" "}
          <span className="text-brand-gradient">
            people enjoy using.
          </span>
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-text-body md:text-base">
          Open for full-time UI development, design system implementation,
          and product UI roles across India or remote.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3 shrink-0">
        <button
          type="button"
          onClick={openModal}
          className="btn-primary inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-medium transition-all duration-300 cursor-pointer"
        >
          Get in Touch
          <MdOutlineArrowOutward aria-hidden="true" className="text-base" />
        </button>
        <CopyButton />
      </div>
    </motion.section>
  );
}
