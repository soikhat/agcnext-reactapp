// app/ui/component/sections/category/CategoryAdvantagesSection.tsx

import { Typography } from "@/app/ui/design-system/Typography/Typography";
import { FullSection } from "@/app/ui/design-system/Layout/Section/FullSection";
import { CenteredSection } from "@/app/ui/design-system/Layout/Section/CenteredSection";

interface Advantage {
  icon: string;
  title: string;
  description: string;
}

interface CategoryAdvantagesSectionProps {
  categoryName: string;
  advantages: Advantage[];
}

export function CategoryAdvantagesSection({
  categoryName,
  advantages,
}: CategoryAdvantagesSectionProps) {
  return (
    <FullSection className="py-16">
      <CenteredSection>
        <div className="text-center mb-12">
          <Typography variant="headingS" className="mb-4">
            Pourquoi choisir notre assurance {categoryName} ?
          </Typography>
          <Typography
            variant="caption1"
            theme="gray"
            className="max-w-2xl mx-auto"
          >
            Des garanties adaptées à vos besoins et un service client à votre
            écoute
          </Typography>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{advantage.icon}</div>
              <Typography variant="caption1" className="font-semibold mb-2">
                {advantage.title}
              </Typography>
              <Typography variant="caption3" theme="gray">
                {advantage.description}
              </Typography>
            </div>
          ))}
        </div>
      </CenteredSection>
    </FullSection>
  );
}