"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import destinations from "../json/aboutUs.json";

export default function PopularDestination() {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  return (
    <section className="relative overflow-hidden bg-[#e6f2f1] px-6 py-20 sm:px-10 lg:px-16">
      <Image
        src="/hotballon-Left (1).png"
        alt=""
        width={233}
        height={337}
        className="pointer-events-none absolute -left-6 top-6 w-24 sm:w-32 lg:w-40"
      />
      <Image
        src="/hotballon-right (1).png"
        alt=""
        width={110}
        height={166}
        className="pointer-events-none absolute -right-4 top-1/3 w-16 sm:w-24 lg:w-28"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-afacad text-4xl font-bold text-secondary sm:text-5xl">
            Popular <span className="text-yellow">Destination</span>
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

        <div className="relative mt-14 px-14">
          <button
            ref={setPrevEl}
            aria-label="Previous destination"
            className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-secondary text-white shadow-md transition hover:brightness-95"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={16}
            slidesPerView={2}
            loop
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            navigation={{ prevEl, nextEl }}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {destinations.map((destination) => (
              <SwiperSlide key={destination.slug}>
                <Link
                  href={`/destination/${destination.slug}`}
                  className="block rounded-full bg-white px-6 py-4 text-center font-semibold text-secondary shadow-sm transition hover:bg-yellow-light"
                >
                  {destination.name}
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            ref={setNextEl}
            aria-label="Next destination"
            className="absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-secondary text-white shadow-md transition hover:brightness-95"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
