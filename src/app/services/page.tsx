import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { services, siteData, faqs } from "@/utils/data";
import { FaqItem } from "@/types";

export const metadata = {
  title: `Services • ${siteData.name}`,
  description: "Explore luxury calligraphy services for invitations, branding, wall art, and bespoke gifts.",
};

function FaqList() {
  return (
    <div className="space-y-6">
      {faqs.map((item: FaqItem) => (
        <details key={item.question} className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(22,20,18,0.05)] dark:border-white/10 dark:bg-zinc-950">
          <summary className="cursor-pointer text-lg font-semibold text-zinc-950 dark:text-white">{item.question}</summary>
          <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
      <SectionTitle eyebrow="Services" title="Luxury calligraphy services" description="Tailored offerings for weddings, brands, Arabic lettering, wall art, and handcrafted gifts." />
      <div className="mt-12 grid gap-8 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <section className="mt-20 rounded-[2rem] border border-black/10 bg-[var(--soft)] p-10 shadow-[0_24px_80px_rgba(22,20,18,0.05)] dark:border-white/10 dark:bg-zinc-950/95">
        <h2 className="text-3xl font-semibold text-zinc-950 dark:text-white">Common questions</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-300">
          Get clarity on process, timeline, and customization before placing your bespoke calligraphy request.
        </p>
        <div className="mt-10">
          <FaqList />
        </div>
      </section>
    </div>
  );
}
