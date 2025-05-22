import Image from "next/image";
import Link from "next/link";
import { Typography } from "../../../design-system/Typography/Typography";
import { Container } from "../../Container/Container";
import { footerApplicationLinks } from "../../../../../utils/app-links";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterXLine,
} from "react-icons/ri";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <Container className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Bloc Logo + Slogan */}
        <div className="flex flex-row justify-center items-start gap-3">
          <Image src="/agclogo.png" alt="Logo AGC" width={60} height={60} />

        </div>

        {/* Bloc Liens rapides */}
        <div>
          <Typography
            variant="caption1"
            theme="white"
            className="mb-3 font-semibold"
          >
            Liens rapides
          </Typography>
          <ul className="space-y-2">
            {footerApplicationLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-gray-300 hover:text-white text-sm"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bloc réseaux sociaux */}
        <div>
          <Typography
            variant="caption1"
            theme="white"
            className="mb-3 font-semibold"
          >
            Suivez-nous
          </Typography>
          <div className="flex gap-4">
            <Link
              href="https://facebook.com"
              aria-label="Facebook"
              className="text-gray-300 hover:text-white"
            >
              <RiFacebookFill size={20} />
            </Link>
            <Link
              href="https://instagram.com"
              aria-label="Instagram"
              className="text-gray-300 hover:text-white"
            >
              <RiInstagramLine size={20} />
            </Link>
            <Link
              href="https://twitter.com"
              aria-label="Twitter"
              className="text-gray-300 hover:text-white"
            >
              <RiTwitterXLine size={20} />
            </Link>
          </div>
        </div>
      </Container>

      {/* Ligne bas de page */}
      <Container className="border-t border-gray-700 py-6 text-center">
        <Typography variant="caption4" theme="gray">
          © {currentYear} AGC — Propulsé par{" "}
          <a href="https://soikhat.com" target="_blank" className="underline">
            Soidev
          </a>
        </Typography>
      </Container>
    </footer>
  );
};
