import Image from "next/image";
import FaqAccordion from "./FaqAccordion";

const faqs = [
  {
    question: "1 - How do I book a tour package?",
    answer:
      "You can book your desired tour package directly through our website by selecting the package, choosing the travel dates, and completing the online payment.",
  },
  {
    question: "2 - Can I customize my travel itinerary?",
    answer:
      "Yes! Most of our tour packages are customizable. You can modify hotels, activities, and travel dates based on availability.",
  },
  {
    question: "3 - What payment methods do you accept?",
    answer:
      "We accept major credit/debit cards, net banking, UPI, and secure wallet payments.",
  },
  {
    question: "4 - Will I receive confirmation after booking?",
    answer:
      "Yes, you'll receive an instant email or WhatsApp confirmation along with your booking details and invoice.",
  },
  {
    question: "5 - Are flights included in the package?",
    answer:
      "Flight inclusion depends on the package. Check the Inclusions section for each package to confirm what's covered.",
  },
  {
    question: "6 - Can I cancel or reschedule my booking?",
    answer:
      "Yes, cancellations and date changes are allowed based on the package policy. Cancellation charges may apply.",
  },
  {
    question: "7 - Is travel insurance included?",
    answer:
      "Travel insurance is optional and can be added during the booking process for an additional fee.",
  },
  {
    question: "8 - Do you provide visa assistance?",
    answer:
      "Yes, we offer complete visa assistance including documentation guidance, appointment help, and submission support.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-[#e6f2f1] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
        <div>
          <h2 className="font-afacad text-4xl font-bold text-secondary sm:text-5xl">
            Find <span className="text-yellow">Answers</span> for Questions
            You Have.
          </h2>
          <p className="mt-4 max-w-sm text-secondary/70">
            Travlla is a multi-award-winning strategy and content creation
            agency that specializes in travel marketing.
          </p>

          <div className="relative mx-auto mt-10 w-fit sm:mx-0">
            <Image
              src="/faq-media (1).png"
              alt="Traveler resting on a suitcase"
              width={376}
              height={520}
              className="w-64 sm:w-72"
            />
            <div className="absolute -bottom-6 left-1/2 flex w-[125%] -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-full bg-yellow-light px-6 py-4 shadow-lg">
              <svg
                width="22"
                height="18"
                viewBox="0 0 24 20"
                fill="currentColor"
                className="shrink-0 text-secondary"
              >
                <path d="M0 20V11.5Q0 6 2.5 3T9 0L10 2.5Q7 3.5 5.5 5.5T4 9H8V20H0ZM14 20V11.5Q14 6 16.5 3T23 0L24 2.5Q21 3.5 19.5 5.5T18 9H22V20H14Z" />
              </svg>
              <p className="font-semibold text-secondary">
                Give us a chance to help you!
              </p>
            </div>
          </div>
        </div>

        <FaqAccordion faqs={faqs} />
      </div>
    </section>
  );
}
