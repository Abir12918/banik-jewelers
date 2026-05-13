import { CatalogueGallery } from "@/components/catalogue-gallery";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "Catalogue",
};

export default function CataloguePage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-32 sm:px-8 lg:px-10">
      <section className="grid gap-8 lg:grid-cols-[0.9fr_0.55fr] lg:items-end">
        <SectionHeading
          eyebrow="Catalogue"
          title="A visual collection of gold, pearl, and bridal pieces"
          copy="Browse the full Banik Jewelers catalogue as a curated lookbook. Each piece opens into a larger view with a direct inquiry path."
        />
        <div className="glass rounded-lg p-5 text-sm leading-6 text-[#d8cab0]">
          No prices are shown in this first catalogue. The experience is inquiry-first so each customer can receive personal guidance.
        </div>
      </section>

      <CatalogueGallery />
    </div>
  );
}
