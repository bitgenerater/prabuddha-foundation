import Link from "next/link";
import { SectionTitle } from "@/components/ui/section-title";
import { monks } from "@/data/monks";

export function MonkPreview() {
  const items = monks.slice(0, 3);

  return (
    <div className="container">
      <SectionTitle
        eyebrow="Monk Family"
        title="Our monastic community"
        subtitle="The heart of Prabudda Foundation—monks who embody the Dhamma through service and guidance."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((monk) => (
          <Link
            key={monk.id}
            href={`/monk-family/${monk.id}`}
            className="flex flex-col items-center gap-3 rounded-2xl border border-prabudda-gold/30 bg-white p-4 text-center shadow-sm hover:-translate-y-1 hover:shadow-md transition"
          >
            <div className="h-24 w-24 overflow-hidden rounded-full border border-prabudda-gold/50 bg-prabudda-cream">
              <img
                src={monk.image}
                alt={monk.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-sm font-semibold text-slate-900">
              {monk.name}
            </div>
            <div className="text-xs font-medium text-prabudda-maroon">
              {monk.role}
            </div>
            <p className="text-xs text-slate-700 line-clamp-3">{monk.bio}</p>
          </Link>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link
          href="/monk-family"
          className="inline-flex rounded-full border border-prabudda-gold bg-prabudda-gold/10 px-6 py-2 text-sm font-semibold text-prabudda-maroon hover:bg-prabudda-gold/20"
        >
          View all monks
        </Link>
      </div>
    </div>
  );
}
