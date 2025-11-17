import Link from "next/link";
import { Typography } from "@/app/ui/design-system/Typography/Typography";
import Button from "@/app/ui/design-system/Button/Button";
import { FullSection } from "@/app/ui/design-system/Layout/Section/FullSection";
import { CenteredSection } from "@/app/ui/design-system/Layout/Section/CenteredSection";
import { ServicesCTAConfig } from "@/types/services-type";
import { RiPhoneLine, RiMailLine } from "react-icons/ri";

interface ServicesCTASectionProps {
  config: ServicesCTAConfig;
}

export default function AgencyCTASection({ config }: ServicesCTASectionProps) {
  return (
    <FullSection className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <CenteredSection>
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <Typography
            variant="headingS"
            theme="white"
            className="text-3xl md:text-4xl"
          >
            {config.title}
          </Typography>

          <Typography
            variant="lead"
            theme="white"
            className="text-lg md:text-xl opacity-90"
          >
            {config.description}
          </Typography>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={config.primaryButton.href}>
              <Button
                variant="accent"
                size="large"
                className="bg-white text-primary hover:bg-gray-100"
              >
                {config.primaryButton.label}
              </Button>
            </Link>

            <Link href={config.secondaryButton.href}>
              <Button
                variant="outline"
                size="large"
                className="border-white text-white hover:bg-white/10"
              >
                {config.secondaryButton.label}
              </Button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6 border-t border-secondary-600/70">
            <a
              href={`tel:${config.phone}`}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <RiPhoneLine size={20} />
              <span>{config.phone}</span>
            </a>
            <a
              href={`mailto:${config.email}`}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <RiMailLine size={20} />
              <span>{config.email}</span>
            </a>
          </div>
        </div>
      </CenteredSection>
    </FullSection>
  );
}
