"use client";

import Image from "next/image";
import CountUp from "react-countup";

const stats = [
  {
    icon: "/Index/Counter/count-icon1.png",
    title: "Awards Winning",
    value: 3600,
    decimals: 0,
    suffix: "+",
  },
  {
    icon: "/Index/Counter/count-icon2.png",
    title: "Happy Traveler",
    value: 7634,
    decimals: 0,
    suffix: "+",
  },
  {
    icon: "/Index/Counter/count-icon3.png",
    title: "Tours Success",
    value: 2.5,
    decimals: 1,
    suffix: "K",
  },
  {
    icon: "/Index/Counter/count-icon4.png",
    title: "Our Experience",
    value: 25,
    decimals: 0,
    suffix: "+",
  },
];

export default function Counter() {
  return (
    <section>
      <div className="relative">
        <video className="block w-full" autoPlay muted loop playsInline>
          <source src="/Index/Counter/banner-video.mp4" type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            <span className="absolute inset-0 animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full border border-white/70" />
            <span className="absolute inset-0 animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full border border-white/70 [animation-delay:-1.25s]" />
            <div className="relative border-1 border-white rounded-full p-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full  bg-white/10 backdrop-blur-sm ">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary px-6 py-14 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="flex items-center gap-3 rounded-xl border border-dashed border-white/30 p-3 sm:gap-4 sm:p-5"
            >
              <Image
                src={stat.icon}
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 shrink-0 sm:h-20 sm:w-20"
              />
              <div className="min-w-0">
                <p className="text-xs text-white sm:text-sm">{stat.title}</p>
                <p className="text-xl font-bold text-yellow sm:text-4xl">
                  <CountUp
                    end={stat.value}
                    decimals={stat.decimals}
                    duration={2.5}
                    separator=","
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  {stat.suffix}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
