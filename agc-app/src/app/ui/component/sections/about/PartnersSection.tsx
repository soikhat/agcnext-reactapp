import Image from "next/image";
import { Typography } from "@/app/ui/design-system/Typography/Typography";
import { FullSection } from "@/app/ui/design-system/Layout/Section/FullSection";
import { CenteredSection } from "@/app/ui/design-system/Layout/Section/CenteredSection";
import { PartnersConfig } from "@/types/about";

interface PartnersSectionProps {
  config: PartnersConfig;
}

export function PartnersSection({ config }: PartnersSectionProps) {
  return (
    <FullSection className="py-20 bg-white">
      <CenteredSection>
        <div className="text-center mb-12">
          <Typography variant="caption2" className="text-primary mb-2">
            {config.sectionTag}
          </Typography>
          <Typography variant="headingS" className="mb-4">
            {config.title}
          </Typography>
          <Typography
            variant="caption1"
            theme="gray"
            className="max-w-3xl mx-auto"
          >
            {config.description}
          </Typography>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {config.logos.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="relative w-full h-20">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </CenteredSection>
    </FullSection>
  );
}