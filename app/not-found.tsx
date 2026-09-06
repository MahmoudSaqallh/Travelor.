import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex flex-1 items-center overflow-hidden bg-[#e6f2f1] px-6 py-20 sm:px-10 lg:px-16">
      <Image
        src="/ErrorPage/error-bg-cloud.png"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover object-bottom"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="font-afacad text-2xl font-bold text-secondary">
            Oops!
          </p>
          <div className="mt-2 flex items-center gap-2">
            <span className="font-afacad text-8xl font-bold text-secondary sm:text-9xl">
              4
            </span>
            <Image
              src="/ErrorPage/hotballon-error.png"
              alt=""
              width={173}
              height={260}
              className="w-16 sm:w-24"
            />
            <span className="font-afacad text-8xl font-bold text-secondary sm:text-9xl">
              4
            </span>
          </div>

          <h1 className="mt-4 font-afacad text-3xl font-bold text-secondary sm:text-4xl">
            Page Not Found
          </h1>
          <p className="mt-3 max-w-sm text-secondary/70">
            The page you&apos;re looking for isn&apos;t available. Try
            searching again or go back home.
          </p>

          <Link
            href="/"
            className="group relative mt-8 inline-block overflow-hidden rounded-full bg-prim px-8 py-4 font-semibold text-secondary transition hover:brightness-95"
          >
            <span className="pointer-events-none absolute inset-y-0 -left-1/4 z-10 w-1/4 -skew-x-12 bg-white/60 blur-sm transition-transform duration-700 ease-out group-hover:translate-x-[500%]" />
            <span className="relative z-20">Back to Home</span>
          </Link>
        </div>

        <div className="hidden justify-center lg:flex">
          <Image
            src="/ErrorPage/error-bg.png"
            alt="Traveler daydreaming of a tropical getaway next to their luggage"
            width={672}
            height={721}
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
