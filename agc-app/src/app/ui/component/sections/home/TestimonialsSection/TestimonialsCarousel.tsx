"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonials from "../../../cards/TestimonialsCard/TestimonialsCard";
import { mockTestimonials } from "../../../../../../lib/testimonials/mocks";
import "./TestimonialsCarousel.css";

const TestimonialCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <div className="testimonial-carousel-container">
      <Slider {...settings}>
        {mockTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-slide">
            <Testimonials {...testimonial} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
