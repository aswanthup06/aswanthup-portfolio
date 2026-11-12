"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Palette } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeSwitcher({ compact = false }: { compact?: boolean }) {
  const { theme, setTheme, themes } = useTheme();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeTheme = themes.find((t) => t.id === theme) ?? themes[0];

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Switch color theme"
        aria-expanded={open}
        aria-haspopup="listbox"
        title={`Theme: ${activeTheme.name}`}
        className={`
          inline-flex items-center gap-2 rounded-md border border-border-default
          bg-surface-subtle hover:bg-surface-muted hover:border-border-accent
          text-text-secondary hover:text-text-primary transition-all duration-200
          ${compact ? "h-10 px-2.5" : "h-10 px-3"}
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
            className="
              absolute right-0 top-12 z-50 w-64 rounded-xl
              border border-border-default bg-surface-card p-2
              shadow-2xl
            "
          >
            <div className="px-2.5 py-1.5 mb-1 flex items-center justify-between">
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
                      setOpen(false);
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

