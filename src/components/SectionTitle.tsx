"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
      <p className="text-sm uppercase tracking-[0.3em] text-amber-900 dark:text-amber-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
