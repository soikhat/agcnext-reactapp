import Image from "next/image";
import { Typography } from "@/app/ui/design-system/Typography/Typography";
import Button from "@/app/ui/design-system/Button/Button";
import { FullSection } from "@/app/ui/design-system/Layout/Section/FullSection";
import { CenteredSection } from "@/app/ui/design-system/Layout/Section/CenteredSection";
import { AboutConfig } from "@/types/homePage";

interface AboutSectionProps {
  config: AboutConfig;
  onCtaClick: () => void;
}

export function AboutSection({ config, onCtaClick }: AboutSectionProps) {
  return (
    <FullSection className="py-20">
      <CenteredSection className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Typography variant="caption2" className="text-primary">
            {config.sectionTag}
          </Typography>
          <Typography variant="headingSection" className="leading-tight">
            {config.title}
            <span className="text-primary"> {config.titleHighlight}</span>
          </Typography>
          {config.description.map((paragraph, index) => (
            <Typography
              key={index}
              variant="caption1"
              theme="gray"
              className="leading-relaxed"
            >
              {paragraph}
            </Typography>
          ))}
          <div className="pt-4">
            <Button size="medium" variant="accent" onClick={onCtaClick}>
              {config.cta}
            </Button>
          </div>
        </div>
        <div className="relative">
          <Image
            alt={config.image.alt}
            src={config.image.src}
            width={config.image.width}
            height={config.image.height}
            className="rounded-lg shadow-2xl w-full h-auto"
          />
          <div className="absolute -top-4 -right-4 bg-primary text-white p-4 rounded-full shadow-lg">
            <Typography variant="caption3" className="font-bold">
              {config.badge.number}
            </Typography>
            <Typography variant="caption4">{config.badge.label}</Typography>
          </div>
        </div>
      </CenteredSection>
    </FullSection>
  );
}
