"use client";

import { useMemo, useState } from "react";
import { FilterDropdown } from "@/components/FilterDropdown";
import { SectionTitle } from "@/components/SectionTitle";
import { TestimonialCard } from "@/components/TestimonialCard";
import { siteData, testimonials } from "@/utils/data";

const sortOptions = ["Highest rating", "Lowest rating"];

export default function TestimonialsPageClient() {
  const [sort, setSort] = useState(sortOptions[0]);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const lowerSearch = search.toLowerCase();
    const matches = testimonials.filter((item) => item.name.toLowerCase().includes(lowerSearch) || item.review.toLowerCase().includes(lowerSearch));
    return matches.sort((a, b) => (sort === "Highest rating" ? b.rating - a.rating : a.rating - b.rating));
  }, [search, sort]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
      <SectionTitle eyebrow="Testimonials" title="Client reviews" description="Discover the trust, care, and craftsmanship clients share about custom lettering and luxury stationery projects." />
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-4">
          <label className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Search reviews
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="mt-3 w-full rounded-full border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-amber-900 focus:ring-2 focus:ring-amber-100 dark:border-white/10 dark:bg-zinc-950 dark:text-white dark:focus:border-amber-300 dark:focus:ring-amber-300/20"
              placeholder="Search by name or keyword"
            />
          </label>
          <FilterDropdown label="Sort testimonials" options={sortOptions} value={sort} onChange={setSort} />
        </div>
        <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_24px_80px_rgba(22,20,18,0.05)] dark:border-white/10 dark:bg-zinc-950">
          <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">Review highlights</h2>
          <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
            Filter and sort testimonials to find the stories that best match your commission style and expectations.
          </p>
          <div className="mt-6 rounded-3xl bg-amber-50 p-4 text-sm text-amber-900 dark:bg-amber-950/20 dark:text-amber-200">
            {filtered.length} reviews available.
          </div>
        </div>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {filtered.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}
