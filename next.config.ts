import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,

  async redirects() {
    return [
      {
        source: "/hire-devops-expert",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
