export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-end gap-[3px] ${className}`} aria-hidden>
      {[0.5, 0.85, 0.35, 1, 0.6].map((h, i) => (
        <span
          key={i}
          className="block w-[3px] origin-bottom rounded-full bg-current"
          style={{ height: `${h * 18}px` }}
        />
      ))}
    </span>
  );
}
