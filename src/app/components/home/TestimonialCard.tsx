

"use client";

import { motion } from "framer-motion";

interface Testimonial {
  avatar: string;
  quote: string;
  name: string;
  role: string;
}

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="bg-surface-card rounded-xl border border-border-default p-6 flex flex-col h-full hover:shadow-md transition-shadow duration-200"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-4"
      >
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover"
        />
      </motion.div>

      <p className="text-sm text-text-body leading-relaxed flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="mt-auto pt-6">
        <div className="w-full h-px bg-border-subtle mb-4" />

        <p className="text-sm font-semibold text-text-primary">
          {testimonial.name}
        </p>

        <p className="text-xs text-text-muted mt-0.5">
          {testimonial.role}
        </p>
      </div>
    </motion.div>
  );
}

