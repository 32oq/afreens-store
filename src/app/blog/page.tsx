import { siteData } from "@/utils/data";
import BlogPageClient from "./BlogPageClient";

export const metadata = {
  title: `Blog • ${siteData.name}`,
  description: "Read stories, inspiration, and expert advice on luxury calligraphy and stationery design.",
};

export default function BlogPage() {
  return <BlogPageClient />;
}
