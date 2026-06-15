"use client";

import Link from "next/link";
import Section from "@/components/ui/section";
import { motion } from "@/lib/motion";
import { TbArrowUpRight, TbDownload } from "react-icons/tb";
import { COMPANY_PROFILE_PDF, LOCATION } from "@/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const STATS = [
  { k: "9+", v: "Production disciplines under one roof" },
  { k: "End-to-end", v: "Script to final delivery" },
  { k: "QC", v: "Dedicated quality-control stage" },
  { k: "Scalable", v: "Boutique to high-volume slates" },
];

const TEAM = [
  { name: "Harshit", role: "Founder & Lead Audio Engineer", initials: "HR", note: "Sets the house sound and owns the final mix." },
  { name: "Production Team", role: "Editors & Dialogue Specialists", initials: "ED", note: "Assembly, cleanup, and continuity across episodes." },
  { name: "Sound Design", role: "Designers & Foley Artists", initials: "SD", note: "Worlds built from ambience, effects, and texture." },
  { name: "Music", role: "Composers & Producers", initials: "MU", note: "Original scores, themes, and beds." },
  { name: "Quality Control", role: "QC & Delivery", initials: "QC", note: "Spec compliance and spotless final files." },
  { name: "Project Management", role: "Producers & Coordination", initials: "PM", note: "Timelines, communication, and multi-project flow." },
];

const VALUES = [
  { title: "Storytelling first", desc: "Every technical decision serves the narrative and the listener." },
  { title: "Consistent quality", desc: "A documented standard that holds across every file we ship." },
  { title: "Dependable at scale", desc: "Pipelines and people sized for ongoing, high-volume work." },
  { title: "Clear partnership", desc: "Honest timelines, clean communication, no surprises." },
];

export default function About() {
  return (
    <main>
      {/* HERO */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-40 -top-10 h-[30rem] w-[30rem] rounded-full bg-rust-200/40 blur-[120px]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-24">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.span variants={fadeUp} className="kicker block">About the studio</motion.span>
            <motion.h1 variants={fadeUp} className="display mt-6 text-5xl md:text-8xl text-ink leading-[0.95]">
              A full-service
              <br />
              <span className="text-rust-500">audio production house.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-8 max-w-3xl text-lg md:text-xl text-muted leading-relaxed">
              Studio HR Soundroom is a full-service audio production company based in {LOCATION},
              specializing in end-to-end audio for storytelling platforms, production houses,
              podcast networks, audiobook publishers, brands, and independent creators. We bring
              creative direction, sound engineering, design, music, mixing, mastering, and
              quality control together under one roof — to create immersive, scalable audio
              experiences.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <a href={COMPANY_PROFILE_PDF} download className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-paper transition hover:bg-rust-500">
                <TbDownload /> Download Company Profile
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-7 py-4 text-ink transition hover:bg-ink hover:text-paper">
                Work with us <TbArrowUpRight />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.v} className="bg-paper p-8">
              <div className="font-display text-4xl text-rust-500">{s.k}</div>
              <div className="mt-3 text-sm text-muted leading-relaxed">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <Section title="The team behind the sound" kicker="People">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {TEAM.map((m) => (
            <motion.div
              key={m.name}
              variants={fadeUp}
              className="group rounded-3xl border border-ink/10 bg-paper2/40 p-7 transition-all hover:border-ink/20 hover:shadow-soft"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-ink font-display text-lg text-paper transition-colors group-hover:bg-rust-500">
                {m.initials}
              </div>
              <h3 className="mt-6 font-display text-2xl text-ink">{m.name}</h3>
              <div className="mt-1 text-sm uppercase tracking-[0.14em] text-rust-500">{m.role}</div>
              <p className="mt-3 text-muted leading-relaxed">{m.note}</p>
            </motion.div>
          ))}
        </motion.div>
        <p className="mt-8 max-w-2xl text-muted">
          Working as one pipeline — not a single freelancer — gives your projects the
          consistency, redundancy, and capacity that serious production requires.
        </p>
      </Section>

      {/* VALUES */}
      <Section title="What we believe" kicker="Values">
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {VALUES.map((v, i) => (
            <div key={v.title} className="group grid items-baseline gap-4 py-8 md:grid-cols-[6rem_1fr_1.2fr]">
              <span className="font-display text-3xl text-rust-500">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-2xl md:text-3xl text-ink transition-transform duration-300 group-hover:translate-x-2">{v.title}</h3>
              <p className="text-muted leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-3xl bg-ink p-10 text-paper md:p-16">
          <blockquote className="display max-w-4xl text-3xl md:text-5xl leading-[1.05]">
            "We built Studio HR Soundroom so creators and platforms could hand over a script —
            and get back a finished, quality-controlled production."
          </blockquote>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-rust-500 px-7 py-4 text-paper transition hover:bg-paper hover:text-ink">
              Start a conversation <TbArrowUpRight />
            </Link>
            <span className="text-sm text-paper/50">{LOCATION}</span>
          </div>
        </div>
      </section>
    </main>
  );
}
