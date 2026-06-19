import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/afreens-store",
  assetPrefix: "/afreens-store/",
  output: "export",
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
  poweredByHeader: false,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
