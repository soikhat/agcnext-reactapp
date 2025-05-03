import clsx from "clsx";
import { ReactNode } from "react";

interface HeroProps {
  children: React.ReactNode;
  className?: string;
}
export const HeroSection = ({ children, className }: HeroProps) => {
  
  return (
    <div
      className={clsx("relative pt-10 pb-14 md:pt-40 overflow-hidden md:pb-52  max-w-full w-full px-5 lg:px-10",
        className
        
      )}
    >
      {children}
    </div>
  );
};
