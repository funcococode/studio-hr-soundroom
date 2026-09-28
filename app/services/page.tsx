"use client";

import Link from "next/link";
import Section from "@/components/ui/section";
import { motion } from "@/lib/motion";
import {
  TbBook,
  TbMicrophone,
  TbRobot,
  TbLanguage,
  TbHeadphones,
  TbAdjustmentsHorizontal,
  TbScissors,
  TbWaveSine,
  TbMusic,
  TbSparkles,
  TbArrowUpRight,
} from "react-icons/tb";
import { PRIMARY_CTA } from "@/constants";

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4, staggerChildren: 0.07, ease: [0.22, 1, 0.36, 1] } } };
const item = { hidden: { y: 18, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };

const focus = [
  { Icon: TbBook, title: "Audio Story Production", desc: "Complete, immersive audio dramas — casting, direction, scoring, and sound design from script to final master.", points: ["Multi-voice direction", "Cinematic sound design", "Delivery-ready masters"] },
  { Icon: TbMicrophone, title: "Audiobook Production", desc: "Publisher-ready audiobooks with consistent narration, clean edits, and chapter-perfect delivery at any catalogue size.", points: ["Narration & coaching", "Chapter editing", "Retail-spec masters"] },
  { Icon: TbRobot, title: "AI Audio / Voice QA", desc: "Human quality control for AI-generated voice and audio — evaluated against a rigorous, production-grade checklist.", points: ["Naturalness & prosody", "Pronunciation & pacing", "Artifact & consistency checks"], href: "/ai-audio-qa" },
  { Icon: TbLanguage, title: "Localization & Dubbing Post", desc: "Dubbing post-production and localized delivery — sync, mix, and QC for clean, market-ready releases worldwide.", points: ["Dialogue sync & mix", "Multi-language delivery", "Spec compliance"] },
  { Icon: TbHeadphones, title: "Podcast Production", desc: "Full podcast pipelines — from raw recordings to polished, leveled, publish-ready episodes for networks and brands.", points: ["Edit & assembly", "Speech mix & loudness", "Intro/outro & beds"] },
  { Icon: TbAdjustmentsHorizontal, title: "Mixing, Mastering & QC", desc: "Studio-grade mixing and mastering with a dedicated quality-control stage, optimized for every platform.", points: ["Hybrid mix chain", "Platform loudness specs", "Dedicated QC pass"] },
];

const more = [
  { Icon: TbScissors, title: "Dialogue Editing & Cleanup", desc: "De-noise, de-breath, and seamless natural comps." },
  { Icon: TbWaveSine, title: "Sound Design & Foley", desc: "Custom effects, ambience, and textures that build the world." },
  { Icon: TbMusic, title: "Background Score & Music", desc: "Original scoring, themes, and beds; stems delivery." },
  { Icon: TbSparkles, title: "Audio Restoration & Enhancement", desc: "Noise reduction, spectral repair, and clarity work." },
];

const flow = ["Script Review", "Audio Editing", "Dialogue Cleanup", "Sound Design", "Music Integration", "Mixing", "Mastering", "Quality Control", "Final Delivery"];

export default function Services() {
  return (
    <main>
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-40 -top-20 h-[30rem] w-[30rem] rounded-full bg-rust-200/40 blur-[120px]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-24">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <span className="kicker">Capabilities</span>
            <h1 className="display mt-6 text-6xl md:text-8xl text-ink">
              A full production
              <br />
              <span className="text-rust-500">pipeline.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
              One accountable, remote partner across every stage — creative direction, engineering,
              AI voice QA, localization, mixing, mastering, and quality control — built to run at
              your volume.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FOCUS SERVICES */}
      <Section title="Core services" kicker="What we focus on">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 md:grid-cols-2 lg:grid-cols-3">
          {focus.map(({ title, desc, points, Icon, href }, idx) => {
            const inner = (
              <>
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
              </>
            );
            return href ? (
              <motion.div key={title} variants={item}>
                <Link href={href} className="group relative block h-full bg-paper p-8 transition-colors duration-500 hover:bg-paper2/60">{inner}
                  <TbArrowUpRight className="absolute right-7 top-8 h-5 w-5 text-ink/0 transition-all duration-300 group-hover:text-ink/40" />
                </Link>
              </motion.div>
            ) : (
              <motion.div key={title} variants={item} className="group relative bg-paper p-8 transition-colors duration-500 hover:bg-paper2/60">{inner}</motion.div>
            );
          })}
        </motion.div>
      </Section>

      {/* ADDITIONAL CAPABILITIES */}
      <Section title="Also part of the pipeline" kicker="Additional capabilities">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {more.map(({ Icon, title, desc }) => (
            <div key={title} className="bg-paper p-7">
              <Icon className="h-6 w-6 text-rust-500" />
              <h3 className="mt-5 font-display text-lg text-ink">{title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* WORKFLOW */}
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
              Ready to <span className="text-rust-400">outsource?</span>
            </h3>
            <p className="mt-4 max-w-xl text-lg text-paper/60">Tell us about the scope, volume, and timeline. We'll shape a workflow that fits.</p>
          </div>
          <Link href="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-rust-500 px-8 py-4 text-paper transition hover:bg-paper hover:text-ink">
            {PRIMARY_CTA} <TbArrowUpRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
