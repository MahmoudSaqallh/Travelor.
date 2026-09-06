import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import PageHeader from "../../components/PageHeader";
import GuideCard from "../../components/GuideCard";
import guides from "../../json/tourGuides.json";

const essentialSkills = [
  "Communication & storytelling",
  "Leadership & group management",
  "Time coordination & logistics",
  "Multilingual ability",
  "Cultural sensitivity",
  "First aid & safety awareness (especially for adventure guides)",
];

const certifications = [
  {
    label: "India:",
    description: "Ministry of Tourism offers licenses via IITTM and regional programs",
  },
  {
    label: "Global:",
    description:
      "WFTGA (World Federation of Tourist Guide Associations) sets international standards",
  },
  {
    label: "Specialized Courses:",
    description: "Adventure guiding, museum interpretation, eco-tourism, etc.",
  },
];

const details = (guide: (typeof guides)[number]) => [
  { label: "Age:", value: guide.age },
  { label: "Education:", value: guide.education },
  { label: "Job Title:", value: guide.jobTitle },
  { label: "Location:", value: guide.location },
  { label: "Experiences:", value: guide.experience },
  { label: "Contact:", value: guide.contact },
  { label: "Email:", value: guide.email },
];

function ArrowItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-gray-500">
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-yellow text-yellow">
        <svg
          width="12"
          height="12"
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
      </span>
      {children}
    </li>
  );
}

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export default async function TourGuideDetailsPage(
  props: PageProps<"/tour-guide/[slug]">
) {
  const { slug } = await props.params;
  const guide = guides.find((item) => item.slug === slug);

  if (!guide) {
    notFound();
  }

  return (
    <div className="flex flex-1 flex-col">
      <PageHeader
        title={guide.name}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Tour Guide", href: "/tour-guide" },
          { label: guide.name },
        ]}
      />

      <section className="bg-white px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_2fr]">
          <div className="mx-auto w-full max-w-xs lg:mx-0">
            <GuideCard name={guide.name} image={guide.image} />
          </div>

          <div>
            <h2 className="font-afacad text-3xl font-bold text-secondary">
              About
            </h2>
            <p className="mt-3 text-secondary/70">
              I am a professional who enhances travel experiences by leading
              individuals or groups through destinations, providing
              insightful commentary, logistical support, and cultural
              interpretation. Here&apos;s a complete overview:
            </p>

            <div className="mt-6 flex flex-col gap-2">
              {details(guide).map((row) => (
                <div key={row.label} className="flex items-baseline gap-2">
                  <p className="w-32 shrink-0 font-semibold text-secondary">
                    {row.label}
                  </p>
                  <p className="text-secondary/80">{row.value}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-10 font-afacad text-2xl font-bold text-secondary">
              Essential Skills
            </h3>
            <ul className="mt-4 space-y-3">
              {essentialSkills.map((skill) => (
                <ArrowItem key={skill}>{skill}</ArrowItem>
              ))}
            </ul>

            <h3 className="mt-10 font-afacad text-2xl font-bold text-secondary">
              Certifications & Training
            </h3>
            <ul className="mt-4 space-y-3">
              {certifications.map((cert) => (
                <ArrowItem key={cert.label}>
                  <span className="font-semibold text-secondary">
                    {cert.label}
                  </span>{" "}
                  {cert.description}
                </ArrowItem>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
