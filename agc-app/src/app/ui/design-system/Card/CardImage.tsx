import { ReactNode } from "react";
import Image, { ImageProps } from "next/image";
import { clsx } from "clsx";

interface CardImageProps extends ImageProps {
  className?: string;
  rounded?: boolean;
}

export const CardImage = ({
  className,
  rounded = true,
  ...props
}: CardImageProps) => {
  return (
    <div
      className={clsx(
        "relative w-full h-48 overflow-hidden",
        rounded && "rounded-t-xl"
      )}
    >
      <Image
        fill
        className={clsx("object-cover", className)}
        {...props}
        alt={props.alt || "Card image"}
        loading="lazy"
      />
    </div>
  );
};