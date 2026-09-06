import { notFound } from "next/navigation";
import PageHeader from "../../components/PageHeader";
import ImageSlider from "../../components/ImageSlider";
import tours from "../../json/tours.json";

const starPath =
  "M12 2l2.9 6.9L22 9.3l-5.5 4.8L18.2 22 12 17.8 5.8 22l1.7-7.9L2 9.3l7.1-.4L12 2z";

const checkPath = "M20 6 9 17l-5-5";

const packageIcons = [
  {
    name: "Hotels",
    path: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="1" />
        <path d="M9 21v-4h6v4" />
        <path d="M9 7h.01M9 11h.01M15 7h.01M15 11h.01" />
      </>
    ),
  },
  {
    name: "Sightseeing",
    path: (
      <>
        <circle cx="7" cy="12" r="3" />
        <circle cx="17" cy="12" r="3" />
        <path d="M10 12h4" />
        <path d="M12 6V4" />
      </>
    ),
  },
  {
    name: "Transfer",
    path: (
      <>
        <path d="M3 13l1.5-4.5A2 2 0 0 1 6.4 7h11.2a2 2 0 0 1 1.9 1.5L21 13" />
        <rect x="3" y="13" width="18" height="5" rx="1" />
        <circle cx="7" cy="18" r="1.5" />
        <circle cx="17" cy="18" r="1.5" />
      </>
    ),
  },
  {
    name: "Meal",
    path: (
      <>
        <path d="M6 3v7a2 2 0 0 0 2 2v9" />
        <path d="M6 3v7M9 3v7" />
        <path d="M17 3c-1.5 0-2.5 1.5-2.5 4s1 5 2.5 5v9" />
      </>
    ),
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-yellow"
        >
          <path d={starPath} />
        </svg>
      ))}
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-gray-600">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-prim text-white">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={checkPath} />
            </svg>
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export default async function TourDetailsPage(
  props: PageProps<"/tours/[slug]">
) {
  const { slug } = await props.params;
  const tour = tours.find((item) => item.slug === slug);

  if (!tour) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col">
      <PageHeader
        title={tour.title}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Tours", href: "/tours" },
          { label: tour.title },
        ]}
      />

      <section className="bg-[#e6f2f1] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-2 text-sm text-secondary/70">
                <span>({tour.review})</span>
                <Stars />
              </div>
              <h1 className="mt-2 font-afacad text-3xl font-bold text-secondary sm:text-4xl">
                {tour.title}
              </h1>
              <p className="mt-1 text-sm text-secondary/60">{tour.places}</p>
            </div>


            <div className="rounded-3xl bg-white p-8 sm:p-10">
              <h2 className="font-afacad text-2xl font-bold text-secondary">
                Package Overview
              </h2>
              <p className="mt-3 text-gray-500">{tour.overview}</p>
              <CheckList items={tour.includes} />

              <h2 className="mt-10 font-afacad text-2xl font-bold text-secondary">
                Additional Easemytrip Delights
              </h2>
              <CheckList items={tour.delights} />

              <h2 className="mt-10 font-afacad text-2xl font-bold text-secondary">
                Day Wise Itinerary
              </h2>
              <div className="mt-4 rounded-3xl bg-yellow-light p-6 sm:p-8">
                <div className="flex flex-col gap-8">
                  {tour.itinerary.map((day) => (
                    <div key={day.day} className="flex gap-5">
                      <div className="flex shrink-0 flex-col items-center">
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-lg font-bold text-white">
                          {day.day}
                        </span>
                        <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-secondary">
                          Day
                        </span>
                      </div>
                      <div>
                        <h3 className="font-afacad text-lg font-bold text-secondary">
                          Day {day.day}: {day.title}
                        </h3>
                        <ul className="mt-2 space-y-1.5">
                          {day.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm text-secondary/80"
                            >
                              <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-yellow text-white">
                                <svg
                                  width="9"
                                  height="9"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d={checkPath} />
                                </svg>
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="rounded-3xl bg-white p-6 sm:p-8">
              <p className="text-sm text-gray-500">Starting from</p>
              <p className="font-afacad text-3xl font-bold text-secondary">
                {tour.price}
                <span className="text-base font-normal text-gray-400">
                  {" "}
                  / Person
                </span>
              </p>
              <button className="group relative mt-4 w-full overflow-hidden rounded-full bg-prim px-8 py-3 font-semibold text-secondary transition hover:brightness-95">
                <span className="pointer-events-none absolute inset-y-0 -left-1/4 z-10 w-1/4 -skew-x-12 bg-white/60 blur-sm transition-transform duration-700 ease-out group-hover:translate-x-[500%]" />
                <span className="relative z-20">Enquire Now</span>
              </button>
            </div>

            <div className="rounded-3xl bg-white p-6 sm:p-8">
              <p className="text-sm text-secondary">
                <span className="font-semibold">Duration :</span>{" "}
                {tour.duration}
              </p>
              <p className="mt-2 text-sm text-secondary">
                <span className="font-semibold">Places to Visit :</span>{" "}
                {tour.places}
              </p>

              <div className="my-6 flex items-center gap-3">
                <span className="h-px flex-1 bg-secondary/10" />
                <span className="rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold text-white">
                  Package Includes
                </span>
                <span className="h-px flex-1 bg-secondary/10" />
              </div>

              <div className="grid grid-cols-4 gap-3 text-center">
                {packageIcons.map((icon) => (
                  <div key={icon.name} className="flex flex-col items-center gap-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-secondary"
                    >
                      {icon.path}
                    </svg>
                    <span className="text-xs text-secondary/70">
                      {icon.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
