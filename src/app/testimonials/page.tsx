import { siteData } from "@/utils/data";
import TestimonialsPageClient from "./TestimonialsPageClient";

export const metadata = {
  title: `Testimonials • ${siteData.name}`,
  description: "Read reviews from clients who experienced luxury calligraphy commissions and bespoke design services.",
};

export default function TestimonialsPage() {
  return <TestimonialsPageClient />;
}
