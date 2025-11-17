"use client";

import { Container } from "../../Container/Container";
import { NavLogo } from "./NavLogo";
import { NavLinks } from "./NavLinks";
import { NavActions } from "./NavActions";
import { MobileMenuToggle } from "./MobileMenuToggle";
import { navigationConfig } from "@/config/navigation.config";
import { useNavigation } from "@/hooks/useNavigation";

interface NavigationProps {
  toggle: () => void;
  isOpen: boolean;
}

export const Navbar = ({ toggle, isOpen }: NavigationProps) => {
  const { pathname } = useNavigation();

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <Container className="relative flex justify-between items-center py-4 px-4">
        <NavLogo logo={navigationConfig.logo} />

        <NavLinks
          links={navigationConfig.mainLinks}
          currentPath={pathname}
          className="hidden md:flex gap-6 items-center"
        />

        <NavActions
          buttons={navigationConfig.actionButtons}
          className="hidden md:flex gap-2 items-center"
        />

        <MobileMenuToggle onClick={toggle} isOpen={isOpen} />
      </Container>
    </header>
  );
};
