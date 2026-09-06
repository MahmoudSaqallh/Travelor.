import Image from "next/image";

const features = [
  "3 star hotel (4 nights)",
  "Local taxis",
  "Sightseeing, tickets",
  "Tourist visa",
  "Meals & snacks",
];

const plans = [
  { name: "Budget Travel", price: "$49", image: "/PricingPage/tour-01.jpg" },
  { name: "Mid-Range Travel", price: "$79", image: "/PricingPage/tour-02.jpg" },
  { name: "Luxury Travel", price: "$99", image: "/PricingPage/tour-03.jpg" },
];

const arrowPath = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16l4-4-4-4" />
    <path d="M8 12h8" />
  </svg>
);

export default function PricingSection() {
  return (
    <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <Image
        src="/PricingPage/pricebg.png"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="font-afacad text-4xl font-bold text-secondary sm:text-5xl">
            <span className="text-yellow">Price For</span> Travel The World
          </h2>
          <p className="mt-3 text-secondary/80">
            Destinations worth exploring! Here are a few popular spots
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-[40px] bg-white p-6 shadow-lg shadow-secondary/10"
            >
              <div className="relative aspect-[534/237] w-full overflow-hidden rounded-full">
                <Image
                  src={plan.image}
                  alt={plan.name}
                  fill
                  sizes="(min-width: 1024px) 30vw, 90vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-6 flex items-start justify-between">
                <h3 className="font-afacad text-xl font-bold text-secondary">
                  {plan.name}
                </h3>
                <div className="text-right">
                  <p className="font-afacad text-2xl font-bold text-secondary">
                    {plan.price}
                  </p>
                  <p className="text-xs text-gray-400">Per Day</p>
                </div>
              </div>

              <ul className="mt-4 space-y-3">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-secondary"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-yellow text-yellow">
                      {arrowPath}
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="group relative mt-6 w-full overflow-hidden rounded-full bg-prim px-8 py-3 font-semibold text-secondary transition hover:brightness-95">
                <span className="pointer-events-none absolute inset-y-0 -left-1/4 z-10 w-1/4 -skew-x-12 bg-white/60 blur-sm transition-transform duration-700 ease-out group-hover:translate-x-[500%]" />
                <span className="relative z-20">Shop Now</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
