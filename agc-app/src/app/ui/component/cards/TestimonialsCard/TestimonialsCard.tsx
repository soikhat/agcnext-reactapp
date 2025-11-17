import React, { memo } from "react";
import Image from "next/image";
import { Testimonial } from "../../../../../types/testimonials-types";
import "./testimonials.css";

interface TemoignageProps extends Testimonial {
  className?: string;
}

const Testimonials: React.FC<TemoignageProps> = ({
  imageUrl,
  citation,
  auteur,
  className = "",
}) => {
  return (
    <div className={`temoignage-container ${className}`}>
      <div className="temoignage-image-container">
        <Image
          src={imageUrl}
          alt={`Photo de ${auteur}`}
          width={120}
          height={120}
          className="temoignage-image"
          loading="lazy"
        />
      </div>
      <div className="temoignage-text-container">
        <blockquote className="temoignage-citation">
          &ldquo;{citation}&rdquo;
        </blockquote>
        <p className="temoignage-auteur">&mdash; {auteur}</p>
      </div>
    </div>
  );
};

export default memo(Testimonials);
