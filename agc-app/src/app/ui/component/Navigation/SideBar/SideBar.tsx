"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { RiCloseLine } from "react-icons/ri";
import { Typography } from "@/app/ui/design-system/Typography/Typography";

interface SideBarProps {
  isOpen: boolean;
  toggle: () => void;
}

const SideBar = ({ isOpen, toggle }: SideBarProps) => {
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLDivElement>(null);

  const links = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Assurances", href: "/produits" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  // 🔁 Ferme la sidebar si clic en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        toggle();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        toggle(); // 🔁 Fermer avec Échap
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, toggle]);

  // 💡 Pour le focus trap complet, une lib comme `focus-trap-react` est idéale (optionnel ici)

  return (
    <aside
      ref={sidebarRef}
      className={`fixed top-0 left-0 w-full h-full bg-white z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Menu mobile"
    >
      <div className="relative flex justify-center items-center p-4 border-b">
        <Link
          href="/"
          onClick={toggle}
          className="flex flex-col items-center gap-1 text-primary-900"
        >
          <Image src="/agclogo.png" alt="Logo AGC" width={40} height={40} />
          <div className="flex flex-col">
            <span className="text-sm font-bold">
              Assurances Générales Des Comores
            </span>
            <Typography variant="caption3" component="span" theme="gray">
              Fidèle, à vos côtés quoi qu’il arrive.
            </Typography>
          </div>
        </Link>
        <button
          onClick={toggle}
          aria-label="Fermer le menu"
          className="text-primary-700 absolute left-4"
        >
          <RiCloseLine size={24} />
        </button>
      </div>

      <nav className="flex flex-col p-6 gap-4">
        {links.map(({ label, href }) =>
          href ? (
            <Link
              key={href}
              href={href}
              onClick={toggle}
              className={`px-4 py-2 rounded text-lg ${
                pathname === href
                  ? "text-primary-600 font-semibold"
                  : "text-gray-800"
              } focus:outline focus:outline-2 focus:outline-primary-400`}
            >
              {label}
            </Link>
          ) : (
            <span key={label}>{label}</span>
          )
        )}
      </nav>
    </aside>
  );
};

export default SideBar;
