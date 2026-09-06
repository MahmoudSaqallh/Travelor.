import { notFound } from "next/navigation";
import PageHeader from "../../components/PageHeader";
import ImageSlider from "../../components/ImageSlider";
import ContactCTA from "../../components/ContactCTA";
import destinations from "../../json/aboutUs.json";

const bannerImages = [
  "/Destination/DestinationDetailsPage/destinationdetails-image01.png",
  "/Destination/DestinationDetailsPage/destinationdetails-image02.png",
  "/Destination/DestinationDetailsPage/destinationdetails-image03.png",
];

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export default async function DestinationDetailsPage(
  props: PageProps<"/destination/[slug]">
) {
  const { slug } = await props.params;
  const destination = destinations.find((item) => item.slug === slug);

  if (!destination) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col">
      <PageHeader
        title={destination.name}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Destination", href: "/about" },
          { label: destination.name },
        ]}
      />

      <section className="bg-[#e6f2f1] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <ImageSlider images={bannerImages} alt={destination.name} />

          <div className="mt-10 flex flex-col gap-10">
            <div className="rounded-3xl bg-white p-8 sm:p-10">
              <h2 className="font-afacad text-3xl font-bold text-secondary">
                {destination.name}
              </h2>
              <p className="mt-4 text-gray-500">{destination.description}</p>

              <h3 className="mt-8 font-afacad text-2xl font-bold text-secondary">
                Destinations Features
              </h3>
              <ul className="mt-4 space-y-3">
                {destination.popularAttractions.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-gray-600"
                  >
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
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="mt-10 font-afacad text-2xl font-bold text-secondary">
                Related tour Packages
              </h3>
              <p className="mt-3 text-gray-500">
                No destinations found for this location.
              </p>
            </div>

            <ContactCTA />
          </div>
        </div>
      </section>
    </div>
  );
}
