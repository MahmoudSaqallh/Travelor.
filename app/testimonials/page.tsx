import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import TestimonialsGrid from "../components/TestimonialsGrid";

export const metadata: Metadata = {
  title: "Testimonials | Travlla",
  description: "See what our travelers have to say about Travlla.",
};

export default function TestimonialsPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader
        title="Testimonials"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Testimonials" }]}
      />
      <TestimonialsGrid />
    </div>
  );
}
