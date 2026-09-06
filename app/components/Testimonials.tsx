"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import TestimonialCard from "./TestimonialCard";
import { testimonials, testimonialQuote } from "./testimonialsData";

export default function Testimonials() {
  return (
    <section className="bg-[#e6f2f1] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="relative text-center">
          <h2 className="font-afacad text-4xl font-bold text-secondary sm:text-5xl">
            Our <span className="text-yellow">Client Says!</span>
          </h2>
          <p className="mt-3 text-secondary/80">
            Destinations worth exploring! Here are a few popular spots
          </p>
          <Image
            src="/Index/BookingSteps/Title-Shape.png"
            alt=""
            width={715}
            height={107}
            className="mx-auto mt-4 w-64 sm:w-80"
          />
        </div>

        <div className="mt-4">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            loop
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
            }}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.name}>
                <TestimonialCard
                  name={t.name}
                  image={t.image}
                  quote={testimonialQuote}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
