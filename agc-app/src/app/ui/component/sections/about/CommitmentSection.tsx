import { Typography } from "@/app/ui/design-system/Typography/Typography";
import { FullSection } from "@/app/ui/design-system/Layout/Section/FullSection";
import { CenteredSection } from "@/app/ui/design-system/Layout/Section/CenteredSection";
import { CommitmentConfig } from "@/types/about";
import {
  RiFlashlightLine,
  RiEyeLine,
  RiUserHeartLine,
  RiMapPin2Line,
  RiSettings5Line,
  RiHeartLine,
} from "react-icons/ri";

interface CommitmentSectionProps {
  config: CommitmentConfig;
}

const iconMap = {
  speed: RiFlashlightLine,
  transparency: RiEyeLine,
  personalized: RiUserHeartLine,
  local: RiMapPin2Line,
  adapted: RiSettings5Line,
  community: RiHeartLine,
};

export function CommitmentSection({ config }: CommitmentSectionProps) {
  return (
    <FullSection className="py-20 bg-gray-50">
      <CenteredSection>
        <div className="text-center mb-16">
          <Typography variant="caption2" className="text-primary mb-2">
            {config.sectionTag}
          </Typography>
          <Typography variant="headingS">{config.title}</Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.items.map((item, index) => {
            const Icon =
              iconMap[item.icon as keyof typeof iconMap] || RiHeartLine;

            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <Typography
                      variant="caption1"
                      className="font-semibold mb-2"
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="caption3" theme="gray">
                      {item.description}
                    </Typography>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CenteredSection>
    </FullSection>
  );
}