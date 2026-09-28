"use client";

import Link from "next/link";
import Section from "@/components/ui/section";
import { motion } from "@/lib/motion";
import { useState } from "react";
import { TbArrowUpRight, TbMicrophone, TbRobot, TbLanguage } from "react-icons/tb";
import AudioSample, { AudioItem } from "@/components/ui/audio-sample";

const demo = (file: string) => `/demos/${encodeURIComponent(file)}`;

const AUDIO_STORY: AudioItem[] = [
  { category: "Studio HR Demo / Spec", title: "Don't Look Behind You", genre: "Suspense / Psychological Thriller", src: demo("DONT LOOK BEHIND YOU - Suspense _ Psychological Thriller.wav") },
  { category: "Studio HR Demo / Spec", title: "System Awakening", genre: "Sci-Fi LitRPG / System Apocalypse", src: demo("SYSTEM AWAKENING - Sci-Fi LitRPG _ System Apocalypse.wav") },
  { category: "Studio HR Demo / Spec", title: "The Last King of Dragons", genre: "Fantasy Epic", src: demo("THE LAST KING OF DRAGONS - Fantasy Epic.wav") },
  { category: "Studio HR Demo / Spec", title: "The Missed Call", genre: "Drama", src: demo("THE MISSED CALL - Drama.wav") },
  { category: "Studio HR Demo / Spec", title: "When the Stars Chose Her", genre: "Romantasy", src: demo("WHEN THE STARS CHOSE HER - Romantasy.wav") },
];

type TabId = "Audio Story Production" | "Audiobook Production" | "AI Voice / Audio QA" | "Localization / Dubbing Post";
const TABS: TabId[] = ["Audio Story Production", "Audiobook Production", "AI Voice / Audio QA", "Localization / Dubbing Post"];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } };

function CategoryPanel({
  Icon,
  text,
  ctaLabel,
  ctaHref,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  text: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <div className="rounded-3xl border border-ink/10 bg-paper2/40 p-8 md:p-12">
      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-ink/5 text-rust-500">
        <Icon className="h-6 w-6" />
      </div>
      <p className="mt-6 max-w-2xl text-lg md:text-xl text-ink leading-relaxed">{text}</p>
      <div className="mt-4 inline-flex rounded-full bg-ink/5 px-3 py-1 text-[0.62rem] uppercase tracking-[0.16em] text-muted">
        Studio HR Demo / Spec Production
      </div>
      <div className="mt-8">
        <Link href={ctaHref} className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-paper transition hover:bg-rust-500">
          {ctaLabel} <TbArrowUpRight />
        </Link>
      </div>
    </div>
  );
}

export default function Work() {
  const [active, setActive] = useState<TabId>("Audio Story Production");

  return (
    <main>
      {/* HERO */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-40 -top-20 h-[28rem] w-[28rem] rounded-full bg-rust-200/40 blur-[120px]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 md:pt-24">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <span className="kicker">Portfolio</span>
            <h1 className="display mt-6 text-6xl md:text-8xl text-ink">
              Selected <span className="text-rust-500">work.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
              A cross-section of what we produce for clients — shown here as Studio HR demo and spec
              productions. Ask for a tailored reel in your category.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TABS + CONTENT */}
      <Section title="Browse by category" kicker="Samples">
        <div className="mb-10 flex flex-wrap gap-2">
          {TABS.map((t) => {
            const on = active === t;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setActive(t)}
                aria-pressed={on}
                className={
                  "rounded-full border px-5 py-2.5 text-sm transition-all " +
                  (on ? "border-ink bg-ink text-paper" : "border-ink/15 text-muted hover:border-ink/40 hover:text-ink")
                }
              >
                {t}
              </button>
            );
          })}
        </div>

        {active === "Audio Story Production" && (
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-10 max-w-3xl text-lg md:text-xl text-muted leading-relaxed"
            >
              <span className="text-ink">Studio HR demo / spec productions</span> — originals produced
              in-house in high-quality <span className="text-ink">binaural</span> and{" "}
              <span className="text-ink">spatial audio</span>, built for headphones.
            </motion.p>
            <motion.div key="audio-story" variants={container} initial="hidden" animate="show" className="grid gap-6 md:grid-cols-2">
              {AUDIO_STORY.map((s) => (
                <motion.div key={s.title} variants={item}>
                  <AudioSample item={s} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {active === "Audiobook Production" && (
          <CategoryPanel
            Icon={TbMicrophone}
            text="Publisher-ready audiobooks — consistent narration, clean edits, and chapter-perfect, retail-spec masters delivered at catalogue scale."
            ctaLabel="Request an audiobook reel"
            ctaHref="/contact"
          />
        )}

        {active === "AI Voice / Audio QA" && (
          <CategoryPanel
            Icon={TbRobot}
            text="Human quality control for AI-generated voice and audio — evaluated for naturalness, pronunciation, emotion, pacing, prosody, consistency, and artifacts, with clear pass/revise notes."
            ctaLabel="Explore AI Audio QA"
            ctaHref="/ai-audio-qa"
          />
        )}

        {active === "Localization / Dubbing Post" && (
          <CategoryPanel
            Icon={TbLanguage}
            text="Dubbing post-production and localized delivery — dialogue sync, mix, and QC for clean, market-ready releases across multiple languages."
            ctaLabel="Request a localization sample"
            ctaHref="/contact"
          />
        )}
      </Section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="flex flex-col items-start gap-6 rounded-3xl bg-ink p-10 text-paper md:flex-row md:items-center md:justify-between md:p-16">
          <h3 className="display text-3xl md:text-5xl">
            Want a reel for your <span className="text-rust-400">category?</span>
          </h3>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-rust-500 px-8 py-4 text-paper transition hover:bg-paper hover:text-ink">
            Request samples <TbArrowUpRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
