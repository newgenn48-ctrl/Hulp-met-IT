import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TV Installatie aan Huis - Smart TV Hulp | Hulp met IT',
  description: 'TV installatie aan huis door ICT-studenten. Smart TV instellen, zenders zoeken, apps installeren, soundbar aansluiten. Vanaf €15,50/kwartier. Bel 085-8005006!',
  keywords: [
    'tv installatie aan huis',
    'smart tv instellen',
    'tv aansluiten',
    'tv installeren',
    'smart tv hulp',
    'tv zenders instellen',
    'tv installatie service',
    'samsung tv instellen',
    'lg tv installatie',
    'tv hulp aan huis',
    'smart tv apps installeren',
    'soundbar aansluiten',
    'tv ophangen en instellen',
    'chromecast installeren',
    'apple tv instellen',
    'netflix instellen smart tv'
  ],
  alternates: { canonical: '/tv-installatie-aan-huis' },
  openGraph: {
    title: 'TV Installatie aan Huis - Smart TV Hulp',
    description: 'Smart TV instellen, zenders zoeken, apps installeren. Onze studenten helpen bij u thuis.',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'TV installatie aan huis - Hulp met IT'
      }
    ],
    url: 'https://hulpmetit.nl/tv-installatie-aan-huis',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TV Installatie aan Huis',
    description: 'Smart TV instellen en aansluiten bij u thuis.',
    images: ['/og-image.webp']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1
    }
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
