import Link from "next/link";
import Button from "@/app/ui/design-system/Button/Button";
import type { NavButton } from "@/config/navigation.config";

interface NavActionsProps {
  buttons: readonly NavButton[];
  className?: string;
}

export function NavActions({ buttons, className = "" }: NavActionsProps) {
  return (
    <div className={className}>
      {buttons.map(({ label, href, variant, icon, iconOnly, ariaLabel }) => {
        if (iconOnly && icon) {
          const Icon = icon;
          return (
            <Button
              key={href}
              size="small"
              variant="ico"
              iconTheme="secondary"
              icon={{ icon: Icon }}
            >
              <Link href={href} aria-label={ariaLabel || label}>
                <Icon size={20} />
              </Link>
            </Button>
          );
        }

        return (
          <Button key={href} variant={variant as any} size="medium">
            <Link href={href}>{label}</Link>
          </Button>
        );
      })}
    </div>
  );
}