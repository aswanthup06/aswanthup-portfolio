import React from "react";

export interface ProjectMetaItem {
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface ProjectHeroMetaProps {
  items: ProjectMetaItem[];
  className?: string;
}

export default function ProjectHeroMeta({
  items,
  className = "",
}: ProjectHeroMetaProps) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-4 max-w-xl ${className}`}
    >
      {items.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div key={idx} className="min-w-0">
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-text-muted uppercase tracking-wider">
              {Icon && <Icon className="w-3 h-3 text-primary shrink-0" />}
              <span>{item.label}</span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-text-primary mt-1 leading-snug">
              {item.value}
            </p>
          </div>
        );
      })}
    </div>
  );
}
