import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Choose Destination",
    description:
      "All you have to do is, first select your preferred destination and proceed",
    illustration: "/PricingPage/choose-destination.png",
    icon: "/PricingPage/destination-01.png",
    color: "#53a4c0",
  },
  {
    number: "02",
    title: "Make Payment",
    description:
      "You are important to us. We pay attention to the quality of every service we provide to you.",
    illustration: "/PricingPage/make-payment-1.png",
    icon: "/PricingPage/destination-02.png",
    color: "#ffa2b6",
  },
  {
    number: "03",
    title: "Ready For Travelling",
    description:
      "We have seen that you have fulfilled all the requirements, now you are ready to travel.",
    illustration: "/PricingPage/ready-for-travelling.png",
    icon: "/PricingPage/destination-03.png",
    color: "#066168",
  },
];

export default function BookingStepsAlt() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="font-afacad text-3xl font-bold text-secondary sm:text-4xl">
              Easy Step <span className="text-yellow">For Booking</span>
            </h2>
            <p className="mt-2 max-w-md text-sm text-gray-500">
              Maybe for a travel blog, wildlife site, or web development
              project here are a few sample templates you can use to
              simulate real-time news updates:
            </p>
          </div>

          <Link
            href="/services"
            className="group relative shrink-0 overflow-hidden rounded-full bg-prim px-8 py-3 font-semibold text-secondary transition hover:brightness-95"
          >
            <span className="pointer-events-none absolute inset-y-0 -left-1/4 z-10 w-1/4 -skew-x-12 bg-white/60 blur-sm transition-transform duration-700 ease-out group-hover:translate-x-[500%]" />
            <span className="relative z-20">View More</span>
          </Link>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative overflow-hidden rounded-3xl px-6 pb-6 pt-8"
              style={{
                background: `linear-gradient(to bottom, ${step.color} 45%, #ffffff 100%)`,
              }}
            >
              <div className="flex justify-end">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 p-2.5">
                  <Image
                    src={step.icon}
                    alt=""
                    width={72}
                    height={72}
                    className="h-full w-full object-contain"
                  />
                </span>
              </div>

              <h3 className="mt-6 font-afacad text-xl font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-white/90">{step.description}</p>

              <div className="mt-6 flex items-end justify-between">
                <Image
                  src={step.illustration}
                  alt=""
                  width={200}
                  height={140}
                  className="w-32 sm:w-36"
                />
                <span className="font-afacad text-5xl font-extrabold text-white/90">
                  {step.number}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Image
        src="/PricingPage/bag.png"
        alt=""
        width={213}
        height={255}
        className="pointer-events-none absolute -bottom-4 left-4 hidden w-24 sm:block lg:w-32"
      />
      <Image
        src="/PricingPage/tent.png"
        alt=""
        width={361}
        height={236}
        className="pointer-events-none absolute -bottom-2 right-4 hidden w-32 sm:block lg:w-44"
      />
    </section>
  );
}
