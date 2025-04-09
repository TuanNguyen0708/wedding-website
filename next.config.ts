import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: '/wedding-website',
  assetPrefix: '/wedding-website',
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
