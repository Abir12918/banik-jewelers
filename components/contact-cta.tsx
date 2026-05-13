import { MessageCircle } from "lucide-react";
import { Button } from "@/components/button";
import { Reveal } from "@/components/reveal";

export function ContactCta() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
      <Reveal className="glass rounded-lg p-8 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-[#c89b3c]">Private Inquiry</p>
            <h2 className="font-display mt-3 text-4xl text-[#fff8ea]">Find the piece that feels personal.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-[#cfc2a8]">
              Share the occasion, preferred style, or catalogue piece and continue the conversation directly with Banik Jewelers.
            </p>
          </div>
          <Button href="/contact" icon={<MessageCircle size={18} />}>
            Contact Us
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
