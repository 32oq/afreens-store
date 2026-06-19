import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-zinc-500 dark:text-zinc-400">
      <ol className="flex items-center gap-2">
        {items.map((item, index) => (
          <li key={item.label} className="inline-flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="hover:text-zinc-900 dark:hover:text-white">
                {item.label}
              </Link>
            ) : (
              <span>{item.label}</span>
            )}
            {index < items.length - 1 ? <ChevronRight className="h-4 w-4" /> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
