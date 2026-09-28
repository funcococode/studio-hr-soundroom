"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { TbMenu2, TbX, TbArrowUpRight } from "react-icons/tb";
import clsx from "clsx";
import { EMAIL, PRIMARY_CTA } from "@/constants";
import Logo from "@/components/ui/logo";
import ThemeToggle from "@/components/ui/theme-toggle";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/ai-audio-qa", label: "AI Audio QA" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header
      className={clsx(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-paper/80 backdrop-blur-md border-b border-ink/10" : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16 md:h-20" style={{ paddingTop: "max(0px, env(safe-area-inset-top))" }}>
        <Link href="/" className="group flex items-center gap-3 transition active:scale-95">
          <Logo className="text-rust-500 h-5" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-tight text-ink">Studio HR</span>
            <span className="text-[0.6rem] uppercase tracking-[0.28em] text-muted">Soundroom</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={active ? "page" : undefined}
                className={clsx(
                  "group relative text-sm py-1 transition-all duration-150 active:scale-95 active:opacity-60",
                  active ? "text-ink" : "text-muted hover:text-ink"
                )}
              >
                {n.label}
                <span
                  className={clsx(
                    "absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-rust-500 transition-all duration-300",
                    active ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-40"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition-all duration-150 hover:bg-rust-500 active:scale-95"
          >
            {PRIMARY_CTA}
            <TbArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button type="button" className="inline-flex items-center justify-center rounded-full p-2 text-ink transition hover:bg-ink/5 active:scale-90 active:bg-ink/10" aria-label="Open menu" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(true)}>
            <TbMenu2 className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-40 bg-ink/30" onClick={() => setOpen(false)} aria-hidden="true" />
          <div id="mobile-menu" role="dialog" aria-modal="true" className="fixed inset-x-0 top-0 z-50 origin-top bg-paper shadow-lift rounded-b-3xl max-h-[100dvh] overflow-y-auto">
            <div className="flex items-center justify-between px-6 py-4 border-b border-ink/10">
              <Link href="/" className="flex items-center gap-3 active:scale-95 transition">
                <Logo className="text-rust-500 h-5" />
                <span className="font-display text-lg tracking-tight text-ink">Studio HR Soundroom</span>
              </Link>
              <button type="button" className="inline-flex items-center justify-center rounded-full p-2 text-ink transition hover:bg-ink/5 active:scale-90" aria-label="Close menu" onClick={() => setOpen(false)}>
                <TbX className="h-6 w-6" />
              </button>
            </div>

            <nav className="px-4 py-3">
              <ul className="space-y-1">
                {nav.concat({ href: "/contact", label: "Contact" }).map((n) => {
                  const active = pathname === n.href;
                  return (
                    <li key={n.href}>
                      <Link
                        href={n.href}
                        aria-current={active ? "page" : undefined}
                        className={clsx(
                          "flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-display text-ink transition active:scale-[0.98]",
                          active ? "bg-ink/5" : "hover:bg-ink/5"
                        )}
                      >
                        {n.label}
                        {active && <span className="h-1.5 w-1.5 rounded-full bg-rust-500" />}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Link href="/contact" className="mt-3 flex items-center justify-center gap-2 rounded-2xl bg-ink px-4 py-3.5 text-paper transition hover:bg-rust-500 active:scale-[0.98]">
                {PRIMARY_CTA} <TbArrowUpRight />
              </Link>
            </nav>

            <div className="flex items-center justify-between px-6 pb-8 pt-2 border-t border-ink/10">
              <a href={`mailto:${EMAIL}`} className="text-sm text-muted hover:text-ink">{EMAIL}</a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
