"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    // Read whatever the inline script in layout.tsx already applied
    const current =
      document.documentElement.getAttribute("data-theme") || "dark";
    setTheme(current);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);

    if (next === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", next);
  };

  if (theme === null) {
    return (
      <button
        disabled
        aria-label="Toggle dark mode"
        className="inline-flex cursor-pointer items-center gap-2 rounded-full border soft-border px-3 py-2 text-xs transition-colors hover-tint opacity-0"
      >
        <Moon size={16} />
      </button>
    );
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="inline-flex cursor-pointer items-center gap-2 rounded-full border soft-border px-3 py-2 text-xs transition-colors hover-tint"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      <span className="hidden md:inline">
        {theme === "dark" ? "Light" : "Dark"}
      </span>
    </button>
  );
}
