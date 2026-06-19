import { Search } from "lucide-react";
import type { ChangeEvent } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChange, placeholder = "Search..." }: SearchBarProps) {
  return (
    <label className="relative block w-full">
      <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
      <input
        type="search"
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full rounded-full border border-zinc-200 bg-white py-3 pl-11 pr-4 text-sm text-zinc-900 shadow-sm outline-none transition focus:border-amber-900 focus:ring-2 focus:ring-amber-100 dark:border-white/10 dark:bg-zinc-950 dark:text-white dark:focus:border-amber-300 dark:focus:ring-amber-300/20"
      />
    </label>
  );
}
