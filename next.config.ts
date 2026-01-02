/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // crucial for multi-tenant: allow images from any domain your clients might use
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Be careful with this in high-security apps
      },
      {
        protocol: 'https',
        hostname: 'ramoncolon.design',
      },
      {
        protocol: 'https',
        hostname: 'ramonacolon.dev',
      },
    ],
  },
  // If you need to map domains to internal paths, you can use headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;