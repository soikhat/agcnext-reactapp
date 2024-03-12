import Image from "next/image";
import "../styles/globals.css";
import {Navbar} from "./ui/component/Navigation/NavBar/Navbar";
import { Typography } from "@/app/ui/design-system/Typography/Typography";
import { Container } from "./ui/component/Container/Container";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container>
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-red-200 after:via-pink-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-pink-700 before:dark:opacity-10 after:dark:from-red-900 after:dark:via-[#1201ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          <Typography variant="headingM" component="h1" theme="gray">
            WELCOME!!
          </Typography>
        </div>
      </Container>
    </main>
  );
}
