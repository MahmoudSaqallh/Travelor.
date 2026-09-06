"use client";

import Link from "next/link";

const socials = [
  {
    name: "X",
    href: "https://x.com/",
    path: "M4 4l16 16M20 4L4 20",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01",
    rect: true,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/",
    path: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z M9.75 15.02l5.75-3.27-5.75-3.27z",
  },
];

const plans = [
  { price: "$199", label: "Basic Plan" },
  { price: "$299", label: "Pro Plan" },
  { price: "$399", label: "Full Plan" },
];

export default function MenuDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 transition-opacity duration-500 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        className={`fixed inset-y-0 left-0 z-50 w-full max-w-md overflow-y-auto bg-black px-8 py-10 transition-transform duration-500 ease-in-out sm:px-12 pt-40 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          aria-label="Close menu"
          onClick={onClose}
          className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-md bg-yellow text-white transition hover:brightness-95"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M4 4l16 16M20 4L4 20" />
          </svg>
        </button>

        <Link href="/" className="font-kaushan text-3xl text-white">
          Travelo<span className="text-prim">r.</span>
        </Link>

        <ul className="mt-8 flex flex-col gap-4 text-lg font-medium text-white lg:hidden">
          <li>
            <Link href="/" onClick={onClose} className="transition hover:text-prim">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={onClose} className="transition hover:text-prim">
              About Us
            </Link>
          </li>
          <li>
            <Link href="#" onClick={onClose} className="transition hover:text-prim">
              Pages
            </Link>
          </li>
          <li>
            <Link href="/destination" onClick={onClose} className="transition hover:text-prim">
              Destination
            </Link>
          </li>
          <li>
            <Link href="/tours" onClick={onClose} className="transition hover:text-prim">
              Tours
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={onClose} className="transition hover:text-prim">
              Contact
            </Link>
          </li>
        </ul>

        <div className="hidden lg:block">
          <p className="mt-10 text-lg text-white/70">It&apos;s Time to Traveling</p>
          <h3 className="mt-2 text-3xl font-bold text-prim">
            Plan Your Next Holiday
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Travlla is a multi-award-winning strategy and content creation
            agency that specializes in travel marketing.
          </p>

          <p className="mt-10 text-xl font-semibold text-white">
            Don&apos;t miss out this offers!
          </p>

          <div className="mt-6 flex items-center gap-10">
            {plans.map((plan) => (
              <div key={plan.label}>
                <p className="text-2xl font-bold text-prim">{plan.price}</p>
                <p className="text-sm text-white/80">{plan.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-yellow text-white transition hover:bg-yellow hover:text-secondary"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {social.rect && <rect x="2" y="2" width="20" height="20" rx="5" />}
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
