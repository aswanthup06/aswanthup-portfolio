"use client";

import Image from "next/image";
import { motion, MotionConfig } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa6";

import { PREMIUM_EASE } from "../../lib/animations";

interface Testimonial {
  avatar: string;
  quote: string;
  name: string;
  role: string;
}

export default function TestimonialCard({
  testimonial,
  index = 0,
}: {
  testimonial: Testimonial;
  /** Position in the list; used only to stagger the entrance. */
  index?: number;
}) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.figure
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ y: -4, transition: { duration: 0.25 } }}
        transition={{
          duration: 0.45,
          delay: Math.min(index, 4) * 0.08,
          ease: PREMIUM_EASE,
        }}
        className="relative flex h-full flex-col overflow-hidden rounded-xl border border-border-default bg-surface-card p-6 transition-shadow duration-300 hover:shadow-xl"
      >
        {/* decorative quote mark */}
        <FaQuoteLeft
          aria-hidden="true"
          className="absolute right-5 top-5 text-4xl text-primary/10"
        />

        <div className="mb-5 flex items-center gap-4">
          <div className="rounded-full bg-gradient-to-br from-primary to-cyan-400 p-[2px]">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              width={56}
              height={56}
              className="h-14 w-14 rounded-full border-2 border-white object-cover"
            />
          </div>
        </div>

        <blockquote className="flex-1 text-sm leading-relaxed text-text-body">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        <figcaption className="mt-auto pt-6">
          <div className="mb-4 h-px w-full bg-border-subtle" />

          <p className="text-sm font-semibold text-text-primary">
            {testimonial.name}
          </p>

          <p className="mt-0.5 text-xs text-text-muted">{testimonial.role}</p>
        </figcaption>
      </motion.figure>
    </MotionConfig>
  );
}