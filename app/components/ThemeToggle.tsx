"use client";

import { useEffect, useState } from "react";
import { MoonFilled, SunFilled } from "@ant-design/icons";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    // Initialize theme from localStorage
    const stored = localStorage.getItem("theme");
    const initialTheme = stored === "dark" ? "dark" : "light";
    
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
    
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    
    // Add/remove dark class for Tailwind
    if (next === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    localStorage.setItem("theme", next);
  };

  // Prevent flash by not rendering until theme is loaded
  if (theme === null) {
    return (
      <button
        disabled
        aria-label="Toggle dark mode"
        className="inline-flex cursor-pointer items-center gap-2 rounded-full border soft-border px-3 py-2 text-xs transition-colors hover-tint opacity-0"
      >
        <MoonFilled style={{ fontSize: 16 }} />
      </button>
    );
  }

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
