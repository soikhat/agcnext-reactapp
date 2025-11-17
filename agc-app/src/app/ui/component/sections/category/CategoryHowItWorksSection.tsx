// app/ui/component/sections/category/CategoryHowItWorksSection.tsx

import { Typography } from "@/app/ui/design-system/Typography/Typography";
import { FullSection } from "@/app/ui/design-system/Layout/Section/FullSection";
import { CenteredSection } from "@/app/ui/design-system/Layout/Section/CenteredSection";

interface Step {
  step: string;
  title: string;
  description: string;
  icon: string;
}

interface CategoryHowItWorksSectionProps {
  steps?: Step[];
}

const defaultSteps: Step[] = [
  {
    step: "1",
    title: "Comparez nos formules",
    description:
      "Découvrez nos différentes offres et choisissez celle qui vous convient",
    icon: "🔍",
  },
  {
    step: "2",
    title: "Demandez votre devis",
    description:
      "Remplissez notre formulaire en ligne pour obtenir un devis personnalisé",
    icon: "📝",
  },
  {
    step: "3",
    title: "Souscrivez en ligne",
    description: "Validez votre contrat et recevez vos documents immédiatement",
    icon: "✅",
  },
];

export function CategoryHowItWorksSection({
  steps = defaultSteps,
}: CategoryHowItWorksSectionProps) {
  return (
    <FullSection className="py-16">
      <CenteredSection>
        <div className="text-center mb-12">
          <Typography variant="headingS" className="mb-4">
            Comment souscrire en {steps.length} étapes ?
          </Typography>
          <Typography
            variant="caption1"
            theme="gray"
            className="max-w-2xl mx-auto"
          >
            Un processus simple et rapide pour votre tranquillité d'esprit
          </Typography>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item) => (
            <div key={item.step} className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary">
                {item.step}
              </div>
              <div className="text-4xl mb-4">{item.icon}</div>
              <Typography variant="caption1" className="font-semibold mb-2">
                {item.title}
              </Typography>
              <Typography variant="caption3" theme="gray">
                {item.description}
              </Typography>
            </div>
          ))}
        </div>
      </CenteredSection>
    </FullSection>
  );
}