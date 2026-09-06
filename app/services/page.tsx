import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import AmazingServices from "../components/AmazingServices";
import Testimonials from "../components/Testimonials";

export const metadata: Metadata = {
  title: "Services | Travlla",
  description: "Explore the services Travlla offers for your next trip.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader
        title="Services"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <AmazingServices />
      <Testimonials />
    </div>
  );
}
