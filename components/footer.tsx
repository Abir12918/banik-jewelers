import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#c89b3c]/15 px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-[#b8aa91] md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl text-[#f6e7c1]">Banik Jewelers</p>
          <p className="mt-2">Family-owned gold jewelry for bridal and occasion wear.</p>
        </div>
        <div className="flex flex-wrap gap-5">
          <Link href="/catalogue" className="hover:text-[#fff8ea]">
            Catalogue
          </Link>
          <Link href="/about" className="hover:text-[#fff8ea]">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-[#fff8ea]">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
