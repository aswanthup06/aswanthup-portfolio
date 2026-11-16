"use client";

import React, { ReactNode } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useContactModal } from "../../context/ContactModalContext";

export interface ContactModalButtonProps {
  children?: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  showIcon?: boolean;
}

export const ContactModalButton: React.FC<ContactModalButtonProps> = ({
  children = "Get in Touch",
  className = "",
  variant = "primary",
  size = "md",
  icon = <MdOutlineArrowOutward aria-hidden="true" className="text-base" />,
  showIcon = true,
}) => {
  const { openModal } = useContactModal();

  const variantClasses = {
    primary: "btn-primary",
    secondary:
      "border border-border-default bg-surface-card text-text-primary hover:bg-surface-muted",
    outline:
      "border border-border-default bg-transparent text-text-primary hover:bg-surface-muted",
  }[variant];

  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-6 py-3 text-sm font-semibold",
  }[size];

  return (
    <button
      type="button"
      onClick={openModal}
      className={`
        inline-flex items-center justify-center gap-2 rounded-md
        font-medium transition-all duration-300 cursor-pointer
        ${sizeClasses}
        ${variantClasses}
        ${className}
      `.trim()}
    >
      <span>{children}</span>
      {showIcon && icon}
    </button>
  );
};

export default ContactModalButton;
