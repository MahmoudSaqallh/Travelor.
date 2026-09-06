"use client";

import { useState } from "react";
import Image from "next/image";

const categories = [
  {
    title: "Wildlife",
    description:
      "Observing animals in their natural habitats like tiger safaris in Ranthambore or birdwatching in Keoladeo Ghana Bird Sanctuary has become a popular and educational form of travel.",
    image: "/Index/TourCategories/Tour-Categories-01.jpg",
  },
  {
    title: "Hiking",
    description:
      "Trek scenic mountain trails and valley paths, from gentle day walks to multi-day treks with sweeping views at every turn.",
    image: "/Index/TourCategories/Tour-Categories-02.jpg",
  },
  {
    title: "Adventure Tours",
    description:
      "Get your adrenaline going with rafting, zip-lining, and off-the-beaten-path expeditions built for thrill seekers.",
    image: "/Index/TourCategories/Tour-Categories-03.jpg",
  },
  {
    title: "Cultural Tours",
    description:
      "Immerse yourself in local traditions, historic landmarks, and authentic cuisine guided by people who know the region best.",
    image: "/Index/TourCategories/Tour-Categories-04.jpg",
  },
  {
    title: "Cruise Tours",
    description:
      "Sail between coastlines and islands in comfort, waking up to a new view every morning.",
    image: "/Index/TourCategories/Tour-Categories-05.jpg",
  },
  {
    title: "Dark Tourism",
    description:
      "Visit sites of historical significance that reveal the harder, more reflective side of travel.",
    image: "/Index/TourCategories/Tour-Categories-06.jpg",
  },
];

export default function TourCategories() {
  const [index, setIndex] = useState(0);

  const active = categories[index];
  const next = categories[(index + 1) % categories.length];

  const goPrev = () =>
    setIndex((i) => (i - 1 + categories.length) % categories.length);
  const goNext = () => setIndex((i) => (i + 1) % categories.length);

  return (
    <section className="relative overflow-hidden">
      <Image
        src="/Index/TourCategories/tour-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="font-afacad text-4xl font-bold text-secondary sm:text-5xl">
              {active.title}
            </h2>
            <p className="mt-4 max-w-md text-secondary/80">
              {active.description}
            </p>
            <button className="group relative mt-8 overflow-hidden rounded-full bg-prim px-8 py-4 font-semibold text-secondary transition hover:brightness-95">
              <span className="pointer-events-none absolute inset-y-0 -left-1/4 z-10 w-1/4 -skew-x-12 bg-white/60 blur-sm transition-transform duration-700 ease-out group-hover:translate-x-[500%]" />
              <span className="relative z-20">View More</span>
            </button>
          </div>

          <div className="relative mx-auto h-[420px] w-full max-w-md">
            <button
              onClick={goPrev}
              aria-label="Previous category"
              className="absolute left-0 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-yellow text-white shadow-md transition hover:brightness-95"
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

            <div className="absolute right-2 top-2 w-40 rotate-6 rounded-2xl bg-white p-2 pb-5 shadow-lg sm:w-48">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src={next.image}
                  alt={next.title}
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-center font-afacad text-base font-bold text-secondary">
                {next.title}
              </p>
            </div>

            <div className="absolute left-1/2 top-1/2 z-20 w-56 -translate-x-[58%] -translate-y-1/2 rounded-2xl bg-white p-3 pb-6 shadow-xl sm:w-64">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  sizes="260px"
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-center font-afacad text-xl font-bold text-secondary">
                {active.title}
              </p>
            </div>

            <button
              onClick={goNext}
              aria-label="Next category"
              className="absolute right-0 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-yellow text-white shadow-md transition hover:brightness-95"
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

        <div className="mt-2 text-end">
          <p className="font-kaushan! text-2xl text-white sm:text-5xl">
            Wornderful Place For You
          </p>
          <p className="font-afacad text-2xl font-extrabold uppercase tracking-wide text-yellow sm:text-6xl mt-4">
            Tour Categories
          </p>
        </div>
      </div>
    </section>
  );
}
