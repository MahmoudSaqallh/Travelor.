"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

const destinations = [
  { title: "Paris", listing: 28, image: "/Index/TopDestination/destination1.jpg" },
  { title: "Kashmir", listing: 32, image: "/Index/TopDestination/destination2.jpg" },
  { title: "Thailand", listing: 20, image: "/Index/TopDestination/destination3.jpg" },
  { title: "Maldives", listing: 20, image: "/Index/TopDestination/destination4.jpg" },
  { title: "Indonesia", listing: 80, image: "/Index/TopDestination/destination5.jpg" },
  { title: "Bali", listing: 20, image: "/Index/TopDestination/destination6.jpg" },
  { title: "Mauritius", listing: 20, image: "/Index/TopDestination/destination7.jpg" },
];

const avatars = [
  "/Index/TopDestination/Customer-1.jpg",
  "/Index/TopDestination/Customer-2.jpg",
  "/Index/TopDestination/Customer-3.jpg",
];

export default function TopDestination() {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  return (
    <section className="bg-[#e6f2f1] px-6 py-20 sm:px-10 lg:px-16">
      <div className="relative mx-auto max-w-7xl">
        <div className="relative  overflow-hidden rounded-3xl bg-secondary px-8 py-14 sm:px-12 lg:px-10">
            <Image
          src="/Index/TopDestination/man-rock.png"
          alt="Climber scaling a rock face"
          width={500}
          height={750}
          className="pointer-events-none absolute -top-10 right-4 z-10 hidden w-56 sm:-top-14 sm:w-64 lg:-right-8 lg:block lg:w-72 xl:w-80"
        />
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="lg:max-w-[40%]">
              <h2 className="font-afacad text-[19px] font-bold sm:text-4xl">
                <span className="text-yellow">Most Favorite</span>{" "}
                <span className="text-white">Tour Places!</span>
              </h2>
              <p className="mt-4 text-sm text-white/70">
                Choosing a destination can be exciting but also a bit
                overwhelming with so many amazing places out there!
                Let&apos;s narrow it down a little. Are you dreaming of
                peaceful nature, buzzing cities, historical wonders, or
                relaxing beaches?
              </p>

              <div className="mt-6 flex items-center gap-3">
                <div className="flex -space-x-3">
                  {avatars.map((src) => (
                    <Image
                      key={src}
                      src={src}
                      alt=""
                      width={36}
                      height={36}
                      className="h-9 w-9 rounded-full border-2 border-secondary object-cover"
                    />
                  ))}
                </div>
                <div>
                  <p className="font-afacad text-lg font-bold text-prim">3.5K</p>
                  <p className="text-xs text-white">Happy Customer</p>
                </div>
              </div>

              <button className="group relative mt-6 overflow-hidden rounded-full bg-prim px-6 py-3 text-sm font-semibold text-secondary transition hover:brightness-95">
                <span className="pointer-events-none absolute inset-y-0 -left-1/4 z-10 w-1/4 -skew-x-12 bg-white/60 blur-sm transition-transform duration-700 ease-out group-hover:translate-x-[500%]" />
                <span className="relative z-20">View More Destinations</span>
              </button>
            </div>

            <div className="font-afacad leading-[0.9] lg:pr-72 xl:pr-96">
              <p className="text-[30px] font-extrabold text-yellow sm:text-7xl">
                TOP!
              </p>
              <p className="text-[30px] font-extrabold text-white sm:text-5xl lg:text-4xl xl:text-5xl">
                DESTINATION
              </p>
            </div>
          </div>

          <div className="relative mt-14">
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={16}
              slidesPerView={1.3}
              loop
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              breakpoints={{
                480: { slidesPerView: 2, spaceBetween: 16 },
                640: { slidesPerView: 3, spaceBetween: 16 },
                1024: { slidesPerView: 4, spaceBetween: 16 },
                1280: { slidesPerView: 5, spaceBetween: 16 },
              }}
              navigation={{ prevEl, nextEl }}
            >
              {destinations.map((dest) => (
                <SwiperSlide key={dest.title}>
                  <div className="relative h-72 origin-right overflow-hidden rounded-2xl transition-transform duration-500 ease-out">
                    <Image
                      src={dest.image}
                      alt={dest.title}
                      fill
                      sizes="(min-width: 1280px) 16vw, (min-width: 640px) 25vw, 45vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end text-center bg-black/50 p-4">
                      <p className="font-afacad text-base font-bold text-white">
                        {dest.title}
                      </p>
                      <p className="text-xs text-white/80">
                        {dest.listing} Listing
                      </p>
                    </div>
                   
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              ref={setPrevEl}
              aria-label="Previous destinations"
              className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-yellow text-white shadow-md transition hover:brightness-95"
            >
              <svg
                width="20"
                height="20"
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
            <button
              ref={setNextEl}
              aria-label="Next destinations"
              className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-yellow text-white shadow-md transition hover:brightness-95"
            >
              <svg
                width="20"
                height="20"
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

      
      </div>
    </section>
  );
}
