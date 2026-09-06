import Image from "next/image";

const starPath =
  "M12 2l2.9 6.9L22 9.3l-5.5 4.8L18.2 22 12 17.8 5.8 22l1.7-7.9L2 9.3l7.1-.4L12 2z";

export default function TestimonialCard({
  name,
  image,
  quote,
}: {
  name: string;
  image: string;
  quote: string;
}) {
  return (
    <div>
      <div className="relative aspect-[612/594] w-full max-w-sm overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 768px) 380px, 90vw"
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 flex items-center gap-1 rounded-full bg-black px-3 py-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-yellow"
            >
              <path d={starPath} />
            </svg>
          ))}
        </div>
      </div>

      <div className="mt-6 flex max-w-sm items-start justify-between gap-4">
        <div>
          <p className="font-kaushan! text-4xl text-secondary">{name}</p>
          <p className="text-sm font-semibold text-yellow">Traveler</p>
        </div>
        <Image
          src="/Index/Testimonials/Quote.png"
          alt=""
          width={45}
          height={37}
          className="mt-1 w-9"
        />
      </div>

      <p className="mt-4 max-w-sm text-secondary/80">{quote}</p>
    </div>
  );
}
