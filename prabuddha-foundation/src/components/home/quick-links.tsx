import Link from "next/link";

const items = [
  {
    href: "/monk-family",
    title: "Monk Community",
    description: "Meet the monastic community guiding Prabudda Foundation.",
    icon: "🧘‍♂️",
  },
  {
    href: "/publications",
    title: "Publications",
    description: "Explore our biennial books and spiritual writings.",
    icon: "📚",
  },
  {
    href: "/social-works",
    title: "Social Works",
    description: "See how we serve the community in practical ways.",
    icon: "🤝",
  },
  {
    href: "/gallery",
    title: "Gallery",
    description: "Moments of compassion, devotion, and community.",
    icon: "🖼️",
  },
];

export function QuickLinks() {
  return (
    <div className="container grid gap-4 md:grid-cols-4">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group flex flex-col gap-2 rounded-2xl border border-prabudda-gold/30 bg-white/80 p-4 shadow-sm transition hover:-translate-y-1 hover:border-prabudda-gold hover:shadow-md"
        >
          <div className="text-2xl">{item.icon}</div>
          <div className="text-sm font-semibold text-slate-900">
            {item.title}
          </div>
          <p className="text-xs text-slate-700">{item.description}</p>
          <span className="mt-1 text-xs font-semibold text-prabudda-maroon opacity-0 transition group-hover:opacity-100">
            View more →
          </span>
        </Link>
      ))}
    </div>
  );
}
