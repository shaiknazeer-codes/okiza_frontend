"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "dark",
  setTheme: () => {},
  toggleTheme: () => {},
  mounted: false,
});

function applyThemeToDocument(t) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (t === "light") {
    root.classList.remove("dark");
    root.classList.add("light");
    root.setAttribute("data-theme", "light");
    root.style.colorScheme = "light";
  } else {
    root.classList.remove("light");
    root.classList.add("dark");
    root.setAttribute("data-theme", "dark");
    root.style.colorScheme = "dark";
  }
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("okiza-theme");
      if (savedTheme === "light" || savedTheme === "dark") {
        applyThemeToDocument(savedTheme);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTheme(savedTheme);
      }
    } catch (e) {}
    setMounted(true);
  }, []);

  const updateTheme = (newTheme) => {
    setTheme(newTheme);
    try {
      localStorage.setItem("okiza-theme", newTheme);
    } catch (e) {}
    applyThemeToDocument(newTheme);
  };

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    updateTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: updateTheme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
