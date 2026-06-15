"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { TbMenu2, TbX, TbArrowUpRight } from "react-icons/tb";
import clsx from "clsx";
import { EMAIL } from "@/constants";
import Logo from "@/components/ui/logo";
import ThemeToggle from "@/components/ui/theme-toggle";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/audio-story-production", label: "Audio Story" },
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
        scrolled
          ? "bg-paper/80 backdrop-blur-md border-b border-ink/10"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div
        className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16 md:h-20"
        style={{ paddingTop: "max(0px, env(safe-area-inset-top))" }}
      >
        <Link href="/" className="group flex items-center gap-3">
          <Logo className="text-rust-500 h-5" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-tight text-ink">Studio HR</span>
            <span className="text-[0.6rem] uppercase tracking-[0.28em] text-muted">Soundroom</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={clsx(
                "text-sm link-underline transition-colors",
                pathname === n.href ? "text-ink" : "text-muted hover:text-ink"
              )}
              aria-current={pathname === n.href ? "page" : undefined}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition hover:bg-rust-500"
          >
            Start a project
            <TbArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2 text-ink hover:bg-ink/5"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <TbMenu2 className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden">
          <div
            className="fixed inset-0 z-40 bg-ink/30"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            className="fixed inset-x-0 top-0 z-50 origin-top bg-paper shadow-lift rounded-b-3xl max-h-[100dvh] overflow-y-auto"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-ink/10">
              <Link href="/" className="flex items-center gap-3">
                <Logo className="text-rust-500 h-5" />
                <span className="font-display text-lg tracking-tight text-ink">Studio HR Soundroom</span>
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full p-2 text-ink hover:bg-ink/5"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <TbX className="h-6 w-6" />
              </button>
            </div>

            <nav className="px-4 py-3">
              <ul className="space-y-1">
                {nav.concat({ href: "/contact", label: "Contact" }).map((n) => (
                  <li key={n.href}>
                    <Link
                      href={n.href}
                      className={clsx(
                        "block rounded-2xl px-4 py-3.5 text-lg font-display text-ink transition",
                        pathname === n.href ? "bg-ink/5" : "hover:bg-ink/5"
                      )}
                      aria-current={pathname === n.href ? "page" : undefined}
                    >
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center justify-between px-6 pb-8 pt-2 border-t border-ink/10">
              <a
                href={`mailto:${EMAIL}`}
                className="text-sm text-muted hover:text-ink"
              >
                {EMAIL}
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
