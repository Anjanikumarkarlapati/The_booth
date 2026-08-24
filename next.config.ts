import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization with remote patterns
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gajarephotography.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
    // Enable image optimization for external images
    formats: ['image/avif', 'image/webp'],
    // Reduce image sizes for faster load
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // Enable compression
  compress: true,

  // Performance headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
      {
        // Cache static assets aggressively
        source: '/(.*)\\.(jpg|jpeg|png|webp|avif|svg|ico|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Optimize package imports
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
