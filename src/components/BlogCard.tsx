"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { BlogPost } from "@/types";
import { formatDate } from "@/utils/helpers";

interface BlogCardProps {
  blog: BlogPost;
}

export function BlogCard({ blog }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_28px_72px_rgba(22,20,18,0.08)] transition hover:-translate-y-1 dark:border-white/10 dark:bg-zinc-950"
    >
      <Link href={`/blog/${blog.slug}`} className="block overflow-hidden">
        <Image src={blog.image} alt={blog.title} width={720} height={320} className="h-56 w-full object-cover transition duration-500 hover:scale-105" />
      </Link>
      <div className="p-6">
        <div className="mb-3 text-sm uppercase tracking-[0.3em] text-amber-900 dark:text-amber-300">{blog.category}</div>
        <Link href={`/blog/${blog.slug}`}>
          <h3 className="text-2xl font-semibold text-zinc-950 dark:text-white">{blog.title}</h3>
        </Link>
        <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{blog.content}</p>
        <div className="mt-5 flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400">
          <span>{formatDate(blog.date)}</span>
          <span>{blog.tags.join(", ")}</span>
        </div>
      </div>
    </motion.article>
  );
}
