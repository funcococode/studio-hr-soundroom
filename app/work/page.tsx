"use client";

import Link from "next/link";
import Section from "@/components/ui/section";
import { motion } from "@/lib/motion";
import { useMemo, useState } from "react";
import { TbArrowUpRight } from "react-icons/tb";
import SampleCard, { Sample } from "@/components/ui/sample-card";

const CATEGORIES = ["Audio Story", "Audiobook", "Podcast", "Music Production"] as const;
type Category = (typeof CATEGORIES)[number];

const ALL: (Sample & { category: Category })[] = [
  { category: "Audio Story", title: "Episodic Drama", meta: "Long-form narrative · multi-voice" },
  { category: "Audio Story", title: "Mystery Anthology", meta: "Season · immersive sound design" },
  { category: "Audio Story", title: "Children's Series", meta: "Character voices · music score" },
  { category: "Audiobook", title: "Literary Fiction", meta: "Full-length · chapter delivery" },
  { category: "Audiobook", title: "Non-Fiction Title", meta: "Narration · clean edit" },
  { category: "Audiobook", title: "Regional Language", meta: "Localized · retail-spec master" },
  { category: "Podcast", title: "Interview Series", meta: "Weekly · edited & mastered" },
  { category: "Podcast", title: "Branded Show", meta: "Scripted · beds & sound design" },
  { category: "Podcast", title: "Narrative Documentary", meta: "Limited series · post-production" },
  { category: "Music Production", title: "Original Score", meta: "Themes · stems · mix" },
  { category: "Music Production", title: "Title Track", meta: "Composition · master" },
  { category: "Music Production", title: "Ad Music", meta: "30s · license-ready" },
];

const FILTERS = ["All", ...CATEGORIES] as const;
type Filter = (typeof FILTERS)[number];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } };
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Work() {
  const [active, setActive] = useState<Filter>("All");
  const projects = useMemo(
    () => (active === "All" ? ALL : ALL.filter((p) => p.category === active)),
    [active]
  );

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
              A look across the kinds of productions we deliver — audio stories, audiobooks,
              podcasts, and original music. Listenable samples are on the way; reach out for a
              tailored reel for your category.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FILTER + GRID */}
      <Section title="Browse by category" kicker="Samples">
        <div className="mb-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const on = active === f;
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                aria-pressed={on}
                className={
                  "rounded-full border px-5 py-2.5 text-sm transition-all " +
                  (on
                    ? "border-ink bg-ink text-paper"
                    : "border-ink/15 text-muted hover:border-ink/40 hover:text-ink")
                }
              >
                {f}
              </button>
            );
          })}
        </div>

        <motion.div
          key={active}
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((p) => (
            <motion.div key={p.title + p.category} variants={item}>
              <SampleCard sample={p} />
            </motion.div>
          ))}
        </motion.div>
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
