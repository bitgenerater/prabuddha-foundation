import { Hero } from "@/components/home/hero";
import { QuickLinks } from "@/components/home/quick-links";
import { AboutPreview } from "@/components/home/about-preview";
import { UpcomingPreview } from "@/components/home/upcoming-preview";
import { BlogPreview } from "@/components/home/blog-preview";
import { PublicationsPreview } from "@/components/home/publications-preview";
import { MonkPreview } from "@/components/home/monk-preview";
import { GalleryPreview } from "@/components/home/gallery-preview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="py-12">
        <QuickLinks />
      </section>
      <section className="bg-white py-16">
        <AboutPreview />
      </section>
      <section className="py-16">
        <UpcomingPreview />
      </section>
      <section className="bg-white py-16">
        <BlogPreview />
      </section>
      <section className="py-16">
        <PublicationsPreview />
      </section>
      <section className="bg-white py-16">
        <MonkPreview />
      </section>
      <section className="py-16">
        <GalleryPreview />
      </section>
    </>
  );
}
