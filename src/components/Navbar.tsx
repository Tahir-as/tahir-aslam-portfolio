"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { CloseIcon, DownloadIcon, MenuIcon } from "./Icons";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/85">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <a
          href="#top"
          className="inline-flex items-center gap-2.5 rounded-md py-1 text-sm font-semibold tracking-tight text-slate-950 transition-colors hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:text-slate-50 dark:hover:text-blue-400 dark:focus-visible:outline-blue-400"
        >
          <Image
            src="/brand-mark.svg"
            alt={portfolioData.profile.logoAlt}
            width={32}
            height={32}
            priority
            className="h-8 w-8 rounded-lg"
          />
          <span>{portfolioData.profile.name}</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 md:flex">
          <ul className="flex items-center gap-1">
            {portfolioData.navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white dark:focus-visible:outline-blue-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-3 flex items-center gap-2 border-l border-slate-200 pl-3 dark:border-slate-800">
            <a
              href={portfolioData.profile.resumePath}
              download
              className="inline-flex h-10 items-center gap-2 rounded-lg bg-blue-600 px-3.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:focus-visible:outline-blue-400"
            >
              <DownloadIcon className="h-4 w-4" />
              <span>Resume</span>
            </a>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-colors hover:border-blue-500/50 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-blue-400/50 dark:hover:text-blue-400 dark:focus-visible:outline-blue-400"
          >
            {mobileOpen ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white px-4 pb-5 pt-3 dark:border-slate-800 dark:bg-slate-950 md:hidden"
        >
          <ul className="space-y-1">
            {portfolioData.navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-white dark:focus-visible:outline-blue-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-4 border-t border-slate-200 pt-4 dark:border-slate-800">
            <a
              href={portfolioData.profile.resumePath}
              download
              onClick={() => setMobileOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:focus-visible:outline-blue-400"
            >
              <DownloadIcon className="h-4 w-4" />
              <span>{portfolioData.profile.resumeLabel}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
