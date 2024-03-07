import Image from "next/image";
import Link from "next/link";
import { Container } from "../../Container/Container";
import Button from "../../../design-system/button/Button";

interface NavigationProps {
  isOpen ?: boolean ;
  toggle?: boolean;
}
const  Navbar= ({isOpen,toggle}:NavigationProps) => {
  return (
    <>
      <div className="w-full max-w-full flex h-20 top-6">
        <Container className="w-full flex justify-between items-center mx-auto px-4 h-full ">
          <div className="justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">
            <Link
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
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
          </div>
          <nav className="flex justify-between h-full items-center gap-7">
            <ul className="flex justify-items-stretch lg:flex md:flex gap-x-6 text-white">
              <li className="ml-10 uppercase hover:border-b text-xl">
                <Link href="/">Accueil</Link>
              </li>
              <li className="ml-10 uppercase hover:border-b text-xl">
                <Link href="/about">À propos</Link>
              </li>
              <li className="ml-10 uppercase hover:border-b text-xl">
                <Link href="/produits">Assurances</Link>
              </li>
              <li className="ml-10 uppercase hover:border-b text-xl">
                <Link href="/blog">Blog</Link>
              </li>
              <li className="ml-10 uppercase hover:border-b text-xl">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <Button color="red-200">Me faire rappeler</Button>
        </Container>
      </div>
    </>
  );
};
export default Navbar;
