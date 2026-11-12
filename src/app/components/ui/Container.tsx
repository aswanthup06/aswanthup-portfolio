import React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

/**
 * Standard Design System Container Token
 * Desktop max-width: 80rem (1280px, max-w-7xl)
 * Inner content width on desktop: 1216px (1280px - 64px padding)
 * Responsive gutters: 16px (mobile) -> 24px (tablet) -> 32px (desktop)
 */
export function Container({
  children,
  className = "",
  as: Component = "div",
  ...props
}: ContainerProps) {
  return (
    <Component
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Container;

