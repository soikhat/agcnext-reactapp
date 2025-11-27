import { Typography } from "@/app/ui/design-system/Typography/Typography";
import { FullSection } from "@/app/ui/design-system/Layout/Section/FullSection";
import { CenteredSection } from "@/app/ui/design-system/Layout/Section/CenteredSection";
import { ServicesFAQ } from "@/types/services-type";

interface ServicesFAQSectionProps {
  faq: readonly ServicesFAQ[];
}

export function ServicesFAQSection({ faq }: ServicesFAQSectionProps) {
  return (
    <FullSection className="py-16 bg-gray-50">
      <CenteredSection>
        <div className="text-center mb-12">
          <Typography variant="caption2" className="text-primary mb-2">
            Questions Fréquentes
          </Typography>
          <Typography variant="headingS" className="mb-4">
            Vous avez des questions ?
          </Typography>
          <Typography
            variant="caption1"
            theme="gray"
            className="max-w-2xl mx-auto"
          >
            Trouvez les réponses aux questions les plus courantes sur nos
            assurances
          </Typography>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faq.map((item, index) => (
            <details
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm cursor-pointer group hover:shadow-md transition-shadow"
            >
              <summary className="font-semibold text-lg list-none flex items-center justify-between">
                <span className="pr-8">{item.question}</span>
                <span className="text-primary group-open:rotate-180 transition-transform flex-shrink-0">
                  ▼
                </span>
              </summary>
              <Typography
                variant="caption3"
                theme="gray"
                className="mt-4 leading-relaxed"
              >
                {item.answer}
              </Typography>
            </details>
          ))}
        </div>
      </CenteredSection>
    </FullSection>
  );
}
