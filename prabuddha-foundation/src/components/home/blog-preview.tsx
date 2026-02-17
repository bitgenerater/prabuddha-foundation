import Link from "next/link";
import { SectionTitle } from "@/components/ui/section-title";
import { socialWorks } from "@/data/socialWorks";

export function BlogPreview() {
  const posts = socialWorks.slice(0, 3);

  return (
    <div className="container">
      <SectionTitle
        eyebrow="Social Works"
        title="Stories from the field"
        subtitle="Snapshots of how Prabudda Foundation supports the community through compassionate action."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/social-works/${post.id}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-prabudda-gold/30 bg-white shadow-sm hover:-translate-y-1 hover:shadow-md transition"
          >
            <div className="h-40 w-full overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover transition group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-4">
              <div className="text-[11px] uppercase tracking-wide text-prabudda-maroon">
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </div>
              <div className="text-sm font-semibold text-slate-900">
                {post.title}
              </div>
              <p className="text-xs text-slate-700 line-clamp-3">
                {post.excerpt}
              </p>
              <span className="mt-auto text-xs font-semibold text-prabudda-maroon">
                Read more →
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link
          href="/social-works"
          className="inline-flex rounded-full border border-prabudda-gold bg-prabudda-gold/10 px-6 py-2 text-sm font-semibold text-prabudda-maroon hover:bg-prabudda-gold/20"
        >
          View all social works
        </Link>
      </div>
    </div>
  );
}
