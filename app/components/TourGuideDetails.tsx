import type { ReactNode } from "react";
import FaqAccordion from "./FaqAccordion";

const faqs = [
  {
    question: "01 - How can I book a trip?",
    answer:
      "Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi cons the miss sustion consation miss orcisition amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen orbinetion.",
  },
  {
    question: "02 - How can I cancel my booking?",
    answer:
      "Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi cons the miss sustion consation miss orcisition amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen orbinetion.",
  },
  {
    question: "03 - Do you offer international travel packages?",
    answer:
      "Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi cons the miss sustion consation miss orcisition amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen orbinetion.",
  },
  {
    question: "04 - Are there group discounts available?",
    answer:
      "Lorem pretium fermentum quam, sit amet cursus ante sollicitudin velen morbi cons the miss sustion consation miss orcisition amet iaculis nisan. Lorem pretium fermentum quam sit amet cursus ante sollicitudin velen fermen orbinetion.",
  },
];

const whatIs = [
  "Explaining historical, cultural, and natural significance of place",
  "Assisting with logistics like hotel check-ins, local transport, and dining",
  "Offering safety tips and local etiquette guidance",
  "Customizing itineraries based on traveler interests",
];

const types = [
  {
    name: "Private Guide",
    description:
      "One-on-one personalized tours, often tailored to specific interests",
  },
  {
    name: "Group Tours",
    description:
      "Shared tours with multiple travelers, often more budget-friendly",
  },
  {
    name: "City Guides",
    description:
      "Local experts for urban exploration—museums, markets, monuments",
  },
  {
    name: "Cultural Guides",
    description: "Focus on traditions, festivals, cuisine, and heritage sites",
  },
  {
    name: "Tour Managers",
    description:
      "Oversee multi-day trips, handling logistics and group coordination",
  },
  {
    name: "Nature & Wildlife Guides",
    description:
      "Specialists in safaris, trekking, and eco-tourism areas like sanctuaries",
  },
];

const keyFeatures = [
  {
    title: "Certified by the Government of USA:",
    description: "Licensed guides undergo rigorous training and exams",
  },
  {
    title: "Multilingual:",
    description: "Many guides speak English, Hindi, and regional languages",
  },
  {
    title: "Local Expertise:",
    description: "Deep knowledge of history, culture, and hidden gems",
  },
  {
    title: "Flexible Engagement:",
    description: "You can choose full-time guidance or occasional support",
  },
  {
    title: "Safety & Support:",
    description: "Guides help navigate unfamiliar areas and handle emergencies",
  },
];

const travelAmenities = [
  {
    name: "Hotel",
    description:
      "Free Wi-Fi, toiletries, heated floors, in-room slippers, cable TV, room service",
  },
  {
    name: "Restaurants",
    description: "Free water & side dishes, call buttons, Wi-Fi, mobile ordering",
  },
  {
    name: "Public Facilities",
    description:
      "Clean restrooms, free Wi-Fi (Seoul), tourist information centers, lockers",
  },
  {
    name: "Transportations",
    description: "High-speed KTX trains, T-money transportation cards, mobile apps",
  },
  {
    name: "Shopping Area",
    description:
      "Tax refund counters, delivery services, foreign language staff (in major stores)",
  },
];

const foodAmenities = [
  {
    name: "Breakfast",
    description:
      "Korean breakfasts often include soup, rice, and side dishes; Western options",
  },
  {
    name: "Friendly Cafés",
    description: "Many offer English menus, desserts, Korean snacks, and unique drinks",
  },
  {
    name: "Delivery Apps",
    description: "Apps like Baemin, Yogiyo offer English support and deliver almost anywhere",
  },
  {
    name: "Veg/ Nonveg",
    description: "Growing availability, especially in Seoul; some apps help locate vegan food",
  },
  {
    name: "Free Side Dishes",
    description: "Most Korean restaurants offer unlimited free side dishes with meals",
  },
];

function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-gray-600">
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-prim text-white">
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </span>
      {children}
    </li>
  );
}

function AmenityGroup({
  title,
  items,
}: {
  title: string;
  items: { name: string; description: string }[];
}) {
  return (
    <div className="overflow-hidden rounded-3xl bg-yellow-light">
      <p className="px-6 py-4 font-afacad text-lg font-bold text-secondary">
        {title}
      </p>
      <div className="px-6 pb-2">
        {items.map((item, i) => (
          <div
            key={item.name}
            className={`grid grid-cols-1 gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-4 ${
              i > 0 ? "border-t border-secondary/10" : "pt-0"
            }`}
          >
            <p className="font-semibold text-secondary">{item.name}</p>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TourGuideDetails() {
  return (
    <div className="rounded-3xl bg-white p-8 sm:p-10">
      <h2 className="font-afacad text-2xl font-bold text-secondary sm:text-3xl">
        Tour guide who give you proper information about every destination
      </h2>
      <p className="mt-4 text-gray-500">
        A tour guide service provides travelers with knowledgeable
        professionals who lead and enhance travel experiences. Tour guides
        offer insights into the history, culture, and significance of the
        places they visit, enriching the tourist&apos;s understanding They
        manage itineraries, transportation, and access to attractions,
        ensuring a smooth and organized tour
      </p>

      <h3 className="mt-10 font-afacad text-2xl font-bold text-secondary">
        What Is a Tour Guide Service?
      </h3>
      <ul className="mt-4 space-y-3">
        {whatIs.map((item) => (
          <CheckItem key={item}>{item}</CheckItem>
        ))}
      </ul>

      <h3 className="mt-10 font-afacad text-2xl font-bold text-secondary">
        Types of Tour Guide Services
      </h3>
      <div className="mt-4 overflow-hidden rounded-2xl border border-secondary/10">
        {types.map((type, i) => (
          <div
            key={type.name}
            className={`grid grid-cols-1 gap-1 px-5 py-4 sm:grid-cols-[10rem_1fr] sm:gap-4 ${
              i > 0 ? "border-t border-secondary/10" : ""
            }`}
          >
            <p className="font-semibold text-secondary">{type.name}</p>
            <p className="text-sm text-gray-500">{type.description}</p>
          </div>
        ))}
      </div>

      <h3 className="mt-10 font-afacad text-2xl font-bold text-secondary">
        Key Features of Professional Tour Guides
      </h3>
      <ul className="mt-4 space-y-3">
        {keyFeatures.map((feature) => (
          <CheckItem key={feature.title}>
            <span className="font-semibold text-secondary">
              {feature.title}
            </span>{" "}
            {feature.description}
          </CheckItem>
        ))}
      </ul>

      <h3 className="mt-10 font-afacad text-2xl font-bold text-secondary">
        Frequently Ask Questions
      </h3>
      <div className="mt-4">
        <FaqAccordion faqs={faqs} />
      </div>

      <h3 className="mt-10 font-afacad text-2xl font-bold text-secondary">
        Our Scheduled Amenities
      </h3>
      <div className="mt-4 flex flex-col gap-6">
        <AmenityGroup title="For Travel" items={travelAmenities} />
        <AmenityGroup title="For Food" items={foodAmenities} />
      </div>
    </div>
  );
}
