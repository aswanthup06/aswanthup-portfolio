import { Variants, Transition } from "framer-motion";

/**
 * Premium Motion Design Tokens
 * Inspired by Linear, Apple, and Vercel design systems.
 */

// Signature deceleration curves
export const PREMIUM_EASE = [0.16, 1, 0.3, 1] as const;
export const SMOOTH_EASE = [0.25, 0.1, 0.25, 1.0] as const;

// Physical spring transition presets
export const SPRING_BOUNCY: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 25,
};

export const SPRING_SMOOTH: Transition = {
  type: "spring",
  stiffness: 280,
  damping: 24,
  mass: 0.8,
};

export const SPRING_GENTLE: Transition = {
  type: "spring",
  stiffness: 180,
  damping: 22,
};

// 1. Fluid Stagger Containers
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
};

// 2. Cinematic Blur + Fade Up Reveal
export const blurFadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: PREMIUM_EASE,
    },
  },
};

// 3. Crisp Standard Fade Up (snappy deceleration)
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: PREMIUM_EASE,
    },
  },
};

// 4. Subtle Pop-In / Scale Reveal (for badges, cards, metrics)
export const popIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: PREMIUM_EASE,
    },
  },
};

// 5. Fade In & Drift Left / Right
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, ease: PREMIUM_EASE },
  },
};

export const driftLeft: Variants = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: PREMIUM_EASE },
  },
};

export const driftRight: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: PREMIUM_EASE },
  },
};

// 6. Interactive Hover & Tap Physics
export const cardHover = {
  y: -6,
  scale: 1.012,
  transition: SPRING_SMOOTH,
};

export const buttonTap = {
  scale: 0.96,
  transition: SPRING_BOUNCY,
};

// Backward-compatible exports
export const stagger = staggerContainer;
export const containerVariants = staggerContainer;
export const itemVariants = fadeUp;
