// src/components/DesignSystemImage/DesignSystemImage.tsx
import React from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { ImageVariant, IMAGE_VARIANTS } from "./imageTypes";

interface DesignSystemImageProps
  extends Omit<
    NextImageProps,
    "width" | "height" | "objectFit" | "priority" | "quality"
  > {
  variant: ImageVariant;
  className?: string;
  containerClassName?: string;
}

const DesignSystemImage: React.FC<DesignSystemImageProps> = ({
  variant,
  className = "",
  containerClassName = "",
  alt,
  src,
  ...props
}) => {
  const { width, height, objectFit, priority, quality } =
    IMAGE_VARIANTS[variant];

  return (
    <div className={containerClassName}>
      <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={{
          borderRadius:
            variant === "avatar" || variant === "testimonial"
              ? "50%"
              : undefined,
        }}
        objectFit={objectFit}
        priority={priority}
        quality={quality}
        loading={priority ? "eager" : "lazy"}
        {...props}
      />
    </div>
  );
};

export default DesignSystemImage;
