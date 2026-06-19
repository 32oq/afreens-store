import type { ChangeEvent } from "react";

interface FilterDropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export function FilterDropdown({ label, options, value, onChange }: FilterDropdownProps) {
  return (
    <label className="block text-sm font-medium text-zinc-800 dark:text-zinc-200">
      <span className="mb-2 block text-xs uppercase tracking-[0.3em] text-amber-900 dark:text-amber-300">{label}</span>
      <select
        value={value}
        onChange={(event: ChangeEvent<HTMLSelectElement>) => onChange(event.target.value)}
        className="w-full rounded-full border border-zinc-200 bg-white py-3 px-4 text-sm text-zinc-900 outline-none transition focus:border-amber-900 focus:ring-2 focus:ring-amber-100 dark:border-white/10 dark:bg-zinc-950 dark:text-white dark:focus:border-amber-300 dark:focus:ring-amber-300/20"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}
