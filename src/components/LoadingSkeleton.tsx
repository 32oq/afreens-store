export function LoadingSkeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse rounded-3xl bg-zinc-200/70 dark:bg-zinc-800/70 ${className}`} />
  );
}
