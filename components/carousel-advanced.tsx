"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "@/lib/motion";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";

type Slide = {
  id: number;
  title: string;
  subtitle?: string;
  src: string;
};

const SLIDES: Slide[] = [
  { id: 1, title: "World-class Recording", subtitle: "Pristine vocals • Analog warmth", src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1960&auto=format&fit=crop" },
  { id: 2, title: "Mixing & Mastering",    subtitle: "Radio-ready polish",              src: "https://images.unsplash.com/photo-1513863320164-4f26e2b2a01d?q=80&w=1960&auto=format&fit=crop" },
  { id: 3, title: "Music Production",       subtitle: "From idea to hit",               src: "https://images.unsplash.com/photo-1519882189396-71db1d27ceef?q=80&w=1960&auto=format&fit=crop" },
];

const AUTOPLAY_MS = 5000;

export default function CarouselAdvanced() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = SLIDES.length;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  const prev = () => setIndex((i) => (i - 1 + n) % n);
  const next = () => setIndex((i) => (i + 1) % n);

  // Autoplay (pause on hover/touch)
  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused, index]); // reset timer on index change

  // Keyboard arrows
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Positions for coverflow (-1,0,1 for 3 slides; generalizes for >3)
  const positions = useMemo(() => {
    const half = Math.floor(n / 2);
    return SLIDES.map((_, i) => {
      let off = i - index;
      if (off > half) off -= n;
      if (off < -half) off += n;
      return off;
    });
  }, [index, n]);

  // Mouse tilt (safe + reset)
  const onMouseMove = (e: React.MouseEvent) => {
    const root = containerRef.current;
    if (!root) return;
    const rect = root.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
    const dy = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
    root.style.setProperty("--tiltX", `${dy * -6}deg`);
    root.style.setProperty("--tiltY", `${dx * 8}deg`);
  };
  const resetTilt = () => {
    const root = containerRef.current;
    if (!root) return;
    root.style.setProperty("--tiltX", `0deg`);
    root.style.setProperty("--tiltY", `0deg`);
  };

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current != null) {
      const dx = e.changedTouches[0].clientX - touchStartX.current;
      if (dx > 40) prev();
      if (dx < -40) next();
    }
    touchStartX.current = null;
    setPaused(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full select-none"
      style={{ perspective: "1400px" }}
      onMouseMove={onMouseMove}
      onMouseLeave={() => { resetTilt(); setPaused(false); }}
      onMouseEnter={() => setPaused(true)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Stage */}
      <div className="relative h-[min(62vh,520px)] overflow-x-hidden">
        {/* Center glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[320px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-[48px] bg-gradient-to-br from-brand-500/15 via-emerald-500/15 to-amber-500/15 blur-3xl" />

        {/* Slides */}
        <div className="absolute inset-0 z-10">
          {SLIDES.map((s, i) => {
            const off = positions[i];
            const isCenter = off === 0;

            // Responsive sizing: clamp width/height to viewport
            const cardClass =
              "absolute left-1/4 top-1/4 -translate-x-1/4 " +
              "h-[min(36vh,240px)] w-[min(92vw,720px)] md:h-[340px] md:w-[720px] " +
              "cursor-pointer will-change-transform";

            const x = off * 340;
            const rotY = off * -18;
            const scale = isCenter ? 1 : 0.88;
            const z = isCenter ? 30 : 10 - Math.abs(off) * 5;
            const blur = isCenter ? "blur(0px)" : "blur(2px)";
            const opacity = isCenter ? 1 : 0.85;

            return (
              <motion.article
                key={s.id}
                initial={false}
                animate={{
                  x,
                  rotateY: `calc(${rotY}deg + var(--tiltY, 0deg))`,
                  rotateX: `var(--tiltX, 0deg)`,
                  scale,
                  opacity,
                  filter: blur,
                  zIndex: z,
                }}
                transition={{ type: "spring", stiffness: 140, damping: 18 }}
                className={cardClass}
                onClick={() => {
                  if (off === 1) next();
                  else if (off === -1) prev();
                }}
                aria-hidden={!isCenter}
              >
                <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-soft">
                  <Image
                    src={s.src}
                    alt={s.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 720px, (min-width: 768px) 70vw, 92vw"
                    priority={isCenter}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/0" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="inline-flex max-w-xl flex-col rounded-2xl bg-white/85 backdrop-blur p-4 border border-black/5">
                      <div className="text-xl md:text-2xl font-semibold">{s.title}</div>
                      {s.subtitle && <div className="text-black/70">{s.subtitle}</div>}
                    </div>
                  </div>
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <div className="absolute -inset-8 rounded-[36px] bg-gradient-to-br from-brand-500/10 via-emerald-500/10 to-amber-500/10 blur-2xl" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Controls */}
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-between px-2">
          <button
            onClick={prev}
            className="pointer-events-auto grid h-12 w-12 place-items-center rounded-full bg-white/85 border border-black/5 shadow hover:bg-white transition"
            aria-label="Previous slide"
          >
            <TbChevronLeft />
          </button>
          <button
            onClick={next}
            className="pointer-events-auto grid h-12 w-12 place-items-center rounded-full bg-white/85 border border-black/5 shadow hover:bg-white transition"
            aria-label="Next slide"
          >
            <TbChevronRight />
          </button>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-4 left-1/2 z-20 w-[60%] -translate-x-1/2 overflow-hidden rounded-full border border-black/5 bg-white/70 backdrop-blur">
          <motion.div
            key={`${index}-${paused}`}   // restart each time
            initial={{ width: 0 }}
            animate={{ width: paused ? "0%" : "100%" }}
            transition={{ duration: paused ? 0 : AUTOPLAY_MS / 1000, ease: "linear" }}
            className="h-1 bg-gradient-to-r from-brand-500 via-emerald-500 to-amber-500"
          />
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-5 flex items-center justify-center gap-3">
        {SLIDES.map((s, i) => {
          const active = i === index;
          return (
            <button
              key={s.id}
              onClick={() => setIndex(i)}
              className="group relative"
              aria-label={`Go to ${s.title}`}
            >
              <div className="relative h-12 w-16 overflow-hidden rounded-lg border border-black/10 bg-white shadow">
                <Image
                  src={s.src}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  sizes="64px"
                />
              </div>
              <div className="mt-1 h-1 w-full overflow-hidden rounded-full bg-black/10">
                <motion.div
                  layout
                  className="h-full rounded-full bg-black/70"
                  style={{ width: active ? "100%" : "0%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 26 }}
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
