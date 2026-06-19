"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_24px_80px_rgba(22,20,18,0.06)] dark:border-white/10 dark:bg-zinc-950"
    >
      <div className="flex items-center gap-4 pb-5">
        <div className="h-16 w-16 rounded-full bg-[#ebd4bc]" />
        <div>
          <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">{testimonial.name}</h3>
          <div className="mt-2 flex items-center gap-1 text-amber-900 dark:text-amber-300">
            {Array.from({ length: testimonial.rating }).map((_, idx) => (
              <Star key={idx} className="h-4 w-4" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-300">“{testimonial.review}”</p>
    </motion.article>
  );
}
