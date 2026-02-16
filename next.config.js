const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Enable type checking during build for better code quality
    ignoreBuildErrors: false,
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    unoptimized: false
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  // Modern browser target - no legacy polyfills (saves ~12.5KB)
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    gzipSize: true,
    optimizeCss: true, // Optimize CSS loading
  },
  // Reduce JavaScript bundle size
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{kebabCase member}}',
    },
  },
  httpAgentOptions: {
    keepAlive: true
  },
  // Security headers are managed in vercel.json to avoid duplication
  // Cache headers for static assets (not duplicated in vercel.json)
  async headers() {
    return [
      {
        source: '/(.*\\.(?:js|css|woff2?|png|jpg|jpeg|gif|webp|avif|ico|svg)$)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      },
      {
        source: '/manifest.json',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400'
          }
        ]
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true
      },
      {
        source: '/computerhulp',
        destination: '/computerhulp-aan-huis',
        permanent: true
      },
      {
        source: '/regios/computerhulp-:slug',
        destination: '/regios/:slug',
        permanent: true
      }
    ]
  }
}

module.exports = withBundleAnalyzer(nextConfig)