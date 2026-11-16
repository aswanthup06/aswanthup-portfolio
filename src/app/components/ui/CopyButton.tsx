"use client";

import React from "react";
import { Copy, Check } from "lucide-react";
import { useClipboard } from "../../hooks/useClipboard";
import { SITE_CONFIG } from "../../data/site";

export interface CopyButtonProps {
  text?: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
  size?: "sm" | "md";
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  text = SITE_CONFIG.email,
  label = "Copy Email",
  copiedLabel = "Email Copied!",
  className = "",
  size = "md",
}) => {
  const { copied, copy } = useClipboard();

  const sizeClasses =
    size === "sm" ? "px-3 py-1.5 text-xs" : "px-5 py-3 text-sm";

  return (
    <button
      type="button"
      onClick={() => copy(text)}
      className={`
        inline-flex items-center gap-2 rounded-md border border-border-default
        bg-surface-card font-medium text-text-primary transition-all duration-200
        hover:border-primary/50 hover:bg-surface-muted cursor-pointer
        ${sizeClasses}
        ${className}
      `.trim()}
      aria-label={`${label} to clipboard`}
    >
      {copied ? (
        <>
          <Check className="text-base text-primary shrink-0" size={16} />
          <span className="text-primary font-semibold">{copiedLabel}</span>
        </>
      ) : (
        <>
          <Copy className="text-base text-text-muted shrink-0" size={16} />
          <span>{label}</span>
        </>
      )}
    </button>
  );
};

export default CopyButton;
