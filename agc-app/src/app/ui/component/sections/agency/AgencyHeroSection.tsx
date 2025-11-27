import { Typography } from "@/app/ui/design-system/Typography/Typography";
import { FullSection } from "@/app/ui/design-system/Layout/Section/FullSection";
import { CenteredSection } from "@/app/ui/design-system/Layout/Section/CenteredSection";
import { AgencyPageConfig } from "@/types/agency-type";

interface AgenciesHeroProps {
  config: AgencyPageConfig["hero"];
}

export default function AgenciesHero({
  config
}: AgenciesHeroProps) {
  return (
    <FullSection className="bg-[url('/assets/images/carte-comores-fond-agence-test.png')] bg-center text-white relative min-h-[400px] flex items-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/80" />

      <CenteredSection className="relative py-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Typography
            variant="headingM"
            theme="white"
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            {config.title}
          </Typography>

          <Typography
            variant="lead"
            theme="white"
            className="text-xl md:text-2xl font-light"
          >
            {config.subtitle}
          </Typography>

          <Typography
            variant="caption1"
            theme="white"
            className="text-lg opacity-90 max-w-2xl mx-auto"
          >
            {config.description}
          </Typography>
        </div>
      </CenteredSection>
    </FullSection>
  );
}
