import Image from "next/image";
import Link from "next/link";
import { Container } from "../../Container/Container";
import Button from "../../../design-system/button/Button";
import { RiUser6Fill } from "react-icons/ri";
import { Typography } from "@/app/ui/design-system/Typography/Typography";

interface NavigationProps {
  isOpen ?: boolean ;
  toggle?: boolean;
}
export const  Navbar= ({isOpen,toggle}:NavigationProps) => {
  return (
    <>
      <div className="border-b-2 border-gray-400 w-full max-w-full flex h-40  top-6">
        <Container className="w-full flex justify-between items-center mx-auto py-1.5 px-4 gap-7">
          <div className="flex items-center gap-2.5 justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">
            <Link
              className=""
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/agclogo.png"
                alt="agc Logo"
                width={100}
                height={24}
                priority
              />
            </Link>
            <div className="flex flex-col">
              <div className="text-gray font-extrabold text[24px]">
                Assurances Générales des Comores
              </div>
              <Typography variant="caption3" component="span" theme="gray">
                Fidèle, à vos côtés quoi qu il arrive.
              </Typography>
            </div>
          </div>
          <nav className="flex justify-between h-full items-center gap-7">
            <Typography
              variant="caption3"
              component="div"
              theme="gray"
              className="flex items-center gap-7"
            >
              <Link href="/">Accueil</Link>
              <Link href="/about">À propos</Link>
              <Link href="/produits">Assurances</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
            </Typography>
          </nav>
          <Button variant="accent" size="large">
            Me faire rappeler
          </Button>
          <Button size="small" variant="ico" icon={{ icon: RiUser6Fill }} />
        </Container>
      </div>
    </>
  );
};

