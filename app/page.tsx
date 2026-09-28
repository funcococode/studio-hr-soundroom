"use client";

import Link from "next/link";
import { motion } from "@/lib/motion";
import {
  TbArrowUpRight,
  TbDownload,
  TbBook,
  TbMicrophone,
  TbRobot,
  TbLanguage,
  TbHeadphones,
  TbAdjustmentsHorizontal,
  TbSend,
  TbClipboardText,
  TbShieldCheck,
  TbPackageExport,
  TbCircleCheck,
} from "react-icons/tb";
import Section from "@/components/ui/section";
import AudioSample, { AudioItem } from "@/components/ui/audio-sample";
import { COMPANY_PROFILE_PDF, PRIMARY_CTA } from "@/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const HERO_LINES = [
  "Audio Story Production",
  "Audiobook Production",
  "AI Audio / Voice QA",
  "Localization & Dubbing Post",
  "Podcast Production",
  "Mixing, Mastering & QC",
];

const SERVICES = [
  { Icon: TbBook, title: "Audio Story Production", desc: "Fully produced, immersive audio dramas — from script to final master." },
  { Icon: TbMicrophone, title: "Audiobook Production", desc: "Narration, editing, and chapter delivery at publisher scale." },
  { Icon: TbRobot, title: "AI Audio / Voice QA", desc: "Human quality control for AI-generated voice and audio.", href: "/ai-audio-qa" },
  { Icon: TbLanguage, title: "Localization & Dubbing Post", desc: "Dubbing post-production and localized delivery for global releases." },
  { Icon: TbHeadphones, title: "Podcast Production", desc: "End-to-end episode production and post for networks and brands." },
  { Icon: TbAdjustmentsHorizontal, title: "Mixing, Mastering & QC", desc: "Studio-grade mixing, mastering, and a dedicated quality-control pass." },
];

const OUTSOURCE_FOR = [
  "Production houses",
  "Publishers",
  "Audio platforms",
  "Localization companies",
  "Podcast networks",
  "AI audio / voice companies",
];

const STEPS = [
  { Icon: TbSend, n: "01", title: "Send us your production load", desc: "Scripts, recordings, or an entire backlog — hand it over as-is." },
  { Icon: TbClipboardText, n: "02", title: "We follow your workflow & specs", desc: "Your naming, formats, and delivery standards, matched exactly." },
  { Icon: TbShieldCheck, n: "03", title: "Production + QC", desc: "Editing, sound design, mixing, and a dedicated quality-control pass." },
  { Icon: TbPackageExport, n: "04", title: "Delivery-ready masters", desc: "Spec-perfect final files, delivered on your schedule." },
];

const QA_CRITERIA = [
  "Naturalness", "Pronunciation", "Emotion", "Pacing", "Prosody",
  "Character consistency", "Dialogue realism", "Audio artifacts", "Overall quality",
];

const WHY = [
  { n: "01", title: "Remote by design", desc: "Global delivery, integrated into your pipeline — no relocation, no overhead." },
  { n: "02", title: "Consistent quality", desc: "A house standard and dedicated QC that holds across every file." },
  { n: "03", title: "Built for volume", desc: "Boutique projects and high-volume, recurring slates handled the same way." },
  { n: "04", title: "Dependable delivery", desc: "Reliable timelines and a responsive production partner." },
];

const SAMPLES: AudioItem[] = [
  { category: "Studio HR Demo / Spec", title: "Don't Look Behind You", genre: "Suspense / Psychological Thriller", src: `/demos/${encodeURIComponent("DONT LOOK BEHIND YOU - Suspense _ Psychological Thriller.wav")}` },
  { category: "Studio HR Demo / Spec", title: "The Last King of Dragons", genre: "Fantasy Epic", src: `/demos/${encodeURIComponent("THE LAST KING OF DRAGONS - Fantasy Epic.wav")}` },
  { category: "Studio HR Demo / Spec", title: "When the Stars Chose Her", genre: "Romantasy", src: `/demos/${encodeURIComponent("WHEN THE STARS CHOSE HER - Romantasy.wav")}` },
];

export default function Home() {
  return (
    <main className="overflow-clip">
      {/* HERO */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-40 top-10 h-[34rem] w-[34rem] rounded-full bg-rust-200/40 blur-[120px]" />
          <div className="absolute -left-40 top-40 h-[26rem] w-[26rem] rounded-full bg-rust-100/50 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-24 md:pb-20">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span className="flex h-2 w-2 items-center justify-center">
                <span className="h-2 w-2 animate-floaty rounded-full bg-rust-500" />
              </span>
              <span className="kicker">Remote audio production partner</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="display mt-8 text-[15vw] leading-[0.92] sm:text-[12vw] md:text-[8.5rem] text-ink"
            >
              End-to-end
              <br />
              <span className="text-rust-500">audio production.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-lg md:text-xl text-muted leading-relaxed"
            >
              Studio HR is a remote audio production company that helps businesses and production
              houses handle <span className="text-ink">high-volume audio production</span> —
              without building another internal team. Recurring work, white-label and overflow
              support, delivered globally.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-2.5">
              <span className="rounded-full border border-ink/15 bg-paper2/40 px-4 py-2 text-sm text-ink">
                Built for high-volume, recurring production
              </span>
              <span className="rounded-full border border-ink/15 bg-paper2/40 px-4 py-2 text-sm text-ink">
                White-label · overflow · dedicated capacity
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-paper transition hover:bg-rust-500"
              >
                {PRIMARY_CTA}
                <TbArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href={COMPANY_PROFILE_PDF}
                download
                className="group inline-flex items-center gap-2 rounded-full border border-ink/20 px-7 py-4 text-ink transition hover:bg-ink hover:text-paper"
              >
                <TbDownload /> Company Profile
              </a>
            </motion.div>

            <motion.ul
              variants={fadeUp}
              className="mt-14 grid gap-x-10 gap-y-3 border-t border-ink/10 pt-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {HERO_LINES.map((l, i) => (
                <li key={l} className="flex items-baseline gap-3 text-ink">
                  <span className="text-xs tabular-nums text-rust-500">0{i + 1}</span>
                  <span className="font-display text-xl md:text-2xl">{l}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* Marquee */}
        <div className="border-y border-ink/10 bg-paper2/30 py-5">
          <div className="marquee-track animate-marquee">
            {[0, 1].map((dup) => (
              <span key={dup} className="flex items-center" aria-hidden={dup === 1}>
                {SERVICES.map((s) => (
                  <span key={s.title} className="flex items-center">
                    <span className="px-8 font-display text-xl text-ink/70">{s.title}</span>
                    <span className="text-rust-500">✦</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <Section title="What we produce" kicker="Services" index="01 / 05">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 md:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map(({ Icon, title, desc, href }) => {
            const inner = (
              <>
                <Icon className="h-7 w-7 text-rust-500" />
                <h3 className="mt-6 font-display text-2xl text-ink">{title}</h3>
                <p className="mt-3 text-muted leading-relaxed">{desc}</p>
                <TbArrowUpRight className="absolute right-7 top-8 h-5 w-5 text-ink/0 transition-all duration-300 group-hover:text-ink/40" />
              </>
            );
            return href ? (
              <motion.div key={title} variants={fadeUp}>
                <Link href={href} className="group relative block h-full bg-paper p-8 transition-colors duration-500 hover:bg-paper2/60">
                  {inner}
                </Link>
              </motion.div>
            ) : (
              <motion.div key={title} variants={fadeUp} className="group relative bg-paper p-8 transition-colors duration-500 hover:bg-paper2/60">
                {inner}
              </motion.div>
            );
          })}
        </motion.div>
      </Section>

      {/* OUTSOURCE PRODUCTION — flagship B2B section */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <span className="text-xs uppercase tracking-[0.22em] text-rust-400">Outsource production</span>
              <h2 className="mt-6 display text-4xl md:text-6xl text-paper">
                Extra capacity — without hiring another team.
              </h2>
              <p className="mt-6 max-w-xl text-lg text-paper/65 leading-relaxed">
                Studio HR works as a remote, white-label production partner. Send us your scripts,
                recordings, or production load, and we handle editing, sound design, mixing, quality
                control, and final delivery.
              </p>
              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-rust-500 px-7 py-4 text-paper transition hover:bg-paper hover:text-ink"
              >
                {PRIMARY_CTA} <TbArrowUpRight />
              </Link>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-paper/40">A production partner for</div>
              <ul className="mt-6 divide-y divide-paper/10 border-y border-paper/10">
                {OUTSOURCE_FOR.map((a, i) => (
                  <li key={a} className="flex items-center justify-between py-4">
                    <span className="font-display text-xl md:text-2xl">{a}</span>
                    <span className="text-xs tabular-nums text-rust-400">{String(i + 1).padStart(2, "0")}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <Section title="How we work" kicker="Simple, spec-driven" index="02 / 05">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STEPS.map(({ Icon, n, title, desc }) => (
            <motion.div key={n} variants={fadeUp} className="bg-paper p-8">
              <div className="flex items-center justify-between">
                <Icon className="h-6 w-6 text-rust-500" />
                <span className="font-display text-2xl text-ink/20">{n}</span>
              </div>
              <h3 className="mt-6 font-display text-xl text-ink">{title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
        <p className="mt-8 text-muted">
          Set up for <span className="text-ink">recurring monthly production</span> and{" "}
          <span className="text-ink">overflow capacity</span> — scale up or down as your slate changes.
        </p>
      </Section>

      {/* AI AUDIO QA — specialized highlight */}
      <Section title="Human QC for AI-generated audio" kicker="Specialized service" index="03 / 05">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <p className="text-lg md:text-xl text-muted leading-relaxed">
            AI can generate voice at scale — but it still needs a human ear. We review AI-generated
            audio against a rigorous checklist and flag exactly what needs another pass.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {QA_CRITERIA.map((q) => (
              <span key={q} className="rounded-full border border-ink/15 bg-paper2/40 px-4 py-2 text-sm text-ink">
                {q}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-10">
          <Link href="/ai-audio-qa" className="inline-flex items-center gap-2 font-display text-xl text-ink link-underline">
            Explore AI Audio QA <TbArrowUpRight />
          </Link>
        </div>
      </Section>

      {/* SELECTED WORK */}
      <Section title="Selected work" kicker="Studio HR Demo / Spec Production" index="04 / 05">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SAMPLES.map((s) => (
            <AudioSample key={s.title} item={s} />
          ))}
        </div>
        <div className="mt-10">
          <Link href="/work" className="inline-flex items-center gap-2 font-display text-xl text-ink link-underline">
            View the full portfolio <TbArrowUpRight />
          </Link>
        </div>
      </Section>

      {/* WHY */}
      <Section title="Why Studio HR" kicker="The difference" index="05 / 05">
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {WHY.map((w) => (
            <div key={w.n} className="group grid items-baseline gap-4 py-8 md:grid-cols-[6rem_1fr_1.2fr]">
              <span className="font-display text-3xl text-rust-500">{w.n}</span>
              <h3 className="font-display text-2xl md:text-3xl text-ink transition-transform duration-300 group-hover:translate-x-2">
                {w.title}
              </h3>
              <p className="text-muted leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="flex flex-col items-start gap-8 rounded-3xl bg-ink p-10 text-paper md:flex-row md:items-center md:justify-between md:p-16">
          <div>
            <h3 className="display text-4xl md:text-6xl">
              Have a slate to <span className="text-rust-400">produce?</span>
            </h3>
            <p className="mt-4 max-w-xl text-lg text-paper/60">
              Available for white-label, overflow, and dedicated production capacity. Tell us your
              scope, volume, and timeline.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-rust-500 px-7 py-4 text-paper transition hover:bg-paper hover:text-ink">
              {PRIMARY_CTA} <TbArrowUpRight />
            </Link>
            <a href={COMPANY_PROFILE_PDF} download className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-7 py-4 text-paper transition hover:bg-paper hover:text-ink">
              <TbDownload /> Company Profile
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
