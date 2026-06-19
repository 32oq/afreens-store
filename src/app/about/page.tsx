import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { aboutData, siteData } from "@/utils/data";

export const metadata = {
  title: `About • ${siteData.name}`,
  description: aboutData.biography,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
      <SectionTitle eyebrow="About" title="Meet the artist behind the work" description="Afreen creates elegant calligraphy pieces with luxurious detail, thoughtful composition, and modern refinement." />
      <div className="mt-14 grid gap-12 lg:grid-cols-[0.95fr_0.7fr]">
        <div className="space-y-8">
          <section className="rounded-[2rem] border border-black/10 bg-white p-10 shadow-[0_30px_70px_rgba(22,20,18,0.06)] dark:border-white/10 dark:bg-zinc-950">
            <h2 className="text-3xl font-semibold text-zinc-950 dark:text-white">Crafting elevated lettering with intention</h2>
            <p className="mt-6 text-base leading-8 text-zinc-700 dark:text-zinc-300">{aboutData.biography}</p>
            <p className="mt-4 text-base leading-8 text-zinc-700 dark:text-zinc-300">{aboutData.mission}</p>
          </section>
          <section className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_24px_80px_rgba(22,20,18,0.05)] dark:border-white/10 dark:bg-zinc-950">
              <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">Achievements</h3>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                {aboutData.achievements.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_24px_80px_rgba(22,20,18,0.05)] dark:border-white/10 dark:bg-zinc-950">
              <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">Specialties</h3>
              <div className="mt-5 flex flex-wrap gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                {aboutData.specialties.map((specialty) => (
                  <span key={specialty} className="rounded-full border border-zinc-200 px-4 py-2 dark:border-white/10">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </section>
          <section className="rounded-[2rem] border border-black/10 bg-white p-10 shadow-[0_24px_80px_rgba(22,20,18,0.05)] dark:border-white/10 dark:bg-zinc-950">
            <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">Experience timeline</h3>
            <div className="mt-8 space-y-6">
              {aboutData.timeline.map((item) => (
                <div key={item.year} className="rounded-3xl border border-zinc-200 p-6 dark:border-white/10">
                  <div className="text-sm uppercase tracking-[0.3em] text-amber-900 dark:text-amber-300">{item.year}</div>
                  <h4 className="mt-3 text-lg font-semibold text-zinc-950 dark:text-white">{item.title}</h4>
                  <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        <aside className="space-y-6">
          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_30px_70px_rgba(22,20,18,0.06)] dark:border-white/10 dark:bg-zinc-950">
            <Image src="/images/about-portrait.svg" alt="Artist portrait" width={720} height={720} className="h-full w-full object-cover" />
          </div>
          <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_24px_80px_rgba(22,20,18,0.05)] dark:border-white/10 dark:bg-zinc-950">
            <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">Ready to work together?</h3>
            <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              Begin a custom calligraphy journey with a consultation and refined concept tailored to your event or brand.
            </p>
            <div className="mt-6">
              <Link href="/contact" className="inline-flex rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-900 dark:bg-white dark:text-black dark:hover:bg-zinc-100">
                Contact Afreen
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
