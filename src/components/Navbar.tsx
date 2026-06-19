"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import site from "@/data/site.json";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
	const pathname = usePathname();
	const router = useRouter();
	const [open, setOpen] = useState(false);

	const handlePrefetch = (href: string) => {
		router.prefetch(href);
	};

	return (
		<header className="sticky top-0 z-40 border-b border-black/5 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/90">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
				<Link href="/" className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-white">
					{site.logo}
				</Link>
				<nav className="hidden items-center gap-1 md:flex">
					{site.navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							onMouseEnter={() => handlePrefetch(item.href)}
							className={`rounded-full px-4 py-2 text-sm font-medium transition ${
								pathname === item.href
									? "bg-zinc-900 text-white dark:bg-white dark:text-black"
									: "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
							}`}
						>
							{item.label}
						</Link>
					))}
					<ThemeToggle />
				</nav>
				<div className="flex items-center gap-3 md:hidden">
					<ThemeToggle />
					<button
						aria-label="Toggle mobile menu"
						onClick={() => setOpen(!open)}
						className="rounded-full border border-black/10 bg-white p-3 text-zinc-900 shadow-sm transition hover:bg-zinc-100 dark:border-white/10 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
					>
						{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
					</button>
				</div>
			</div>
			{open ? (
				<div className="border-t border-black/5 bg-white/95 px-6 py-4 dark:border-white/10 dark:bg-zinc-950/95 md:hidden">
					<div className="space-y-3">
						{site.navigation.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								onClick={() => setOpen(false)}
								onMouseEnter={() => handlePrefetch(item.href)}
								className={`block rounded-3xl px-4 py-3 text-base font-medium transition ${
									pathname === item.href
										? "bg-zinc-900 text-white dark:bg-white dark:text-black"
										: "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
								}`}
							>
								{item.label}
							</Link>
						))}
					</div>
				</div>
			) : null}
		</header>
	);
}
