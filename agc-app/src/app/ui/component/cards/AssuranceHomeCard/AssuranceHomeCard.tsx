"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Typography } from "@/app/ui/design-system/Typography/Typography";
import { clsx } from "clsx";

import caricon from "/public/svg/caricon.svg";
import homeico from "/public/svg/homeico.svg";
import planeico from "/public/svg/planeico.svg";
import boatico from "/public/svg/boatico.svg";

type CardProps = {
  icon: StaticImageData | string;
  label: string;
  slug: string;
  className?: string;
};

const Card = ({ icon, label, slug, className }: CardProps) => {
  return (
    <Link href={`pages/services/category/${slug}`} className="group">
      <div
        className={clsx(
          "flex flex-col items-center justify-center text-center gap-2 p-4 bg-white rounded-xl shadow hover:border-1 border-b-primary-600 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 w-[200px] h-[250px] group-hover:bg-primary-50",
          className
        )}
      >
        <Image src={icon} alt={label} className="w-20 h-20 object-contain" />
        <Typography
          variant="caption1"
          className="text-sm font-medium break-words leading-tight text-gray-800 group-hover:text-primary-700"
        >
          {label}
        </Typography>
      </div>
    </Link>
  );
};

// ✅ Composant principal exporté : section complète
export const AssuranceTypeCard = () => {
  const items = [
    { icon: caricon, label: "Auto", slug: "auto" },
    { icon: homeico, label: "Habitation", slug: "habitation" },
    { icon: planeico, label: "Voyage", slug: "voyage" },
    { icon: boatico, label: "Maritime", slug: "maritime" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 bg-gray-100 py-12">
      <div className="flex flex-wrap justify-center gap-6">
        {items.map((item) => (
          <Card key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
};
