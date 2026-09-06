import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import AboutIntro from "../components/AboutIntro";
import PopularDestination from "../components/PopularDestination";
import AmazingServices from "../components/AmazingServices";

export const metadata: Metadata = {
  title: "About Us | Travlla",
  description: "Learn more about Travlla and what we do.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader
        title="About US"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />
      <AboutIntro />
      <PopularDestination />
      <AmazingServices />
    </div>
  );
}
