"use client";

import Link from "next/link";
import Section from "@/components/ui/section";
import { motion } from "@/lib/motion";
import { useMemo, useState } from "react";
import { TbArrowUpRight, TbClockPause, TbMusic } from "react-icons/tb";
import AudioSample, { AudioItem } from "@/components/ui/audio-sample";

const demo = (file: string) => `/demos/${encodeURIComponent(file)}`;

const AUDIO_STORY: AudioItem[] = [
  {
    category: "Audio Story",
    title: "Don't Look Behind You",
    genre: "Suspense / Psychological Thriller",
    src: demo("DONT LOOK BEHIND YOU - Suspense _ Psychological Thriller.wav"),
  },
  {
    category: "Audio Story",
    title: "System Awakening",
    genre: "Sci-Fi LitRPG / System Apocalypse",
    src: demo("SYSTEM AWAKENING - Sci-Fi LitRPG _ System Apocalypse.wav"),
  },
  {
    category: "Audio Story",
    title: "The Last King of Dragons",
    genre: "Fantasy Epic",
    src: demo("THE LAST KING OF DRAGONS - Fantasy Epic.wav"),
  },
  {
    category: "Audio Story",
    title: "The Missed Call",
    genre: "Drama",
    src: demo("THE MISSED CALL - Drama.wav"),
  },
  {
    category: "Audio Story",
    title: "When the Stars Chose Her",
    genre: "Romantasy",
    src: demo("WHEN THE STARS CHOSE HER - Romantasy.wav"),
  },
];

type TabId = "Audio Story" | "Music" | "Podcast";
const TABS: { id: TabId; label: string; disabled?: boolean }[] = [
  { id: "Audio Story", label: "Audio Story" },
  { id: "Music", label: "Music" },
  { id: "Podcast", label: "Podcast", disabled: true },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } };
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Work() {
  const [active, setActive] = useState<TabId>("Audio Story");

  const samples = useMemo(() => (active === "Audio Story" ? AUDIO_STORY : []), [active]);

  return (
    <main>
      {/* HERO */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-40 -top-20 h-[28rem] w-[28rem] rounded-full bg-rust-200/40 blur-[120px]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 md:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="kicker">Portfolio</span>
            <h1 className="display mt-6 text-6xl md:text-8xl text-ink">
              Selected <span className="text-rust-500">work.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
              Real audio-story productions — press play to listen. From suspense and sci-fi to
              fantasy, drama, and romantasy, each sample is produced end-to-end in-house.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TABS + CONTENT */}
      <Section title="Browse by category" kicker="Samples">
        <div className="mb-10 flex flex-wrap gap-2">
          {TABS.map((t) => {
            const on = active === t.id;
            if (t.disabled) {
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActive(t.id)}
                  aria-disabled="true"
                  title="Work to be updated soon"
                  className={
                    "inline-flex items-center gap-2 rounded-full border border-dashed px-5 py-2.5 text-sm transition-all " +
                    (on
                      ? "border-ink/40 text-ink"
                      : "border-ink/20 text-muted/70 hover:text-muted")
                  }
                >
                  {t.label}
                  <span className="rounded-full bg-ink/5 px-2 py-0.5 text-[0.6rem] uppercase tracking-[0.14em] text-muted">
                    Soon
                  </span>
                </button>
              );
            }
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActive(t.id)}
                aria-pressed={on}
                className={
                  "rounded-full border px-5 py-2.5 text-sm transition-all " +
                  (on
                    ? "border-ink bg-ink text-paper"
                    : "border-ink/15 text-muted hover:border-ink/40 hover:text-ink")
                }
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Audio Story — real samples */}
        {active === "Audio Story" && (
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-10 max-w-3xl text-lg md:text-xl text-muted leading-relaxed"
            >
              <span className="text-ink">Originals</span>, produced in-house —{" "}
              <span className="text-ink">high-quality</span>{" "}
              <span className="text-ink">binaural</span> and{" "}
              <span className="text-ink">spatial audio</span>, built for headphones.
            </motion.p>
            <motion.div
              key="audio-story"
              variants={container}
              initial="hidden"
              animate="show"
              className="grid gap-6 md:grid-cols-2"
            >
              {samples.map((s) => (
                <motion.div key={s.title} variants={item}>
                  <AudioSample item={s} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Music — active, coming soon */}
        {active === "Music" && (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-ink/15 bg-paper2/30 px-6 py-20 text-center">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-ink/5 text-rust-500">
              <TbMusic className="h-6 w-6" />
            </div>
            <h3 className="mt-6 font-display text-2xl text-ink">Music samples on the way</h3>
            <p className="mt-2 max-w-md text-muted">
              We're curating a selection of original scores and productions. In the meantime,
              reach out for a tailored music reel.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm text-ink transition hover:bg-ink hover:text-paper"
            >
              Request a music reel <TbArrowUpRight />
            </Link>
          </div>
        )}

        {/* Podcast — disabled */}
        {active === "Podcast" && (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-ink/15 bg-paper2/30 px-6 py-20 text-center">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-ink/5 text-muted">
              <TbClockPause className="h-6 w-6" />
            </div>
            <h3 className="mt-6 font-display text-2xl text-ink">Podcast — work to be updated soon</h3>
            <p className="mt-2 max-w-md text-muted">
              This section is being prepared. Check back shortly to hear our podcast productions.
            </p>
          </div>
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
