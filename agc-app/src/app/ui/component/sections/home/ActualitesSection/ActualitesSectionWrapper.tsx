import { Typography } from "@/app/ui/design-system/Typography/Typography";
import { FullSection } from "@/app/ui/design-system/Layout/Section/FullSection";
import { CenteredSection } from "@/app/ui/design-system/Layout/Section/CenteredSection";
import ActualitesSection from "./ActualitesSection";
import { ActualitesConfig } from "@/types/homePage";

interface ActualitesSectionWrapperProps {
  config: ActualitesConfig;
}

export function ActualitesSectionWrapper({
  config,
}: ActualitesSectionWrapperProps) {
  return (
    <FullSection className="bg-gray-50 py-20">
      <CenteredSection className="text-center space-y-6">
        <Typography variant="caption2" className="text-primary">
          {config.sectionTag}
        </Typography>
        <Typography variant="headingS">{config.title}</Typography>
        <Typography
          variant="caption1"
          theme="gray"
          className="max-w-2xl mx-auto"
        >
          {config.description}
        </Typography>
        <div className="py-8">
          <ActualitesSection />
        </div>
      </CenteredSection>
    </FullSection>
  );
}
