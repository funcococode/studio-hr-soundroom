"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { TbMusic, TbPhone, TbMail, TbMenu2, TbX } from "react-icons/tb";
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
  const [open, setOpen] = useState(false);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock scroll when menu is open + ESC to close
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = prev;
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-white/75 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-emerald-500 text-white shadow-soft">
            <TbMusic />
          </span>
          <span className="font-semibold">Studio HR</span>
        </Link>

        {/* Desktop nav */}
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

        {/* Desktop contact */}
        <div className="hidden md:flex items-center gap-4 text-sm">
          <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 hover:opacity-80">
            <TbPhone /> {PHONE_NUMBER}
          </a>
          <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:opacity-80">
            <TbMail /> {EMAIL}
          </a>
        </div>

        {/* Mobile: hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-full p-2 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/20"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
        >
          <TbMenu2 className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile menu (sheet) */}
      {open && (
        <div className="md:hidden">
          {/* Scrim */}
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          {/* Panel */}
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            className="fixed inset-x-0 top-0 z-50 origin-top bg-white/95 backdrop-blur shadow-lg rounded-b-2xl"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-black/10">
              <Link href="/" className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-emerald-500 text-white shadow-soft">
                  <TbMusic />
                </span>
                <span className="font-semibold">Studio HR</span>
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full p-2 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black/20"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <TbX className="h-6 w-6" />
              </button>
            </div>

            {/* Links */}
            <nav className="px-4 py-3">
              <ul className="space-y-1">
                {nav.map((n) => (
                  <li key={n.href}>
                    <Link
                      href={n.href}
                      className={clsx(
                        "block rounded-xl px-3 py-3 text-base transition",
                        pathname === n.href
                          ? "bg-black/5 font-medium"
                          : "hover:bg-black/5"
                      )}
                    >
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Actions */}
            <div className="px-4 pb-6 pt-1 border-t border-black/10">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-3 py-3 text-sm font-medium hover:bg-black/5"
                >
                  <TbPhone className="h-5 w-5" />
                  Call
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center justify-center gap-2 rounded-xl border border-black/10 bg-white px-3 py-3 text-sm font-medium hover:bg-black/5"
                >
                  <TbMail className="h-5 w-5" />
                  Email
                </a>
              </div>
              {/* Optional helpers */}
              <div className="mt-3 px-1 text-xs text-black/50">
                {PHONE_NUMBER} • {EMAIL}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
