"use client";
import { ReactNode } from "react";
import {
  cardBase,
  cardVariants,
} from "@/app/ui/design-system/Theme/CardStyles";
import { clsx } from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof cardVariants;
  ariaLabel?: string;
}

export const Card = ({
  children,
  className,
  variant = "default",
  ariaLabel,
}: CardProps) => {
  return (
    <div
      role="region"
      aria-label={ariaLabel}
      className={clsx(cardBase, cardVariants[variant], className)}
    >
      {children}
    </div>
  );
};

