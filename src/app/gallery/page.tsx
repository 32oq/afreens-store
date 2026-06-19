"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/Button";
import { FilterDropdown } from "@/components/FilterDropdown";
import { GalleryCard } from "@/components/GalleryCard";
import { Pagination } from "@/components/Pagination";
import { SearchBar } from "@/components/SearchBar";
import { SectionTitle } from "@/components/SectionTitle";
import { artworks, categories } from "@/utils/data";
import { paginate } from "@/utils/helpers";
import type { Artwork } from "@/types";

const pageSize = 6;

export default function GalleryPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const lowerQuery = query.toLowerCase();
    return artworks.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;
      const matchesSearch =
        item.title.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery) ||
        item.tags.some((tag) => tag.toLowerCase().includes(lowerQuery));
      return matchesCategory && matchesSearch;
    });
  }, [category, query]);

  const currentItems = paginate(filtered, page, pageSize);
  const categoriesOptions = ["All", ...categories.map((item) => item.name)];

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
      <SectionTitle eyebrow="Gallery" title="Explore all calligraphy works" description="Browse the full collection of bespoke pieces across categories, styles, and custom commissions." />
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-4">
          <SearchBar value={query} onChange={(value) => { setQuery(value); setPage(1); }} placeholder="Search by title, tag, or style" />
          <FilterDropdown label="Filter by category" options={categoriesOptions} value={category} onChange={(value) => { setCategory(value); setPage(1); }} />
        </div>
        <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_24px_80px_rgba(22,20,18,0.05)] dark:border-white/10 dark:bg-zinc-950">
          <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">Gallery insights</h2>
          <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
            Use search and filters to discover curated calligraphy pieces, whether you are looking for wedding invitations, brand monograms, or fine art compositions.
          </p>
          <div className="mt-6 rounded-3xl bg-amber-50 p-4 text-sm text-amber-900 dark:bg-amber-950/20 dark:text-amber-200">
            {filtered.length} artworks found.
          </div>
          <div className="mt-6">
            <Button variant="ghost">See details</Button>
          </div>
        </div>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {currentItems.map((item: Artwork) => (
          <GalleryCard key={item.id} artwork={item} />
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Pagination page={page} pageSize={pageSize} total={filtered.length} onPageChange={(newPage) => setPage(newPage)} />
      </div>
    </div>
  );
}
