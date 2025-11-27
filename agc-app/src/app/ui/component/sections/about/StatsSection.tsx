import { Typography } from "@/app/ui/design-system/Typography/Typography";
import { FullSection } from "@/app/ui/design-system/Layout/Section/FullSection";
import { CenteredSection } from "@/app/ui/design-system/Layout/Section/CenteredSection";
import { StatsConfig } from "@/types/about";
import {
  RiCalendarLine,
  RiTeamLine,
  RiMapPinLine,
  RiStarFill,
  RiCustomerService2Line,
  RiGroupLine,
} from "react-icons/ri";

interface StatsSectionProps {
  config: StatsConfig;
}

const iconMap = {
  calendar: RiCalendarLine,
  users: RiTeamLine,
  location: RiMapPinLine,
  star: RiStarFill,
  support: RiCustomerService2Line,
  team: RiGroupLine,
};

export function StatsSection({ config }: StatsSectionProps) {
  return (
    <FullSection className="py-20 bg-primary text-white">
      <CenteredSection>
        <div className="text-center mb-12">
          <Typography variant="headingS" theme="white" className="mb-4">
            {config.title}
          </Typography>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {config.items.map((stat, index) => {
            const Icon =
              iconMap[stat.icon as keyof typeof iconMap] || RiStarFill;

            return (
              <div
                key={index}
                className="text-center space-y-3 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-3">
                  <Icon size={40} className="opacity-90" />
                </div>
                <Typography
                  variant="headingS"
                  theme="white"
                  className="text-4xl md:text-5xl font-bold"
                >
                  {stat.number}
                </Typography>
                <Typography
                  variant="caption3"
                  theme="white"
                  className="opacity-90"
                >
                  {stat.label}
                </Typography>
              </div>
            );
          })}
        </div>
      </CenteredSection>
    </FullSection>
  );
}