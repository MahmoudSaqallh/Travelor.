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

export default function AboutIntro() {
  return (
    <section className="bg-[#FEF9EB] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div className="relative mx-auto aspect-square w-full max-w-md rounded-full bg-[#FFF1DA]">
          <Image
            src="/AboutPage/abt-pic1.png"
            alt="Traveler with an umbrella and a suitcase"
            width={376}
            height={672}
            className="absolute bottom-0 left-1/2 h-[90%] lg:h-[120%] w-auto -translate-x-1/2 object-contain"
          />
        </div>

        <div>
          <h2 className="font-afacad text-2xl font-bold leading-tight text-secondary sm:text-5xl">
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
                  <h3 className="font-afacad text-lg font-bold text-secondary">
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
              <span className="relative z-20">Discover More</span>
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
      </div>
    </section>
  );
}
