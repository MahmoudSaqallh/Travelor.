import Image from "next/image";
import Link from "next/link";
import destinations from "../json/aboutUs.json";

const starPath =
  "M12 2l2.9 6.9L22 9.3l-5.5 4.8L18.2 22 12 17.8 5.8 22l1.7-7.9L2 9.3l7.1-.4L12 2z";

export default function DestinationList() {
  return (
    <section className="bg-[#e6f2f1] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-6xl">
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

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination) => (
            <Link
              key={destination.slug}
              href={`/destination/${destination.slug}`}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg shadow-secondary/10 transition hover:shadow-xl"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  sizes="(min-width: 1024px) 24vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-yellow">
                    <path d={starPath} />
                  </svg>
                  {destination.rating}
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-afacad text-lg font-bold text-secondary">
                  {destination.name}
                </h3>
                <p className="text-sm text-gray-500">{destination.country}</p>
                <p className="mt-2 text-xs font-semibold text-yellow">
                  {destination.listings} Listings
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
