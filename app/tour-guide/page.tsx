import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import TourGuideList from "../components/TourGuideList";

export const metadata: Metadata = {
  title: "Tour Guide | Travlla",
  description: "Meet the tour guides who make every trip memorable.",
};

export default function TourGuidePage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader
        title="Tour Guide"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Tour Guide" }]}
      />
      <TourGuideList />
    </div>
  );
}
