import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[calc(100vh-7rem)] items-center justify-center bg-[var(--background)] px-6 py-20 dark:bg-[var(--background)]">
      <div className="max-w-2xl rounded-[2rem] border border-black/10 bg-white p-12 text-center shadow-[0_30px_80px_rgba(22,20,18,0.08)] dark:border-white/10 dark:bg-zinc-950">
        <p className="text-sm uppercase tracking-[0.35em] text-amber-900 dark:text-amber-300">Page not found</p>
        <h1 className="mt-6 text-5xl font-semibold text-zinc-950 dark:text-white">We couldn’t find that page.</h1>
        <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-300">
          The page you’re looking for may have been moved or doesn’t exist. Return to the portfolio or explore another collection.
        </p>
        <div className="mt-10 flex justify-center">
          <Link href="/" className="inline-flex rounded-full bg-black px-8 py-3 text-sm font-semibold text-white transition hover:bg-zinc-900 dark:bg-white dark:text-black dark:hover:bg-zinc-100">
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}
