"use client";
import React, { useEffect, PropsWithChildren } from "react";

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "light") {
      document.documentElement.setAttribute("data-theme", stored);
    }
  }, []);
  return <>{children}</>;
};

export default ThemeProvider;
