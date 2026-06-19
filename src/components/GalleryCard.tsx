"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Artwork } from "@/types";

interface GalleryCardProps {
  artwork: Artwork;
}

export function GalleryCard({ artwork }: GalleryCardProps) {
  return (
    <motion.article
      layout
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_24px_90px_rgba(22,20,18,0.05)] transition duration-300 hover:border-black/10 dark:border-white/10 dark:bg-zinc-950"
    >
      <Link href={`/artworks/${artwork.slug}`} className="block overflow-hidden">
        <Image
          src={artwork.image}
          alt={artwork.title}
          width={800}
          height={900}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
          priority={false}
        />
      </Link>
      <div className="space-y-3 p-6">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-amber-900 dark:text-amber-300">
          <span>{artwork.category}</span>
          <span>{artwork.year}</span>
        </div>
        <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">{artwork.title}</h3>
        <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">{artwork.description}</p>
        <div className="flex flex-wrap gap-2 pt-2 text-xs text-zinc-500 dark:text-zinc-400">
          {artwork.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-zinc-200 px-3 py-1">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
