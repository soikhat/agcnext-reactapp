import { RiMenuLine } from "react-icons/ri";

interface MobileMenuToggleProps {
  onClick: () => void;
  isOpen: boolean;
}

export function MobileMenuToggle({ onClick, isOpen }: MobileMenuToggleProps) {
  return (
    <button
      onClick={onClick}
      className="block md:hidden p-2 text-primary-700 absolute left-4"
      aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
    >
      <RiMenuLine size={24} />
    </button>
  );
}