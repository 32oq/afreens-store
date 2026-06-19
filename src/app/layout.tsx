import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { RouteProgressBar } from "@/components/RouteProgressBar";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { siteData } from "@/utils/data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteData.name,
  description: siteData.description,
  keywords: siteData.keywords,
  openGraph: {
    title: siteData.name,
    description: siteData.description,
    type: "website",
    url: "https://example.com",
    siteName: siteData.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.name,
    description: siteData.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">
        <RouteProgressBar />
        <Navbar />
        <main className="min-h-[calc(100vh-7rem)]">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
