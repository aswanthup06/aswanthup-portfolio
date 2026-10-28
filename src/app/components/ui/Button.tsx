"use client";

import React, { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { SPRING_SMOOTH, SPRING_BOUNCY } from "../../lib/animations";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  rounded?: "sm" | "md" | "lg";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  children: ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  rounded = "md",
  icon,
  iconPosition = "right",
  children,
  fullWidth = false,
  className = "",
  disabled,
  ...props
}) => {
  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs h-8",
    md: "px-5 py-2.5 text-sm h-10",
    lg: "px-7 py-3 text-base h-12",
  }[size];

  const roundedClasses = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
  }[rounded];

  const variantClasses = {
    primary:
      "bg-linear-to-b from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(0,0,0,0.18)] shadow-blue-500/10",
    secondary:
      "bg-white/80 hover:bg-white text-gray-700 hover:text-blue-600 border border-gray-200/80 hover:border-blue-300 backdrop-blur-sm shadow-xs",
    outline:
      "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-blue-400 hover:text-blue-600",
    ghost:
      "bg-transparent text-gray-600 hover:text-blue-600 hover:bg-blue-50/60",
  }[variant];

  return (
    <motion.button
      whileHover={
        disabled
          ? undefined
          : { y: -2, scale: 1.025, transition: SPRING_SMOOTH }
      }
      whileTap={
        disabled
          ? undefined
          : { scale: 0.96, transition: SPRING_BOUNCY }
      }
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2
        ${roundedClasses} font-medium transition-colors
        cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed
        ${fullWidth ? "w-full" : "w-auto"}
        ${sizeClasses}
        ${variantClasses}
        ${className}
      `}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="shrink-0">{icon}</span>
      )}
    </motion.button>
  );
};
