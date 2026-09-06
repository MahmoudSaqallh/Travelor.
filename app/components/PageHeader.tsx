import Image from "next/image";
import Link from "next/link";

type Crumb = {
  label: string;
  href?: string;
};

export default function PageHeader({
  title,
  breadcrumb,
}: {
  title: string;
  breadcrumb: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-16 sm:pt-40 sm:pb-20">
      <Image
        src="/section-banner (1).jpg"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover"
      />

      <div className="relative text-center">
        <h1 className="font-afacad text-4xl font-bold text-secondary sm:text-5xl">
          {title}
        </h1>
        <div className="mt-3 flex items-center justify-center gap-2 text-secondary">
          {breadcrumb.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-2">
              {i > 0 && <span className="text-secondary/40">/</span>}
              {crumb.href ? (
                <Link href={crumb.href} className="transition hover:text-prim">
                  {crumb.label}
                </Link>
              ) : (
                <span>{crumb.label}</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
