import Image from "next/image";

export default function ContactSplit() {
  return (
    <section className="bg-yellow-light">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:px-16">
        <div className="relative min-h-72 overflow-hidden rounded-3xl lg:min-h-0">
          <Image
            src="/PricingPage/frm-left.jpg"
            alt="Traveler working on a laptop overlooking snowy mountains"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <p className="font-kaushan text-3xl">Hi there!</p>
            <p className="mt-1 text-sm text-white/90">
              What can I do for you today?
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 sm:p-10">
          <h2 className="font-afacad text-2xl font-bold text-secondary sm:text-3xl">
            <span className="text-yellow">Reach</span> & Get in Touch With
            Us!
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            We&apos;d love to hear from you. Our friendly team is always
            here to chat
          </p>

          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full rounded-full bg-yellow-light px-6 py-3 text-secondary placeholder:text-secondary/50 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full rounded-full bg-yellow-light px-6 py-3 text-secondary placeholder:text-secondary/50 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Add Your Subject"
              className="w-full rounded-full bg-yellow-light px-6 py-3 text-secondary placeholder:text-secondary/50 focus:outline-none"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full rounded-3xl bg-yellow-light px-6 py-3 text-secondary placeholder:text-secondary/50 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-prim px-8 py-3 font-semibold text-secondary transition hover:brightness-95"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
