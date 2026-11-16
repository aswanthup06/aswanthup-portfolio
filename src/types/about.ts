import type React from "react";

export type ChapterKind = "study" | "work";

export interface ChapterSubItem {
  period: string;
  title: string;
  place: string;
  text: string;
}

export interface ChapterLink {
  label: string;
  href: string;
}

export interface Chapter {
  period: string;
  kind: ChapterKind;
  title: string;
  org: string;
  place?: string;
  text: string;
  points?: string[];
  tags?: string[];
  links?: ChapterLink[];
  now?: boolean;
  sub?: ChapterSubItem;
}

export interface ToolkitItem {
  name: string;
  role: string;
  Icon: React.ComponentType<{ className?: string }>;
  pill?: string;
  textColor?: string;
}

export interface ToolkitGroup {
  kicker: string;
  title: string;
  desc: string;
  highlight?: boolean;
  items: ToolkitItem[];
}

export interface Award {
  title: string;
  detail: string;
}

export interface Principle {
  tag: string;
  title: string;
  text: string;
}

export interface AboutStat {
  to: number;
  suffix?: string;
  label: string;
}

export interface ToolItem {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
}
