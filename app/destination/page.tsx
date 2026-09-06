import type { Metadata } from "next";
import PageHeader from "../components/PageHeader";
import DestinationList from "../components/DestinationList";

export const metadata: Metadata = {
  title: "Destination | Travlla",
  description: "Explore popular destinations to plan your next trip.",
};

export default function DestinationPage() {
  return (
    <div className="flex flex-1 flex-col">
      <PageHeader
        title="Destination"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Destination" }]}
      />
      <DestinationList />
    </div>
  );
}
