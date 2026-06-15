"use client";

import { TbPlayerPlayFilled } from "react-icons/tb";

export type Sample = {
  category: string;
  title: string;
  meta: string;
};

// Static decorative waveform bars (deterministic so SSR matches client)
const BARS = Array.from({ length: 42 }, (_, i) => {
  const v = Math.abs(Math.sin(i * 0.7) * Math.cos(i * 0.33));
  return 0.18 + v * 0.82;
});

export default function SampleCard({ sample }: { sample: Sample }) {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-ink/10 bg-paper2/40 p-6 transition-all duration-500 hover:border-ink/20 hover:bg-paper2 hover:shadow-soft">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-[0.68rem] uppercase tracking-[0.2em] text-rust-500">
            {sample.category}
          </div>
          <h3 className="mt-2 font-display text-2xl text-ink">{sample.title}</h3>
          <p className="mt-1 text-sm text-muted">{sample.meta}</p>
        </div>
        <span className="rounded-full border border-ink/15 px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-muted">
          Sample soon
        </span>
      </div>

      {/* Player UI */}
      <div className="mt-8 flex items-center gap-4">
        <button
          type="button"
          aria-label={`Preview ${sample.title} (coming soon)`}
          className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink text-paper transition group-hover:bg-rust-500"
        >
          <TbPlayerPlayFilled className="h-4 w-4 translate-x-[1px]" />
        </button>

        <div className="flex h-10 flex-1 items-center gap-[2px]">
          {BARS.map((h, i) => (
            <span
              key={i}
              className="w-full rounded-full bg-ink/15 transition-colors duration-500 group-hover:bg-ink/25"
              style={{ height: `${h * 100}%` }}
            />
          ))}
        </div>

        <span className="shrink-0 text-xs tabular-nums text-muted">—:—</span>
      </div>
    </div>
  );
}
