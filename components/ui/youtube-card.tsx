"use client";

import { useState } from "react";
import { TbPlayerPlayFilled } from "react-icons/tb";

export type MusicItem = { id: string; title: string; artist: string };

export default function YouTubeCard({ item }: { item: MusicItem }) {
  const [play, setPlay] = useState(false);

  return (
    <div className="group overflow-hidden rounded-3xl border border-ink/10 bg-paper2/40 transition-all duration-500 hover:border-ink/20 hover:shadow-soft">
      <div className="relative aspect-video w-full overflow-hidden bg-ink">
        {play ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${item.id}?autoplay=1&rel=0`}
            title={item.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlay(true)}
            aria-label={`Play ${item.title}`}
            className="absolute inset-0 h-full w-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`}
              alt={item.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-ink/25 transition-colors duration-300 group-hover:bg-ink/10" />
            <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-rust-500 text-paper shadow-lift transition-transform duration-300 group-hover:scale-110">
              <TbPlayerPlayFilled className="h-5 w-5 translate-x-[1px]" />
            </span>
          </button>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl text-ink leading-tight">{item.title}</h3>
        <p className="mt-1 text-sm text-muted">{item.artist}</p>
      </div>
    </div>
  );
}
