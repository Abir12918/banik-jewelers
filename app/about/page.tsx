import Image from "next/image";
import Link from "next/link";
import { Gem, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "About Us",
};

const values = [
  {
    title: "Craftsmanship",
    copy: "Intricate goldwork, pearl edging, and carefully balanced proportions give each piece a dressed-up, heirloom presence.",
    icon: Gem,
  },
  {
    title: "Tradition",
    copy: "The collection leans into the richness of traditional occasion jewelry while keeping the presentation refined and modern.",
    icon: Sparkles,
  },
  {
    title: "Personal Service",
    copy: "The inquiry-first experience keeps the process conversational, thoughtful, and guided by what the customer is celebrating.",
    icon: HeartHandshake,
  },
  {
    title: "Bridal & Occasion Jewelry",
    copy: "From bridal sets to festive statement pieces, Banik Jewelers is shaped around memorable family moments.",
    icon: ShieldCheck,
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-32 sm:px-8 lg:px-10">
      <section className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#c89b3c]">About Banik Jewelers</p>
          <h1 className="font-display mt-5 text-5xl leading-none text-[#fff8ea] sm:text-6xl lg:text-7xl">
            A family jeweler with a luxury eye.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#d8cab0]">
            Banik Jewelers brings together traditional gold jewelry, bridal occasion pieces, and a boutique experience that feels personal from the first conversation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/catalogue">View Catalogue</Button>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-[#c89b3c]/35 px-6 py-3 text-sm font-semibold text-[#f6e7c1] transition hover:border-[#c89b3c] hover:bg-[#c89b3c]/10"
            >
              Start an Inquiry
            </Link>
          </div>
        </Reveal>
        <Reveal className="relative min-h-[520px] overflow-hidden rounded-lg border border-[#c89b3c]/20 bg-black">
          <Image src="/images/statement-piece.jpg" alt="Statement gold necklace on black velvet" fill className="object-cover" sizes="(min-width: 1024px) 55vw, 100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <div className="glass absolute bottom-5 left-5 right-5 rounded-lg p-5 sm:left-auto sm:w-80">
            <p className="text-sm font-semibold uppercase text-[#c89b3c]">Boutique Approach</p>
            <p className="mt-3 leading-7 text-[#f6e7c1]">High-end presentation, warm guidance, and jewelry chosen for weddings, festivals, and family milestones.</p>
          </div>
        </Reveal>
      </section>

      <section className="mt-20 grid gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Our Story"
            title="Heritage, handled with modern care"
            copy="The Banik Jewelers experience is meant to feel both elevated and approachable: a place to explore ornate goldwork, bridal silhouettes, pearl details, and statement designs without losing the warmth of a family-owned jeweler."
          />
        </Reveal>
        <Reveal className="grid gap-5 sm:grid-cols-2">
          <div className="glass rounded-lg p-6">
            <p className="text-sm font-semibold uppercase text-[#c89b3c]">What We Curate</p>
            <p className="mt-4 leading-7 text-[#d8cab0]">
              Gold necklaces, bridal sets, pearl-led designs, festive collars, and statement pieces selected for visual impact and occasion wear.
            </p>
          </div>
          <div className="glass rounded-lg p-6">
            <p className="text-sm font-semibold uppercase text-[#c89b3c]">How It Feels</p>
            <p className="mt-4 leading-7 text-[#d8cab0]">
              Polished enough for a luxury boutique, personal enough for a customer who wants guidance before choosing a meaningful piece.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {values.map(({ title, copy, icon: Icon }) => (
          <Reveal key={title} className="glass rounded-lg p-6">
            <Icon className="text-[#c89b3c]" size={28} />
            <h2 className="font-display mt-6 text-2xl text-[#fff8ea]">{title}</h2>
            <p className="mt-4 leading-7 text-[#cfc2a8]">{copy}</p>
          </Reveal>
        ))}
      </section>

      <section className="mt-20 grid gap-5 lg:grid-cols-[1fr_0.82fr]">
        <Reveal className="relative min-h-[420px] overflow-hidden rounded-lg border border-[#c89b3c]/20 bg-black">
          <Image src="/images/bridal-set.jpg" alt="Gold bridal jewelry set on black velvet" fill className="object-cover" sizes="(min-width: 1024px) 58vw, 100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/10 to-transparent" />
        </Reveal>
        <Reveal className="glass rounded-lg p-7 sm:p-8">
          <p className="text-sm font-semibold uppercase text-[#c89b3c]">Collection First</p>
          <h2 className="font-display mt-4 text-4xl leading-tight text-[#fff8ea]">The jewelry carries the first chapter.</h2>
          <p className="mt-5 leading-8 text-[#d8cab0]">
            The collection sets the tone for the brand: ornate, celebratory, careful, and inviting. Every image is treated like a piece a customer might ask about for a wedding, family gathering, or meaningful gift.
          </p>
          <Link href="/contact" className="mt-7 inline-flex text-sm font-semibold text-[#f6e7c1] transition hover:text-[#c89b3c]">
            Contact Banik Jewelers
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
