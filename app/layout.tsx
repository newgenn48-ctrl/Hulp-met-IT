import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StructuredData } from '@/components/seo/StructuredData'
import { ClarityAnalytics } from '@/components/seo/ClarityAnalytics'
import { WebVitals } from '@/components/seo/WebVitals'
import { CookieConsent } from '@/components/privacy/CookieConsent'
import { StickyContactButtons } from '@/components/ui/StickyContactButtons'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { ToastProvider } from '@/components/ui/Toast'
import { Metadata, Viewport } from 'next'
import { inter, spaceGrotesk } from '@/lib/fonts'
import { NoSSR } from '@/components/NoSSR'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#334155',
}

export const metadata: Metadata = {
  title: 'Hulp Met IT | Computerhulp aan Huis',
  description: 'Betaalbare computerhulp aan huis in heel Nederland ✓ €14,50 per kwartier + €10 voorrijkosten ✓ Ervaren IT-specialisten ✓ Binnen 24-48u ✓ Bel ons',
  icons: [
    { rel: 'icon', url: '/icon', type: 'image/png', sizes: '32x32' },
    { rel: 'apple-touch-icon', url: '/icon', sizes: '32x32' }
  ],
  keywords: [
    'computerhulp aan huis',
    'IT hulp',
    'student aan huis',
    'computer reparatie',
    'laptop reparatie',
    'internet problemen',
    'software installatie',
    'virus verwijderen',
    'Den Haag',
    'Amsterdam',
    'Rotterdam',
    'Utrecht'
  ],
  authors: [{ name: 'Hulp met IT' }],
  creator: 'Hulp met IT',
  publisher: 'Hulp met IT',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hulpmetit.nl'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Computerhulp Aan Huis Nederland | Hulp met IT',
    description: 'Betaalbare computerhulp aan huis door ervaren IT-specialisten. €14,50 per kwartier + €10 voorrijkosten. Bel nu!',
    url: 'https://hulpmetit.nl',
    siteName: 'Hulp met IT',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Hulp met IT - Computerhulp aan Huis Logo',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hulp met IT - Computerhulp aan Huis',
    description: 'Snelle, betrouwbare computerhulp aan huis door gekwalificeerde IT-specialisten',
    images: ['/og-image.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-WWZVT98T'
  return (
    <html lang="nl" className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Preconnect to critical origins (saves ~300ms for LCP) */}
        <link rel="preconnect" href="https://www.google.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://scripts.clarity.ms" crossOrigin="anonymous" />

        {/* DNS prefetch for lower priority origins */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//googleads.g.doubleclick.net" />
        <link rel="dns-prefetch" href="//c.clarity.ms" />

        {/* Preload critical resources */}
        <link rel="preload" href="/og-image.webp" as="image" type="image/webp" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Skip link for screen readers */}
        <a href="#main-content" className="skip-link">
          Ga naar hoofdinhoud
        </a>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{display: 'none', visibility: 'hidden'}}
            title="Google Tag Manager"
            aria-hidden="true"
          />
        </noscript>
        {/* Google Tag Manager Script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(gtmW,gtmD,gtmS,gtmL,gtmI){gtmW[gtmL]=gtmW[gtmL]||[];gtmW[gtmL].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var gtmF=gtmD.getElementsByTagName(gtmS)[0],
gtmJ=gtmD.createElement(gtmS),gtmDl=gtmL!='dataLayer'?'&l='+gtmL:'';gtmJ.async=true;gtmJ.src=
'https://www.googletagmanager.com/gtm.js?id='+gtmI+gtmDl;gtmF.parentNode.insertBefore(gtmJ,gtmF);
})(window,document,'script','dataLayer','${gtmId}');`,
          }}
        />
        {/* Google Ads Conversion Tracking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16646363193"
          strategy="afterInteractive"
        />
        <Script
          id="google-ads-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16646363193');
            `,
          }}
        />
        <NoSSR>
          <ClarityAnalytics />
          <WebVitals />
        </NoSSR>
        <ErrorBoundary>
          <ToastProvider>
            <div className="min-h-screen bg-white">
              <Header />
              <main id="main-content" className="relative">
                {children}
              </main>
              <Footer />
            </div>
          </ToastProvider>
        </ErrorBoundary>
        <NoSSR>
          <StickyContactButtons />
          <CookieConsent />
        </NoSSR>
        <StructuredData />
        <Analytics />
        <SpeedInsights />
        {/* Fix accessibility for dynamically added iframes */}
        <Script
          id="iframe-accessibility-fix"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function fixIframes() {
                  const iframes = document.querySelectorAll('iframe:not([title])');
                  iframes.forEach(function(iframe) {
                    if (!iframe.getAttribute('title')) {
                      iframe.setAttribute('title', 'Third-party content');
                      iframe.setAttribute('aria-hidden', 'true');
                    }
                  });
                }

                // Run on load and periodically check for new iframes
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', fixIframes);
                } else {
                  fixIframes();
                }

                // Use MutationObserver to catch dynamically added iframes
                const observer = new MutationObserver(fixIframes);
                observer.observe(document.documentElement, {
                  childList: true,
                  subtree: true
                });
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
