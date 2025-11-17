import Image from "next/image";

interface AgencyDetailHeroProps {
  name: string;
  islandName: string;
  image: string;
}

export default function AgencyDetailsHero({
  name,
  islandName,
  image,
}: AgencyDetailHeroProps) {
  return (
    <div className="relative h-64 md:h-96 w-full">
      <Image src={image} alt={name} fill className="object-cover" priority />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {name}
          </h1>
          <p className="text-xl text-white/90">{islandName}</p>
        </div>
      </div>
    </div>
  );
}
