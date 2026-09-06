import Image from "next/image";
import Link from "next/link";
import services from "../json/services.json";

export default function AmazingServices() {
  return (
    <section className="bg-secondary px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-afacad text-4xl font-bold text-white sm:text-5xl">
            Our Amazing <span className="text-yellow">Services</span>
          </h2>
          <p className="mt-3 text-white/70">
            Destinations worth exploring! Here are a few popular spots
          </p>
          <Image
            src="/Index/BookingSteps/Title-Shape.png"
            alt=""
            width={715}
            height={107}
            className="mx-auto mt-4 w-64 opacity-40 sm:w-80"
          />
        </div>

        <div className="mt-10 rounded-3xl bg-[#e6f2f1] p-6 sm:p-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/service/${service.slug}`}
                className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-xl"
              >
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="p-5 text-center font-afacad text-lg font-bold text-secondary">
                  {service.name}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-14 text-center sm:text-right">
          <p className="font-kaushan text-3xl text-white sm:text-4xl">
            Wornderful Services For You
          </p>
          <p className="font-afacad text-4xl font-extrabold uppercase tracking-wide text-yellow sm:text-6xl">
            Services We Offer
          </p>
        </div>
      </div>
    </section>
  );
}
