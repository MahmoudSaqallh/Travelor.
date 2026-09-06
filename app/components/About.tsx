import Image from "next/image";

const features = [
  {
    icon: "/Index/About/travel-guide.png",
    title: "Trusted travel guide",
    description:
      "Provides reliable information to help travelers plan their trips efficiently and safely.",
  },
  {
    icon: "/Index/About/mission-icon.png",
    title: "Mission & Vision",
    description:
      "Aims to connect people to positive experience through travel, helping them see the world differently.",
  },
];

const avatars = [
  "/Index/About/pic1.jpg",
  "/Index/About/pic2.jpg",
  "/Index/About/pic3.jpg",
];

export default function About() {
  return (
    <section className="bg-yellow-light px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-kaushan!  text-xl font-bold leading-tight text-secondary sm:text-5xl">
            We <span className="text-yellow">Recommend</span> Beautiful
            Destinations Every Month
          </h2>
          <p className="mt-5 max-w-lg text-gray-500">
            Travlla is a multi-award-winning strategy and content creation
            agency that specializes in travel marketing. They have one of the
            world&apos;s largest and most influential online travel
            communities, helping brands and tourism.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-4 rounded-2xl border border-secondary/15 p-5"
              >
                <Image
                  src={feature.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 shrink-0"
                />
                <div>
                  <h3 className="font-afacad! text-2xl font-bold text-black">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-4">
            <button className="group relative overflow-hidden rounded-full bg-prim px-8 py-4 font-semibold text-secondary transition hover:brightness-95">
              <span className="pointer-events-none absolute inset-y-0 -left-1/4 z-10 w-1/4 -skew-x-12 bg-white/60 blur-sm transition-transform duration-700 ease-out group-hover:translate-x-[500%]" />
              <span className="relative z-20 text-secondary transition-colors duration-500 group-hover:text-white group-hover:[text-shadow:0_0_12px_rgba(255,255,255,0.9)]">
                Discover More
              </span>
            </button>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {avatars.map((src) => (
                  <Image
                    key={src}
                    src={src}
                    alt=""
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full border-2 border-yellow-light object-cover"
                  />
                ))}
              </div>
              <div>
                <p className="font-afacad text-xl font-bold text-secondary">
                  3.5k
                </p>
                <p className="text-sm text-gray-500">Happy Customer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[480px] lg:h-[560px]">
          <div className="absolute left-0 top-0 z-10 h-[78%] w-[44%] overflow-hidden rounded-[28px]">
            <Image
              src="/Index/About/about-image02.jpg"
              alt="Couple hiking with a scenic valley view"
              fill
              sizes="(min-width: 1024px) 25vw, 40vw"
              className="object-cover rounded-tl-[27%]"
            />
          </div>

          <Image
            src="/Index/About/airplane.png"
            alt=""
            width={431}
            height={166}
            className="absolute right-15 top-2 lg:right-30 z-0 w-[54%] -rotate-6 "
          />

          <div className="absolute left-[36%] top-[24%] z-20 aspect-square w-[52%] overflow-hidden rounded-full border-[20px] border-yellow-light">
            <Image
              src="/Index/About/about-image01.jpg"
              alt="Traveler in a yellow dress overlooking a bay"
              fill
              sizes="(min-width: 1024px) 26vw, 42vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-10 right-0 z-10 h-[78%] w-[44%] overflow-hidden rounded-[28px]">
            <Image
              src="/Index/About/about-image03.jpg"
              alt="Hiker with a red backpack near a limestone sea stack"
              fill
              sizes="(min-width: 1024px) 25vw, 40vw"
              className="object-cover rounded-br-[25%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
