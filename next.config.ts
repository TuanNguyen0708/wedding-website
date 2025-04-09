import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV;

console.log("isProd", process.env.NODE_ENV);

const nextConfig: NextConfig = {
  output: "export",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    path: isProd === "production" ? "/wedding-website" : "",
  },
};

export default nextConfig;
