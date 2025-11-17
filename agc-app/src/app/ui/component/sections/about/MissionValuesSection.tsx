import { Typography } from "@/app/ui/design-system/Typography/Typography";
import { FullSection } from "@/app/ui/design-system/Layout/Section/FullSection";
import { CenteredSection } from "@/app/ui/design-system/Layout/Section/CenteredSection";
import { MissionConfig } from "@/types/about";
import {
  RiShieldCheckLine,
  RiStarLine,
  RiMapPinLine,
  RiLightbulbLine,
} from "react-icons/ri";

interface MissionValuesSectionProps {
  config: MissionConfig;
}

const iconMap = {
  trust: RiShieldCheckLine,
  excellence: RiStarLine,
  proximity: RiMapPinLine,
  innovation: RiLightbulbLine,
};

export function MissionValuesSection({ config }: MissionValuesSectionProps) {
  return (
    <FullSection className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <CenteredSection>
        <div className="text-center mb-16">
          <Typography variant="caption2" className="text-primary mb-2">
            {config.sectionTag}
          </Typography>
          <Typography variant="headingS" className="mb-6">
            {config.title}
          </Typography>
          <Typography
            variant="caption1"
            theme="gray"
            className="max-w-3xl mx-auto text-lg"
          >
            {config.description}
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {config.values.map((value, index) => {
            const Icon =
              iconMap[value.icon as keyof typeof iconMap] || RiShieldCheckLine;

            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={28} />
                </div>
                <Typography
                  variant="caption1"
                  className="font-semibold text-lg mb-3"
                >
                  {value.title}
                </Typography>
                <Typography variant="caption3" theme="gray">
                  {value.description}
                </Typography>
              </div>
            );
          })}
        </div>
      </CenteredSection>
    </FullSection>
  );
}