"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_30px_50px_rgba(22,20,18,0.08)] transition hover:-translate-y-1 dark:border-white/10 dark:bg-zinc-950"
    >
      <div className="mb-6 overflow-hidden rounded-[1.75rem] bg-zinc-100 dark:bg-zinc-900">
        <Image src={service.image} alt={service.title} width={720} height={360} className="h-48 w-full object-cover" />
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm uppercase tracking-[0.3em] text-amber-900 dark:text-amber-300">
          <span>{service.title}</span>
          <span>{service.price}</span>
        </div>
        <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-300">{service.description}</p>
        <div className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
          {service.features.map((feature) => (
            <div key={feature} className="flex items-center gap-3">
              <span className="block h-2 w-2 rounded-full bg-amber-900 dark:bg-amber-300" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
