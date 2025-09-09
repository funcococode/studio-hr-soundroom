"use client";

import Section from "@/components/ui/section";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:hello@yourstudio.com?subject=Inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\nFrom: " + name + " (" + email + ")")}`;
  };

  return (
    <main className="">
      <Section title="Contact" kicker="Say hello">
        <form onSubmit={submit} className="grid md:grid-cols-2 gap-6 max-w-3xl">
          <input
            className="rounded-xl border border-black/10 px-4 py-3 bg-white"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            className="rounded-xl border border-black/10 px-4 py-3 bg-white"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            className="md:col-span-2 rounded-xl border border-black/10 px-4 py-3 bg-white min-h-[160px]"
            placeholder="Tell us about your project…"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button className="md:col-span-2 rounded-full bg-ink text-white px-6 py-3 text-sm hover:opacity-90">
            Send email
          </button>
        </form>
      </Section>
    </main>
  );
}
