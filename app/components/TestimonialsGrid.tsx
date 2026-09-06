import Image from "next/image";
import TestimonialCard from "./TestimonialCard";
import { testimonials, testimonialQuote } from "./testimonialsData";

export default function TestimonialsGrid() {
  return (
    <section className="bg-[#e6f2f1] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="relative text-center">
          <h2 className="font-afacad text-4xl font-bold text-secondary sm:text-5xl">
            Our <span className="text-yellow">Client Says!</span>
          </h2>
          <p className="mt-3 text-secondary/80">
            Destinations worth exploring! Here are a few popular spots
          </p>
          <Image
            src="/Index/BookingSteps/Title-Shape.png"
            alt=""
            width={715}
            height={107}
            className="mx-auto mt-4 w-64 sm:w-80"
          />
        </div>

        <div className="mt-14 grid gap-x-16 gap-y-14 sm:grid-cols-2">
          {testimonials.map((t) => (
            <TestimonialCard
              key={t.name}
              name={t.name}
              image={t.image}
              quote={testimonialQuote}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
