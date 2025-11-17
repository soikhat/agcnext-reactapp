import { Typography } from "@/app/ui/design-system/Typography/Typography";
import { FullSection } from "@/app/ui/design-system/Layout/Section/FullSection";
import { CenteredSection } from "@/app/ui/design-system/Layout/Section/CenteredSection";
import { StoryConfig } from "@/types/about";
import {
  RiBuilding2Line,
  RiGlobalLine,
  RiSmartphoneLine,
  RiTrophyLine,
  RiRocketLine,
} from "react-icons/ri";

interface StoryTimelineSectionProps {
  config: StoryConfig;
}

const iconMap = {
  foundation: RiBuilding2Line,
  expansion: RiGlobalLine,
  digital: RiSmartphoneLine,
  leadership: RiTrophyLine,
  future: RiRocketLine,
};

export function StoryTimelineSection({ config }: StoryTimelineSectionProps) {
  return (
    <FullSection className="py-20 bg-white">
      <CenteredSection>
        <div className="text-center mb-16">
          <Typography variant="caption2" className="text-primary mb-2">
            {config.sectionTag}
          </Typography>
          <Typography variant="headingS" className="max-w-3xl mx-auto">
            {config.title}
          </Typography>
        </div>

        <div className="relative">
          {/* Ligne verticale centrale (desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-200" />

          <div className="space-y-12 md:space-y-16">
            {config.timeline.map((item, index) => {
              const Icon =
                iconMap[item.icon as keyof typeof iconMap] || RiBuilding2Line;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Contenu */}
                  <div
                    className={`w-full md:w-5/12 ${
                      isEven ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <Typography
                        variant="caption2"
                        className="text-primary font-bold text-xl mb-2"
                      >
                        {item.year}
                      </Typography>
                      <Typography
                        variant="caption1"
                        className="font-semibold text-lg mb-3"
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="caption3" theme="gray">
                        {item.description}
                      </Typography>
                    </div>
                  </div>

                  {/* Icône centrale */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-lg z-10">
                      <Icon size={28} />
                    </div>
                  </div>

                  {/* Espace vide pour l'alignement */}
                  <div className="hidden md:block w-5/12" />

                  {/* Icône mobile */}
                  <div className="md:hidden w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg absolute left-0 top-6">
                    <Icon size={24} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CenteredSection>
    </FullSection>
  );
}