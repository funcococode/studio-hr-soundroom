"use client";

import Section from "@/components/ui/section";
import Image from "next/image";
import { motion } from "@/lib/motion";
import {
  TbMicrophone,
  TbHeadphones,
  TbAdjustments,
  TbSpeakerphone,
  TbBolt,
  TbMusic,
} from "react-icons/tb";

// ──────────────────────────────────────────────────────────────────────────────
// Motion presets
// ──────────────────────────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

// ──────────────────────────────────────────────────────────────────────────────
// Data
// ──────────────────────────────────────────────────────────────────────────────
const ROOMS = [
  {
    title: "Control Room",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1887&auto=format&fit=crop",
    bullets: ["Hybrid analog/digital", "Accurate monitoring", "Ergonomic workflow"],
  },
  {
    title: "Live Room",
    img: "https://images.unsplash.com/photo-1513863320164-4f26e2b2a01d?q=80&w=1887&auto=format&fit=crop",
    bullets: ["Flexible gobos", "Natural ambience", "Tuned for drums & guitars"],
  },
  {
    title: "Vocal Booth",
    img: "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?q=80&w=1887&auto=format&fit=crop",
    bullets: ["Low noise floor", "Premium mics", "Artist-friendly lighting"],
  },
  {
    title: "Lounge",
    img: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?q=80&w=1887&auto=format&fit=crop",
    bullets: ["Ideas & rest", "Coffee & vibe", "Client playback"],
  },
];

const GEAR = [
  {
    icon: TbMicrophone,
    title: "Microphones",
    items: ["Neumann • Telefunken • Shure", "Ribbons & SDCs for detail", "Pop & acoustic all-rounders"],
  },
  {
    icon: TbAdjustments,
    title: "Preamps / Channel Strips",
    items: ["API & Neve-style color", "Clean transparent paths", "Onboard HPF / EQ options"],
  },
  {
    icon: TbBolt,
    title: "Dynamics & EQ",
    items: ["Opto & VCA compression", "Analog sweetening EQ", "Surgical digital when needed"],
  },
  {
    icon: TbHeadphones,
    title: "Monitoring",
    items: ["Nearfields + sub", "Reference headphones", "Calibrated listening"],
  },
  {
    icon: TbSpeakerphone,
    title: "Converters & IO",
    items: ["Low-latency tracking", "Reliable clocking", "Ample I/O for live takes"],
  },
  {
    icon: TbMusic,
    title: "Instruments & Software",
    items: ["Keys & synths", "Guitar/bass amps", "Top-tier plugins"],
  },
];

const CHAIN = [
  { n: "01", t: "Source", d: "Performance, instrument, or vocal." },
  { n: "02", t: "Microphone", d: "Matched to tone & placement." },
  { n: "03", t: "Preamp", d: "Clean gain or tasteful color." },
  { n: "04", t: "AD / Interface", d: "High-headroom conversion." },
  { n: "05", t: "Mix Bus", d: "Hybrid processing & space." },
  { n: "06", t: "Master", d: "Translation & release-ready." },
];

export default function Studio() {
  return (
    <main>
      {/* HERO — oversized, elegant */}
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
            <p className="text-xs uppercase tracking-[0.2em] text-black/60">Space & gear</p>
            <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05]">
              Inside the{" "}
              <span className="bg-gradient-to-br from-brand-500 via-emerald-500 to-amber-500 bg-clip-text text-transparent">
                Studio
              </span>
            </h1>
            <p className="max-w-3xl text-lg md:text-xl text-black/70">
              Acoustically tuned rooms, a hybrid analog/digital workflow, and a curated signal path—designed to capture
              performances that feel alive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ROOMS — image cards with hover reveal */}
      <Section title="Rooms" kicker="Spaces that inspire">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-2"
        >
          {ROOMS.map((r, i) => (
            <motion.article
              key={r.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white shadow-soft"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={r.img}
                  alt={r.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority={i < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <div className="mb-2 text-2xl md:text-3xl font-semibold">{r.title}</div>
                <ul className="space-y-1 text-black/70">
                  {r.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </div>
              {/* Glow on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -inset-8 rounded-[28px] bg-gradient-to-br from-brand-500/10 via-emerald-500/10 to-amber-500/10 blur-2xl" />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Section>

      {/* GEAR — big cards, icons, concise bullets */}
      <Section title="Selected Gear" kicker="Curated tools">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {GEAR.map((g) => (
            <motion.div
              key={g.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white p-6 shadow-soft"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-black/[0.04] transition-transform duration-300 group-hover:scale-110">
                  <g.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold">{g.title}</h3>
              </div>
              <ul className="space-y-2 text-black/70">
                {g.items.map((x) => (
                  <li key={x}>• {x}</li>
                ))}
              </ul>

              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -inset-8 rounded-[28px] bg-gradient-to-br from-brand-500/10 via-emerald-500/10 to-amber-500/10 blur-2xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* SIGNAL CHAIN — visual checklist */}
      <Section title="Signal Chain" kicker="From source to release">
        <motion.ol
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative grid gap-6 md:grid-cols-2"
        >
          {/* connecting line (desktop) */}
          <div className="pointer-events-none absolute left-1/2 top-6 hidden h-[calc(100%-3rem)] w-px -translate-x-1/2 bg-black/10 md:block" />
          {CHAIN.map((s, idx) => (
            <motion.li
              key={s.n}
              variants={fadeUp}
              className="relative overflow-hidden rounded-3xl border border-black/5 bg-white p-6 shadow-soft"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="text-3xl md:text-4xl font-semibold tabular-nums text-black/80">{s.n}</span>
                <h4 className="text-2xl md:text-3xl font-semibold">{s.t}</h4>
              </div>
              <p className="text-base md:text-lg text-black/70">{s.d}</p>

              {/* node dot (desktop) */}
              <div className="pointer-events-none absolute right-[-10px] top-8 hidden h-2 w-2 -translate-y-1/2 rounded-full bg-black/20 md:block" />
              {/* subtle per-card glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100">
                <div className="absolute -inset-8 rounded-[28px] bg-gradient-to-br from-brand-500/10 via-emerald-500/10 to-amber-500/10 blur-2xl" />
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </Section>

      {/* ACOUSTIC SPECS — big, simple stats */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-4 rounded-3xl border border-black/5 bg-white p-6 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "Noise floor", v: "~18 dBA" },
            { k: "RT60 (mid)", v: "~0.25 s" },
            { k: "Sample rate", v: "48–96 kHz" },
            { k: "Headroom", v: "+24 dBu" },
          ].map((s) => (
            <div key={s.k} className="flex items-center justify-between rounded-2xl bg-black/[0.03] px-4 py-5">
              <span className="text-sm uppercase tracking-wide text-black/60">{s.k}</span>
              <span className="text-xl font-semibold">{s.v}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex items-center justify-center">
          <a href="/contact" className="rounded-full bg-ink px-6 py-3 text-white transition hover:opacity-90">
            Book the studio
          </a>
        </div>
      </section>
    </main>
  );
}
