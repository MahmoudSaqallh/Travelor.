import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import Tours from "../components/Tours";

export const metadata: Metadata = {
  title: "Tours | Travlla",
  description: "Browse our most popular tour packages.",
};

export default function ToursPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader
        title="Tours"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Tours" }]}
      />
      <Tours />
    </div>
  );
}
