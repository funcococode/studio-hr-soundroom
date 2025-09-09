"use client";

import Section from "@/components/ui/section";
import { motion } from "@/lib/motion";
import {
  TbMicrophone,
  TbAdjustments,
  TbSparkles,
  TbHeadphones,
  TbMusic,
} from "react-icons/tb";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.4, staggerChildren: 0.08, ease: [0.22, 1, 0.36, 1] },
  },
};

const item = {
  hidden: { y: 14, opacity: 0, filter: "blur(4px)" },
  show: { y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.5 } },
};

const services = [
  {
    title: "Recording",
    desc: "Pristine capture for vocals, instruments, and live ensembles.",
    points: ["Tuned rooms • premium mics", "Engineer on session", "Vocal booth comfort"],
    Icon: TbMicrophone,
  },
  {
    title: "Editing",
    desc: "Tight timing, clean comps, natural tuning.",
    points: ["Comping & cleanup", "Timing & tuning", "Artifact-free workflows"],
    Icon: TbHeadphones,
  },
  {
    title: "Production",
    desc: "From idea to arrangement, sound design to final bounce.",
    points: ["Song development", "Arrangement & sound design", "Session musicians on call"],
    Icon: TbMusic,
  },
  {
    title: "Mixing",
    desc: "Depth, punch, and translation across every system.",
    points: ["Hybrid analog/digital chain", "Creative spatial work", "2 revisions included"],
    Icon: TbAdjustments,
  },
  {
    title: "Mastering",
    desc: "Loudness, glue, and polish for release-ready records.",
    points: ["Streaming optimized", "DDP on request", "1 revision included"],
    Icon: TbSparkles,
  },
];

export default function Services() {
  return (
    <main>
      {/* HERO — big, modern, colorful */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-72 w-[120vw] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-500/25 via-emerald-400/20 to-amber-400/25 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-black/60">Craft, care, and character</p>
            <h1 className="text-5xl leading-[1.05] md:text-7xl font-semibold">
              Services that make your{" "}
              <span className="bg-gradient-to-br from-brand-500 via-emerald-500 to-amber-500 bg-clip-text text-transparent">
                music unforgettable
              </span>
              .
            </h1>
            <p className="max-w-3xl text-lg md:text-xl text-black/70">
              Recording, editing, production, mixing, and mastering—thoughtfully executed with a hybrid analog/digital
              workflow so your songs feel <em>alive</em> on every speaker.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICE GRID — oversized titles + subtle micro-interactions */}
      <Section title="What we do" kicker="Capabilities">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {services.map(({ title, desc, points, Icon }, idx) => (
            <motion.div
              key={title}
              variants={item}
              className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white p-6 shadow-soft"
            >
              {/* ghost number */}
              <div
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-6 text-7xl font-bold tracking-tight text-black/[0.04]"
              >
                {(idx + 1).toString().padStart(2, "0")}
              </div>

              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-black/[0.04] transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold">{title}</h3>
              </div>

              <p className="text-base md:text-lg text-black/70">{desc}</p>

              <ul className="mt-5 space-y-2 text-sm md:text-base text-black/70">
                {points.map((p) => (
                  <li key={p} className="leading-relaxed">• {p}</li>
                ))}
              </ul>

              <div className="mt-6">
                <button className="rounded-full border border-black/10 px-4 py-2 text-sm md:text-base transition-all hover:-translate-y-0.5 hover:border-black/20 hover:bg-black/[0.03]">
                  Learn more
                </button>
              </div>

              {/* glow on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -inset-8 rounded-[28px] bg-gradient-to-br from-brand-500/10 via-emerald-500/10 to-amber-500/10 blur-2xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* PROCESS — big type checklist */}
      <Section title="How we work" kicker="The flow">
        <motion.ol
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-2"
        >
          {[
            { n: "01", t: "Discovery", d: "We align on vision, references, scope, and desired impact." },
            { n: "02", t: "Pre-production", d: "Demos, keys, tempos, and arrangement decisions." },
            { n: "03", t: "Tracking", d: "Record sources in our tuned rooms with premium mics and pres." },
            { n: "04", t: "Mix", d: "Balance, depth, and color—tested across multiple systems." },
            { n: "05", t: "Master", d: "Final loudness/translation; deliver streaming and DDP if needed." },
            { n: "06", t: "Release", d: "Asset support and guidance for rollout." },
          ].map((s) => (
            <motion.li
              key={s.n}
              variants={item}
              className="relative overflow-hidden rounded-3xl border border-black/5 bg-white p-6 shadow-soft"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="text-3xl md:text-4xl font-semibold tabular-nums text-black/80">{s.n}</span>
                <h4 className="text-2xl md:text-3xl font-semibold">{s.t}</h4>
              </div>
              <p className="text-base md:text-lg text-black/70">{s.d}</p>
            </motion.li>
          ))}
        </motion.ol>
      </Section>

      {/* CTA — oversized */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-white p-10 shadow-soft">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -inset-10 rounded-[36px] bg-gradient-to-br from-brand-500/15 via-emerald-500/15 to-amber-500/15 blur-3xl" />
          </div>
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-3xl md:text-5xl font-semibold leading-tight">
                Let’s make something <span className="bg-gradient-to-br from-brand-500 to-emerald-500 bg-clip-text text-transparent">timeless</span>.
              </h3>
              <p className="mt-2 text-lg text-black/70">
                Tell us about your project—genre, references, timelines. We’ll shape a plan that fits.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center rounded-full bg-ink px-6 py-4 text-white transition hover:opacity-90"
            >
              Start a project
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
