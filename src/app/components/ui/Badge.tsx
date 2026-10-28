"use client";

import React, { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { SPRING_SMOOTH } from "../../lib/animations";

export interface BadgeProps extends HTMLMotionProps<"span"> {
  variant?: "beacon" | "pill" | "subtle" | "outline";
  beaconColor?: "emerald" | "blue" | "amber";
  rounded?: "sm" | "md" | "lg";
  children: ReactNode;
  icon?: ReactNode;
  interactive?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "pill",
  beaconColor = "emerald",
  rounded = "md",
  children,
  icon,
  interactive = false,
  className = "",
  ...props
}) => {
  const roundedClasses = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
  }[rounded];

  const beaconColors = {
    emerald: {
      ping: "bg-emerald-400",
      dot: "bg-emerald-500",
      text: "text-emerald-700",
      border: "border-emerald-200/60",
      bg: "bg-emerald-50/50",
    },
    blue: {
      ping: "bg-blue-400",
      dot: "bg-blue-500",
      text: "text-blue-700",
      border: "border-blue-200/60",
      bg: "bg-blue-50/50",
    },
    amber: {
      ping: "bg-amber-400",
      dot: "bg-amber-500",
      text: "text-amber-700",
      border: "border-amber-200/60",
      bg: "bg-amber-50/50",
    },
  }[beaconColor];

  const variantClasses = {
    beacon: `bg-white/90 border border-gray-200/80 text-gray-700 backdrop-blur-md shadow-2xs`,
    pill: `bg-white/80 border border-gray-200/80 text-gray-700 backdrop-blur-sm shadow-2xs`,
    subtle: `${beaconColors.bg} border ${beaconColors.border} ${beaconColors.text}`,
    outline: `bg-transparent border border-gray-200 text-gray-600`,
  }[variant];

  return (
    <motion.span
      whileHover={interactive ? { y: -2, scale: 1.03, transition: SPRING_SMOOTH } : undefined}
      className={`
        inline-flex items-center gap-2
        px-3 py-1.5 ${roundedClasses} text-xs font-medium
        ${interactive ? "cursor-pointer" : "cursor-default"}
        ${variantClasses}
        ${className}
      `}
      {...props}
    >
      {variant === "beacon" && (
        <span className="relative flex h-2 w-2 shrink-0">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full ${beaconColors.ping} opacity-75`}
          />
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${beaconColors.dot}`}
          />
        </span>
      )}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </motion.span>
  );
};
