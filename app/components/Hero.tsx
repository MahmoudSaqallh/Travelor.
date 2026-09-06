import Image from "next/image";

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01",
    rect: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
    linkedinExtra: true,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/",
    path: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z M9.75 15.02l5.75-3.27-5.75-3.27z",
    youtube: true,
  },
];

export default function Hero() {
  return (
    <section className="relative h-[75vh] lg:h-[110vh] w-full overflow-hidden bg-secondary">
      <Image
        src="/Index/Hero/slider-bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <Image
        src="/Index/Hero/Cloud1.png"
        alt=""
        width={168}
        height={131}
        className="absolute -top-2 left-0 w-28 animate-[float-across_35s_linear_infinite] opacity-90 sm:w-36 lg:w-44"
      />
      <Image
        src="/Index/Hero/Cloud2.png"
        alt=""
        width={231}
        height={136}
        className="absolute top-[24%] left-0 hidden w-32 animate-[float-across_48s_linear_infinite] opacity-90 [animation-delay:-18s] md:block lg:w-40"
      />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex flex-1 items-center px-6 sm:px-10 lg:px-16 pt-16">
          <div className="max-w-xl">
            <p className="font-kaushan! text-5xl text-white sm:text-5xl">
              Discover
            </p>
            <h1 className="animate-[sway_6s_ease-in-out_infinite] whitespace-nowrap font-kaushan text-6xl font-semibold leading-[0.95] text-white [text-shadow:6px_18px_2px_#0003] sm:text-7xl lg:text-[150px] py-5 lg:py-20">
              The World
            </h1>
            <p className="mt-6 w-50% lg:w-full text-[18px] lg:text-[28px] italic text-white/90 whitespace-nowrap">
              The Safety of our customers at all stages
            </p>
            <button className="group relative mt-8 overflow-hidden rounded-full bg-prim px-8 py-4 font-semibold text-secondary transition hover:brightness-95">
              <span className="pointer-events-none absolute inset-y-0 -left-1/4 z-10 w-1/4 -skew-x-12 bg-white/60 blur-sm transition-transform duration-700 ease-out group-hover:translate-x-[500%]" />
              <span className="relative z-20 text-secondary transition-colors duration-500 group-hover:text-white group-hover:[text-shadow:0_0_12px_rgba(255,255,255,0.9)]">
                Get In Touch
              </span>
            </button>

            <div className="mt-14 flex items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-white">
                Follow Us
              </span>
              <span className="h-px w-10 bg-white/40" />
              <div className="flex items-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/50 text-white transition hover:border-prim hover:bg-prim hover:text-secondary"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {social.rect && <rect x="2" y="2" width="20" height="20" rx="5" />}
                      {social.linkedinExtra && (
                        <>
                          <rect x="2" y="9" width="4" height="12" />
                          <circle cx="4" cy="4" r="2" />
                        </>
                      )}
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-60 z-20 hidden items-end justify-end overflow-hidden lg:flex ">
        <div className="relative w-[50vw] max-w-275">
          <div className="absolute inset-0 m-auto aspect-square w-[100%] rounded-full border border-white/15">
            <div className="absolute inset-0 animate-[spin_22s_linear_infinite]">
              <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-prim" />
            </div>
          </div>
          <div className="absolute inset-0 m-auto aspect-square w-[75%] rounded-full border border-white/15">
            <div className="absolute inset-0 animate-[spin_17s_linear_infinite_reverse]">
              <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-prim" />
            </div>
          </div>
          <div className="absolute inset-0 m-auto aspect-square w-[55%] rounded-full border border-white/15">
            <div className="absolute inset-0 animate-[spin_12s_linear_infinite]">
              <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow" />
            </div>
          </div>

          <Image
            src="/Index/Hero/Plane-With-Line.png"
            alt=""
            width={770}
            height={291}
            className="absolute left-0 top-[20%] z-10 w-72 lg:w-120"
          />

          <Image
            src="/Index/Hero/right-pic.png"
            alt="Traveler with a backpack sitting on her suitcase"
            width={819}
            height={702}
            priority
            className="relative z-20 h-auto w-[95%] object-contain"
          />

          <div className="absolute right-6 top-[30%] z-30 -rotate-6  text-white">
            <p className="text-sm italic">Get Up To</p>
            <p className="text-6xl font-extrabold leading-none xl:text-7xl">50%</p>
            <p className="text-xl font-bold">Discount</p>
          </div>
        </div>
      </div>
    </section>
  );
}
