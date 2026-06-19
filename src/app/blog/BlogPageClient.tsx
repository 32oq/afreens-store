"use client";

import { useMemo, useState } from "react";
import { BlogCard } from "@/components/BlogCard";
import { FilterDropdown } from "@/components/FilterDropdown";
import { Pagination } from "@/components/Pagination";
import { SearchBar } from "@/components/SearchBar";
import { SectionTitle } from "@/components/SectionTitle";
import { blogs } from "@/utils/data";
import { paginate } from "@/utils/helpers";

const pageSize = 6;

export default function BlogPageClient() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  const categories = ["All", ...Array.from(new Set(blogs.map((item) => item.category)))];

  const filtered = useMemo(() => {
    const lowerQuery = query.toLowerCase();
    return blogs.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesSearch =
        post.title.toLowerCase().includes(lowerQuery) ||
        post.content.toLowerCase().includes(lowerQuery) ||
        post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery));
      return matchesCategory && matchesSearch;
    });
  }, [category, query]);

  const currentItems = paginate(filtered, page, pageSize);

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
      <SectionTitle
        eyebrow="Journal"
        title="Stories & calligraphy insight"
        description="Browse articles about bespoke lettering, luxury stationery, and creative process."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-4">
          <SearchBar value={query} onChange={(value) => { setQuery(value); setPage(1); }} placeholder="Search blog posts" />
          <FilterDropdown label="Category" options={categories} value={category} onChange={(value) => { setCategory(value); setPage(1); }} />
        </div>
        <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_24px_80px_rgba(22,20,18,0.05)] dark:border-white/10 dark:bg-zinc-950">
          <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">Blog details</h2>
          <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
            Discover stories that highlight Afreen’s craft, source inspiration for your event, and learn how luxurious calligraphy can elevate every detail.
          </p>
          <div className="mt-6 rounded-3xl bg-amber-50 p-4 text-sm text-amber-900 dark:bg-amber-950/20 dark:text-amber-200">
            {filtered.length} articles found.
          </div>
        </div>
      </div>
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {currentItems.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Pagination page={page} pageSize={pageSize} total={filtered.length} onPageChange={(newPage) => setPage(newPage)} />
      </div>
    </div>
  );
}
