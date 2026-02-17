import Link from "next/link";
import { SectionTitle } from "@/components/ui/section-title";
import { gallery } from "@/data/gallery";

export function GalleryPreview() {
  const items = gallery.slice(0, 4);

  return (
    <div className="container">
      <SectionTitle
        eyebrow="Gallery"
        title="Moments of devotion & service"
        subtitle="A glimpse into the temple, social work, and community life around Prabudda Foundation."
      />
      <div className="grid gap-4 md:grid-cols-4">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`overflow-hidden rounded-2xl border border-prabudda-gold/30 bg-white shadow-sm ${
              index === 0 ? "md:row-span-2 md:h-full" : "h-40"
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link
          href="/gallery"
          className="inline-flex rounded-full border border-prabudda-gold bg-prabudda-gold/10 px-6 py-2 text-sm font-semibold text-prabudda-maroon hover:bg-prabudda-gold/20"
        >
          View full gallery
        </Link>
      </div>
    </div>
  );
}
