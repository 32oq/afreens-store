"use client";

import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, mounted, toggleTheme } = useTheme();

  if (!mounted) {
    return <div className="h-10 w-10 rounded-full bg-zinc-200 dark:bg-zinc-800" />;
  }

  return (
    <button
      aria-label="Toggle theme"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-sm transition hover:bg-zinc-100 dark:border-white/10 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-800"
      onClick={toggleTheme}
    >
      {theme === "dark" ? <SunMedium className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
