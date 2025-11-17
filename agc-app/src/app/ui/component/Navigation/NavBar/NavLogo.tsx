import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/app/ui/design-system/Typography/Typography";

interface NavLogoProps {
  logo: {
    src: string;
    alt: string;
    width: number;
    height: number;
    title: string;
    subtitle: string;
  };
}

export function NavLogo({ logo }: NavLogoProps) {
  return (
    <Link
      href="/"
      className="flex gap-1 justify-items mx-auto md:mx-0 md:flex-row gap-2 md:items-center text-primary-800"
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        priority
      />
      <div className="text-center md:text-left flex flex-col">
        <div className="text-red font-extrabold text-[24px] text-sm md:text-base">
          {logo.title}
        </div>
        <Typography variant="caption3" component="span" theme="gray">
          {logo.subtitle}
        </Typography>
      </div>
    </Link>
  );
}
