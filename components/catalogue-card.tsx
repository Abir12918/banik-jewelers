import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import type { FeaturedPiece } from "@/data/featured-pieces";

type CatalogueCardProps = {
  piece: FeaturedPiece;
};

export function CatalogueCard({ piece }: CatalogueCardProps) {
  return (
    <Reveal className="group overflow-hidden rounded-lg border border-[#c89b3c]/20 bg-[#fff8ea]/[0.035]">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={piece.image}
          alt={piece.alt}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-transparent to-transparent" />
        <p className="absolute left-4 top-4 rounded-full border border-[#f6e7c1]/25 bg-black/45 px-3 py-1 text-xs text-[#f6e7c1] backdrop-blur">
          {piece.category}
        </p>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-2xl text-[#fff8ea]">{piece.title}</h3>
            <p className="mt-2 leading-6 text-[#b8aa91]">{piece.copy}</p>
          </div>
          <ArrowUpRight className="mt-1 shrink-0 text-[#c89b3c]" size={20} />
        </div>
      </div>
    </Reveal>
  );
}
