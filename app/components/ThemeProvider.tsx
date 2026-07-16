"use client";
import React, { useEffect, PropsWithChildren } from "react";

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      document.documentElement.classList.add("dark");
    }
  }, []);
  return <>{children}</>;
};

export default ThemeProvider;
