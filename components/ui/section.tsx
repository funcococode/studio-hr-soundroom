import { ReactNode } from "react";

export default function Section({ title, kicker, children }: { title: string; kicker?: string; children: ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10">
        {kicker && <div className="text-xs uppercase tracking-wider text-black/60">{kicker}</div>}
        <h2 className="text-3xl md:text-4xl font-semibold">{title}</h2>
      </div>
      {children}
    </section>
  );
}
