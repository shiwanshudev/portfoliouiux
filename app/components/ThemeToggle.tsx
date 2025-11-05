"use client";
import { useEffect, useState } from "react";
import { MoonFilled, SunFilled } from "@ant-design/icons";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // Sync with localStorage and html[data-theme]
  useEffect(() => {
    setMounted(true);
    // Get theme from dom or localStorage
    const htmlTheme = document.documentElement.getAttribute("data-theme");
    const stored = localStorage.getItem("theme") as Theme | null;
    let initial: Theme = "light";
    if (stored === "dark" || stored === "light") {
      initial = stored;
    } else if (htmlTheme === "dark" || htmlTheme === "light") {
      initial = htmlTheme;
    }
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
    localStorage.setItem("theme", initial);
  }, []);

  const applyTheme = (next: Theme) => {
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setTheme(next);
  };

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    applyTheme(next);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="inline-flex cursor-pointer items-center gap-2 rounded-full border soft-border px-3 py-2 text-xs transition-colors hover-tint"
    >
      {theme === "dark" ? (
        <SunFilled style={{ fontSize: 16 }} />
      ) : (
        <MoonFilled style={{ fontSize: 16 }} />
      )}
      <span className="hidden md:inline">
        {theme === "dark" ? "Light" : "Dark"}
      </span>
    </button>
  );
}
