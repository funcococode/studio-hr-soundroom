"use client";

import { useEffect, useState } from "react";
import { TbSun, TbMoon } from "react-icons/tb";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
      className={
        "relative grid h-9 w-9 place-items-center rounded-full border border-ink/15 text-ink transition hover:border-ink/40 hover:bg-ink/5 " +
        className
      }
    >
      <TbSun
        className={
          "absolute h-[18px] w-[18px] transition-all duration-300 " +
          (mounted && dark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0")
        }
      />
      <TbMoon
        className={
          "absolute h-[18px] w-[18px] transition-all duration-300 " +
          (mounted && dark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100")
        }
      />
    </button>
  );
}
