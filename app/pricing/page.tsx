import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import PricingSection from "../components/PricingSection";
import BookingStepsAlt from "../components/BookingStepsAlt";
import ContactSplit from "../components/ContactSplit";

export const metadata: Metadata = {
  title: "Pricing Plan | Travlla",
  description: "Choose the travel plan that fits your budget.",
};

export default function PricingPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader
        title="Pricing Plan"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Pricing Plan" }]}
      />
      <PricingSection />
      <BookingStepsAlt />
      <ContactSplit />
    </div>
  );
}
