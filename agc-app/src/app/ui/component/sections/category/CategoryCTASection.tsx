// app/ui/component/sections/category/CategoryCTASection.tsx

import Link from "next/link";
import { Typography } from "@/app/ui/design-system/Typography/Typography";
import Button from "@/app/ui/design-system/Button/Button";
import { FullSection } from "@/app/ui/design-system/Layout/Section/FullSection";
import { CenteredSection } from "@/app/ui/design-system/Layout/Section/CenteredSection";
import { RiArrowLeftLine } from "react-icons/ri";

interface CategoryCTASectionProps {
  categoryName: string;
}

export function CategoryCTASection({ categoryName }: CategoryCTASectionProps) {
  return (
    <FullSection className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <CenteredSection>
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <Typography variant="headingS" theme="white">
            Prêt à protéger votre {categoryName.toLowerCase()} ?
          </Typography>
          <Typography variant="lead" theme="white" className="opacity-90">
            Obtenez votre devis personnalisé en moins de 2 minutes
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pages/contact">
              <Button
                variant="accent"
                size="large"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Demander un devis gratuit
              </Button>
            </Link>
            <Link href="/pages/services">
              <Button
                variant="outline"
                size="large"
                className="border-white text-white hover:bg-white/10 flex items-center gap-2"
              >
                <RiArrowLeftLine size={20} />
                Voir tous nos services
              </Button>
            </Link>
          </div>
        </div>
      </CenteredSection>
    </FullSection>
  );
}