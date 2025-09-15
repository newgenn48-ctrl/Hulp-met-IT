import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StructuredData } from '@/components/seo/StructuredData'
import { ClarityAnalytics } from '@/components/seo/ClarityAnalytics'
import { StickyContactButtons } from '@/components/ui/StickyContactButtons'
import { Metadata, Viewport } from 'next'
import { inter, spaceGrotesk } from '@/lib/fonts'
import { NoSSR } from '@/components/NoSSR'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0ea5e9',
}

export const metadata: Metadata = {
  title: 'Hulp met IT - Computerhulp aan Huis | Specialist binnen 24u',
  description: 'Snelle, betrouwbare computerhulp aan huis door gekwalificeerde IT-specialisten. Standaard of spoed service, transparante tarieven, 5-sterren beoordeeld. Bel nu!',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
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
    title: 'Hulp met IT - Computerhulp aan Huis',
    description: 'Snelle, betrouwbare computerhulp aan huis door gekwalificeerde IT-specialisten',
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
  return (
    <html lang="nl" className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WWZVT98T');`,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WWZVT98T"
            height="0"
            width="0"
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        <NoSSR>
          <ClarityAnalytics />
        </NoSSR>
        <div className="min-h-screen bg-gradient-to-br from-neural-900 via-neural-800 to-primary-900">
          <Header />
          <main className="relative">
            {children}
          </main>
          <Footer />
        </div>
        <NoSSR>
          <StickyContactButtons />
        </NoSSR>
        <StructuredData />
      </body>
    </html>
  )
}
