import { usePathname } from "next/navigation";
import { useState, useCallback } from "react";

export function useNavigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const isActive = useCallback((path: string) => pathname === path, [pathname]);

  return {
    pathname,
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    isActive,
  };
}
