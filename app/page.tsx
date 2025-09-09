import CarouselAdvanced from "@/components/carousel-advanced";
import Section from "@/components/ui/section";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm uppercase tracking-wider text-black/60">Welcome to</p>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              <span className="gradient-text">Studio HR</span><br/>
              Where sound meets soul.
            </h1>
            <p className="mt-4 text-black/70 max-w-prose">
              Recording, mixing, mastering, and full-scale music production — crafted with taste and technical finesse.
              We obsess over detail so your art feels timeless.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <Link href="/pricing" className="px-5 py-3 rounded-full bg-ink text-white text-sm hover:opacity-90">View Pricing</Link>
              <Link href="/work" className="px-5 py-3 rounded-full border border-black/10 text-sm hover:bg-black/5">See Our Work</Link>
            </div>
          </div>
          {/* <div>
            <CarouselAdvanced />
          </div> */}
        </div>
      </section>

      <Section title="Signature Services" kicker="What we do">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Recording", desc: "Capture performances with pristine clarity and depth." },
            { title: "Mixing & Mastering", desc: "Balanced, punchy, and ready for release." },
            { title: "Production", desc: "From songwriting to arrangement and sound design." },
          ].map((s) => (
            <div key={s.title} className="rounded-2xl p-6 bg-white shadow-soft border border-black/5">
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="text-black/70 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
