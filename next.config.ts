import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // All internal links use a trailing slash (e.g. /hire-devops-engineer/);
  // without this, Next.js 308-redirects every one of them.
  trailingSlash: true,

  async redirects() {
    return [
      // "Hire a DevOps Expert" is now the homepage's own primary keyword (row H0 in the
      // pillar map); the old standalone page moved to /hire-devops-engineer/ (row P1) to
      // avoid two pages competing for the same term.
      {
        source: "/hire-devops-expert",
        destination: "/",
        permanent: true,
      },
      {
        source: "/hire-devops-expert/",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
