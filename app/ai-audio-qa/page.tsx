"use client";

import Link from "next/link";
import Section from "@/components/ui/section";
import { motion } from "@/lib/motion";
import { TbArrowUpRight, TbEar, TbChecks } from "react-icons/tb";
import { PRIMARY_CTA } from "@/constants";

const fadeUp = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

const CRITERIA = [
  { n: "01", title: "Naturalness", desc: "Does it sound like a real human — not synthetic or robotic?" },
  { n: "02", title: "Pronunciation", desc: "Accurate words, names, numbers, and domain-specific terms." },
  { n: "03", title: "Emotion", desc: "Appropriate, believable emotional delivery for the context." },
  { n: "04", title: "Pacing", desc: "Natural rhythm and speed — no rushing, dragging, or dead air." },
  { n: "05", title: "Prosody", desc: "Correct stress, intonation, and melodic flow across a line." },
  { n: "06", title: "Character consistency", desc: "A voice that stays consistent across scenes and episodes." },
  { n: "07", title: "Dialogue realism", desc: "Convincing turn-taking, timing, and interaction between voices." },
  { n: "08", title: "Audio artifacts", desc: "Clicks, glitches, breaths, and generation errors flagged and logged." },
  { n: "09", title: "Overall quality", desc: "A final, holistic verdict — pass, revise, or re-generate." },
];

const FOR = ["AI audio / voice companies", "Audio platforms", "Audiobook & story publishers", "Localization companies"];

export default function AIAudioQA() {
  return (
    <main>
      {/* HERO */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-40 -top-10 h-[30rem] w-[30rem] rounded-full bg-rust-200/40 blur-[120px]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-24">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="kicker block">Specialized service</motion.span>
            <motion.h1 variants={fadeUp} className="display mt-6 text-5xl md:text-8xl text-ink leading-[0.95]">
              Human quality control
              <br />
              for <span className="text-rust-500">AI-generated audio.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-8 max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
              AI can generate voice at scale — but shipping it still needs a trained human ear. We
              evaluate AI-generated audio against a rigorous, production-grade checklist and tell you
              exactly what passes and what needs another pass.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-paper transition hover:bg-rust-500">
                {PRIMARY_CTA} <TbArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE EVALUATE */}
      <Section title="What we evaluate" kicker="The QA checklist">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 md:grid-cols-2 lg:grid-cols-3">
          {CRITERIA.map(({ n, title, desc }) => (
            <motion.div key={n} variants={fadeUp} className="bg-paper p-8">
              <div className="flex items-center justify-between">
                <TbChecks className="h-6 w-6 text-rust-500" />
                <span className="font-display text-2xl text-ink/20">{n}</span>
              </div>
              <h3 className="mt-5 font-display text-xl text-ink">{title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* WHY HUMAN + WHO FOR */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <div className="flex items-center gap-3 text-rust-400">
                <TbEar className="h-6 w-6" />
                <span className="text-xs uppercase tracking-[0.22em]">Why a human pass</span>
              </div>
              <h2 className="mt-6 display text-4xl md:text-6xl text-paper">The last mile of quality.</h2>
              <p className="mt-6 max-w-xl text-lg text-paper/65 leading-relaxed">
                Automated scoring misses what listeners actually notice — a flat emotion, an
                off-beat pause, a name mispronounced. Our reviewers catch it, document it, and hand
                back clear, actionable notes so your team can ship with confidence.
              </p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-paper/40">Built for</div>
              <ul className="mt-6 divide-y divide-paper/10 border-y border-paper/10">
                {FOR.map((a, i) => (
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

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col items-start gap-6 rounded-3xl border border-ink/10 bg-paper2/40 p-10 md:flex-row md:items-center md:justify-between md:p-16">
          <h3 className="display text-3xl md:text-5xl text-ink">Have AI audio to QC at scale?</h3>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-rust-500 px-8 py-4 text-paper transition hover:bg-ink">
            {PRIMARY_CTA} <TbArrowUpRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
