import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import ContactSection from "../components/ContactSection";

export const metadata: Metadata = {
  title: "Contact | Travlla",
  description: "Get in touch with the Travlla team.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader
        title="Contact"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <ContactSection />
    </div>
  );
}
