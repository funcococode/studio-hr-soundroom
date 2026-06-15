"use client";

import Section from "@/components/ui/section";
import { useRef, useState } from "react";
import { TbDownload } from "react-icons/tb";

type Tier = {
  name: string;
  unit: string;
  monthly: number;
  yearly: number;
  features: string[];
  group: "Core Services" | "Add-ons & Post";
};

const tiers: Tier[] = [
  { group: "Core Services", name: "Audio Story Production", unit: "per finished minute", monthly: 3500, yearly: 3500 * 12 * 0.85, features: ["Casting & direction", "Sound design & score", "Mix, master & QC"] },
  { group: "Core Services", name: "Audiobook Production", unit: "per finished hour", monthly: 6000, yearly: 6000 * 12 * 0.85, features: ["Narration & editing", "Chapter delivery", "Retail-spec masters"] },
  { group: "Core Services", name: "Podcast Production", unit: "per episode", monthly: 8000, yearly: 8000 * 12 * 0.9, features: ["Edit & cleanup", "Speech mix & loudness", "Intro/outro & beds"] },
  { group: "Core Services", name: "Full Music Production", unit: "per song", monthly: 25000, yearly: 25000 * 12 * 0.85, features: ["Arrangement & sound design", "Mix & master included", "Stems delivery"] },
  { group: "Add-ons & Post", name: "Dialogue Editing & Cleanup", unit: "per finished minute", monthly: 600, yearly: 600 * 12 * 0.9, features: ["De-breath / de-click / de-noise", "EQ & leveling", "WAV + MP3 exports"] },
  { group: "Add-ons & Post", name: "Voice-over Recording", unit: "per hour", monthly: 1000, yearly: 1000 * 12 * 0.9, features: ["Isolated booth", "Direction & multiple takes", "Raw + mix delivery"] },
  { group: "Add-ons & Post", name: "Sound Design (Film/Ads)", unit: "per finished minute", monthly: 2500, yearly: 2500 * 12 * 0.9, features: ["Custom SFX", "Transitions & textures", "Stems delivery"] },
  { group: "Add-ons & Post", name: "Audio Restoration", unit: "per track", monthly: 2500, yearly: 2500 * 12 * 0.9, features: ["Noise reduction", "Click/pop repair", "Spectral cleanup"] },
  { group: "Add-ons & Post", name: "Background Score", unit: "per finished minute", monthly: 6000, yearly: 6000 * 12 * 0.85, features: ["Themes & motifs", "Hybrid orchestration", "Stems + mix"] },
  { group: "Add-ons & Post", name: "Mixing", unit: "per track", monthly: 10000, yearly: 10000 * 12 * 0.9, features: ["Hybrid analog/digital", "2 revisions included", "Stem delivery"] },
  { group: "Add-ons & Post", name: "Mastering", unit: "per track", monthly: 5000, yearly: 5000 * 12 * 0.9, features: ["Streaming optimized", "DDP on request", "1 revision included"] },
  { group: "Add-ons & Post", name: "Stereo Mix for Film/OTT", unit: "per finished minute", monthly: 3500, yearly: 3500 * 12 * 0.9, features: ["Dialog/Music/FX balance", "Loudness compliance", "Spec deliverables"] },
];

const fmt = (n: number) => `₹${Intl.NumberFormat("en-IN").format(Math.round(n))}`;

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const captureRef = useRef<HTMLDivElement | null>(null);

  const handleExportPDF = async () => {
    const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
      import("html2canvas"),
      import("jspdf"),
    ]);

    const brand = "#C85228";
    const ink = "#15120E";
    const sub = "#6F675B";
    const hair = "#e5e0d6";
    const cardBorder = "#ece5da";
    const pageWidthPx = 1240;
    const pad = 48;
    const cols = 3;

    const root = document.createElement("div");
    Object.assign(root.style, {
      position: "fixed", left: "-10000px", top: "0", width: `${pageWidthPx}px`,
      boxSizing: "border-box", padding: `${pad}px`, background: "#F5F2EC", color: ink,
      fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial',
      lineHeight: "1.55",
    });

    const accentBar = document.createElement("div");
    Object.assign(accentBar.style, { height: "4px", background: brand, borderRadius: "9999px", marginBottom: "20px" });
    root.appendChild(accentBar);

    const header = document.createElement("div");
    Object.assign(header.style, { display: "flex", flexDirection: "column", gap: "8px", marginBottom: "18px" });
    const logo = document.createElement("div");
    logo.textContent = "Studio HR Soundroom";
    Object.assign(logo.style, { fontWeight: "900", fontSize: "34px", letterSpacing: "-0.015em" });
    const subtitle = document.createElement("div");
    subtitle.textContent = `Pricing — ${billing === "monthly" ? "Per unit" : "12× bulk (discount)"}`;
    Object.assign(subtitle.style, { fontSize: "12px", color: sub });
    const meta = document.createElement("div");
    const now = new Date();
    const dateText = `${String(now.getDate()).padStart(2, "0")}-${String(now.getMonth() + 1).padStart(2, "0")}-${now.getFullYear()}`;
    meta.textContent = `All prices in INR • Generated on ${dateText}`;
    Object.assign(meta.style, { fontSize: "11px", color: "#9a9384" });
    const underline = document.createElement("div");
    Object.assign(underline.style, { height: "1px", background: hair, marginTop: "10px" });
    header.append(logo, subtitle, meta, underline);
    root.appendChild(header);

    const makeSection = (titleText: string, items: Tier[]) => {
      const section = document.createElement("section");
      Object.assign(section.style, { marginTop: "22px" });
      const h = document.createElement("div");
      h.textContent = titleText;
      Object.assign(h.style, { fontWeight: "800", fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#2A251E", marginBottom: "12px" });
      section.appendChild(h);
      const grid = document.createElement("div");
      Object.assign(grid.style, { display: "grid", gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, gap: "16px" });
      items.forEach((t) => {
        const card = document.createElement("div");
        Object.assign(card.style, { border: `1px solid ${cardBorder}`, borderRadius: "14px", padding: "16px", background: "#ffffff" });
        const topRow = document.createElement("div");
        Object.assign(topRow.style, { display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "8px", marginBottom: "10px" });
        const title = document.createElement("div");
        title.textContent = t.name;
        Object.assign(title.style, { fontSize: "16px", fontWeight: "800", letterSpacing: "-0.01em" });
        const unit = document.createElement("span");
        unit.textContent = t.unit;
        Object.assign(unit.style, { fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.08em", color: "#5F2614", background: "#FBF1EC", border: "1px solid #F6DDD0", padding: "4px 8px", borderRadius: "9999px", flexShrink: "0" });
        topRow.append(title, unit);
        const priceRow = document.createElement("div");
        Object.assign(priceRow.style, { display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "12px" });
        const price = document.createElement("div");
        price.textContent = fmt(t[billing]);
        Object.assign(price.style, { fontSize: "22px", fontWeight: "900" });
        const note = document.createElement("div");
        note.textContent = billing === "monthly" ? t.unit : "bulk for 12";
        Object.assign(note.style, { fontSize: "11px", color: sub });
        priceRow.append(price, note);
        const list = document.createElement("ul");
        Object.assign(list.style, { margin: "0", padding: "0", listStyle: "none", color: "#3a352d", fontSize: "12px" });
        t.features.forEach((f) => {
          const li = document.createElement("li");
          Object.assign(li.style, { marginBottom: "6px", display: "flex", gap: "8px" });
          const dot = document.createElement("span");
          Object.assign(dot.style, { width: "6px", height: "6px", borderRadius: "50%", background: brand, marginTop: "6px", flex: "0 0 auto" });
          const txt = document.createElement("span");
          txt.textContent = f;
          li.append(dot, txt);
          list.appendChild(li);
        });
        card.append(topRow, priceRow, list);
        grid.appendChild(card);
      });
      section.appendChild(grid);
      root.appendChild(section);
    };

    makeSection("Core Services", tiers.filter((t) => t.group === "Core Services"));
    makeSection("Add-ons & Post", tiers.filter((t) => t.group === "Add-ons & Post"));

    document.body.appendChild(root);
    const canvas = await html2canvas(root, { scale: window.devicePixelRatio > 1 ? 2 : 1.6, useCORS: true, backgroundColor: "#F5F2EC", windowWidth: pageWidthPx, windowHeight: root.scrollHeight });
    document.body.removeChild(root);

    const pdf = new jsPDF("p", "mm", "a4");
    const imgData = canvas.toDataURL("image/png");
    const pdfW = pdf.internal.pageSize.getWidth();
    const pdfH = pdf.internal.pageSize.getHeight();
    const imgW = pdfW;
    const imgH = (canvas.height * imgW) / canvas.width;
    let heightLeft = imgH;
    let position = 0;
    let pages = 1;
    pdf.addImage(imgData, "PNG", 0, position, imgW, imgH, undefined, "FAST");
    heightLeft -= pdfH;
    while (heightLeft > 0) {
      position = heightLeft - imgH;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgW, imgH, undefined, "FAST");
      heightLeft -= pdfH;
      pages++;
    }
    pdf.setFontSize(9);
    pdf.setTextColor(120);
    for (let i = 1; i <= pages; i++) {
      pdf.setPage(i);
      pdf.text(`${i} / ${pages}`, pdfW - 10, pdfH - 6, { align: "right" });
    }
    const now2 = new Date();
    pdf.save(`Studio-HR-Soundroom_Pricing_${now2.getFullYear()}-${String(now2.getMonth() + 1).padStart(2, "0")}-${String(now2.getDate()).padStart(2, "0")}.pdf`);
  };

  const groups = ["Core Services", "Add-ons & Post"] as const;

  return (
    <main>
      {/* HERO */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-40 -top-20 h-[28rem] w-[28rem] rounded-full bg-rust-200/40 blur-[120px]" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 md:pt-24">
          <span className="kicker">Transparent rates</span>
          <h1 className="display mt-6 text-6xl md:text-8xl text-ink">
            Simple, scalable <span className="text-rust-500">pricing.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted leading-relaxed">
            Indicative starting rates in INR. Volume slates and ongoing partnerships are quoted
            with bulk pricing — tell us your scope for an exact estimate.
          </p>
        </div>
      </section>

      <Section title="Rate card" kicker="Pricing">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex rounded-full border border-ink/15 p-1">
            <button
              onClick={() => setBilling("monthly")}
              className={"rounded-full px-5 py-2 text-sm transition " + (billing === "monthly" ? "bg-ink text-paper" : "text-muted hover:text-ink")}
            >
              Per unit
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={"rounded-full px-5 py-2 text-sm transition " + (billing === "yearly" ? "bg-ink text-paper" : "text-muted hover:text-ink")}
            >
              Bulk (12× discount)
            </button>
          </div>
          <button
            onClick={handleExportPDF}
            className="no-export inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 text-sm transition hover:bg-ink hover:text-paper"
          >
            <TbDownload /> Export PDF
          </button>
        </div>

        <div ref={captureRef} className="space-y-14">
          {groups.map((g) => (
            <div key={g}>
              <div className="mb-6 flex items-baseline gap-4 border-t border-ink/10 pt-5">
                <span className="kicker">{g}</span>
              </div>
              <div className="grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 md:grid-cols-2 xl:grid-cols-3">
                {tiers.filter((t) => t.group === g).map((t) => (
                  <div key={t.name} className="flex flex-col bg-paper p-7">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl text-ink">{t.name}</h3>
                      <span className="shrink-0 rounded-full bg-rust-50 px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.14em] text-rust-700">
                        {t.unit}
                      </span>
                    </div>
                    <div className="mt-5">
                      <div className="font-display text-4xl text-ink">{fmt(t[billing])}</div>
                      <div className="mt-1 text-sm text-muted">{billing === "monthly" ? t.unit : "bulk for 12"}</div>
                    </div>
                    <ul className="mt-5 space-y-2 text-sm text-muted">
                      {t.features.map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-rust-500" /> {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="/contact"
                      className="no-export mt-7 inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm text-paper transition hover:bg-rust-500"
                    >
                      Request a quote
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
