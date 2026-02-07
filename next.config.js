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
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.google.com https://www.gstatic.com https://www.googletagmanager.com https://googleads.g.doubleclick.net https://scripts.clarity.ms https://c.clarity.ms https://www.clarity.ms *.clarity.ms https://va.vercel-scripts.com https://js.hcaptcha.com https://*.hcaptcha.com; script-src-elem 'self' 'unsafe-inline' https://www.google.com https://www.gstatic.com https://www.googletagmanager.com https://googleads.g.doubleclick.net https://scripts.clarity.ms https://c.clarity.ms https://www.clarity.ms *.clarity.ms https://va.vercel-scripts.com https://js.hcaptcha.com https://*.hcaptcha.com; style-src 'self' 'unsafe-inline' https://hcaptcha.com https://*.hcaptcha.com; img-src 'self' data: https: blob:; font-src 'self' data:; connect-src 'self' https://www.google.com https://www.googletagmanager.com https://c.clarity.ms https://www.clarity.ms *.clarity.ms https://va.vercel-scripts.com https://vitals.vercel-insights.com https://hcaptcha.com https://*.hcaptcha.com https://sentry.hcaptcha.com; frame-src https://www.google.com https://www.googletagmanager.com https://hcaptcha.com https://*.hcaptcha.com https://newassets.hcaptcha.com; frame-ancestors 'none'; worker-src 'self' blob:; object-src 'none'; base-uri 'self';"
          }
        ]
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate'
          }
        ]
      },
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