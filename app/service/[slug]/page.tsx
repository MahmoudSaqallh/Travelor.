import { notFound } from "next/navigation";
import Image from "next/image";
import PageHeader from "../../components/PageHeader";
import ContactCTA from "../../components/ContactCTA";
import ServiceSidebar from "../../components/ServiceSidebar";
import TourGuideDetails from "../../components/TourGuideDetails";
import services from "../../json/services.json";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailsPage(
  props: PageProps<"/service/[slug]">
) {
  const { slug } = await props.params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col">
      <PageHeader
        title={service.name}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Service Details", href: "/about" },
          { label: service.name },
        ]}
      />

      <section className="bg-[#e6f2f1] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="flex flex-col gap-10">
            <div className="relative aspect-video w-full overflow-hidden rounded-3xl">
              <Image
                src={service.image}
                alt={service.name}
                fill
                sizes="(min-width: 1024px) 900px, 100vw"
                className="object-cover"
                priority
              />
            </div>

            {slug === "tour-guide" ? (
              <TourGuideDetails />
            ) : (
              <div className="rounded-3xl bg-white p-8 sm:p-10">
                <h2 className="font-afacad text-3xl font-bold text-secondary">
                  {service.name}
                </h2>
                <p className="mt-4 text-gray-500">{service.description}</p>
              </div>
            )}

            <ContactCTA />
          </div>

          <ServiceSidebar />
        </div>
      </section>
    </div>
  );
}
