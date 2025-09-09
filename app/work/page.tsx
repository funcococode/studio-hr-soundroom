"use client";

import Section from "@/components/ui/section";
import Image from "next/image";
import { motion } from "@/lib/motion";
import { useMemo, useState } from "react";
import { TbFilter, TbPlayerPlay, TbSparkles } from "react-icons/tb";

const CATEGORIES = ["Recording", "Mixing", "Mastering", "Production"] as const;
type Category = typeof CATEGORIES[number];

type Project = {
  id: string;
  title: string;
  cover: string;
  category: Category;
  year: string;
};

const ALL_PROJECTS: Project[] = [
  { id: "p1", title: "Indie Pop Single", cover: "https://images.unsplash.com/photo-1546443046-ed1ce6ffd1a1?q=80&w=1887&auto=format&fit=crop", category: "Recording", year: "2025" },
  { id: "p2", title: "Hip-Hop EP", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1887&auto=format&fit=crop", category: "Mixing", year: "2024" },
  { id: "p3", title: "Acoustic Session", cover: "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?q=80&w=1887&auto=format&fit=crop", category: "Production", year: "2025" },
  { id: "p4", title: "Singer-Songwriter LP", cover: "https://images.unsplash.com/photo-1513863320164-4f26e2b2a01d?q=80&w=1887&auto=format&fit=crop", category: "Mastering", year: "2024" },
  { id: "p5", title: "Electronic Single", cover: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1887&auto=format&fit=crop", category: "Mixing", year: "2025" },
  { id: "p6", title: "Live Jazz Set", cover: "https://images.unsplash.com/photo-1444824775686-4185f172c44b?q=80&w=1887&auto=format&fit=crop", category: "Recording", year: "2024" },
  { id: "p7", title: "Alt-Rock EP", cover: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1887&auto=format&fit=crop", category: "Production", year: "2024" },
  { id: "p8", title: "Bollywood Cover", cover: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?q=80&w=1887&auto=format&fit=crop", category: "Mastering", year: "2025" },
  { id: "p9", title: "Lo-Fi Tape", cover: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?q=80&w=1887&auto=format&fit=crop", category: "Mixing", year: "2023" },
];

const FILTERS = ["All", ...CATEGORIES] as const;
type Filter = typeof FILTERS[number];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07, duration: 0.25 } },
};
const item = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

export default function Work() {
  const [active, setActive] = useState<Filter>("All");

  const projects = useMemo(
    () => (active === "All" ? ALL_PROJECTS : ALL_PROJECTS.filter((p) => p.category === active)),
    [active]
  );

  return (
    <main>
      {/* HERO */}
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
            <p className="text-xs uppercase tracking-[0.2em] text-black/60">Highlights</p>
            <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05]">
              Selected <span className="bg-gradient-to-br from-brand-500 via-emerald-500 to-amber-500 bg-clip-text text-transparent">Work</span>
            </h1>
            <p className="max-w-3xl text-lg md:text-xl text-black/70">
              A snapshot of recent recordings, mixes, masters, and full productions. Hover to preview details.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 text-sm text-black/60">
            <TbFilter /> Filter
          </span>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const pressed = active === f;
              return (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  aria-pressed={pressed}
                  className={
                    "rounded-full border px-4 py-2 text-sm transition-all " +
                    (pressed ? "border-black bg-black text-white" : "border-black/10 hover:border-black/20")
                  }
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* GRID */}
      <Section title="Projects" kicker="Curated selection">
        <motion.div
          key={active}                 // <-- remount grid when filter changes
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((p, idx) => (
            <motion.article
              key={p.id}              // <-- stable key
              variants={item}
              className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white shadow-soft"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={p.cover}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  priority={idx < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute right-4 top-4">
                  <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-black shadow">
                    {p.category}
                  </span>
                </div>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-white/90 shadow">
                    <TbPlayerPlay className="h-5 w-5" />
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-5">
                <h3 className="text-xl md:text-2xl font-semibold">{p.title}</h3>
                <div className="flex items-center gap-2 text-sm text-black/60">
                  <TbSparkles className="opacity-60" />
                  {p.year}
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -inset-8 rounded-[28px] bg-gradient-to-br from-brand-500/10 via-emerald-500/10 to-amber-500/10 blur-2xl" />
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-10 flex items-center justify-center">
          <a href="/contact" className="rounded-full bg-ink px-6 py-3 text-white transition hover:opacity-90">
            Discuss your project
          </a>
        </div>
      </Section>
    </main>
  );
}
