"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type ThemeId = "emerald" | "blue" | "indigo" | "terracotta" | "obsidian";
export type RadiusMode = "small" | "rounded";

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
    surface: "#f0f3f1",
  },
  {
    id: "blue",
    name: "Classic Blue",
    description: "Cool slate & sky blue",
    primary: "#3b82f6",
    secondary: "#06b6d4",
    surface: "#f1f5f9",
  },
  {
    id: "indigo",
    name: "Electric Indigo",
    description: "Cool slate & indigo-violet",
    primary: "#4f46e5",
    secondary: "#8b5cf6",
    surface: "#f0f3f9",
  },
  {
    id: "terracotta",
    name: "Warm Terracotta",
    description: "Editorial cream & burnt orange",
    primary: "#ea580c",
    secondary: "#d97706",
    surface: "#f5efe8",
  },
];

export const DEFAULT_THEME: ThemeId = "obsidian";
export const DEFAULT_RADIUS: RadiusMode = "rounded";
const STORAGE_KEY = "portfolio-theme";
const RADIUS_STORAGE_KEY = "portfolio-radius";

function isValidTheme(value: string | null): value is ThemeId {
  return THEMES.some((t) => t.id === value);
}

function isValidRadius(value: string | null): value is RadiusMode {
  return value === "small" || value === "rounded";
}

interface ThemeContextType {
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
  themes: ThemeOption[];
  radius: RadiusMode;
  setRadius: (radius: RadiusMode) => void;
  resetTheme: () => void;
  isCustomized: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(() => {
    if (typeof window === "undefined") return DEFAULT_THEME;
    try {
      const storedTheme = localStorage.getItem(STORAGE_KEY);
      return isValidTheme(storedTheme) ? storedTheme : DEFAULT_THEME;
    } catch {
      return DEFAULT_THEME;
    }
  });

  const [radius, setRadiusState] = useState<RadiusMode>(() => {
    if (typeof window === "undefined") return DEFAULT_RADIUS;
    try {
      const storedRadius = localStorage.getItem(RADIUS_STORAGE_KEY);
      return isValidRadius(storedRadius) ? storedRadius : DEFAULT_RADIUS;
    } catch {
      return DEFAULT_RADIUS;
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-radius", radius);
  }, [theme, radius]);

  const setTheme = (next: ThemeId) => {
    setThemeState(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Ignore storage errors in restricted environments
    }
  };

  const setRadius = (next: RadiusMode) => {
    setRadiusState(next);
    document.documentElement.setAttribute("data-radius", next);
    try {
      localStorage.setItem(RADIUS_STORAGE_KEY, next);
    } catch {
      // Ignore storage errors in restricted environments
    }
  };

  const resetTheme = () => {
    setThemeState(DEFAULT_THEME);
    document.documentElement.setAttribute("data-theme", DEFAULT_THEME);
    setRadiusState(DEFAULT_RADIUS);
    document.documentElement.setAttribute("data-radius", DEFAULT_RADIUS);
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(RADIUS_STORAGE_KEY);
    } catch {
      // Ignore storage errors in restricted environments
    }
  };

  const isCustomized = theme !== DEFAULT_THEME || radius !== DEFAULT_RADIUS;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        themes: THEMES,
        radius,
        setRadius,
        resetTheme,
        isCustomized,
      }}
    >
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
