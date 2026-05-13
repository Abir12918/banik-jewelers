import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  icon?: ReactNode;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
};

export function Button({ children, href, icon, type = "button", variant = "primary" }: ButtonProps) {
  const className =
    variant === "primary"
      ? "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#f4d67a] via-[#c89b3c] to-[#8f651e] px-6 py-3 text-sm font-semibold text-[#070707] shadow-[0_18px_50px_rgba(200,155,60,0.25)] transition hover:translate-y-[-1px]"
      : "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#c89b3c]/40 bg-black/30 px-6 py-3 text-sm font-semibold text-[#fff8ea] backdrop-blur transition hover:border-[#c89b3c]";

  if (href) {
    return (
      <Link href={href} className={className}>
        <span>{children}</span>
        {icon}
      </Link>
    );
  }

  return (
    <button type={type} className={className}>
      <span>{children}</span>
      {icon}
    </button>
  );
}
