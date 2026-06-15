"use client";

import { useState } from "react";
import { TbArrowUpRight, TbMail, TbPhone, TbMapPin, TbDownload } from "react-icons/tb";
import { EMAIL, PHONE_NUMBER, LOCATION, COMPANY_PROFILE_PDF } from "@/constants";

const PROJECT_TYPES = ["Audio Story", "Audiobook", "Podcast", "Sound Design", "Mixing & Mastering", "Music", "Other"];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState(PROJECT_TYPES[0]);
  const [message, setMessage] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Project type: ${type}\n\n${message}\n\nFrom: ${name} (${email})`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `New project inquiry — ${type}`
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main>
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-40 -top-20 h-[28rem] w-[28rem] rounded-full bg-rust-200/40 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 md:pt-24">
          <span className="kicker">Start a project</span>
          <h1 className="display mt-6 text-6xl md:text-8xl text-ink">
            Let&apos;s make
            <br />
            <span className="text-rust-500">something.</span>
          </h1>

          <div className="mt-16 grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">
            <form onSubmit={submit} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="text-sm text-muted">Your name</span>
                  <input
                    className="rounded-2xl border border-ink/15 bg-paper px-4 py-3.5 outline-none transition focus:border-ink"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm text-muted">Email</span>
                  <input
                    type="email"
                    className="rounded-2xl border border-ink/15 bg-paper px-4 py-3.5 outline-none transition focus:border-ink"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-sm text-muted">Project type</span>
                <div className="flex flex-wrap gap-2">
                  {PROJECT_TYPES.map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setType(t)}
                      className={
                        "rounded-full border px-4 py-2 text-sm transition " +
                        (type === t
                          ? "border-ink bg-ink text-paper"
                          : "border-ink/15 text-muted hover:border-ink/40 hover:text-ink")
                      }
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <label className="flex flex-col gap-2">
                <span className="text-sm text-muted">Tell us about the project — scope, volume, timeline</span>
                <textarea
                  className="min-h-[180px] rounded-2xl border border-ink/15 bg-paper px-4 py-3.5 outline-none transition focus:border-ink"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </label>

              <button className="group inline-flex w-fit items-center gap-2 rounded-full bg-ink px-8 py-4 text-paper transition hover:bg-rust-500">
                Send inquiry
                <TbArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>

            <aside className="flex flex-col gap-6">
              <div className="rounded-3xl border border-ink/10 bg-paper2/40 p-8">
                <div className="kicker">Direct</div>
                <ul className="mt-5 space-y-4">
                  <li>
                    <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-ink hover:text-rust-500">
                      <TbMail className="h-5 w-5 text-rust-500" /> {EMAIL}
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-3 text-ink hover:text-rust-500">
                      <TbPhone className="h-5 w-5 text-rust-500" /> {PHONE_NUMBER}
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-muted">
                    <TbMapPin className="h-5 w-5 text-rust-500" /> {LOCATION}
                  </li>
                </ul>
              </div>

              <a
                href={COMPANY_PROFILE_PDF}
                download
                className="group flex items-center justify-between rounded-3xl bg-ink p-8 text-paper transition hover:bg-rust-500"
              >
                <div>
                  <div className="font-display text-2xl">Company Profile</div>
                  <div className="mt-1 text-sm text-paper/60">Full overview · PDF</div>
                </div>
                <TbDownload className="h-6 w-6" />
              </a>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
