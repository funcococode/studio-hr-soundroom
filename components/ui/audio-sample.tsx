"use client";

import { useEffect, useRef, useState } from "react";
import { TbPlayerPlayFilled, TbPlayerPauseFilled } from "react-icons/tb";

// Deterministic waveform shape (SSR-safe)
const BARS = Array.from({ length: 60 }, (_, i) => {
  const v = Math.abs(Math.sin(i * 0.8) * Math.cos(i * 0.37)) * 0.75;
  return 0.22 + v;
});

function fmt(t: number) {
  if (!isFinite(t) || t < 0) return "0:00";
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

export type AudioItem = {
  category: string;
  title: string;
  genre: string;
  src: string;
};

export default function AudioSample({ item }: { item: AudioItem }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [cur, setCur] = useState(0);
  const [dur, setDur] = useState(0);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onTime = () => {
      setCur(a.currentTime);
      setProgress(a.duration ? a.currentTime / a.duration : 0);
    };
    const onLoaded = () => setDur(a.duration);
    const onEnd = () => {
      setPlaying(false);
      setProgress(0);
      setCur(0);
    };
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("loadedmetadata", onLoaded);
    a.addEventListener("durationchange", onLoaded);
    a.addEventListener("ended", onEnd);
    a.addEventListener("play", onPlay);
    a.addEventListener("pause", onPause);
    return () => {
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("loadedmetadata", onLoaded);
      a.removeEventListener("durationchange", onLoaded);
      a.removeEventListener("ended", onEnd);
      a.removeEventListener("play", onPlay);
      a.removeEventListener("pause", onPause);
    };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      // Only one sample plays at a time
      document.querySelectorAll("audio").forEach((el) => {
        if (el !== a) el.pause();
      });
      void a.play();
    } else {
      a.pause();
    }
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const a = audioRef.current;
    if (!a || !a.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    a.currentTime = ratio * a.duration;
    setProgress(ratio);
    setCur(ratio * a.duration);
  };

  const activeBars = Math.round(progress * BARS.length);

  return (
    <div
      className={
        "group relative flex flex-col justify-between overflow-hidden rounded-3xl border bg-paper2/40 p-6 transition-all duration-500 " +
        (playing ? "border-rust-400/60 bg-paper2 shadow-soft" : "border-ink/10 hover:border-ink/20 hover:bg-paper2")
      }
    >
      <audio ref={audioRef} src={item.src} preload="metadata" />

      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[0.68rem] uppercase tracking-[0.2em] text-rust-500">
            {item.category}
          </div>
          <h3 className="mt-2 font-display text-2xl leading-tight text-ink">{item.title}</h3>
          <p className="mt-1 text-sm text-muted">{item.genre}</p>
        </div>
        <span className="shrink-0 rounded-full border border-ink/15 px-2.5 py-1 text-[0.62rem] tabular-nums text-muted">
          {fmt(dur)}
        </span>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? `Pause ${item.title}` : `Play ${item.title}`}
          className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink text-paper transition group-hover:bg-rust-500"
        >
          {playing ? (
            <TbPlayerPauseFilled className="h-4 w-4" />
          ) : (
            <TbPlayerPlayFilled className="h-4 w-4 translate-x-[1px]" />
          )}
        </button>

        <div
          onClick={seek}
          role="slider"
          aria-label="Seek"
          aria-valuenow={Math.round(progress * 100)}
          aria-valuemin={0}
          aria-valuemax={100}
          tabIndex={0}
          className="flex h-10 flex-1 cursor-pointer items-center gap-[2px]"
        >
          {BARS.map((h, i) => (
            <span
              key={i}
              className={
                "w-full rounded-full transition-colors duration-150 " +
                (i < activeBars ? "bg-rust-500" : "bg-ink/15 group-hover:bg-ink/25")
              }
              style={{ height: `${h * 100}%` }}
            />
          ))}
        </div>

        <span className="shrink-0 text-xs tabular-nums text-muted">{fmt(cur)}</span>
      </div>
    </div>
  );
}
