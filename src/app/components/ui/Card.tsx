"use client";

import React, { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { SPRING_SMOOTH } from "../../lib/animations";

export interface CardProps extends HTMLMotionProps<"div"> {
  variant?: "glass" | "solid" | "subtle";
  rounded?: "md" | "lg" | "xl";
  interactive?: boolean;
  children: ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = "glass",
  rounded = "xl",
  interactive = false,
  children,
  className = "",
  ...props
}) => {
  const roundedClasses = {
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
  }[rounded];

  const variantClasses = {
    glass: "bg-white/80 backdrop-blur-md border border-gray-200/80 shadow-xs",
    solid: "bg-white border border-gray-200 shadow-sm",
    subtle: "bg-gray-50/70 border border-gray-100",
  }[variant];

  return (
    <motion.div
      whileHover={
        interactive
          ? {
              y: -5,
              transition: SPRING_SMOOTH,
            }
          : undefined
      }
      className={`
        ${roundedClasses} p-6 transition-all duration-300
        ${interactive ? "hover:shadow-xl hover:border-blue-400/40 cursor-pointer" : ""}
        ${variantClasses}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
};
