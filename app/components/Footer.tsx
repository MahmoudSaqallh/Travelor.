import Link from "next/link";
import Image from "next/image";

const photos = [
  "/Footer/pic1.jpg",
  "/Footer/pic2.jpg",
  "/Footer/pic3.jpg",
  "/Footer/pic4.jpg",
  "/Footer/pic5.jpg",
  "/Footer/pic6.jpg",
  "/Footer/pic7.jpg",
  "/Footer/pic8.jpg",
  "/Footer/pic9.jpg",
];

const socials = [
  {
    name: "X",
    href: "https://x.com/",
    path: "M4 4l16 16M20 4L4 20",
  },
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
    name: "YouTube",
    href: "https://www.youtube.com/",
    path: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z M9.75 15.02l5.75-3.27-5.75-3.27z",
  },
];

const explore = ["About Us", "FAQ's", "Services", "Team", "News & Articles"];
const destinations = ["Tokyo", "France", "Dubai", "Kenya", "Vietnam"];
const legal = [
  "Terms & Condition",
  "Privacy Policy",
  "Contact",
  "Careers",
  "Help",
];

export default function Footer() {
  return (
    
    <footer className="bg-yellow-light pt-20  ">
    <section className="relative overflow-hidden bg-yellow-light px-6 py-20 sm:px-10 lg:px-16">
      <h2 className="text-center font-afacad! text-3xl font-bold text-secondary sm:text-4xl">
        Follow Instagram
      </h2>

      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-3 gap-3 sm:grid-cols-9 sm:gap-4">
        {photos.map((src) => (
          <a
            key={src}
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden rounded-2xl"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(min-width: 640px) 11vw, 30vw"
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-secondary shadow-md">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <path d="M17.5 6.5h.01" />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="relative left-1/2 mt-20 h-32 w-screen -translate-x-1/2">
        <div className="absolute inset-x-0 bottom-0 h-px bg-secondary/30" />

        <div className="absolute bottom-0 left-0 z-20 w-44 animate-[float-across_18s_linear_infinite] sm:w-56 lg:w-50">
          <div className="relative">
            <Image
              src="/Footer/Left-Car.png"
              alt="Car packed with luggage"
              width={496}
              height={270}
              className="w-full z-10"
            />
            <Image
              src="/Footer/Left-Car-tyre.png"
              alt=""
              width={73}
              height={73}
              className="absolute left-[20%] top-[85%] w-[15%] -translate-x-1/2 -translate-y-1/2 animate-[spin_1.2s_linear_infinite]"
            />
            <Image
              src="/Footer/Left-Car-tyre.png"
              alt=""
              width={73}
              height={73}
              className="absolute left-[83%] top-[85%] w-[15%] -translate-x-1/2 -translate-y-1/2 animate-[spin_1.2s_linear_infinite] "
            />
          </div>
        </div>

        <Image
          src="/Footer/Righttreepic.png"
          alt="Palm tree island"
          width={297}
          height={197}
          className="absolute bottom-0 right-0 w-32 sm:w-44 lg:w-52 z-0"
        />
      </div>
    </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-0 ">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-kaushan text-3xl text-secondary">
              Travelo<span className="text-prim">r.</span>
            </p>
            <p className="mt-4 max-w-xs text-sm text-secondary/70">
              Travlla is a multi-award-winning strategy and content creation
              agency that specializes in travel marketing.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-yellow bg-secondary text-white transition hover:bg-yellow"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {social.rect && (
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                    )}
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-afacad text-xl font-bold text-secondary">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-secondary/80">
              {explore.map((item) => (
                <li key={item}>
                  <Link href="#" className="transition hover:text-prim">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-afacad text-xl font-bold text-secondary">
              Destinations
            </h3>
            <ul className="mt-4 space-y-3 text-secondary/80">
              {destinations.map((item) => (
                <li key={item}>
                  <Link href="#" className="transition hover:text-prim">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-afacad text-xl font-bold text-secondary">
              Legal
            </h3>
            <ul className="mt-4 space-y-3 text-secondary/80">
              {legal.map((item) => (
                <li key={item}>
                  <Link href="#" className="transition hover:text-prim">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              <p className="font-kaushan text-lg text-secondary">
                +91 123 456 789
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
              </span>
              <p className="font-kaushan text-lg text-secondary">
                travllainfo@gmail.com
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" />
                </svg>
              </span>
              <p className="font-kaushan text-lg text-secondary">
                55/11 ronin tower london
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-16 flex flex-col gap-6 rounded-3xl bg-secondary px-8 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-14">
          <div>
            <h3 className="font-afacad! text-3xl font-bold text-white sm:text-5xl">
              Subscribe <span className="text-yellow">Now!</span>
            </h3>
            <p className="mt-1 text-white/80">
              Sign up to searing weekly newsletter to get the latest updates.
            </p>
          </div>

          <form className="relative w-full sm:max-w-sm">
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-full bg-white py-4 pl-6 pr-16 text-secondary placeholder:text-secondary/50 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="absolute right-1.5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-secondary text-white transition hover:bg-secondary/90"
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
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
          </form>
        </div>

        <p className="py-8 text-center text-sm text-secondary">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-yellow">Ulcode</span> All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
