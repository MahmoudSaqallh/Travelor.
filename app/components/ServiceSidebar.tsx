import Image from "next/image";

const recentPosts = [
  {
    day: "14",
    month: "June",
    author: "Aidan Butler",
    title: "Resources for your first trip to overseas vacation",
  },
  {
    day: "20",
    month: "June",
    author: "Ricardo Bell",
    title: "How to get acquainted with natives in a strange land",
  },
  {
    day: "22",
    month: "June",
    author: "Martin Hicks",
    title: "Step by step guide to planning your ideal holiday",
  },
];

const topDestinations = [
  { name: "Thailand", listing: "05" },
  { name: "Maldives", listing: "07" },
  { name: "Bangkok", listing: "08" },
  { name: "Peris", listing: "09" },
  { name: "Spain", listing: "02" },
];

const popularTags = [
  "Food",
  "Tour",
  "Pool",
  "Safari",
  "Sky View",
  "Hotel",
  "Adventure",
  "Travel",
  "Luxury",
  "Wildlife",
];

const galleryImages = [
  "/Index/TourCategories/Tour-Categories-02.jpg",
  "/Destination/destination-06.jpg",
  "/AboutPage/destination-04.jpg",
  "/Index/TopDestination/destination5.jpg",
  "/Destination/destination-02.jpg",
  "/Destination/destination-03.jpg",
];

function SidebarLabel({ children }: { children: string }) {
  return (
    <div className="mb-4 border-l-4 border-yellow bg-[#e6f2f1] px-4 py-2">
      <h3 className="font-afacad text-lg font-bold text-secondary">
        {children}
      </h3>
    </div>
  );
}

export default function ServiceSidebar() {
  return (
    <aside className="space-y-8">
      <div>
        <SidebarLabel>Recent Posts</SidebarLabel>
        <div className="rounded-3xl bg-white p-5">
          {recentPosts.map((post, i) => (
            <div
              key={post.author}
              className={`flex gap-4 py-4 ${
                i > 0 ? "border-t border-dashed border-secondary/20" : "pt-0"
              }`}
            >
              <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-lg bg-secondary text-white">
                <span className="text-sm font-bold leading-none">
                  {post.day}
                </span>
                <span className="text-[10px] leading-none">{post.month}</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-yellow">
                  {post.author}
                </p>
                <p className="mt-1 text-sm text-secondary">{post.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SidebarLabel>Top Destinations</SidebarLabel>
        <div className="rounded-3xl border border-secondary/10 bg-white p-5">
          {topDestinations.map((dest, i) => (
            <div
              key={dest.name}
              className={`flex items-center justify-between py-3 text-secondary ${
                i > 0 ? "border-t border-secondary/10" : "pt-0"
              }`}
            >
              <span>{dest.name}</span>
              <span className="text-sm text-gray-400">
                ( {dest.listing} Listing )
              </span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SidebarLabel>Popular Tags</SidebarLabel>
        <div className="rounded-3xl border border-secondary/10 bg-white p-5">
          <div className="flex flex-wrap gap-2">
            {popularTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#e6f2f1] px-4 py-2 text-sm text-secondary transition hover:bg-yellow hover:text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div>
        <SidebarLabel>Gallery</SidebarLabel>
        <div className="rounded-3xl border border-secondary/10 bg-white p-5">
          <div className="grid grid-cols-2 gap-3">
            {galleryImages.map((src) => (
              <div
                key={src}
                className="relative aspect-square overflow-hidden rounded-xl"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
