"use client";
import React, { useEffect, PropsWithChildren } from "react";

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      document.documentElement.classList.add("dark");
    } else if (stored === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return <>{children}</>;
};

export default ThemeProvider;
