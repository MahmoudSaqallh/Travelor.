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

export default function InstagramFeed() {
  return (
    <section className="relative overflow-hidden bg-yellow-light px-6 py-20 sm:px-10 lg:px-16">
      <h2 className="text-center font-afacad text-3xl font-bold text-secondary sm:text-4xl">
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
              className="absolute left-[20%] top-[85%] w-[15%] -translate-x-1/2 -translate-y-1/2 animate-[spin_1.2s_linear_infinite] rounded-full"
            />
            <Image
              src="/Footer/Left-Car-tyre.png"
              alt=""
              width={73}
              height={73}
              className="absolute left-[83%] top-[85%] w-[15%] -translate-x-1/2 -translate-y-1/2 animate-[spin_1.2s_linear_infinite] rounded-full"
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
  );
}
