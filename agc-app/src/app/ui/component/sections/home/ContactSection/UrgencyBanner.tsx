'use client';
import { Typography } from "@/app/ui/design-system/Typography/Typography";
import Button from "@/app/ui/design-system/Button/Button";
import { FullSection } from "@/app/ui/design-system/Layout/Section/FullSection";
import { CenteredSection } from "@/app/ui/design-system/Layout/Section/CenteredSection";

interface UrgencyBannerProps {
  onAssistanceClick?: () => void;
  onSinistreClick?: () => void;
}

export const UrgencyBanner = ({
  onAssistanceClick = () => console.log("Assistance clicked"),
  onSinistreClick = () => console.log("Sinistre clicked"),
}: UrgencyBannerProps) => {
  return (
    <FullSection className="bg-red-600 py-4">
      <CenteredSection>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center animate-pulse">
              <span className="text-red-600 font-bold text-sm">🚨</span>
            </div>
            <div>
              <Typography variant="body-base" weight="semibold" theme="white">
                Urgence ? Assistance 24h/24
              </Typography>
              <Typography
                variant="caption2"
                theme="white"
                className="opacity-90"
              >
                Sinistre • Panne • Accident
              </Typography>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              size="small"
              onClick={onAssistanceClick}
              className="border-white text-white hover:bg-white hover:text-red-600 transition-all duration-200"
            >
              Assistance d'\urgence
            </Button>
            <Button variant="secondary" size="small" onClick={onSinistreClick}>
              Déclarer un sinistre
            </Button>
          </div>
        </div>
      </CenteredSection>
    </FullSection>
  );
};
