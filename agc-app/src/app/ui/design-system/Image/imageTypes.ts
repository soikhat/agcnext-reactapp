// src/app/ui/design-system/imageTypes.ts

export type ImageVariant =
  | "avatar"
  | "thumbnail"
  | "hero"
  | "card"
  | "testimonial"
  | "logo";

export interface ImageVariantConfig {
  width: number;
  height: number;
  objectFit?: "cover" | "contain" | "fill";
  priority?: boolean;
  quality?: number;
}

export const IMAGE_VARIANTS: Record<ImageVariant, ImageVariantConfig> = {
  avatar: {
    width: 48,
    height: 48,
    objectFit: "cover",
    priority: false,
    quality: 85,
  },
  thumbnail: {
    width: 100,
    height: 100,
    objectFit: "cover",
    priority: false,
    quality: 80,
  },
  hero: {
    width: 1200,
    height: 600,
    objectFit: "cover",
    priority: true,
    quality: 90,
  },
  card: {
    width: 300,
    height: 200,
    objectFit: "cover",
    priority: false,
    quality: 80,
  },
  testimonial: {
    width: 120,
    height: 120,
    objectFit: "cover",
    priority: false,
    quality: 85,
  },
  logo: {
    width: 150,
    height: 50,
    objectFit: "contain",
    priority: true,
    quality: 100,
  },
};
