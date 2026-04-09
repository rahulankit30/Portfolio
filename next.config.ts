import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow images from external domains if needed in the future
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
};

export default nextConfig;
