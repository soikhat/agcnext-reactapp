import { Typography } from "@/app/ui/design-system/Typography/Typography";
import { FullSection } from "@/app/ui/design-system/Layout/Section/FullSection";
import { CenteredSection } from "@/app/ui/design-system/Layout/Section/CenteredSection";
import { AssuranceTypeCard } from "@/app/ui/component/cards/AssuranceHomeCard/AssuranceHomeCard";
import { AssurancesConfig } from "@/types/homePage";

interface AssurancesSectionProps {
  config: AssurancesConfig;
}

export function AssurancesSection({ config }: AssurancesSectionProps) {
  return (
    <FullSection className="bg-gray-50 py-16">
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
            className="max-w-2xl mx-auto"
          >
            {config.description}
          </Typography>
        </div>
        <AssuranceTypeCard />
      </CenteredSection>
    </FullSection>
  );
}
