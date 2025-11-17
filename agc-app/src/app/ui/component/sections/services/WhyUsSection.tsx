"use client";

import { CenteredSection } from "@/app/ui/design-system/Layout/Section/CenteredSection";
import { Typography } from "@/app/ui/design-system/Typography/Typography";
import { Card } from "@/app/ui/design-system/Card/Card";
import { Zap, Handshake, Briefcase } from "lucide-react";

export const WhyUsSection = () => {
  const advantages = [
    {
      icon: <Handshake className="w-8 h-8 text-primary" />,
      title: "Un accompagnement humain et local",
      description:
        "Nos équipes vous accompagnent avec proximité et réactivité, partout où vous êtes.",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Une réactivité à toute épreuve",
      description:
        "Nous répondons rapidement à vos besoins pour vous offrir un service fluide et efficace.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      title: "20 ans d’expérience et de confiance",
      description:
        "Notre savoir-faire est votre meilleure garantie. Plus de deux décennies à vos côtés.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <CenteredSection>
        <Typography variant="headingS" className="text-center mb-10">
          Pourquoi choisir <span className="text-primary">AGC Assurances</span>{" "}
          ?
        </Typography>

        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((item, index) => (
            <Card
              key={index}
              className="p-6 text-center shadow-md rounded-2xl bg-white"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <Typography variant="bodyM" className="font-semibold mb-2">
                {item.title}
              </Typography>
              <Typography variant="caption1" theme="gray">
                {item.description}
              </Typography>
            </Card>
          ))}
        </div>
      </CenteredSection>
    </section>
  );
};
