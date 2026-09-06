import Image from "next/image";
import GuideCard from "./GuideCard";

const guides = [
  { name: "Murphy", image: "/Index/TourGuide/pic1.jpg" },
  { name: "Murray", image: "/Index/TourGuide/pic2.jpg" },
  { name: "Alexis Cox", image: "/Index/TourGuide/pic3.jpg" },
  { name: "Crawford", image: "/Index/TourGuide/pic4.jpg" },
];

export default function TourGuide() {
  return (
    <section className="bg-[#e6f2f1] px-6 py-20 sm:px-10 lg:px-16 lg:py-28 ">
      <div className="mx-auto w-[100%] rounded-3xl bg-white px-6 py-10 sm:px-10 sm:py-14 lg:px-20 lg:py-20">
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

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-2">
          <div className="relative mx-auto w-full max-w-xl">
            <Image
              src="/Index/TourGuide/CircleShape.png"
              alt=""
              width={715}
              height={715}
              className="w-full sm:animate-[spin_25s_linear_infinite]"
            />

            <Image
              src="/Index/TourGuide/team-1.png"
              alt="Tour guide sitting cross-legged with a map"
              width={939}
              height={853}
              className="absolute top-16 mx-auto w-full sm:top-20 lg:top-30"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {guides.map((guide) => (
              <GuideCard key={guide.name} name={guide.name} image={guide.image} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
