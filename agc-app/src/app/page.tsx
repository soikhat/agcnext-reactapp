import Image from "next/image";
import "../styles/globals.css";
import {Navbar} from "./ui/component/Navigation/NavBar/Navbar";
import { Typography } from "@/app/ui/design-system/Typography/Typography";
import { Container } from "./ui/component/Container/Container";
import { HeroSection } from "./ui/component/HeroSection/HeroSection";
import Button from "./ui/design-system/Button/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection className="relative pt-10 pb-14 md:pt-40 overflow-hidden md:pb-52  max-w-full w-full px-5 lg:px-10 bg-[url('/assets/images/routeBackground1.jpeg')] bg-cover bg-center">
        <Container className="w-full flex justify-between items-center mx-auto py-1.5 px-4 gap-y-96">
          <div className="w-full max-w-2xl space-y-5">
            <Typography
              variant="headingM"
              theme="white"
              className="flex flex-col"
            >
              Tranquillité d'esprit pour vous et vos proches avec AGC
            </Typography>
            <Typography variant="lead" theme="gray" className="flex flex-col">
              Twenty-four years in the market — helping people save money and
              time.
            </Typography>
            <div>
              <Button size="small">Voir nos offres</Button>
            </div>
            <Image
              src="/assets/images/illustration.png" // Route of the image file
              height={956} // Desired size with correct aspect ratio
              width={511} // Desired size with correct aspect ratio
              alt="Your Name"
              className="absolute top-0 right-0 z-0 hidden md:block"
            />
          </div>
        </Container>
      </HeroSection>

      <Container>
        <div className="relative flex place-items-center">
          <Typography variant="headingM" component="h1" theme="gray">
            WELCOME!!
          </Typography>
        </div>
      </Container>
    </main>
  );
}
