import Image from "next/image";

const steps = [
  {
    number: "01",
    icon: "/Index/BookingSteps/Steps-Icon1.png",
    title: "Choose Destination",
    description:
      "All you have to do is, first select your preferred destination and proceed",
  },
  {
    number: "02",
    icon: "/Index/BookingSteps/Steps-Icon2.png",
    title: "Make Payment",
    description:
      "You are important to us. We pay attention to the quality of service we provide to you.",
  },
  {
    number: "03",
    icon: "/Index/BookingSteps/Steps-Icon3.png",
    title: "Ready For Travelling",
    description:
      "We have seen that you have fulfilled all the requirements, now you are ready to travel.",
  },
];

export default function BookingSteps() {
  return (
    <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">

          <h2 className="font-afacad text-xl font-bold text-secondary sm:text-5xl">
            Easy Steps <span className="text-yellow">For Bookings</span>
          </h2>
          <p className="mt-3 text-gray-500">
            Destinations worth exploring! Here are a few popular spots
          </p>
                    <Image
            src="/Index/BookingSteps/Title-Shape.png"
            alt=""
            width={715}
            height={107}
            className="mx-auto -mb-6 w-64 sm:w-80"
          />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-secondary/10 p-8 transition-all duration-300 hover:translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-3xl font-bold text-white">
                  {step.number}
                </span>
                <span className="flex h-16 w-16 items-center justify-center rounded-full border-3 p-3 border-yellow">
                  <Image src={step.icon} alt="" width={36} height={36} />
                </span>
              </div>
              <h3 className="mt-6 font-afacad text-xl font-bold text-secondary">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="relative mt-10 overflow-hidden rounded-3xl bg-yellow px-8 py-10 sm:px-6">
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-start  text-white">
              <span className="text-7xl font-extrabold leading-none">48</span>
              <div className="mt-5 flex flex-col leading-none">
                <span className="text-xl  text-secondary">%</span>
                <span className=" text-lg font-bold text-secondary">
                  OFF
                </span>
              </div>
            </div>

            <div>
              <p className="pb-3 text-sm font-semibold text-white">
                Get Special Offer
              </p>
              <p className="font-kaushan! text-xl lg:text-5xl! text-secondary sm:text-4xl">
                Tours and Trip Packages, Globally
              </p>
            </div>

            <button className="group relative overflow-hidden rounded-full border-2 border-transparent bg-white px-6 py-3 font-semibold text-secondary transition hover:border-prim hover:brightness-95">
              <span className="pointer-events-none absolute inset-y-0 -left-1/4 z-10 w-1/4 -skew-x-12 bg-secondary/20 blur-sm transition-transform duration-700 ease-out group-hover:translate-x-[500%]" />
              <span className="relative z-20">Discover More</span>
            </button>
          </div>

          <Image
            src="/Index/BookingSteps/Banner-bg.png"
            alt=""
            width={1278}
            height={89}
            className="pointer-events-none absolute inset-x-0 bottom-0 h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
