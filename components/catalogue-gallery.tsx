"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle, Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { catalogueCategories, catalogueItems, type CatalogueCategory, type CatalogueItem } from "@/data/catalogue-items";

export function CatalogueGallery() {
  const [activeCategory, setActiveCategory] = useState<CatalogueCategory>("All");
  const [selectedItem, setSelectedItem] = useState<CatalogueItem | null>(null);

  const visibleItems = useMemo(() => {
    if (activeCategory === "All") {
      return catalogueItems;
    }

    return catalogueItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedItem(null);
      }
    }

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      <div className="mt-10 flex gap-3 overflow-x-auto pb-2">
        {catalogueCategories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={[
                "shrink-0 rounded-full border px-4 py-2 text-sm transition",
                isActive
                  ? "border-[#c89b3c] bg-[#c89b3c] text-[#070707]"
                  : "border-[#c89b3c]/25 bg-black/30 text-[#f6e7c1] hover:border-[#c89b3c]",
              ].join(" ")}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm text-[#b8aa91]">
        <Search size={16} className="text-[#c89b3c]" />
        Showing {visibleItems.length} of {catalogueItems.length} pieces
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visibleItems.map((item, index) => (
          <article
            key={item.id}
            className={[
              "group overflow-hidden rounded-lg border border-[#c89b3c]/20 bg-[#fff8ea]/[0.035] transition duration-300 hover:-translate-y-1 hover:border-[#c89b3c]/45",
              index % 9 === 0 ? "sm:col-span-2" : "",
            ].join(" ")}
          >
            <button
              type="button"
              onClick={() => setSelectedItem(item)}
              className="block w-full text-left"
              aria-label={`Open details for ${item.title}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-black/55">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-contain p-2 transition duration-700 group-hover:scale-[1.03]"
                  sizes={index % 9 === 0 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 100vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-[#f6e7c1]/25 bg-black/45 px-3 py-1 text-xs text-[#f6e7c1] backdrop-blur">
                  {item.category}
                </span>
              </div>
            </button>
            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="font-display text-2xl leading-tight text-[#fff8ea]">{item.title}</h2>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#b8aa91]">{item.copy}</p>
                </div>
                <ArrowUpRight className="mt-1 shrink-0 text-[#c89b3c]" size={18} />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-[#c89b3c]/10 px-2.5 py-1 text-xs text-[#f6e7c1]">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/contact?piece=${encodeURIComponent(item.title)}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#f6e7c1] transition hover:text-[#c89b3c]"
              >
                Inquire About This Piece
                <MessageCircle size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {selectedItem ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedItem.title} details`}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/82 px-4 py-6 backdrop-blur-md"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="glass grid max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-lg lg:grid-cols-[1.1fr_0.9fr]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative min-h-[48vh] bg-black lg:min-h-[78vh]">
              <Image
                src={selectedItem.image}
                alt={selectedItem.alt}
                fill
                className="object-contain p-4"
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
            </div>
            <div className="overflow-y-auto p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase text-[#c89b3c]">{selectedItem.category}</p>
                  <h2 className="font-display mt-2 text-4xl leading-tight text-[#fff8ea]">{selectedItem.title}</h2>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedItem(null)}
                  className="rounded-full border border-[#c89b3c]/30 p-2 text-[#f6e7c1] transition hover:border-[#c89b3c]"
                  aria-label="Close details"
                >
                  <X size={20} />
                </button>
              </div>
              <p className="mt-6 leading-8 text-[#d8cab0]">{selectedItem.copy}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {selectedItem.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-[#c89b3c]/20 px-3 py-1 text-sm text-[#f6e7c1]">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/contact?piece=${encodeURIComponent(selectedItem.title)}`}
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#f4d67a] via-[#c89b3c] to-[#8f651e] px-6 py-3 text-sm font-semibold text-[#070707] shadow-[0_18px_50px_rgba(200,155,60,0.25)]"
              >
                Inquire About This Piece
                <MessageCircle size={18} />
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
