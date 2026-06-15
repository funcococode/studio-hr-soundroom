"use client";

import Link from "next/link";
import Section from "@/components/ui/section";
import { motion } from "@/lib/motion";
import {
  TbBook,
  TbMicrophone,
  TbHeadphones,
  TbScissors,
  TbWaveSine,
  TbMusic,
  TbAdjustmentsHorizontal,
  TbCircleCheck,
  TbSparkles,
  TbArrowUpRight,
} from "react-icons/tb";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4, staggerChildren: 0.07, ease: [0.22, 1, 0.36, 1] } },
};
const item = {
  hidden: { y: 18, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const services = [
  { Icon: TbBook, title: "Audio Story Production", desc: "Complete audio dramas and narrative experiences — casting, direction, scoring, and immersive sound design from script to delivery.", points: ["Script breakdown & casting", "Multi-voice direction", "Cinematic sound design"] },
  { Icon: TbMicrophone, title: "Audiobook Production", desc: "Publisher-ready audiobooks with consistent narration, clean edits, and chapter-perfect delivery at any catalogue size.", points: ["Narration & coaching", "Chapter editing", "Retail-spec masters"] },
  { Icon: TbHeadphones, title: "Podcast Production & Post", desc: "Full podcast pipelines — from raw recordings to polished, leveled, publish-ready episodes for networks and brands.", points: ["Edit & assembly", "Speech mixing & loudness", "Intro/outro & beds"] },
  { Icon: TbScissors, title: "Dialogue Editing & Cleanup", desc: "Surgical dialogue editing that removes noise, breaths, and artifacts while keeping performances natural.", points: ["De-noise / de-click", "Breath & timing control", "Seamless comps"] },
  { Icon: TbWaveSine, title: "Sound Design & Foley", desc: "Custom effects, ambiences, and Foley that build a believable, immersive world around the narrative.", points: ["Custom SFX library", "Foley & textures", "Spatial design"] },
  { Icon: TbMusic, title: "Background Score & Music", desc: "Original scoring and music production — themes, motifs, and beds that elevate the emotional arc.", points: ["Original composition", "Hybrid orchestration", "Stems delivery"] },
  { Icon: TbAdjustmentsHorizontal, title: "Mixing & Mastering", desc: "Studio-grade mixing and mastering with translation and loudness optimized for every platform and device.", points: ["Hybrid mix chain", "Platform loudness specs", "Revisions included"] },
  { Icon: TbCircleCheck, title: "Quality Control & Delivery", desc: "A dedicated QC stage and spec-perfect deliverables, so every file ships right the first time.", points: ["Full QC pass", "Spec compliance", "Organized delivery"] },
  { Icon: TbSparkles, title: "Audio Restoration & Enhancement", desc: "Rescue and enhance compromised recordings with spectral repair, noise reduction, and clarity work.", points: ["Noise reduction", "Spectral repair", "Clarity enhancement"] },
];

const flow = [
  "Script Review", "Audio Editing", "Dialogue Cleanup", "Sound Design",
  "Music Integration", "Mixing", "Mastering", "Quality Control", "Final Delivery",
];

export default function Services() {
  return (
    <main>
      {/* HERO */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-40 -top-20 h-[30rem] w-[30rem] rounded-full bg-rust-200/40 blur-[120px]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="kicker">Capabilities</span>
            <h1 className="display mt-6 text-6xl md:text-8xl text-ink">
              Every stage of
              <br />
              <span className="text-rust-500">production.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
              One roof, one accountable pipeline. We combine creative direction, engineering,
              sound design, music, mixing, mastering, and quality control into a single
              dependable workflow — for projects of any scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICE GRID */}
      <Section title="What we do" kicker="Services">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map(({ title, desc, points, Icon }, idx) => (
            <motion.div
              key={title}
              variants={item}
              className="group relative bg-paper p-8 transition-colors duration-500 hover:bg-paper2/60"
            >
              <div className="flex items-center justify-between">
                <Icon className="h-7 w-7 text-rust-500" />
                <span className="text-xs tabular-nums text-ink/30">{String(idx + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-6 font-display text-2xl text-ink">{title}</h3>
              <p className="mt-3 text-muted leading-relaxed">{desc}</p>
              <ul className="mt-5 space-y-1.5 text-sm text-muted">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-rust-500" /> {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* WORKFLOW STRIP */}
      <Section title="The production workflow" kicker="How it flows">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-4">
          {flow.map((step, i) => (
            <span key={step} className="flex items-center gap-3">
              <span className="font-display text-xl md:text-2xl text-ink">
                <span className="mr-2 text-sm tabular-nums text-rust-500">{String(i + 1).padStart(2, "0")}</span>
                {step}
              </span>
              {i < flow.length - 1 && <span className="text-rust-500">→</span>}
            </span>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="flex flex-col items-start gap-8 rounded-3xl bg-ink p-10 text-paper md:flex-row md:items-center md:justify-between md:p-16">
          <div>
            <h3 className="display text-4xl md:text-6xl">
              Have a slate to <span className="text-rust-400">produce?</span>
            </h3>
            <p className="mt-4 max-w-xl text-lg text-paper/60">
              Tell us about the scope, timeline, and volume. We'll shape a workflow that fits.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-rust-500 px-8 py-4 text-paper transition hover:bg-paper hover:text-ink"
          >
            Start a project <TbArrowUpRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
