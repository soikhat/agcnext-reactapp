import Image from "next/image";
import { Typography } from "@/app/ui/design-system/Typography/Typography";
import { FullSection } from "@/app/ui/design-system/Layout/Section/FullSection";
import { CenteredSection } from "@/app/ui/design-system/Layout/Section/CenteredSection";
import { TeamConfig } from "@/types/about";

interface TeamSectionProps {
  config: TeamConfig;
}

export function TeamSection({ config }: TeamSectionProps) {
  return (
    <FullSection className="py-20 bg-white">
      <CenteredSection>
        <div className="text-center mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {config.members.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <Typography
                  variant="caption1"
                  className="font-semibold text-lg mb-1"
                >
                  {member.name}
                </Typography>
                <Typography variant="caption3" className="text-primary mb-3">
                  {member.role}
                </Typography>
                <Typography variant="caption4" theme="gray">
                  {member.bio}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </CenteredSection>
    </FullSection>
  );
}