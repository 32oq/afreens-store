import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { BlogCard } from "@/components/BlogCard";
import { GalleryCard } from "@/components/GalleryCard";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { aboutData, categories, featuredArtworks, latestBlogs, services, siteData, testimonials } from "@/utils/data";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative bg-[radial-gradient(circle_at_top_right,_rgba(255,248,239,0.9),_transparent_55%),linear-gradient(180deg,_rgba(247,239,228,0.95),_rgba(245,238,231,0.7))] px-6 pb-20 pt-20 sm:px-8 lg:px-10">
        <div className="pointer-events-none absolute inset-0 bg-[url('/images/hero-bg.svg')] bg-cover bg-center opacity-40" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-14">
          <div className="grid gap-10 xl:grid-cols-[1.2fr_0.8fr] xl:items-end">
            <div className="max-w-2xl text-zinc-950 dark:text-white">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-900 dark:text-amber-300">
                {siteData.tagline}
              </p>
              <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
                Fine Art Calligraphy & Bespoke Lettering
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">
                Master calligraphy artworks, custom commissions, and hand-drawn letterpress designs crafted with precision and artistic vision. Every piece tells a story.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button>Start a commission</Button>
                </Link>
                <Link href="/gallery">
                  <Button variant="ghost">View portfolio</Button>
                </Link>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-white/90 p-4 shadow-[0_40px_90px_rgba(25,23,22,0.08)] dark:border-white/10 dark:bg-zinc-950/85">
              <Image src="/images/about-portrait.svg" alt="Artist portrait" width={520} height={520} className="h-full w-full object-contain" />
            </div>
          </div>
          <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
              {featuredArtworks.slice(0, 4).map((artwork) => (
                <GalleryCard key={artwork.id} artwork={artwork} />
              ))}
            </div>
            <div className="space-y-6 rounded-[2rem] border border-black/10 bg-white/90 p-8 shadow-[0_30px_70px_rgba(25,23,22,0.05)] dark:border-white/10 dark:bg-zinc-950/90">
              <p className="text-sm uppercase tracking-[0.3em] text-amber-900 dark:text-amber-300">Featured works</p>
              <h2 className="text-3xl font-semibold text-zinc-950 dark:text-white">Hand-drawn artistry and custom calligraphy for every vision.</h2>
              <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
                Discover signature calligraphy pieces, each meticulously crafted with attention to detail and artistic excellence. From fine art commissions to personalized designs.
              </p>
              <Link href="/gallery" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-amber-900 transition hover:text-amber-700 dark:text-amber-300 dark:hover:text-amber-200">
                Discover all works
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <SectionTitle eyebrow="Categories" title="Explore by collection" description="A refined gallery of calligraphy experiences organized by mood, medium, and style." />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <Link key={category.id} href="/gallery" className="group overflow-hidden rounded-[1.75rem] border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:border-black/20 dark:border-white/10 dark:bg-zinc-950">
              <div className="mb-6 overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900">
                <Image src={category.image} alt={category.name} width={520} height={320} className="h-48 w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">{category.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[var(--soft)] py-20 dark:bg-zinc-950/95">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <SectionTitle eyebrow="Services" title="Signature services for every occasion" description="Premium calligraphy, invitations, Arabic lettering, logos, wall art, and gifts delivered with care." />
          <div className="mt-12 grid gap-8 xl:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link href="/services">
              <Button variant="ghost">View all services</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <SectionTitle eyebrow="Testimonials" title="Words from delighted clients" description="A selection of reviews from couples and brands who chose bespoke lettering for their story." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>

      <section className="bg-[var(--soft)] py-20 dark:bg-zinc-950/95">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <SectionTitle eyebrow="About" title="Afreen’s creative vision" description={aboutData.biography} />
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6 rounded-[2rem] border border-black/10 bg-white p-10 shadow-[0_24px_80px_rgba(22,20,18,0.05)] dark:border-white/10 dark:bg-zinc-950">
              <p className="text-base leading-8 text-zinc-700 dark:text-zinc-300">{aboutData.mission}</p>
              <div className="grid gap-4">
                {aboutData.skills.map((skill) => (
                  <span key={skill} className="inline-flex rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-700 dark:border-white/10 dark:text-zinc-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              {aboutData.timeline.map((item) => (
                <div key={item.year} className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_24px_80px_rgba(22,20,18,0.05)] dark:border-white/10 dark:bg-zinc-950">
                  <div className="text-sm uppercase tracking-[0.3em] text-amber-900 dark:text-amber-300">{item.year}</div>
                  <h3 className="mt-2 text-lg font-semibold text-zinc-950 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link href="/about">
              <Button variant="ghost">Read the full story</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
        <SectionTitle eyebrow="Journal" title="Latest stories & inspiration" description="Articles about craft, trend-forward stationery, and the art of lettering." />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {latestBlogs.slice(0, 3).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/blog">
            <Button variant="ghost">Explore the blog</Button>
          </Link>
        </div>
      </section>

      <section className="bg-[var(--soft)] py-20 dark:bg-zinc-950/95">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8 lg:px-10">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-900 dark:text-amber-300">Request a bespoke commission</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
            Let’s create your next handcrafted experience.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-300">
            Contact Afreen to bring your vision to life with elegant letterforms, luxurious materials, and a thoughtful design process.
          </p>
          <div className="mt-10 flex justify-center">
            <Link href="/contact">
              <Button>Contact now</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
