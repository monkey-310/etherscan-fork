"use client";

import React, { createContext, useEffect, useState } from "react";
import { ThemeContextType } from "./lib/definition";

export const ThemeConext = createContext<ThemeContextType | null>(null);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    let temp = localStorage.getItem("theme");
    if (!temp) {
      document.documentElement.className = "light";
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.className = temp;
      setTheme(temp);
    }
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.className = theme;
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <ThemeConext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeConext.Provider>
  );
}
