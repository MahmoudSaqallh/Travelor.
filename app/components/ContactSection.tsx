import ContactCTA from "./ContactCTA";

const contactInfo = [
  {
    label: "Contact Us",
    value: "+1 123 456 7890",
    bg: "bg-secondary/10",
    color: "text-secondary",
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  },
  {
    label: "Send us a Mail",
    value: "email@domain.com",
    bg: "bg-pink-100",
    color: "text-pink-500",
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 6-10 7L2 6" />
      </>
    ),
  },
  {
    label: "Address",
    value: "785 15h Street, Office 478\nBerlin, De 81566",
    bg: "bg-prim/10",
    color: "text-prim",
    icon: <path d="M3 9.5 12 3l9 6.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z" />,
  },
];

export default function ContactSection() {
  return (
    <section className="bg-[#e6f2f1] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl rounded-3xl bg-white p-6 sm:p-10">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118106.58331786942!2d73.09068539198522!3d22.32224063536357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1772012708310!5m2!1sen!2sin"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <ContactCTA />

          <div>
            <h2 className="font-afacad text-3xl font-bold text-secondary">
              Get in Touch
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              We&apos;d love to hear from you! Please fill out the form
              below.
            </p>

            <div className="mt-8 flex flex-col gap-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${item.bg} ${item.color}`}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {item.icon}
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm text-gray-500">{item.label}</p>
                    <p className="whitespace-pre-line font-semibold text-secondary">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 font-kaushan text-3xl text-secondary">
              Let&apos;s <span className="text-yellow">Talk</span> About You!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
