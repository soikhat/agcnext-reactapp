import { ReactNode } from "react";
import { clsx } from "clsx";

interface ResponsiveGridProps {
  children: ReactNode;
  className?: string;
  cols?: number;
}

export const ResponsiveGrid = ({
  children,
  className,
  cols = 4,
}: ResponsiveGridProps) => {
  return (
    <div
      className={clsx(
        "grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
        cols === 2 && "sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2",
        cols === 3 && "sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        cols === 4 && "sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
        className
      )}
    >
      {children}
    </div>
  );
};
