"use client";

import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Palette } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useModal } from "../context/ModalContext";

export default function ThemeSwitcher({ compact = false }: { compact?: boolean }) {
  const { theme, setTheme, themes, radius, setRadius } = useTheme();
  const { isModalOpen, closeModal, toggleModal } = useModal();
  const open = isModalOpen("theme");
  const containerRef = useRef<HTMLDivElement>(null);

  const activeTheme = themes.find((t) => t.id === theme) ?? themes[0];

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        closeModal("theme");
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal("theme");
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, closeModal]);

  return (
    <div
      ref={containerRef}
      className={compact ? "flex items-center md:relative" : "relative flex items-center"}
    >
      <button
        type="button"
        onClick={() => toggleModal("theme")}
        aria-label="Customize theme and corners"
        aria-expanded={open}
        aria-haspopup="listbox"
        title={`Theme: ${activeTheme.name}`}
        className={`
          inline-flex items-center justify-center gap-2 rounded-md border border-border-default
          bg-surface-subtle hover:bg-surface-muted hover:border-border-accent
          text-text-secondary hover:text-text-primary transition-all duration-200
          ${compact ? "h-10 w-10 sm:w-auto sm:px-2.5" : "h-10 w-10 sm:w-auto sm:px-3"}
        `}
      >
        <span
          className="h-3.5 w-3.5 rounded-full border border-black/15 shrink-0"
          style={{
            background: `linear-gradient(135deg, ${activeTheme.primary}, ${activeTheme.secondary})`,
          }}
        />
        <Palette className="h-3.5 w-3.5 text-text-muted hidden sm:block" />
        {!compact && (
          <span className="text-xs font-medium hidden lg:inline">
            {activeTheme.name}
          </span>
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="listbox"
            aria-label="Color themes"
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className={`
              absolute right-0 z-50 w-68 rounded-xl
              border border-border-default bg-surface-card p-2.5
              shadow-2xl
              ${compact ? "top-16 md:top-[57px]" : "top-12"}
            `}
          >
            <div className="px-2 py-1 mb-1 flex items-center justify-between">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                Color Theme
              </span>
              <span className="text-[10px] font-medium text-primary">
                Live Preview
              </span>
            </div>

            <div className="space-y-1">
              {themes.map((item) => {
                const selected = item.id === theme;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="option"
                    aria-selected={selected}
                    onClick={() => {
                      setTheme(item.id);
                      closeModal("theme");
                    }}
                    className={`
                      w-full flex items-center gap-3 rounded-lg px-2.5 py-2 text-left
                      transition-colors duration-150
                      ${
                        selected
                          ? "bg-primary-subtle text-text-primary"
                          : "hover:bg-surface-subtle text-text-secondary"
                      }
                    `}
                  >
                    {/* Dual swatch preview */}
                    <span
                      className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border-default shadow-2xs"
                      style={{ backgroundColor: item.surface }}
                    >
                      <span
                        className="h-3.5 w-3.5 rounded-full"
                        style={{
                          background: `linear-gradient(135deg, ${item.primary}, ${item.secondary})`,
                        }}
                      />
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold text-text-primary truncate">
                        {item.name}
                      </p>
                      <p className="text-[11px] text-text-muted truncate">
                        {item.description}
                      </p>
                    </div>

                    {selected && (
                      <Check className="h-3.5 w-3.5 shrink-0 text-primary" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Corner Style Toggle */}
            <div className="mt-2.5 pt-2.5 border-t border-border-subtle px-1">
              <div className="px-1 mb-1.5 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                  Corner Style
                </span>
                <span className="text-[10px] text-text-caption">
                  {radius === "small" ? "Crisp 6px" : "Pill & Soft"}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-1.5 rounded-lg bg-surface-subtle p-1 border border-border-subtle">
                <button
                  type="button"
                  role="option"
                  aria-selected={radius === "small"}
                  onClick={() => setRadius("small")}
                  className={`flex items-center justify-center gap-1.5 rounded-md py-1.5 text-xs font-medium transition-all ${
                    radius === "small"
                      ? "bg-surface-card text-text-primary shadow-xs border border-border-default"
                      : "text-text-muted hover:text-text-primary"
                  }`}
                >
                  <span className="h-3 w-3 rounded-[2px] border-[1.5px] border-current" />
                  <span>Small</span>
                </button>

                <button
                  type="button"
                  role="option"
                  aria-selected={radius === "rounded"}
                  onClick={() => setRadius("rounded")}
                  className={`flex items-center justify-center gap-1.5 rounded-md py-1.5 text-xs font-medium transition-all ${
                    radius === "rounded"
                      ? "bg-surface-card text-text-primary shadow-xs border border-border-default"
                      : "text-text-muted hover:text-text-primary"
                  }`}
                >
                  <span className="h-3 w-3 rounded-full border-[1.5px] border-current" />
                  <span>Rounded</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
