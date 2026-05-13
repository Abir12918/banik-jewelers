import Image from "next/image";
import { ArrowRight, Gem, HeartHandshake, MessageCircle, ShieldCheck, Sparkles, WandSparkles } from "lucide-react";
import { Button } from "@/components/button";
import { CatalogueCard } from "@/components/catalogue-card";
import { ContactCta } from "@/components/contact-cta";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { featuredPieces } from "@/data/featured-pieces";

const collectionHighlights = [
  {
    title: "Bridal",
    copy: "Statement sets with pearls, ruby details, and traditional gold work for ceremonies and family celebrations.",
    image: "/images/bridal-set.jpg",
    icon: Gem,
  },
  {
    title: "Festive",
    copy: "Warm, luminous pieces chosen for engagements, holidays, receptions, and milestone gifting.",
    image: "/images/statement-piece.jpg",
    icon: Sparkles,
  },
  {
    title: "Custom Guidance",
    copy: "A personal inquiry-first experience for customers who want help choosing the right piece.",
    image: "/images/featured-necklace.jpg",
    icon: WandSparkles,
  },
];

export default function Home() {
  return (
    <div>
      <section className="relative min-h-[92vh] overflow-hidden">
        <Image
          src="/images/heritage-hero.jpg"
          alt="Traditional gold jewelry set on ruby velvet"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,7,7,0.94)_0%,rgba(7,7,7,0.78)_42%,rgba(7,7,7,0.28)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_24%,rgba(200,155,60,0.22),transparent_28rem)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#070707] to-transparent" />

        <div className="relative mx-auto grid min-h-[92vh] w-full max-w-7xl items-center gap-10 px-5 py-28 sm:px-8 lg:grid-cols-[1fr_0.72fr] lg:px-10">
          <Reveal className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#c89b3c]/35 bg-black/35 px-4 py-2 text-sm text-[#f6e7c1] backdrop-blur">
              <Sparkles size={16} />
              Family-owned gold jewelry boutique
            </p>
            <h1 className="font-display text-6xl leading-[0.95] text-[#fff8ea] sm:text-7xl lg:text-8xl">
              Banik <span className="gold-text">Jewelers</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#e5d8bd] sm:text-xl">
              Bridal, traditional, and statement gold jewelry presented with the polish of a luxury house and the warmth of a family jeweler.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/catalogue" icon={<ArrowRight size={18} />}>
                View Catalogue
              </Button>
              <Button href="/contact" variant="secondary" icon={<MessageCircle size={18} />}>
                Contact Us
              </Button>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {["Bridal", "Gold", "Family-Owned"].map((item) => (
                <div key={item} className="rounded-lg border border-[#c89b3c]/20 bg-black/30 px-3 py-4 text-center backdrop-blur">
                  <p className="font-display text-xl text-[#f6e7c1]">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="glass hidden rounded-lg p-5 lg:block">
            <div className="relative aspect-[4/5] overflow-hidden rounded-md">
              <Image
                src="/images/featured-necklace.jpg"
                alt="Traditional gold necklace displayed as a featured Banik Jewelers piece"
                fill
                className="object-cover"
                sizes="34vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-5">
                <p className="text-sm uppercase text-[#c89b3c]">Featured Preview</p>
                <h2 className="font-display mt-2 text-3xl text-[#fff8ea]">Traditional gold with modern presence</h2>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="The Collection"
          title="Jewelry for the moments that become family history"
          copy="Gold, pearls, ruby accents, and intricate traditional work shape a catalogue designed for weddings, celebrations, and heirloom gifting."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {featuredPieces.map((piece) => (
            <CatalogueCard key={piece.title} piece={piece} />
          ))}
        </div>
      </section>

      <section className="border-y border-[#c89b3c]/15 bg-[#fff8ea]/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-18 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <Reveal className="glass rounded-lg p-7">
            <HeartHandshake className="text-[#c89b3c]" size={30} />
            <h2 className="font-display mt-6 text-4xl text-[#fff8ea]">Heritage made personal</h2>
            <p className="mt-4 leading-7 text-[#cfc2a8]">
              Banik Jewelers is built around the kind of choosing that deserves time: wedding sets, family gifts, and pieces that become part of a celebration long after the day is over.
            </p>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { title: "Attentive Service", icon: HeartHandshake },
              { title: "Fine Presentation", icon: ShieldCheck },
              { title: "Occasion Ready", icon: Gem },
            ].map(({ title, icon: Icon }) => (
              <Reveal key={title} className="rounded-lg border border-[#c89b3c]/20 bg-black/24 p-6">
                <Icon className="text-[#c89b3c]" size={24} />
                <p className="font-display mt-5 text-2xl text-[#f6e7c1]">{title}</p>
                <div className="mt-5 h-px bg-gradient-to-r from-[#c89b3c] to-transparent" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Occasions"
          title="Bridal, festive, and personal by design"
          copy="The home page should guide visitors toward the pieces that match their moment, while keeping the experience calm, curated, and high-touch."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {collectionHighlights.map(({ title, copy, image, icon: Icon }) => (
            <Reveal key={title} className="group relative min-h-[420px] overflow-hidden rounded-lg border border-[#c89b3c]/20">
              <Image
                src={image}
                alt={`${title} jewelry highlight from Banik Jewelers`}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 33vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/48 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <Icon className="text-[#c89b3c]" size={26} />
                <h3 className="font-display mt-4 text-4xl text-[#fff8ea]">{title}</h3>
                <p className="mt-3 leading-7 text-[#d9ccb1]">{copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactCta />
    </div>
  );
}
