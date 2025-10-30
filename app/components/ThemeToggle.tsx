"use client";

import { useEffect, useState } from "react";
import { MoonFilled, SunFilled } from "@ant-design/icons";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setMounted(true);
    // Always start with light theme if none set
    const stored = localStorage.getItem("theme") as Theme | null;
    if (!stored) {
      applyTheme("light");
      setTheme("light");
    } else {
      applyTheme(stored);
      setTheme(stored);
    }
  }, []);

  const applyTheme = (next: Theme) => {
    const root = document.documentElement;
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="inline-flex cursor-pointer items-center gap-2 rounded-full border soft-border px-3 py-1 text-xs transition-colors hover-tint"
    >
      {theme === "dark" ? (
        <SunFilled style={{ fontSize: 14 }} />
      ) : (
        <MoonFilled style={{ fontSize: 14 }} />
      )}
      <span className="hidden md:inline">
        {theme === "dark" ? "Light" : "Dark"}
      </span>
    </button>
  );
}
