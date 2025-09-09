"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TbMusic, TbPhone, TbMail } from "react-icons/tb";
import clsx from "clsx";
import { EMAIL, PHONE_NUMBER } from "@/constants";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  // { href: "/work", label: "Work" },
  // { href: "/studio", label: "Studio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 bg-white/75 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-emerald-500 text-white shadow-soft">
            <TbMusic />
          </span>
          <span className="font-semibold">Studio HR</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={clsx(
                "px-3 py-2 rounded-full text-sm hover:bg-black/5 transition",
                pathname === n.href && "bg-black/5"
              )}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4 text-sm">
          <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 hover:opacity-80">
            <TbPhone /> {PHONE_NUMBER}
          </a>
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:opacity-80">
            <TbMail /> {EMAIL}
          </a>
        </div>
      </div>
    </header>
  );
}
