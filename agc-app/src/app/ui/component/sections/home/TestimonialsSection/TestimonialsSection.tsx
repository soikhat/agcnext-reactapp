import { Typography } from "@/app/ui/design-system/Typography/Typography";
import { FullSection } from "@/app/ui/design-system/Layout/Section/FullSection";
import { CenteredSection } from "@/app/ui/design-system/Layout/Section/CenteredSection";
import TestimonialCarousel from "./TestimonialsCarousel";
import { TestimonialsConfig } from "@/types/homePage";

interface TestimonialsSectionProps {
  config: TestimonialsConfig;
}

export function TestimonialsSection({ config }: TestimonialsSectionProps) {
  return (
    <FullSection className="py-20">
      <CenteredSection className="text-center space-y-6">
        <Typography variant="caption2" className="text-primary">
          {config.sectionTag}
        </Typography>
        <Typography variant="headingS" className="max-w-4xl mx-auto">
          {config.title}{" "}
          <span className="text-primary font-semibold">
            {config.titleHighlight}
          </span>
          {config.titleSuffix}
        </Typography>
        <Typography
          variant="caption1"
          theme="gray"
          className="max-w-2xl mx-auto"
        >
          {config.description}
        </Typography>
        <div className="pt-8">
          <TestimonialCarousel />
        </div>
      </CenteredSection>
    </FullSection>
  );
}
