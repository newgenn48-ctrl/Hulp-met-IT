import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PC Laten Maken aan Huis - Vanaf €14,50 | Hulp met IT',
  description: 'PC laten maken? Onze HBO-opgeleide ICT-studenten komen bij u thuis. Snelle reparatie, eerlijke prijs. Vanaf €14,50 per kwartier. Bel 06-42827860!',
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
    'computer reparatie thuis'
  ],
  alternates: {
    canonical: '/pc-laten-maken',
  },
  openGraph: {
    title: 'PC Laten Maken aan Huis - Vanaf €14,50',
    description: 'PC kapot? Onze studenten komen bij u thuis en repareren uw computer. Eerlijke prijs, snel geholpen.',
    images: ['/og-image.webp'],
    url: 'https://hulpmetit.nl/pc-laten-maken',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PC Laten Maken aan Huis - Vanaf €14,50',
    description: 'PC kapot? Onze studenten repareren uw computer bij u thuis.',
  },
  robots: { index: true, follow: true },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
