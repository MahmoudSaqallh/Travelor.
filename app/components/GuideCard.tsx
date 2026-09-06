import Image from "next/image";
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

export default function GuideCard({
  name,
  image,
  href,
}: {
  name: string;
  image: string;
  href?: string;
}) {
  const photo = (
    <Image
      src={image}
      alt={name}
      width={44}
      height={44}
      className="h-11 w-11 rounded-full object-cover"
    />
  );

  const nameBlock = (
    <>
      <h3 className="mt-4 text-center font-afacad text-xl font-bold text-secondary">
        {name}
      </h3>
      <p className="text-center text-sm font-semibold text-yellow">
        Tourist Guide
      </p>
    </>
  );

  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg shadow-secondary/10">
      {href ? (
        <Link href={href} className="block w-fit transition hover:opacity-90">
          {photo}
        </Link>
      ) : (
        photo
      )}

      <div className="mt-4 flex items-center justify-center gap-2">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="flex h-8 w-8 items-center justify-center rounded-full border-3 border-yellow bg-secondary text-white transition hover:bg-yellow"
          >
            <svg
              width="14"
              height="14"
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

      {href ? (
        <Link href={href} className="block transition hover:opacity-90">
          {nameBlock}
        </Link>
      ) : (
        nameBlock
      )}
    </div>
  );
}
