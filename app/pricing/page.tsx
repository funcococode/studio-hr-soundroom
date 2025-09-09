"use client";

import Section from "@/components/ui/section";
import { useRef, useState } from "react";

const tiers = [
  { name: "Recording", unit: "per hour", monthly: 1000, yearly: 1000 * 12 * 0.85, features: ["Vocal booth", "High-end preamps", "On-session engineer"] },
  { name: "Mixing", unit: "per track", monthly: 10000, yearly: 10000 * 12 * 0.9, features: ["Hybrid analog/digital", "2 revisions included", "Stem delivery"] },
  { name: "Mastering", unit: "per track", monthly: 5000, yearly: 5000 * 12 * 0.9, features: ["Streaming optimized", "DDP on request", "1 revision included"] },
  { name: "Full Production", unit: "per song", monthly: 25000, yearly: 25000 * 12 * 0.85, features: ["Arrangement & sound design", "Mix & master included"] },
  // ── Add-ons & Post ─────────────────────────────────────────────────────────
  { name: "Voice-over Recording", unit: "per hour", monthly: 1000, yearly: 1000 * 12 * 0.9, features: ["Isolated booth", "Direction & multiple takes", "Raw, mix delivery"] },
  { name: "Voice-over Editing & Cleanup", unit: "per finished minute", monthly: 600, yearly: 600 * 12 * 0.9, features: ["De-breath/de-click/de-noise", "EQ/leveling", "WAV + MP3 exports"] },
  { name: "Podcast Production", unit: "per episode", monthly: 8000, yearly: 8000 * 12 * 0.9, features: ["Edit & cleanup", "Mix & loudness for speech", "Intro/outro & music beds"] },
  { name: "ADR / Dubbing", unit: "per hour", monthly: 2500, yearly: 2500 * 12 * 0.9, features: ["Sync-to-picture", "Cue sheets", "Engineer-assisted sessions"] },
  { name: "Sound Design (Film/Ads)", unit: "per finished minute", monthly: 2500, yearly: 2500 * 12 * 0.9, features: ["Custom SFX", "Transitions & textures", "Stems delivery"] },
  { name: "Audio Restoration", unit: "per track", monthly: 2500, yearly: 2500 * 12 * 0.9, features: ["Noise reduction", "Click/pop repair", "Spectral cleanup"] },
  { name: "Vocal Tuning & Comping", unit: "per track", monthly: 2000, yearly: 2000 * 12 * 0.9, features: ["Transparent tuning", "Timing alignment", "Final comp deliverable"] },
  { name: "Session Musician", unit: "per session", monthly: 5000, yearly: 5000 * 12 * 0.85, features: ["Guitar/Bass/Keys/Vox", "Up to 2 takes", "Remote or in-studio"] },
  { name: "Custom Beat Production", unit: "per song", monthly: 12000, yearly: 12000 * 12 * 0.85, features: ["Original composition", "Stems included", "1 revision round"] },
  { name: "Jingle / Ad Music (30s)", unit: "per 30 sec", monthly: 15000, yearly: 15000 * 12 * 0.85, features: ["Brief → concept → delivery", "Mixed & mastered", "License-ready"] },
  { name: "Background Score", unit: "per finished minute", monthly: 6000, yearly: 6000 * 12 * 0.85, features: ["Themes & motifs", "Hybrid orchestration", "Stems + mix"] },
  { name: "Stereo Mix for Film/OTT", unit: "per finished minute", monthly: 3500, yearly: 3500 * 12 * 0.9, features: ["Dialog/Music/FX balance", "Loudness compliance", "Spec deliverables"] },
  { name: "Stem Mastering", unit: "per track", monthly: 4500, yearly: 4500 * 12 * 0.9, features: ["Up to 6 stems", "1 revision included", "Streaming optimized"] },
  { name: "Immersive / Atmos Mix", unit: "per track", monthly: 15000, yearly: 15000 * 12 * 0.85, features: ["Binaural + ADM/BWF", "Bed + object mix", "QC & fold-downs"] },
  { name: "On-location Recording", unit: "per day", monthly: 18000, yearly: 18000 * 12 * 0.85, features: ["Mobile rig & engineer", "Setup/tear-down", "Multitrack capture"] },
  { name: "Consultation / Strategy", unit: "per hour", monthly: 1500, yearly: 1500 * 12 * 0.9, features: ["Arrangement feedback", "Release planning", "Distribution advice"] },
  { name: "DJ Mixdown", unit: "per mix", monthly: 4000, yearly: 4000 * 12 * 0.9, features: ["Level matching", "EQ & limiting", "Club-ready WAV"] },
];

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  // We'll capture *everything inside Section*, excluding the Export button.
  const captureRef = useRef<HTMLDivElement | null>(null);

  // const handleExportPDF = async () => {
  //   const el = captureRef.current;
  //   if (!el) return;

  //   const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
  //     import("html2canvas"),
  //     import("jspdf"),
  //   ]);

  //   // Ensure a white background for dark modes
  //   el.classList.add("bg-white");

  //   const canvas = await html2canvas(el, {
  //     scale: window.devicePixelRatio > 1 ? 2 : 1.5,
  //     useCORS: true,
  //     backgroundColor: "#ffffff",
  //     windowWidth: el.scrollWidth,
  //     windowHeight: el.scrollHeight,
  //     // Ignore any element you don't want in the PDF
  //     ignoreElements: (node) =>
  //       (node as HTMLElement)?.classList?.contains("no-export") ?? false,
  //   });

  //   const imgData = canvas.toDataURL("image/png");
  //   const pdf = new jsPDF("p", "mm", "a4");
  //   const pdfW = pdf.internal.pageSize.getWidth();
  //   const pdfH = pdf.internal.pageSize.getHeight();
  //   const imgW = pdfW;
  //   const imgH = (canvas.height * imgW) / canvas.width;

  //   let heightLeft = imgH;
  //   let position = 0;

  //   // First page
  //   pdf.addImage(imgData, "PNG", 0, position, imgW, imgH, undefined, "FAST");
  //   heightLeft -= pdfH;

  //   // Additional pages
  //   while (heightLeft > 0) {
  //     position = heightLeft - imgH;
  //     pdf.addPage();
  //     pdf.addImage(imgData, "PNG", 0, position, imgW, imgH, undefined, "FAST");
  //     heightLeft -= pdfH;
  //   }

  //   const now = new Date();
  //   const fileName = `Studio-HR-Soundroom_Pricing_${now.getFullYear()}-${String(
  //     now.getMonth() + 1
  //   ).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}.pdf`;

  //   pdf.save(fileName);

  //   el.classList.remove("bg-white");
  // };
  
 const handleExportPDF = async () => {
  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
    import("html2canvas"),
    import("jspdf"),
  ]);

  // ——— Design tokens ———
  const brand = "#fb923c";             // Studio HR orange
  const ink = "#0f172a";               // slate-900-ish text
  const sub = "#64748b";               // slate-500-ish
  const hair = "#e5e7eb";              // neutral divider
  const cardBorder = "#eef2f7";
  const pageWidthPx = 1240;            // high-res working width
  const pad = 48;                      // page padding in px
  const cols = 3;                      // grid columns

  // ——— Offscreen, PDF-only container ———
  const root = document.createElement("div");
  Object.assign(root.style, {
    position: "fixed",
    left: "-10000px",
    top: "0",
    width: `${pageWidthPx}px`,
    boxSizing: "border-box",
    padding: `${pad}px`,
    background: "#ffffff",
    color: ink,
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans"',
    lineHeight: "1.55",
  });

  // Global accent bar
  const accentBar = document.createElement("div");
  Object.assign(accentBar.style, {
    height: "4px",
    background: brand,
    borderRadius: "9999px",
    marginBottom: "20px",
  });
  root.appendChild(accentBar);

  // Header
  const header = document.createElement("div");
  Object.assign(header.style, {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    marginBottom: "18px",
  });

  const logo = document.createElement("div");
  logo.textContent = "Studio HR Soundroom";
  Object.assign(logo.style, {
    fontWeight: "900",
    fontSize: "34px",                 // larger logo text
    letterSpacing: "-0.015em",
  });

  const subtitle = document.createElement("div");
  subtitle.textContent = `Pricing — ${billing === "monthly" ? "Per unit" : "12× bulk (discount)"}`;
  Object.assign(subtitle.style, { fontSize: "12px", color: sub });

  // Meta row: date + INR label
  const meta = document.createElement("div");
  const now = new Date();
  const dateText = `${String(now.getDate()).padStart(2,"0")}-${String(now.getMonth()+1).padStart(2,"0")}-${now.getFullYear()}`;
  meta.textContent = `All prices in INR • Generated on ${dateText}`;
  Object.assign(meta.style, { fontSize: "11px", color: "#94a3b8" });

  const underline = document.createElement("div");
  Object.assign(underline.style, {
    height: "1px",
    background: hair,
    marginTop: "10px",
  });

  header.append(logo, subtitle, meta, underline);
  root.appendChild(header);

  // Section helper
  const makeSection = (titleText: string, items: typeof tiers) => {
    const section = document.createElement("section");
    Object.assign(section.style, { marginTop: "22px" });

    const h = document.createElement("div");
    h.textContent = titleText;
    Object.assign(h.style, {
      fontWeight: "800",
      fontSize: "14px",
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: "#1f2937",
      marginBottom: "12px",
    });
    section.appendChild(h);

    const grid = document.createElement("div");
    Object.assign(grid.style, {
      display: "grid",
      gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
      gap: "16px",
    });

    // INR formatter
    const fmt = (n: number) =>
      `₹${Intl.NumberFormat("en-IN").format(Math.round(n))}`;

    items.forEach((t) => {
      const card = document.createElement("div");
      Object.assign(card.style, {
        border: `1px solid ${cardBorder}`,
        borderRadius: "14px",
        padding: "16px",
        background: "#ffffff",
      });

      const topRow = document.createElement("div");
      Object.assign(topRow.style, {
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
        gap: "8px",
        marginBottom: "10px",
      });

      const title = document.createElement("div");
      title.textContent = t.name;
      Object.assign(title.style, {
        fontSize: "16px",
        fontWeight: "800",
        letterSpacing: "-0.01em",
      });

      const unit = document.createElement("span");
      unit.textContent = t.unit;
      Object.assign(unit.style, {
        fontSize: "10px",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color: "#475569",
        background: "#f8fafc",
        border: "1px solid #e2e8f0",
        padding: "4px 8px",
        borderRadius: "9999px",
        flexShrink: 0,
      });

      topRow.append(title, unit);

      const priceRow = document.createElement("div");
      Object.assign(priceRow.style, {
        display: "flex",
        alignItems: "baseline",
        gap: "10px",
        marginBottom: "12px",
        fontFeatureSettings: '"tnum" 1, "lnum" 1', // tabular/lining nums
      });

      const price = document.createElement("div");
      price.textContent = fmt(t[billing]);
      Object.assign(price.style, {
        fontSize: "22px",
        fontWeight: "900",
      });

      const note = document.createElement("div");
      note.textContent = billing === "monthly" ? t.unit : "bulk for 12";
      Object.assign(note.style, { fontSize: "11px", color: sub });

      priceRow.append(price, note);

      const list = document.createElement("ul");
      Object.assign(list.style, {
        margin: "0",
        padding: "0",
        listStyle: "none",
        color: "#374151",
        fontSize: "12px",
      });

      t.features.forEach((f) => {
        const li = document.createElement("li");
        Object.assign(li.style, {
          marginBottom: "6px",
          display: "flex",
          gap: "8px",
        });

        const dot = document.createElement("span");
        Object.assign(dot.style, {
          width: "6px",
          height: "6px",
          borderRadius: "50%",
          background: brand,
          marginTop: "6px",
          flex: "0 0 auto",
        });

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

  // Split into sections: first 4 = Core, rest = Add-ons
  makeSection("Core Services", tiers.slice(0, 4));
  makeSection("Add-ons & Post", tiers.slice(4));

  // Mount, capture, cleanup
  document.body.appendChild(root);

  const canvas = await html2canvas(root, {
    scale: window.devicePixelRatio > 1 ? 2 : 1.6,
    useCORS: true,
    backgroundColor: "#ffffff",
    windowWidth: pageWidthPx,
    windowHeight: root.scrollHeight,
  });

  document.body.removeChild(root);

  // Build multipage PDF with page numbers
  const pdf = new jsPDF("p", "mm", "a4");
  const imgData = canvas.toDataURL("image/png");
  const pdfW = pdf.internal.pageSize.getWidth();
  const pdfH = pdf.internal.pageSize.getHeight();
  const imgW = pdfW;
  const imgH = (canvas.height * imgW) / canvas.width;

  // Draw pages
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

  // Page numbers (bottom-right)
  pdf.setFontSize(9);
  pdf.setTextColor(120);
  for (let i = 1; i <= pages; i++) {
    pdf.setPage(i);
    pdf.text(`${i} / ${pages}`, pdfW - 10, pdfH - 6, { align: "right" });
  }

  const fileName = `Studio-HR-Soundroom_Pricing_${now.getFullYear()}-${String(
    now.getMonth() + 1
  ).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}.pdf`;
  pdf.save(fileName);
};




  return (
    <main>
      <Section title="Pricing" kicker="Simple, transparent">
        {/* Controls row */}
        <div className="mb-6 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setBilling("monthly")}
              className={
                "px-4 py-2 rounded-full border " +
                (billing === "monthly"
                  ? "bg-black text-white border-black"
                  : "border-black/10")
              }
            >
              Per unit
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={
                "px-4 py-2 rounded-full border " +
                (billing === "yearly"
                  ? "bg-black text-white border-black"
                  : "border-black/10")
              }
            >
              Bulk (12x with discount)
            </button>
          </div>

          {/* Export button (excluded from capture via .no-export) */}
          <button
            onClick={handleExportPDF}
            className="no-export rounded-full border border-black/10 px-4 py-2 text-sm hover:bg-black hover:text-white"
            aria-label="Export pricing as PDF"
            title="Export pricing as PDF"
          >
            Export PDF
          </button>
        </div>

        {/* Everything inside this wrapper will be exported */}
        <div ref={captureRef} className="space-y-6">

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {tiers.map((t) => (
              <div
                key={t.name}
                className="flex flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-soft"
              >
                <div className="mb-4">
                  <div className="text-sm uppercase tracking-wider text-black/60">
                    {t.unit}
                  </div>
                  <h3 className="text-xl font-semibold">{t.name}</h3>
                </div>
                <div className="mb-6">
                  <div className="text-3xl font-semibold">
                    ₹{Intl.NumberFormat("en-IN").format(Math.round(t[billing]))}
                  </div>
                  <div className="text-sm text-black/60">
                    {billing === "monthly" ? t.unit : "bulk for 12"}
                  </div>
                </div>
                <ul className="mb-6 space-y-2 text-sm text-black/70">
                  {t.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
                <button className="mt-auto rounded-full bg-ink px-5 py-3 text-sm text-white hover:opacity-90 no-export">
                  Book now
                </button>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
