import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6">
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-lg px-4 py-3">
        <Link href="/" className="font-display text-2xl text-[#f6e7c1]">
          Banik <span className="text-[#c89b3c]">Jewelers</span>
        </Link>
        <div className="hidden items-center gap-7 text-sm text-[#e7dcc4] md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#f6e7c1]">
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/contact"
          className="hidden rounded-lg border border-[#c89b3c]/35 px-4 py-2 text-sm text-[#f6e7c1] transition hover:border-[#c89b3c] sm:inline-flex"
        >
          Inquire
        </Link>
      </nav>
    </header>
  );
}
