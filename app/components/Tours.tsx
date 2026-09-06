import Image from "next/image";
import Link from "next/link";
import tours from "../json/tours.json";

const starPath =
  "M12 2l2.9 6.9L22 9.3l-5.5 4.8L18.2 22 12 17.8 5.8 22l1.7-7.9L2 9.3l7.1-.4L12 2z";

export default function Tours() {
  return (
    <section className="bg-[#e6f2f1] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="relative text-center">
          <h2 className="font-poppins! text-4xl font-bold text-secondary sm:text-5xl">
            Explore Popular <span className="text-yellow">Tours!</span>
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

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tours.map((tour) => (
            <div
              key={tour.slug}
              className="overflow-hidden rounded-2xl bg-white shadow-lg shadow-secondary/10"
            >
              <Link href={`/tours/${tour.slug}`} className="relative block aspect-square w-full">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                />
              </Link>

              <div className="p-5">
                <Link href={`/tours/${tour.slug}`}>
                  <h3 className="font-poppins! text-sm font-bold text-secondary transition hover:text-prim">
                    {tour.title}
                  </h3>
                </Link>

                <div className="mt-3 flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-secondary/70">({tour.review})</span>
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="text-yellow"
                        >
                          <path d={starPath} />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-secondary/70">
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
                      <rect x="3" y="4" width="18" height="17" rx="2" />
                      <path d="M3 9h18" />
                      <path d="M8 2v4" />
                      <path d="M16 2v4" />
                    </svg>
                    <span>{tour.days}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <Link
                    href={`/tours/${tour.slug}`}
                    className="group relative overflow-hidden rounded-full bg-prim px-5 py-2 text-sm font-semibold text-secondary transition hover:brightness-95"
                  >
                    <span className="pointer-events-none absolute inset-y-0 -left-1/4 z-10 w-1/4 -skew-x-12 bg-white/60 blur-sm transition-transform duration-700 ease-out group-hover:translate-x-[500%]" />
                    <span className="relative z-20">Book Now</span>
                  </Link>
                  <p className="font-afacad text-secondary">
                    <span className="text-xl font-bold">{tour.price}</span>{" "}
                    <span className="text-sm text-secondary/70">Per day</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
