import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-prabudda-cream to-white">
      <div className="absolute inset-0 opacity-10 bg-[url('/images/hero/temple-texture.jpg')] bg-cover bg-center" />
      <div className="relative container flex flex-col gap-10 py-16 md:flex-row md:items-center">
        <div className="md:w-1/2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-prabudda-maroon">
            Prabudda Social Service Foundation
          </p>
          <h1 className="mt-3 font-heading text-3xl leading-tight text-slate-900 md:text-4xl">
            Compassion in Action,
            <br />
            Wisdom in Service.
          </h1>
          <p className="mt-4 text-sm text-slate-700 md:text-base">
            A Buddhist temple–based foundation dedicated to uplifting the
            community through social service, education, and spiritual
            guidance.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/social-works"
              className="rounded-full bg-prabudda-maroon px-6 py-2 text-sm font-semibold text-prabudda-cream shadow-sm hover:bg-prabudda-maroon/90"
            >
              Explore Our Work
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-prabudda-gold bg-prabudda-gold/10 px-6 py-2 text-sm font-semibold text-prabudda-maroon hover:bg-prabudda-gold/20"
            >
              About the Foundation
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="relative mx-auto h-64 w-full max-w-md overflow-hidden rounded-3xl border border-prabudda-gold/40 bg-white shadow-lg">
            <img
              src="/images/hero/hero1.webp"
              alt="Prabudda Temple"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-4 text-xs text-prabudda-cream">
              “Serving all beings with a mind of loving-kindness.”
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
