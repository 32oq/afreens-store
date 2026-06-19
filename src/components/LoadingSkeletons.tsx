"use client";

export function GalleryCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/5 bg-white dark:border-white/10 dark:bg-zinc-950">
      <div className="aspect-square w-full animate-pulse bg-zinc-200 dark:bg-zinc-800" />
      <div className="space-y-3 p-4">
        <div className="h-4 w-3/4 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="h-3 w-1/2 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
      </div>
    </div>
  );
}

export function SectionTitleSkeleton() {
  return (
    <div className="space-y-4">
      <div className="h-4 w-32 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
      <div className="h-8 w-64 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
      <div className="h-4 w-full max-w-2xl animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white p-6 dark:border-white/10 dark:bg-zinc-950">
      <div className="space-y-4">
        <div className="h-6 w-3/4 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="space-y-2">
          <div className="h-4 w-full animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        </div>
      </div>
    </div>
  );
}

export function GridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <GalleryCardSkeleton key={i} />
      ))}
    </div>
  );
}
