"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuDrawer from "./MenuDrawer";

const pagesLinks = [
  { label: "Services", href: "/services" },
  { label: "Services Details", href: "/service/tour-guide" },
  { label: "Testimonials", href: "/testimonials" },
];
const tourGuideLinks = [
  { label: "Tour Guide", href: "/tour-guide" },
  { label: "Tour Guide Details", href: "/tour-guide/murphy" },
];
const morePagesLinks = [
  { label: "Faqs", href: "/faqs" },
  { label: "Pricing", href: "/pricing" },
  { label: "Error-404", href: "/error-404" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const solid = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 transition-colors duration-300 sm:px-10 sm:py-5 lg:px-16 ${
        solid ? "bg-black" : "bg-transparent"
      }`}
    >
      <Link href="/" className="font-kaushan! text-3xl text-white sm:text-4xl">
        Travelo<span className="text-prim">r.</span>
      </Link>

      <ul className="hidden items-center gap-8 text-[17px] font-medium text-white lg:flex">
        <li>
          <Link href="/" className="transition hover:text-prim">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="transition hover:text-prim">
            About Us
          </Link>
        </li>

        <li className="group relative">
          <button className="flex items-center gap-1 py-2 transition hover:text-prim">
            Pages
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path
                d="M1 1.5L6 6.5L11 1.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="invisible absolute left-0 top-full z-50 w-56 rounded-xl bg-white py-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
            {pagesLinks.map((page) => (
              <Link
                key={page.label}
                href={page.href}
                className="block px-5 py-2.5 text-sm text-secondary hover:bg-yellow-light"
              >
                {page.label}
              </Link>
            ))}

            <div className="group/sub relative">
              <button className="flex w-full items-center justify-between px-5 py-2.5 text-left text-sm text-secondary hover:bg-yellow-light">
                Tour Guide
                <svg width="7" height="12" viewBox="0 0 7 12" fill="none">
                  <path
                    d="M1 1l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="invisible absolute left-full top-0 z-50 w-56 rounded-xl bg-white py-2 opacity-0 shadow-xl transition-all duration-200 group-hover/sub:visible group-hover/sub:opacity-100">
                {tourGuideLinks.map((page) => (
                  <Link
                    key={page.label}
                    href={page.href}
                    className="block px-5 py-2.5 text-sm text-secondary hover:bg-yellow-light"
                  >
                    {page.label}
                  </Link>
                ))}
              </div>
            </div>

            {morePagesLinks.map((page) => (
              <Link
                key={page.label}
                href={page.href}
                className="block px-5 py-2.5 text-sm text-secondary hover:bg-yellow-light"
              >
                {page.label}
              </Link>
            ))}
          </div>
        </li>

        <li>
          <Link href="/destination" className="transition hover:text-prim">
            Destination
          </Link>
        </li>
        <li>
          <Link href="/tours" className="transition hover:text-prim">
            Tours
          </Link>
        </li>

        <li>
          <Link href="/contact" className="transition hover:text-prim">
            Contact
          </Link>
        </li>
      </ul>

      <button aria-label="Open menu" onClick={() => setOpen(true)} className="text-white">
        <svg width="26" height="18" viewBox="0 0 26 18" fill="none">
          <path d="M0 1H26" stroke="currentColor" strokeWidth="2" />
          <path d="M0 9H26" stroke="currentColor" strokeWidth="2" />
          <path d="M0 17H26" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>

      <MenuDrawer open={open} onClose={() => setOpen(false)} />
    </nav>
  );
}
