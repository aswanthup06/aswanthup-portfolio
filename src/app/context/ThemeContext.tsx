"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type ThemeId = "emerald" | "blue" | "indigo" | "terracotta" | "obsidian";

export interface ThemeOption {
  id: ThemeId;
  name: string;
  description: string;
  primary: string;
  secondary: string;
  surface: string;
  isDark?: boolean;
}

export const THEMES: ThemeOption[] = [
  {
    id: "obsidian",
    name: "Midnight Obsidian",
    description: "Dark mode with emerald glow",
    primary: "#10b981",
    secondary: "#2dd4bf",
    surface: "#090d16",
    isDark: true,
  },
  {
    id: "emerald",
    name: "Emerald Stone",
    description: "Warm alabaster & forest green",
    primary: "#059669",
    secondary: "#14b8a6",
    surface: "#fafaf9",
  },
  {
    id: "blue",
    name: "Classic Blue",
    description: "Original crisp white & sky blue",
    primary: "#3b82f6",
    secondary: "#06b6d4",
    surface: "#ffffff",
  },
  {
    id: "indigo",
    name: "Electric Indigo",
    description: "Cool slate & indigo-violet",
    primary: "#4f46e5",
    secondary: "#8b5cf6",
    surface: "#f8fafc",
  },
  {
    id: "terracotta",
    name: "Warm Terracotta",
    description: "Editorial cream & burnt orange",
    primary: "#ea580c",
    secondary: "#d97706",
    surface: "#fcf9f5",
  },
];

export const DEFAULT_THEME: ThemeId = "obsidian";
const STORAGE_KEY = "portfolio-theme";

function isValidTheme(value: string | null): value is ThemeId {
  return THEMES.some((t) => t.id === value);
}

interface ThemeContextType {
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
  themes: ThemeOption[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(DEFAULT_THEME);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    const initial = isValidTheme(stored) ? stored : DEFAULT_THEME;
    setThemeState(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const setTheme = (next: ThemeId) => {
    setThemeState(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage errors in restricted environments
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}

