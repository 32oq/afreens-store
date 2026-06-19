import site from "@/data/site.json";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
	return (
		<footer className="border-t border-gray-200 bg-transparent py-12">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="grid gap-8 lg:grid-cols-3">
					<div>
						<h3 className="text-2xl font-semibold text-gray-900">{site.logo}</h3>
						<p className="mt-3 max-w-md text-sm text-gray-600">{site.description}</p>
						<div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-700">
							<a href={site.social.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
								<ArrowRight className="h-4 w-4" /> Instagram
							</a>
							<a href={site.social.pinterest} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
								<ArrowRight className="h-4 w-4" /> Pinterest
							</a>
						</div>
					</div>
					<div>
						<h4 className="text-sm uppercase tracking-wider text-gray-500">Quick links</h4>
						<nav className="mt-4 flex flex-col gap-2 text-sm text-gray-700">
							{site.navigation.map((item) => (
								<Link key={item.href} href={item.href} className="hover:underline">
									{item.label}
								</Link>
							))}
						</nav>
					</div>
					<div>
						<h4 className="text-sm uppercase tracking-wider text-gray-500">Contact</h4>
						<div className="mt-4 space-y-2 text-sm text-gray-700">
							<div className="flex items-center gap-2"><Phone className="h-4 w-4" /> {site.phone}</div>
							<div className="flex items-center gap-2"><Mail className="h-4 w-4" /> {site.email}</div>
							<div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {site.address}</div>
						</div>
					</div>
				</div>
				<div className="mt-8 border-t pt-6 text-center text-sm text-gray-500">{site.copyright}</div>
			</div>
		</footer>
	);
}
