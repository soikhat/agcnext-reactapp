// app/ui/component/sections/category/CategoryHeroSection.tsx

import Link from "next/link";
import { Typography } from "@/app/ui/design-system/Typography/Typography";
import Button from "@/app/ui/design-system/Button/Button";
import { FullSection } from "@/app/ui/design-system/Layout/Section/FullSection";
import { CenteredSection } from "@/app/ui/design-system/Layout/Section/CenteredSection";

interface CategoryHeroSectionProps {
  icon: string;
  name: string;
  description: string;
}

export function CategoryHeroSection({
  icon,
  name,
  description,
}: CategoryHeroSectionProps) {
  return (
    <FullSection className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <CenteredSection>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="text-6xl mb-4">{icon}</div>
          <Typography variant="headingL" theme="white">
            Assurance {name}
          </Typography>
          <Typography variant="lead" theme="white" className="opacity-90">
            {description}
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/pages/contact">
              <Button variant="accent" size="large">
                Demander un devis gratuit
              </Button>
            </Link>
            <Link href="#produits">
              <Button
                variant="outline"
                size="large"
                className="border-white text-white hover:bg-white/10"
              >
                Voir les formules
              </Button>
            </Link>
          </div>
        </div>
      </CenteredSection>
    </FullSection>
  );
}