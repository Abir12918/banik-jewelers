import Link from "next/link";
import { CalendarDays, Instagram, Mail, MapPin, MessageCircle, Phone, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "Contact",
};

type ContactPageProps = {
  searchParams?: Promise<{
    piece?: string | string[];
  }>;
};

const contactMethods = [
  {
    title: "Call",
    detail: "Phone details coming soon",
    href: "#contact-form",
    icon: Phone,
  },
  {
    title: "Email",
    detail: "Email details coming soon",
    href: "#contact-form",
    icon: Mail,
  },
  {
    title: "WhatsApp / Instagram",
    detail: "Social details can be added when ready",
    href: "#contact-form",
    icon: Instagram,
  },
  {
    title: "Visit",
    detail: "Store location can be added later",
    href: "#contact-form",
    icon: MapPin,
  },
];

const categories = ["Catalogue piece", "Bridal set", "Necklace", "Pearl set", "Traditional gold", "Statement piece", "Appointment"];

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const selectedPiece = Array.isArray(params?.piece) ? params?.piece[0] : params?.piece;

  return (
    <div className="mx-auto max-w-7xl px-5 py-32 sm:px-8 lg:px-10">
      <section className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Begin with a private inquiry"
            copy="Tell us what caught your eye, the occasion you are shopping for, or the kind of gold jewelry you want to explore. Banik Jewelers should feel personal from the first note."
          />

          {selectedPiece ? (
            <div className="glass mt-8 rounded-lg p-5">
              <div className="flex items-start gap-3">
                <Sparkles className="mt-1 shrink-0 text-[#c89b3c]" size={20} />
                <div>
                  <p className="text-sm font-semibold uppercase text-[#c89b3c]">Catalogue Inquiry</p>
                  <p className="mt-2 text-lg text-[#fff8ea]">{selectedPiece}</p>
                  <p className="mt-2 text-sm leading-6 text-[#d8cab0]">
                    This piece has been added to the inquiry form so the conversation can start in the right place.
                  </p>
                </div>
              </div>
            </div>
          ) : null}

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {contactMethods.map(({ title, detail, href, icon: Icon }) => (
              <Link
                key={title}
                href={href}
                className="rounded-lg border border-[#c89b3c]/18 bg-black/25 p-4 transition hover:border-[#c89b3c]/45 hover:bg-[#c89b3c]/8"
              >
                <Icon className="text-[#c89b3c]" size={20} />
                <p className="mt-4 font-semibold text-[#fff8ea]">{title}</p>
                <p className="mt-1 text-sm leading-6 text-[#b8aa91]">{detail}</p>
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal id="contact-form" className="glass rounded-lg p-6 sm:p-8">
          <div className="flex flex-col gap-4 border-b border-[#f6e7c1]/12 pb-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase text-[#c89b3c]">Inquiry Form</p>
              <h2 className="font-display mt-2 text-4xl leading-tight text-[#fff8ea]">Ask about a piece or appointment.</h2>
            </div>
            <CalendarDays className="text-[#c89b3c]" size={28} />
          </div>

          <form className="mt-6 grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm text-[#f6e7c1]">
                Name
                <input
                  name="name"
                  autoComplete="name"
                  className="rounded-lg border border-[#c89b3c]/25 bg-black/35 px-4 py-3 text-[#fff8ea] outline-none transition focus:border-[#c89b3c]"
                />
              </label>
              <label className="grid gap-2 text-sm text-[#f6e7c1]">
                Phone or email
                <input
                  name="contact"
                  autoComplete="email"
                  className="rounded-lg border border-[#c89b3c]/25 bg-black/35 px-4 py-3 text-[#fff8ea] outline-none transition focus:border-[#c89b3c]"
                />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-[1fr_0.8fr]">
              <label className="grid gap-2 text-sm text-[#f6e7c1]">
                Interested piece
                <input
                  name="piece"
                  defaultValue={selectedPiece ?? ""}
                  className="rounded-lg border border-[#c89b3c]/25 bg-black/35 px-4 py-3 text-[#fff8ea] outline-none transition focus:border-[#c89b3c]"
                />
              </label>
              <label className="grid gap-2 text-sm text-[#f6e7c1]">
                Category
                <select
                  name="category"
                  defaultValue={selectedPiece ? "Catalogue piece" : "Bridal set"}
                  className="rounded-lg border border-[#c89b3c]/25 bg-black/35 px-4 py-3 text-[#fff8ea] outline-none transition focus:border-[#c89b3c]"
                >
                  {categories.map((category) => (
                    <option key={category} value={category} className="bg-[#070707] text-[#fff8ea]">
                      {category}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="grid gap-2 text-sm text-[#f6e7c1]">
              Message
              <textarea
                name="message"
                rows={6}
                className="resize-none rounded-lg border border-[#c89b3c]/25 bg-black/35 px-4 py-3 text-[#fff8ea] outline-none transition focus:border-[#c89b3c]"
              />
            </label>

            <div className="grid gap-4 border-t border-[#f6e7c1]/12 pt-5 sm:grid-cols-[1fr_auto] sm:items-center">
              <p className="text-sm leading-6 text-[#b8aa91]">
                Final phone, email, WhatsApp, Instagram, and location details can be added when ready. The form layout is ready for a live submission service.
              </p>
              <Button type="submit" icon={<Send size={18} />}>
                Send Inquiry
              </Button>
            </div>
          </form>
        </Reveal>
      </section>

      <section className="mt-12 grid gap-5 md:grid-cols-3">
        <Reveal className="glass rounded-lg p-6">
          <MessageCircle className="text-[#c89b3c]" size={24} />
          <h2 className="font-display mt-5 text-3xl text-[#fff8ea]">Personal guidance</h2>
          <p className="mt-3 leading-7 text-[#d8cab0]">Ask about styling, occasion, matching pieces, or whether a similar look is available.</p>
        </Reveal>
        <Reveal className="glass rounded-lg p-6">
          <CalendarDays className="text-[#c89b3c]" size={24} />
          <h2 className="font-display mt-5 text-3xl text-[#fff8ea]">Appointment ready</h2>
          <p className="mt-3 leading-7 text-[#d8cab0]">The page supports a future appointment flow for bridal, festive, and family shopping moments.</p>
        </Reveal>
        <Reveal className="glass rounded-lg p-6">
          <MapPin className="text-[#c89b3c]" size={24} />
          <h2 className="font-display mt-5 text-3xl text-[#fff8ea]">Store details later</h2>
          <p className="mt-3 leading-7 text-[#d8cab0]">A physical address, hours, or visit instructions can fit here when the final store information is available.</p>
        </Reveal>
      </section>
    </div>
  );
}
