import { SectionTitle } from "@/components/ui/section-title";
import { upcoming } from "@/data/upcoming";

export function UpcomingPreview() {
  const items = upcoming.slice(0, 3);

  return (
    <div className="container">
      <SectionTitle
        eyebrow="Upcoming"
        title="Upcoming works & events"
        subtitle="Join us in our upcoming programs that bring together spiritual practice and social responsibility."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-2 rounded-2xl border border-prabudda-gold/30 bg-white p-4 shadow-sm"
          >
            <div className="text-xs font-semibold uppercase tracking-wide text-prabudda-maroon">
              {new Date(item.date).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </div>
            <div className="text-sm font-semibold text-slate-900">
              {item.title}
            </div>
            <p className="text-xs text-slate-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
