"use client";

import { Typography } from "@/app/ui/design-system/Typography/Typography";
import Image from "next/image";
import Link from "next/link";
import { RiUser6Fill, RiMenuLine } from "react-icons/ri";
import Button from "../../../design-system/Button/Button";
import { Container } from "../../Container/Container";
import { usePathname } from "next/navigation";

interface NavigationProps {
  toggle: () => void;
  isOpen: boolean;
}

export const Navbar = ({ toggle, isOpen }: NavigationProps) => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <Container className="relative flex justify-between items-center py-4 px-4">
        <Link
          href="/"
          className="flex gap-1 justify-items mx-auto md:mx-0 md:flex-row gap-2 md:items-center text-primary-800"
        >
          <Image src="/agclogo.png" alt="agc Logo" width={50} height={50} />
          <div className="text-center md:text-left flex flex-col">
            <div className=" text-red font-extrabold text[24px] text-sm md:text-base">
              Assurances Générales des Comores
            </div>
            <Typography variant="caption3" component="span" theme="gray">
              Fidèle, à vos côtés quoi qu’il arrive.
            </Typography>
          </div>
        </Link>

        <nav
          role="navigation"
          aria-label="Menu principal"
          className="hidden md:flex gap-6 items-center"
        >
          <Typography
            variant="caption4"
            component="div"
            theme="black"
            className="flex items-center gap-7 md:text-caption3"
          >
            {[
              { label: "Accueil", href: "/" },
              { label: "À propos", href: "/about" },
              { label: "Assurances", href: "/produits" },
              { label: "Blog", href: "/blog" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                aria-current={isActive(href) ? "page" : undefined}
                className={`text-sm hover:text-primary-600 ${
                  isActive(href) ? "text-primary-600 font-semibold" : ""
                }`}
              >
                {label}
              </Link>
            ))}
          </Typography>
        </nav>

        <div className="hidden md:flex gap-2 items-center">
          <Button variant="accent" size="medium">
            <Link href="/contact">Contact</Link>
          </Button>
          <Button size="small" variant="ico" icon={{ icon: RiUser6Fill }} />
        </div>

        <button
          onClick={toggle}
          className="block md:hidden p-2 text-primary-700 absolute left-4"
          aria-label="Ouvrir le menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <RiMenuLine size={24} />
        </button>
      </Container>
    </header>
  );
};
