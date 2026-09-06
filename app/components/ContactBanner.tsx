import Image from "next/image";

export default function ContactBanner() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/con-sec-bg (1).jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-16">
        <div className="max-w-md rounded-3xl bg-secondary/80 p-8 backdrop-blur-sm sm:p-10">
          <h2 className="font-afacad text-3xl font-bold text-white sm:text-4xl">
            <span className="text-yellow">Reach</span> & Get in Touch With Us!
          </h2>
          <p className="mt-2 text-sm text-white/80">
            We&apos;d love to hear from you. Our friendly team is always here
            to chat
          </p>

          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full rounded-full bg-white px-6 py-3 text-secondary placeholder:text-secondary/50 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full rounded-full bg-white px-6 py-3 text-secondary placeholder:text-secondary/50 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Add Your Subject"
              className="w-full rounded-full bg-white px-6 py-3 text-secondary placeholder:text-secondary/50 focus:outline-none"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full rounded-3xl bg-white px-6 py-3 text-secondary placeholder:text-secondary/50 focus:outline-none"
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
