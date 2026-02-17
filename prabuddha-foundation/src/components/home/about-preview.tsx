import Link from "next/link";
import { SectionTitle } from "@/components/ui/section-title";

export function AboutPreview() {
  return (
    <div className="container grid gap-10 md:grid-cols-2 md:items-center">
      <div>
        <SectionTitle
          eyebrow="About"
          title="Rooted in the Dhamma, dedicated to service."
          subtitle="Prabudda Social Service Foundation emerges from a Buddhist temple tradition, blending spiritual practice with compassionate action in society."
        />
        <p className="text-sm text-slate-700">
          From organizing social welfare programs to publishing thoughtful
          Dhamma-based literature, the foundation serves as a bridge between
          timeless wisdom and modern community needs.
        </p>
        <p className="mt-3 text-sm text-slate-700">
          Our monk community leads initiatives in education, healthcare
          support, youth development, and environmental care—always grounded in
          mindfulness and loving-kindness.
        </p>
        <Link
          href="/about"
          className="mt-5 inline-flex rounded-full border border-prabudda-gold bg-prabudda-gold/10 px-5 py-2 text-sm font-semibold text-prabudda-maroon hover:bg-prabudda-gold/20"
        >
          Read our full story
        </Link>
      </div>
      <div className="relative h-64 w-full overflow-hidden rounded-3xl border border-prabudda-gold/40 bg-white shadow-md">
        <img
          src="/images/hero/monks-group.jpg"
          alt="Monk community"
          className="h-full w-full object-cover"
        />
        <div className="absolute right-4 top-4 rounded-2xl bg-prabudda-cream/90 px-4 py-2 text-xs shadow">
          <div className="font-heading text-sm text-prabudda-maroon">
            20+ Years
          </div>
          <div className="text-[11px] text-slate-700">
            of community service and spiritual guidance
          </div>
        </div>
      </div>
    </div>
  );
}
