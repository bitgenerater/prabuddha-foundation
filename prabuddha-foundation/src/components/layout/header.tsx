"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/monk-family", label: "Monk Family" },
  { href: "/publications", label: "Publications" },
  { href: "/social-works", label: "Social Works" },
  { href: "/gallery", label: "Gallery" },
  { href: "/upcoming", label: "Upcoming" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-prabudda-gold/20 bg-prabudda-cream/90 backdrop-blur">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-prabudda-maroon text-center text-xl font-bold text-prabudda-cream flex items-center justify-center">
            P
          </div>
          <div className="leading-tight">
            <div className="font-heading text-lg font-semibold">
              Prabudda Foundation
            </div>
            <div className="text-xs text-slate-600">
              Compassion • Wisdom • Service
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 hover:text-prabudda-maroon"
            >
              {item.label}
            </Link>
          ))}
          <button className="rounded-full border border-prabudda-gold bg-prabudda-gold/10 px-4 py-1 text-sm font-semibold text-prabudda-maroon hover:bg-prabudda-gold/20">
            Donate
          </button>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="block h-0.5 w-6 bg-slate-800 mb-1" />
          <span className="block h-0.5 w-6 bg-slate-800 mb-1" />
          <span className="block h-0.5 w-6 bg-slate-800" />
        </button>
      </div>

      {open && (
        <div className="border-t border-prabudda-gold/20 bg-prabudda-cream md:hidden">
          <nav className="container flex flex-col gap-2 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button className="mt-2 w-full rounded-full border border-prabudda-gold bg-prabudda-gold/10 px-4 py-2 text-sm font-semibold text-prabudda-maroon">
              Donate
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
