import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // <-- this disables ESLint errors from breaking the build
  },
  // other config options can go here
};

export default nextConfig;

