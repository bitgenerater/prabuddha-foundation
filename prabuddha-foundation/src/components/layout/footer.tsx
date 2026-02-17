import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-prabudda-gold/20 bg-prabudda-cream">
      <div className="container grid gap-8 py-10 md:grid-cols-3">
        <div>
          <h3 className="font-heading text-lg font-semibold text-prabudda-maroon">
            Prabudda Social Service Foundation
          </h3>
          <p className="mt-2 text-sm text-slate-700">
            A Buddhist temple–based foundation dedicated to social service,
            education, and spiritual development.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-800">Contact</h4>
          <p className="mt-2 text-sm text-slate-700">
            Prabudda Temple Road,
            <br />
            [City], Sri Lanka
            <br />
            Phone: +94 XX XXX XXXX
            <br />
            Email: info@prabudda.org
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-800">Quick Links</h4>
          <div className="mt-2 flex flex-wrap gap-3 text-sm">
            <Link href="/about" className="text-slate-700 hover:text-prabudda-maroon">
              About
            </Link>
            <Link href="/publications" className="text-slate-700 hover:text-prabudda-maroon">
              Publications
            </Link>
            <Link href="/gallery" className="text-slate-700 hover:text-prabudda-maroon">
              Gallery
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-prabudda-maroon">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-prabudda-gold/20 bg-prabudda-cream/80">
        <div className="container flex flex-col items-center justify-between gap-2 py-4 text-xs text-slate-600 md:flex-row">
          <span>© {new Date().getFullYear()} Prabudda Foundation. All rights reserved.</span>
          <span>Designed & developed with compassion.</span>
        </div>
      </div>
    </footer>
  );
}
