import Image from "next/image";
import { Typography } from "@/app/ui/design-system/Typography/Typography";
import Button from "@/app/ui/design-system/Button/Button";
import { FullSection } from "@/app/ui/design-system/Layout/Section/FullSection";
import { CenteredSection } from "@/app/ui/design-system/Layout/Section/CenteredSection";
import { HeroConfig } from "@/types/homePage";

interface HeroSectionProps {
  config: HeroConfig;
  onDevisClick: () => void;
  onServicesClick: () => void;
}

export function HeroSection({
  config,
  onDevisClick,
  onServicesClick,
}: HeroSectionProps) {
  return (
    <FullSection
      className="bg-[url('/assets/images/routeBackground1.jpeg')] bg-cover bg-center text-white relative"
    >
      <div className="absolute inset-0 bg-black/40" />
      <CenteredSection className="relative flex flex-col gap-8 lg:flex-row items-center justify-between min-h-[600px] py-12">
        <div className="max-w-2xl space-y-6">
          <Typography
            variant="headingM"
            theme="white"
            className="text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-xl"
          >
            {config.title}
          </Typography>
          <Typography
            variant="lead"
            theme="white"
            className="text-xl drop-shadow-lg"
          >
            {config.subtitle}
          </Typography>
          <Typography
            variant="lead"
            theme="white"
            className="text-lg font-semibold drop-shadow-lg"
          >
            {config.services}
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="accent" size="medium" onClick={onDevisClick}>
              {config.cta.primary}
            </Button>
            <Button
              variant="secondary"
              size="medium"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm"
              onClick={onServicesClick}
            >
              {config.cta.secondary}
            </Button>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image
            src={config.illustration.src}
            height={config.illustration.height}
            width={config.illustration.width}
            alt={config.illustration.alt}
            className="drop-shadow-2xl"
            priority
          />
        </div>
      </CenteredSection>
    </FullSection>
  );
}
