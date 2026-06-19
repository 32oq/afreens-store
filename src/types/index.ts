export interface SocialLinks {
  instagram: string;
  pinterest: string;
  linkedin: string;
  facebook: string;
}

export interface WhatsappConfig {
  number: string;
  defaultMessage: string;
}

export interface NavigationLink {
  label: string;
  href: string;
}

export interface SiteData {
  name: string;
  logo: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  social: SocialLinks;
  whatsapp: WhatsappConfig;
  keywords: string[];
  copyright: string;
  navigation: NavigationLink[];
}

export interface Artwork {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  year: number;
  materials: string[];
  featured: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  rating: number;
  review: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  image: string;
  tags: string[];
  category: string;
  date: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface AboutData {
  biography: string;
  mission: string;
  timeline: TimelineItem[];
  achievements: string[];
  skills: string[];
  specialties: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}
