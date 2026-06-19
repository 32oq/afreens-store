import { cn } from "@/utils/helpers";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "ghost";
  children: ReactNode;
}

export function Button({ variant = "solid", children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-transparent px-6 py-3 text-sm font-semibold transition-all duration-300",
        variant === "solid"
          ? "bg-black text-white hover:bg-zinc-900"
          : "bg-white/90 text-black shadow-sm hover:bg-white dark:bg-zinc-900/90 dark:text-white dark:hover:bg-zinc-800",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
