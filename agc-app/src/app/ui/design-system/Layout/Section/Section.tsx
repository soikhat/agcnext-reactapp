import { ReactNode } from "react";
import { clsx } from "clsx";

interface SectionProps {
  title?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

export const Section = ({
  title,
  description,
  align = "left",
  className,
  children,
  as: Tag = "section",
}: SectionProps) => {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <Tag className={clsx("w-full py-12 px-4 sm:px-6 lg:px-8", className)}>
      <div
        className={clsx(
          "max-w-7xl mx-auto flex flex-col gap-6",
          alignment[align]
        )}
      >
        {title && <h2 className="text-3xl font-semibold text-gray">{title}</h2>}
        {description && (
          <p className="text-base text-gray-400 max-w-2xl">{description}</p>
        )}
      </div>
      <div className="mt-10">{children}</div>
    </Tag>
  );
};
