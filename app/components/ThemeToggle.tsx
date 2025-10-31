"use client";

import { useEffect, useState } from "react";
import { MoonFilled, SunFilled } from "@ant-design/icons";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window !== "undefined") {
    const htmlTheme = document.documentElement.getAttribute("data-theme");
    if (htmlTheme === "dark" || htmlTheme === "light") {
      return htmlTheme;
    }
  }
  return "light";
}

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    setMounted(true);
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
    document.documentElement.setAttribute("data-theme", next);
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
