"use client";

import { useCallback } from "react";
import { MoonIcon, SunIcon } from "./Icons";

export function ThemeToggle() {
  const toggleTheme = useCallback(() => {
    const root = document.documentElement;
    const isCurrentlyDark = root.classList.contains("dark");
    const nextTheme = isCurrentlyDark ? "light" : "dark";

    root.classList.toggle("dark", nextTheme === "dark");
    try {
      window.localStorage.setItem("theme", nextTheme);
    } catch {
      // Ignore storage errors in restricted browsing contexts.
    }
  }, []);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      title="Switch between dark and light mode"
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-colors hover:border-blue-500/50 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-400/50 dark:hover:text-blue-400 dark:focus-visible:outline-blue-400"
    >
      <SunIcon className="hidden h-4 w-4 dark:block" />
      <MoonIcon className="block h-4 w-4 dark:hidden" />
    </button>
  );
}
