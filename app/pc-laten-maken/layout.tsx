import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PC Laten Maken aan Huis - Vanaf €14,50 | Hulp met IT',
  description: 'PC laten maken? Onze HBO-opgeleide ICT-studenten komen bij u thuis. Snelle reparatie, eerlijke prijs. Vanaf €14,50 per kwartier. Bel 085-8005006!',
  keywords: [
    'pc laten maken',
    'pc reparatie aan huis',
    'computer laten repareren',
    'pc laten repareren thuis',
    'pc reparatie kosten',
    'computer laten maken',
    'pc hulp aan huis',
    'desktop reparatie',
    'pc laten nakijken',
    'computer reparatie thuis',
    'pc kapot wat nu',
    'goedkoop pc laten maken',
    'pc reparatie in de buurt',
    'computer laten nakijken',
    'pc laten fixen',
    'pc reparatie zonder afspraak'
  ],
  alternates: {
    canonical: '/pc-laten-maken',
  },
  openGraph: {
    title: 'PC Laten Maken aan Huis - Vanaf €14,50',
    description: 'PC kapot? Onze studenten komen bij u thuis en repareren uw computer. Eerlijke prijs, snel geholpen.',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'PC laten maken aan huis - Hulp met IT'
      }
    ],
    url: 'https://hulpmetit.nl/pc-laten-maken',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PC Laten Maken aan Huis - Vanaf €14,50',
    description: 'PC kapot? Onze studenten repareren uw computer bij u thuis.',
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
