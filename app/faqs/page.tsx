import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import FaqSection from "../components/FaqSection";
import ContactBanner from "../components/ContactBanner";

export const metadata: Metadata = {
  title: "FAQs | Travlla",
  description: "Answers to frequently asked questions about Travlla.",
};

export default function FaqsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader
        title="Frequently Asked Questions"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Frequently Asked Questions" },
        ]}
      />
      <FaqSection />
      <ContactBanner />
    </div>
  );
}
