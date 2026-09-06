export default function ContactCTA() {
  return (
    <div className="rounded-3xl bg-yellow-light p-8">
      <h3 className="font-afacad text-2xl font-bold text-secondary">
        <span className="text-yellow">Reach</span> & Get in Touch With Us!
      </h3>
      <p className="mt-2 text-sm text-gray-500">
        We&apos;d love to hear from you. Our friendly team is always here to
        chat
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
  );
}
