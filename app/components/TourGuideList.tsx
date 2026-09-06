import Image from "next/image";
import GuideCard from "./GuideCard";
import guides from "../json/tourGuides.json";

export default function TourGuideList() {
  return (
    <section className="bg-[#e6f2f1] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto w-full rounded-3xl bg-white px-6 py-10 sm:px-10 sm:py-14 lg:px-20 lg:py-20">
        <div className="text-center">
          <h2 className="font-afacad text-2xl font-bold text-secondary sm:text-5xl">
            <span className="text-yellow">Meet With</span> Tour Guide
          </h2>
          <p className="mt-3 text-gray-500">
            Destinations worth exploring! Here are a few popular spots
          </p>
          <Image
            src="/Index/BookingSteps/Title-Shape.png"
            alt=""
            width={715}
            height={107}
            className="mx-auto -mb-6 w-64 sm:w-80"
          />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <GuideCard
              key={guide.slug}
              name={guide.name}
              image={guide.image}
              href={`/tour-guide/${guide.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
