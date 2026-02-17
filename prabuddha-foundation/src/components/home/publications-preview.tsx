import Link from "next/link";
import { SectionTitle } from "@/components/ui/section-title";
import { books } from "@/data/books";

export function PublicationsPreview() {
  const items = books.slice(0, 3);

  return (
    <div className="container">
      <SectionTitle
        eyebrow="Publications"
        title="Biennial books & journals"
        subtitle="Every two years, Prabudda Foundation publishes a book capturing teachings, reflections, and community stories."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((book) => (
          <Link
            key={book.id}
            href={`/publications/${book.id}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-prabudda-gold/30 bg-white shadow-sm hover:-translate-y-1 hover:shadow-md transition"
          >
            <div className="h-48 w-full overflow-hidden bg-prabudda-cream">
              <img
                src={book.coverImage}
                alt={book.title}
                className="h-full w-full object-cover transition group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-4">
              <div className="text-xs font-semibold text-prabudda-maroon">
                {book.year}
              </div>
              <div className="text-sm font-semibold text-slate-900">
                {book.title}
              </div>
              <p className="text-xs text-slate-700 line-clamp-3">
                {book.description}
              </p>
              <span className="mt-auto text-xs font-semibold text-prabudda-maroon">
                View details →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
