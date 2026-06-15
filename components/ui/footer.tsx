import Link from "next/link";
import { EMAIL, PHONE_NUMBER, LOCATION, COMPANY_PROFILE_PDF } from "@/constants";
import { TbArrowUpRight, TbDownload } from "react-icons/tb";
import Logo from "@/components/ui/logo";

const explore = [
  { href: "/services", label: "Services" },
  { href: "/audio-story-production", label: "Audio Story Production" },
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative mt-10 bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Logo className="text-rust-400 h-5" />
              <span className="font-display text-2xl tracking-tight">Studio HR Soundroom</span>
            </div>
            <p className="mt-6 max-w-sm text-paper/60 leading-relaxed">
              A full-service audio production company. End-to-end storytelling — from
              script to mastered, quality-controlled final delivery.
            </p>
            <a
              href={COMPANY_PROFILE_PDF}
              download
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-paper/20 px-5 py-2.5 text-sm text-paper transition hover:bg-paper hover:text-ink"
            >
              <TbDownload /> Company Profile (PDF)
            </a>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-paper/40">Explore</div>
            <ul className="mt-5 space-y-3">
              {explore.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-paper/75 hover:text-paper link-underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-paper/40">Get in touch</div>
            <ul className="mt-5 space-y-3 text-paper/75">
              <li>
                <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-1 hover:text-paper link-underline">
                  {EMAIL} <TbArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
              <li>
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-paper link-underline">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="text-paper/50 pt-1">{LOCATION}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 overflow-hidden border-t border-paper/10 pt-8">
          <div className="font-display text-[14vw] leading-none tracking-tightest text-paper/[0.07] select-none">
            SOUNDROOM
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-paper/40">
          <span>© {new Date().getFullYear()} Studio HR Soundroom. All rights reserved.</span>
          <span>End-to-end audio production · Built for scale.</span>
        </div>
      </div>
    </footer>
  );
}
