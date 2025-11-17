'use client';
import { Typography } from "@/app/ui/design-system/Typography/Typography";
import Button from "@/app/ui/design-system/Button/Button";

interface CTASectionProps {
  onDevisClick?: () => void;
  onContactClick?: () => void;
}

export const CTASection = ({
  onDevisClick = () => console.log("Devis clicked"),
  onContactClick = () => console.log("Contact clicked"),
}: CTASectionProps) => {
  return (
    <div className="text-center space-y-6 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
      <Typography variant="headingM" theme="white" weight="semibold">
        Prêt à vous protéger ?
      </Typography>

      <Typography
        variant="body-lg"
        theme="white"
        className="opacity-90 max-w-2xl mx-auto"
      >
        Nos experts vous accompagnent pour choisir les meilleures solutions
        d'\assurance adaptées à vos besoins.
      </Typography>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button
          variant="secondary"
          size="large"
          onClick={onDevisClick}
          className="group"
        >
          <span className="flex items-center gap-2">
            Demander un devis gratuit
            <span className="transform group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </span>
        </Button>

        <Button
          variant="outline"
          size="medium"
          onClick={onContactClick}
          className="border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-200"
        >
          Nous contacter
        </Button>
      </div>
    </div>
  );
};
