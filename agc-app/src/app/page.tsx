/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import "../styles/globals.css";
import {Navbar} from "./ui/component/Navigation/NavBar/Navbar";
import { Typography } from "@/app/ui/design-system/Typography/Typography";
import { Container } from "./ui/component/Container/Container";
import { HeroSection } from "./ui/component/HeroSection/HeroSection";
import Button from "./ui/design-system/Button/Button";
import caricon from "/public/svg/caricon.svg"
import homeico from "/public/svg/homeico.svg";
import planeico from "/public/svg/planeico.svg";
import boatico from "/public/svg/boatico.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection className=" bg-[url('/assets/images/routeBackground1.jpeg')] bg-cover bg-center">
        <Container className="w-full flex justify-between items-center mx-auto py-1.5 px-4 gap-y-96">
          <div className="w-full max-w-2xl space-y-5">
            <Typography
              variant="headingM"
              theme="white"
              className="flex flex-col"
            >
              Protégez ce qui compte le plus.
            </Typography>
            <Typography variant="lead" theme="gray" className="flex flex-col">
              ACG Assurances vous protège dans tous vos déplacements : auto,
              voyage, maritime, et chantiers.
            </Typography>
            <Typography variant="headingL">Votre sécurité, notre priorité</Typography>
            <div>
              <Button variant="accent" size="small">
                Voir nos offres
              </Button>
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
      <HeroSection className="bg-gray-100">
        <Container className="py-5 flex flex-wrap justify-between items-center">
          <Button
            className="hover:border-b-2 hover:border-primary-700 shadow-2xl	"
            variant="neutral"
            size="xl"
            icon={{ icon: Image }}
          >
            <div className="flex flex-col items-center gap-4 mx-auto">
              <Image
                src={caricon}
                alt="assurance auto"
                className="w-auto h-auto"
              />
              <Typography variant="headingS">Auto</Typography>
            </div>
          </Button>
          <Button
            className="hover:border-b-2
          hover:border-primary-700 shadow-2xl"
            variant="neutral"
            size="xl"
            icon={{ icon: Image }}
          >
            <div className="flex flex-col items-center gap-4 mx-auto">
              <Image src={homeico} alt="assurance habitation" />
              <Typography variant="headingS">Habitation</Typography>
            </div>
          </Button>
          <Button
            className="hover:border-b-2
          hover:border-primary-700 shadow-2xl"
            variant="neutral"
            size="xl"
            icon={{ icon: Image }}
          >
            <div className="flex flex-col items-center gap-4 mx-auto">
              <Image src={planeico} alt="assurance voyage" />
              <Typography variant="headingS">Voyage</Typography>
            </div>
          </Button>
          <Button
            className="hover:border-b-2
          hover:border-primary-700 shadow-2xl"
            variant="neutral"
            size="xl"
            icon={{ icon: Image }}
          >
            <div className="flex flex-col items-center gap-4 mx-auto">
              <Image src={boatico} alt="assurance maritime" />
              <Typography variant="headingS">Maritime</Typography>
            </div>
          </Button>
        </Container>
      </HeroSection>
      <HeroSection>
        <Container className="flex items-center justify-between">
          <div>
            <Image
              alt="siège AGC"
              src={"/assets/images/agclocaux.webp"}
              width={500}
              height={700}
              className="rounded shadow-2xl beforer:block before:absolute before:w-full before:h-full before:left-30 before:top-30 before:border before:border-primary "
            />
          </div>
          <div>
            <Typography variant="caption3">À propos de nous... </Typography>
            <Typography variant="headingSection">
              Plus de 20 ans à votre service
            </Typography>
            <Typography variant="caption1">
              L'expérience fait la différence
            </Typography>
            <Button size="small" variant="accent">
              En savoir plus
            </Button>
          </div>
        </Container>
      </HeroSection>
      <HeroSection className="bg-[url('/svg/archipelcomores_svg.svg')] bg-gray-100">
        <Container className="w-full flex justify-between items-center mx-auto py-1.5 px-4">
          <div>
            {" "}
            <Typography variant="caption3">Nos agences... </Typography>
            <Typography variant="headingS">
              Ancré dans la region pour vous servir...
            </Typography>
            <Typography variant="caption1">
              Partout où vous êtes, nous sommes là.
            </Typography>
            <Button size="small" variant="accent">
              Trouvez une agence
            </Button>
          </div>
        </Container>
      </HeroSection>
      <HeroSection className="">
        <Container>
          <Typography variant="caption3">Témoignage ... </Typography>
          <Typography variant="headingS">
            Par ce qu'aux{" "}
            <span className="text-primary">AGC le client est roi</span>... Cest
            vous qui en parlez le mieux.
          </Typography>
        </Container>
      </HeroSection>
      <HeroSection className="">
        <Container>
          <Typography variant="caption3">Nos articles </Typography>
          <Typography variant="headingS">
            Ancré dans la region pour vous servir...
          </Typography>
          <Typography variant="caption1">
            Partout où vous êtes, nous sommes là.
          </Typography>
          <Button size="small" variant="accent">
            Trouvez une agence
          </Button>
        </Container>
      </HeroSection>
      <HeroSection className="bg-secondary-200">
        <Container>
          <Typography
            variant="headingS"
            component="h1"
            theme="gray"
            className="text-center after:block after:bg-secondary after:border-b-secondary after:h-1 after:w-20 after:mt-2"
          >
            Restons en contact
          </Typography>
        </Container>
      </HeroSection>
    </main>
  );
}
