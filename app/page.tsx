"use client";

import Link from "next/link";
import { motion } from "@/lib/motion";
import {
  TbArrowUpRight,
  TbDownload,
  TbBook,
  TbMicrophone,
  TbHeadphones,
  TbWaveSine,
  TbAdjustmentsHorizontal,
  TbCircleCheck,
  TbBuildingBroadcastTower,
  TbBolt,
  TbStack2,
  TbShieldCheck,
  TbReportAnalytics,
} from "react-icons/tb";
import Section from "@/components/ui/section";
import SampleCard, { Sample } from "@/components/ui/sample-card";
import { COMPANY_PROFILE_PDF } from "@/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const HERO_LINES = [
  "Audio Story Production",
  "Audiobook Production",
  "Podcast Production",
  "Sound Design",
  "Mixing & Mastering",
  "Quality Control & Delivery",
];

const SERVICES = [
  { Icon: TbBook, title: "Audio Story Production", desc: "Script to screenless cinema — fully produced, immersive audio stories." },
  { Icon: TbMicrophone, title: "Audiobook Production", desc: "Narration, editing, and chapter delivery at publisher scale." },
  { Icon: TbHeadphones, title: "Podcast Production", desc: "End-to-end episode production and post for networks and brands." },
  { Icon: TbWaveSine, title: "Sound Design & Foley", desc: "Textures, ambience, and effects that build a believable world." },
  { Icon: TbAdjustmentsHorizontal, title: "Mixing & Mastering", desc: "Studio-grade balance and loudness, optimized for every platform." },
  { Icon: TbCircleCheck, title: "Quality Control & Delivery", desc: "A dedicated QC pass and spec-perfect final files, every time." },
];

const INDUSTRIES = [
  "Audio Story Platforms",
  "Audiobook Publishers",
  "Podcast Networks",
  "Media Companies",
  "Independent Creators",
  "Music Artists",
];

const CAPABILITIES = [
  { Icon: TbStack2, title: "Scalable production workflows", desc: "Pipelines built to grow from a single episode to a full slate." },
  { Icon: TbShieldCheck, title: "Dedicated QC process", desc: "A separate quality-control stage before anything ships." },
  { Icon: TbReportAnalytics, title: "Multi-project handling", desc: "Parallel productions managed without dropping a beat." },
  { Icon: TbBolt, title: "Fast turnaround times", desc: "Reliable timelines that keep your release calendar on track." },
  { Icon: TbBuildingBroadcastTower, title: "Long-form episodic expertise", desc: "Built for series, seasons, and continuous catalogues." },
];

const WHY = [
  { n: "01", title: "Professional workflows", desc: "Documented, repeatable processes from intake to delivery." },
  { n: "02", title: "Consistent quality", desc: "A house sound and QC standard that holds across every file." },
  { n: "03", title: "Storytelling expertise", desc: "Creative direction that serves the narrative, not just the waveform." },
  { n: "04", title: "Scalable capacity", desc: "Boutique projects and high-volume slates, handled the same way." },
  { n: "05", title: "Dedicated support", desc: "A responsive partner across the life of your production." },
];

const SAMPLES: Sample[] = [
  { category: "Audio Story", title: "Episodic Drama", meta: "Long-form narrative · multi-voice" },
  { category: "Audiobook", title: "Fiction Narration", meta: "Full-length · chapter delivery" },
  { category: "Podcast", title: "Interview Series", meta: "Weekly · edited & mastered" },
  { category: "Music Production", title: "Original Score", meta: "Themes · stems · mix" },
];

export default function Home() {
  return (
    <main className="overflow-clip">
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-40 top-10 h-[34rem] w-[34rem] rounded-full bg-rust-200/40 blur-[120px]" />
          <div className="absolute -left-40 top-40 h-[26rem] w-[26rem] rounded-full bg-rust-100/50 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-24 md:pb-20">
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span className="flex h-2 w-2 items-center justify-center">
                <span className="h-2 w-2 animate-floaty rounded-full bg-rust-500" />
              </span>
              <span className="kicker">Full-service audio production company</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="display mt-8 text-[15vw] leading-[0.92] sm:text-[12vw] md:text-[8.5rem] text-ink"
            >
              End-to-end
              <br />
              <span className="text-rust-500">audio production.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-lg md:text-xl text-muted leading-relaxed"
            >
              Studio HR Soundroom takes stories from script to mastered, quality-controlled
              delivery — for storytelling platforms, publishers, podcast networks, media
              companies, and creators. Boutique craft, built for high-volume scale.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-paper transition hover:bg-rust-500"
              >
                Start a project
                <TbArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href={COMPANY_PROFILE_PDF}
                download
                className="group inline-flex items-center gap-2 rounded-full border border-ink/20 px-7 py-4 text-ink transition hover:bg-ink hover:text-paper"
              >
                <TbDownload /> Company Profile
              </a>
            </motion.div>

            <motion.ul
              variants={fadeUp}
              className="mt-14 grid gap-x-10 gap-y-3 border-t border-ink/10 pt-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {HERO_LINES.map((l, i) => (
                <li key={l} className="flex items-baseline gap-3 text-ink">
                  <span className="text-xs tabular-nums text-rust-500">0{i + 1}</span>
                  <span className="font-display text-xl md:text-2xl">{l}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        <div className="border-y border-ink/10 bg-paper2/30 py-5">
          <div className="marquee-track animate-marquee">
            {[0, 1].map((dup) => (
              <span key={dup} className="flex items-center" aria-hidden={dup === 1}>
                {SERVICES.map((s) => (
                  <span key={s.title} className="flex items-center">
                    <span className="px-8 font-display text-xl text-ink/70">{s.title}</span>
                    <span className="text-rust-500">✦</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Section title="What we produce" kicker="Services" index="01 / 06">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 md:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map(({ Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="group relative bg-paper p-8 transition-colors duration-500 hover:bg-paper2/60"
            >
              <Icon className="h-7 w-7 text-rust-500" />
              <h3 className="mt-6 font-display text-2xl text-ink">{title}</h3>
              <p className="mt-3 text-muted leading-relaxed">{desc}</p>
              <TbArrowUpRight className="absolute right-7 top-8 h-5 w-5 text-ink/0 transition-all duration-300 group-hover:text-ink/40" />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section title="Industries we serve" kicker="Who we work with" index="02 / 06">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, i) => (
            <div
              key={ind}
              className="group flex items-center justify-between bg-paper px-8 py-10 transition-colors hover:bg-ink hover:text-paper"
            >
              <div>
                <div className="text-xs tabular-nums text-rust-500">{String(i + 1).padStart(2, "0")}</div>
                <div className="mt-2 font-display text-2xl md:text-3xl">{ind}</div>
              </div>
              <TbArrowUpRight className="h-6 w-6 opacity-20 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="mb-16 border-t border-paper/15 pt-7">
            <div className="flex items-baseline justify-between">
              <span className="text-xs uppercase tracking-[0.22em] text-paper/50">Production capabilities</span>
              <span className="text-xs uppercase tracking-[0.22em] text-paper/50">03 / 06</span>
            </div>
            <h2 className="mt-6 display max-w-3xl text-4xl md:text-6xl text-paper">
              Built to deliver at volume.
            </h2>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-10 md:grid-cols-2 lg:grid-cols-3"
          >
            {CAPABILITIES.map(({ Icon, title, desc }) => (
              <motion.div key={title} variants={fadeUp} className="border-t border-paper/15 pt-6">
                <Icon className="h-7 w-7 text-rust-400" />
                <h3 className="mt-5 font-display text-2xl">{title}</h3>
                <p className="mt-2 text-paper/60 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Section title="Why Studio HR Soundroom" kicker="The difference" index="04 / 06">
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {WHY.map((w) => (
            <div
              key={w.n}
              className="group grid items-baseline gap-4 py-8 md:grid-cols-[6rem_1fr_1.2fr]"
            >
              <span className="font-display text-3xl text-rust-500">{w.n}</span>
              <h3 className="font-display text-2xl md:text-3xl text-ink transition-transform duration-300 group-hover:translate-x-2">
                {w.title}
              </h3>
              <p className="text-muted leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Selected work" kicker="Portfolio samples" index="05 / 06">
        <div className="grid gap-6 md:grid-cols-2">
          {SAMPLES.map((s) => (
            <SampleCard key={s.title} sample={s} />
          ))}
        </div>
        <div className="mt-10">
          <Link href="/work" className="inline-flex items-center gap-2 font-display text-xl text-ink link-underline">
            View the full portfolio <TbArrowUpRight />
          </Link>
        </div>
      </Section>

      <Section title="A production house, not a freelancer" kicker="The team" index="06 / 06">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <p className="text-xl md:text-2xl text-muted leading-relaxed">
            Behind Studio HR Soundroom is a team of engineers, editors, sound designers, and
            producers working as one pipeline — so your projects get the consistency,
            redundancy, and capacity that serious production demands.
          </p>
          <div className="flex flex-col items-start gap-6 rounded-3xl border border-ink/10 bg-paper2/40 p-8">
            <p className="font-display text-2xl text-ink">
              Ready to onboard a dependable audio partner?
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/about" className="rounded-full border border-ink/20 px-6 py-3 text-ink transition hover:bg-ink hover:text-paper">
                Meet the team
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-rust-500 px-6 py-3 text-paper transition hover:bg-ink">
                Start a project <TbArrowUpRight />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
