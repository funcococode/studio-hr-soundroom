"use client";

import Section from "@/components/ui/section";
import Image from "next/image";
import { motion } from "@/lib/motion";
import {
  TbSparkles,
  TbHeart,
  TbWaveSine,
  TbShield,
  TbAperture,
  TbArrowRight,
  TbHandLoveYou,
} from "react-icons/tb";

const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const PRINCIPLES = [
  { icon: TbHeart, title: "Artist-first", desc: "We protect your voice and serve the song." },
  { icon: TbWaveSine, title: "Taste + Tech", desc: "Warmth of analog, precision of digital." },
  { icon: TbHandLoveYou, title: "Handcrafted", desc: "No templates. Every record gets a custom path." },
  { icon: TbShield, title: "Trust", desc: "Clean communication, clear expectations, no ego." },
  { icon: TbAperture, title: "Clarity", desc: "Decisions that translate on every system." },
  { icon: TbSparkles, title: "Joy", desc: "Sessions should feel inspiring, not clinical." },
];

const TIMELINE = [
  { n: "01", t: "Beginnings", d: "Late nights with a laptop, a second-hand mic, and a head full of hooks." },
  { n: "02", t: "The Room", d: "Tuning a compact space into a truthful listening environment." },
  { n: "03", t: "The Chain", d: "Curating gear that adds character without getting in the way." },
  { n: "04", t: "The Work", d: "Singles, EPs, podcasts, demos—each treated like a headline release." },
  { n: "05", t: "Today", d: "Studio HR helps artists finish with confidence and release without doubt." },
];

export default function About() {
  return (
    <main>
      {/* PERSONAL HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-72 w-[120vw] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-500/25 via-emerald-400/20 to-amber-400/25 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-20 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] items-center"
          >
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.2em] text-black/60">Philosophy</p>
              <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05]">
                Studio HR is a{" "}
                <span className="bg-gradient-to-br from-brand-500 via-emerald-500 to-amber-500 bg-clip-text text-transparent">
                  craft-first
                </span>{" "}
                music house—built on trust, taste, and the joy of finishing.
              </h1>
              <p className="max-w-3xl text-lg md:text-xl text-black/70">
                I started this studio to help artists feel <em>heard</em>. We pair thoughtful
                pre-production with a hybrid analog/digital chain so your songs feel alive on earbuds,
                cars, club rigs—everywhere.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-white transition hover:opacity-90"
                >
                  Say hello <TbArrowRight />
                </a>
                <span className="text-sm text-black/60">Typically booking 2–4 weeks out.</span>
              </div>
              <div className="pt-2 text-sm text-black/60">
                — Founder, Studio HR
              </div>
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-black/5 bg-white shadow-soft"
            >
              <Image
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1600&auto=format&fit=crop"
                alt="In the studio"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <Section title="What we believe" kicker="Values">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {PRINCIPLES.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white p-6 shadow-soft"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-black/[0.04] transition-transform duration-300 group-hover:scale-110">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold">{p.title}</h3>
              </div>
              <p className="text-black/70">{p.desc}</p>

              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -inset-8 rounded-[28px] bg-gradient-to-br from-brand-500/10 via-emerald-500/10 to-amber-500/10 blur-2xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* STORY / TIMELINE */}
      <Section title="The story" kicker="From laptop to listening room">
        <motion.ol
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative grid gap-6 md:grid-cols-2"
        >
          <div className="pointer-events-none absolute left-1/2 top-6 hidden h-[calc(100%-3rem)] w-px -translate-x-1/2 bg-black/10 md:block" />
          {TIMELINE.map((s) => (
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
            </motion.li>
          ))}
        </motion.ol>
      </Section>

      {/* PERSONAL NOTE / CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-white p-8 md:p-12 shadow-soft">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -inset-10 rounded-[36px] bg-gradient-to-br from-brand-500/15 via-emerald-500/15 to-amber-500/15 blur-3xl" />
          </div>
          <motion.blockquote
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-xl md:text-2xl leading-relaxed text-black/80"
          >
            “Great records come from great conversations. If you have a melody on a voice note
            or a fully arranged session, I’ll meet you where you are—and help you get it home.”
            <footer className="mt-4 text-sm text-black/60">— Founder, Studio HR</footer>
          </motion.blockquote>

          <div className="mt-8">
            <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-white transition hover:opacity-90">
              Start a conversation <TbArrowRight />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
