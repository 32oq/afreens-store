import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { GalleryCard } from "@/components/GalleryCard";
import { artworks } from "@/utils/data";
import { formatDate } from "@/utils/helpers";

interface ArtworkPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return artworks.map((artwork) => ({ slug: artwork.slug }));
}

export function generateMetadata({ params }: ArtworkPageProps) {
  const artwork = artworks.find((item) => item.slug === params.slug);
  if (!artwork) {
    return { title: "Artwork not found" };
  }
  return {
    title: `${artwork.title} • Afreen Calligraphy`,
    description: artwork.description,
    openGraph: {
      title: artwork.title,
      description: artwork.description,
      type: "article",
      url: `https://example.com/artworks/${artwork.slug}`,
    },
  };
}

export default function ArtworkPage({ params }: ArtworkPageProps) {
  const artwork = artworks.find((item) => item.slug === params.slug);
  if (!artwork) {
    notFound();
  }

  const index = artworks.findIndex((item) => item.slug === params.slug);
  const previous = index > 0 ? artworks[index - 1] : null;
  const next = index < artworks.length - 1 ? artworks[index + 1] : null;
  const related = artworks.filter((item) => item.category === artwork.category && item.slug !== artwork.slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Gallery", href: "/gallery" }, { label: artwork.title }]} />
      <div className="mt-10 grid gap-12 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <div className="overflow-hidden rounded-[2.25rem] border border-black/10 bg-white shadow-[0_30px_90px_rgba(22,20,18,0.08)] dark:border-white/10 dark:bg-zinc-950">
            <Image src={artwork.image} alt={artwork.title} width={1200} height={900} className="h-full w-full object-cover" />
          </div>
          <div className="space-y-4 rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_24px_80px_rgba(22,20,18,0.05)] dark:border-white/10 dark:bg-zinc-950">
            <h1 className="text-4xl font-semibold text-zinc-950 dark:text-white">{artwork.title}</h1>
            <p className="text-base leading-8 text-zinc-600 dark:text-zinc-300">{artwork.description}</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl bg-zinc-50 p-5 dark:bg-zinc-900">
                <p className="text-xs uppercase tracking-[0.3em] text-amber-900 dark:text-amber-300">Category</p>
                <p className="mt-2 text-sm text-zinc-800 dark:text-zinc-100">{artwork.category}</p>
              </div>
              <div className="rounded-3xl bg-zinc-50 p-5 dark:bg-zinc-900">
                <p className="text-xs uppercase tracking-[0.3em] text-amber-900 dark:text-amber-300">Year</p>
                <p className="mt-2 text-sm text-zinc-800 dark:text-zinc-100">{artwork.year}</p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl bg-zinc-50 p-5 dark:bg-zinc-900">
                <p className="text-xs uppercase tracking-[0.3em] text-amber-900 dark:text-amber-300">Materials</p>
                <ul className="mt-2 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
                  {artwork.materials.map((material) => (
                    <li key={material}>• {material}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl bg-zinc-50 p-5 dark:bg-zinc-900">
                <p className="text-xs uppercase tracking-[0.3em] text-amber-900 dark:text-amber-300">Tags</p>
                <div className="mt-2 flex flex-wrap gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                  {artwork.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-zinc-200 px-3 py-1 dark:border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <aside className="space-y-8">
          <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_24px_80px_rgba(22,20,18,0.05)] dark:border-white/10 dark:bg-zinc-950">
            <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">Details</h2>
            <div className="mt-6 space-y-4 text-sm text-zinc-600 dark:text-zinc-300">
              <p><strong className="text-zinc-950 dark:text-white">Created</strong>: {formatDate(`${artwork.year}-01-01`)}</p>
              <p><strong className="text-zinc-950 dark:text-white">Category</strong>: {artwork.category}</p>
              <p><strong className="text-zinc-950 dark:text-white">Style</strong>: {artwork.tags.join(", ")}</p>
            </div>
          </div>
          <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_24px_80px_rgba(22,20,18,0.05)] dark:border-white/10 dark:bg-zinc-950">
            <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">More from this series</h2>
            <div className="mt-6 space-y-4">
              {related.length > 0 ? (
                related.map((item) => (
                  <Link key={item.id} href={`/artworks/${item.slug}`} className="block rounded-3xl border border-zinc-200 px-4 py-3 text-sm text-zinc-800 transition hover:border-black/20 hover:bg-zinc-50 dark:border-white/10 dark:text-zinc-200 dark:hover:bg-zinc-900">
                    {item.title}
                  </Link>
                ))
              ) : (
                <p className="text-sm text-zinc-600 dark:text-zinc-400">No related pieces in this category yet.</p>
              )}
            </div>
          </div>
          <div className="grid gap-4">
            {previous ? (
              <Link href={`/artworks/${previous.slug}`} className="block rounded-[1.75rem] border border-black/10 bg-white p-5 text-sm font-medium text-zinc-950 transition hover:border-black/20 dark:border-white/10 dark:bg-zinc-950 dark:text-white">
                ← Previous: {previous.title}
              </Link>
            ) : null}
            {next ? (
              <Link href={`/artworks/${next.slug}`} className="block rounded-[1.75rem] border border-black/10 bg-white p-5 text-sm font-medium text-zinc-950 transition hover:border-black/20 dark:border-white/10 dark:bg-zinc-950 dark:text-white">
                Next: {next.title} →
              </Link>
            ) : null}
          </div>
        </aside>
      </div>
    </div>
  );
}
