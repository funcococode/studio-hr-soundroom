import { ReactNode } from "react";

export default function Section({
  title,
  kicker,
  index,
  children,
  id,
  className = "",
}: {
  title?: string;
  kicker?: string;
  index?: string;
  children: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-6 py-20 md:py-28 ${className}`}>
      {(title || kicker) && (
        <div className="mb-12 md:mb-16 flex flex-col gap-5 border-t border-ink/10 pt-7">
          <div className="flex items-baseline justify-between gap-6">
            {kicker && <span className="kicker">{kicker}</span>}
            {index && (
              <span className="kicker tabular-nums">{index}</span>
            )}
          </div>
          {title && (
            <h2 className="display text-4xl md:text-6xl max-w-4xl text-ink">
              {title}
            </h2>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
