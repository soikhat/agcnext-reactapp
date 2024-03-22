import clsx from "clsx";
import { ReactNode } from "react";

interface HeroProps {
  children: React.ReactNode;
  className?: string;
}
export const HeroSection = ({ children, className }: HeroProps) => {
  
  return (
    <div
      className={clsx(
        className
        
      )}
    >
      {children}
    </div>
  );
};
