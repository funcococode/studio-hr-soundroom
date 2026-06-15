"use client";

import Link from "next/link";
import Section from "@/components/ui/section";
import { motion } from "@/lib/motion";
import {
  TbArrowUpRight,
  TbFileText,
  TbUsers,
  TbMicrophone2,
  TbScissors,
  TbWaveSine,
  TbMusic,
  TbAdjustmentsHorizontal,
  TbShieldCheck,
  TbPackageExport,
} from "react-icons/tb";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };

const STEPS = [
  { Icon: TbFileText, n: "01", title: "Script Review & Breakdown", desc: "We read for story, pace, and producibility — flagging characters, scenes, ambiences, and music cues before a single line is recorded." },
  { Icon: TbUsers, n: "02", title: "Casting & Voice Direction", desc: "Matching voices to characters and directing performances so the emotional intent lands consistently across every episode." },
  { Icon: TbMicrophone2, n: "03", title: "Recording & Capture", desc: "Clean, studio-grade capture with the takes and coverage editors need to assemble a seamless narrative." },
  { Icon: TbScissors, n: "04", title: "Dialogue Editing & Cleanup", desc: "Comping, de-noising, and breath control to make performances feel effortless and natural." },
  { Icon: TbWaveSine, n: "05", title: "Sound Design & Foley", desc: "Worlds built from ambience, effects, and Foley — placing the listener inside the scene." },
  { Icon: TbMusic, n: "06", title: "Score & Music Integration", desc: "Original themes and beds woven into the timeline to carry the emotional arc." },
  { Icon: TbAdjustmentsHorizontal, n: "07", title: "Mixing & Mastering", desc: "Balanced, dynamic mixes mastered to platform spec for consistent loudness everywhere." },
  { Icon: TbShieldCheck, n: "08", title: "Quality Control", desc: "A dedicated QC pass for continuity, technical spec, and listening experience before sign-off." },
  { Icon: TbPackageExport, n: "09", title: "Final Delivery", desc: "Organized, correctly-named, spec-perfect files delivered on schedule — ready to publish." },
];

const DELIVERS = [
  "Long-form & episodic series",
  "Multi-voice narrative drama",
  "Localized & dubbed versions",
  "Platform-spec masters",
  "Seasonal & ongoing slates",
  "Continuity across episodes",
];

export default function AudioStoryProduction() {
  return (
    <main>
      {/* HERO */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-40 -top-10 h-[30rem] w-[30rem] rounded-full bg-rust-200/40 blur-[120px]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-24">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="kicker block">Signature service</motion.span>
            <motion.h1 variants={fadeUp} className="display mt-6 text-6xl md:text-8xl text-ink">
              Audio Story
              <br />
              <span className="text-rust-500">Production.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-8 max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
              Cinema for the ears. We turn a script into a fully realized, immersive audio
              story — direction, performance, sound design, score, and delivery handled as one
              accountable production. Built for platforms that publish at scale.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-paper transition hover:bg-rust-500">
                Discuss your series <TbArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link href="/work" className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-7 py-4 text-ink transition hover:bg-ink hover:text-paper">
                Hear samples
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WORKFLOW — script to delivery */}
      <Section title="From script to final delivery" kicker="The complete workflow">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative"
        >
          {STEPS.map(({ Icon, n, title, desc }) => (
            <motion.div
              key={n}
              variants={fadeUp}
              className="group grid gap-5 border-t border-ink/10 py-8 md:grid-cols-[5rem_3rem_1fr_1.3fr] md:items-baseline"
            >
              <span className="font-display text-3xl text-rust-500">{n}</span>
              <Icon className="hidden h-7 w-7 text-ink/60 md:block" />
              <h3 className="font-display text-2xl md:text-3xl text-ink transition-transform duration-300 group-hover:translate-x-2">
                {title}
              </h3>
              <p className="text-muted leading-relaxed">{desc}</p>
            </motion.div>
          ))}
          <div className="border-t border-ink/10" />
        </motion.div>
      </Section>

      {/* WHAT WE DELIVER */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="border-t border-paper/15 pt-7">
            <span className="text-xs uppercase tracking-[0.22em] text-paper/50">Built for platforms</span>
            <h2 className="mt-6 display max-w-3xl text-4xl md:text-6xl">
              Long-form expertise, delivered reliably.
            </h2>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-paper/15 bg-paper/15 sm:grid-cols-2 lg:grid-cols-3">
            {DELIVERS.map((d) => (
              <div key={d} className="bg-ink px-8 py-10">
                <TbArrowUpRight className="h-5 w-5 text-rust-400" />
                <div className="mt-4 font-display text-xl">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col items-start gap-6 rounded-3xl border border-ink/10 bg-paper2/40 p-10 md:flex-row md:items-center md:justify-between md:p-16">
          <h3 className="display text-3xl md:text-5xl text-ink">
            Bring us your script.
          </h3>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-rust-500 px-8 py-4 text-paper transition hover:bg-ink">
            Start your audio story <TbArrowUpRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
