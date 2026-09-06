import Image from "next/image";

const posts = [
  {
    title: "The Top Travel Destinations for Photography Enthusiasts",
    image: "/Index/Blogs/blog-img01.jpg",
  },
  {
    title: "The Best Ways to Travel with Your Significant Other",
    image: "/Index/Blogs/blog-img02.jpg",
  },
  {
    title: "Top 3 Adventure Destinations for Your Next Holiday",
    image: "/Index/Blogs/blog-img03.jpg",
  },
];

export default function Blogs() {
  return (
    <section className="relative overflow-hidden bg-secondary px-6 py-20 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0 bg-[url('/Index/Blogs/patern.png')] bg-repeat" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-afacad text-4xl font-bold text-white sm:text-5xl">
              Explore <span className="text-yellow">Latest News</span>
            </h2>
            <p className="mt-3 max-w-xl text-white/70">
              Maybe for a travel blog, wildlife site, or web development
              project here are a few sample templates you can use to
              simulate real-time news updates:
            </p>
          </div>

          <button className="group relative shrink-0 overflow-hidden rounded-full bg-prim px-8 py-4 font-semibold text-secondary transition hover:brightness-95">
            <span className="pointer-events-none absolute inset-y-0 -left-1/4 z-10 w-1/4 -skew-x-12 bg-white/60 blur-sm transition-transform duration-700 ease-out group-hover:translate-x-[500%]" />
            <span className="relative z-20">See More Articles</span>
          </button>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex items-center overflow-hidden rounded-full border border-white/15 bg-black/30"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-4 border-secondary">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <p className="truncate px-4 text-sm font-semibold text-white sm:text-base">
                {post.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
