import React from "react";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

/**
 * Standard Design System Container Token
 * Desktop max-width: 72rem (1152px, max-w-6xl)
 * Inner content width on desktop: 1088px (1152px - 64px padding)
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
      className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Container;

