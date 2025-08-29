import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "letsenhance.io",
        port: "", // leave empty for default
        pathname: "/**", // allow all paths
      },
    ],
  },
};

export default nextConfig;
