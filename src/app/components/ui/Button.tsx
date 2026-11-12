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
    primary: "btn-primary",
    secondary:
      "bg-surface-card/85 hover:bg-surface-card text-text-secondary hover:text-primary border border-border-default hover:border-border-accent backdrop-blur-sm shadow-xs",
    outline:
      "bg-transparent border border-border-strong text-text-secondary hover:bg-surface-subtle hover:border-primary hover:text-primary",
    ghost:
      "bg-transparent text-text-body hover:text-primary hover:bg-primary-subtle",
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
