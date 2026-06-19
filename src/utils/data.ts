import siteJson from "@/data/site.json";
import artworksJson from "@/data/artworks.json";
import categoriesJson from "@/data/categories.json";
import servicesJson from "@/data/services.json";
import testimonialsJson from "@/data/testimonials.json";
import blogsJson from "@/data/blogs.json";
import aboutJson from "@/data/about.json";
import faqsJson from "@/data/faqs.json";
import type {
  AboutData,
  Artwork,
  BlogPost,
  Category,
  FaqItem,
  Service,
  SiteData,
  Testimonial,
} from "@/types";

export const siteData = siteJson as SiteData;
export const artworks = artworksJson as Artwork[];
export const categories = categoriesJson as Category[];
export const services = servicesJson as Service[];
export const testimonials = testimonialsJson as Testimonial[];
export const blogs = blogsJson as BlogPost[];
export const aboutData = aboutJson as AboutData;
export const faqs = faqsJson as FaqItem[];

export const featuredArtworks = artworks.filter((item) => item.featured);
export const latestBlogs = blogs.slice(0, 4);
