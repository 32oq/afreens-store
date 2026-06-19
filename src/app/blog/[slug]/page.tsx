import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { blogs } from "@/utils/data";
import { formatDate } from "@/utils/helpers";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogs.find((item) => item.slug === params.slug);
  if (!post) {
    return { title: "Blog post not found" };
  }
  return {
    title: `${post.title} • Aafreen Calligraphy`,
    description: post.content,
    openGraph: {
      title: post.title,
      description: post.content,
      type: "article",
      url: `https://example.com/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogs.find((item) => item.slug === params.slug);
  if (!post) {
    notFound();
  }

  const related = blogs.filter((item) => item.category === post.category && item.slug !== post.slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: post.title }]} />
      <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_0.85fr]">
        <article className="space-y-8">
          <div className="rounded-[2.25rem] border border-black/10 bg-white overflow-hidden shadow-[0_30px_90px_rgba(22,20,18,0.08)] dark:border-white/10 dark:bg-zinc-950">
            <Image src={post.image} alt={post.title} width={1200} height={600} className="h-full w-full object-cover" />
          </div>
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-900 dark:text-amber-300">{post.category}</p>
            <h1 className="text-4xl font-semibold text-zinc-950 dark:text-white">{post.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-zinc-600 dark:text-zinc-400">
              <span>{formatDate(post.date)}</span>
              <span>{post.tags.join(", ")}</span>
            </div>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-zinc-700 dark:text-zinc-300">{post.content}</p>
          </div>
        </article>
        <aside className="space-y-8">
          <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_24px_80px_rgba(22,20,18,0.05)] dark:border-white/10 dark:bg-zinc-950">
            <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">Related articles</h2>
            <div className="mt-6 space-y-4">
              {related.length > 0 ? (
                related.map((item) => (
                  <Link key={item.id} href={`/blog/${item.slug}`} className="block rounded-3xl border border-zinc-200 px-4 py-4 text-sm text-zinc-800 transition hover:border-black/20 hover:bg-zinc-50 dark:border-white/10 dark:text-zinc-200 dark:hover:bg-zinc-900">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{item.category}</p>
                  </Link>
                ))
              ) : (
                <p className="text-sm text-zinc-600 dark:text-zinc-400">No similar posts found.</p>
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
