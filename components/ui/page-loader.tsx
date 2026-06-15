import Logo from "@/components/ui/logo";

// Static, deterministic bar heights for the equalizer loader
const BARS = [0.5, 0.85, 0.4, 1, 0.65, 0.9, 0.45];

export default function PageLoader() {
  return (
    <div className="flex flex-col items-center gap-7">
      <div className="flex items-center gap-3">
        <Logo className="h-6 text-rust-400" />
        <span className="font-display text-2xl md:text-3xl tracking-tight text-paper">
          Studio HR Soundroom
        </span>
      </div>

      {/* Equalizer */}
      <div className="flex h-10 items-end gap-[5px]">
        {BARS.map((h, i) => (
          <span
            key={i}
            className="w-[5px] origin-bottom rounded-full bg-rust-400 animate-eq"
            style={{
              height: `${h * 100}%`,
              animationDelay: `${i * 0.11}s`,
              animationDuration: "0.95s",
            }}
          />
        ))}
      </div>

      <span className="text-[0.62rem] uppercase tracking-[0.4em] text-paper/40">
        Loading
      </span>
    </div>
  );
}
