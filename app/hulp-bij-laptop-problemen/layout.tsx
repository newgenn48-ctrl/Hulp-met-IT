import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hulp bij Laptop Problemen - Reparatie aan Huis | Hulp met IT',
  description: 'Hulp bij laptop problemen? Onze ICT-studenten komen bij u thuis. Trage laptop, wifi-problemen, scherm kapot, batterij leeg. Vanaf €14,50/kwartier. Bel 06-42827860!',
  keywords: [
    'hulp bij laptop problemen',
    'laptop problemen oplossen',
    'laptop hulp aan huis',
    'laptop reparatie aan huis',
    'laptop is traag',
    'laptop doet het niet',
    'laptop hulp thuis',
    'laptop problemen',
    'laptop laten repareren',
    'laptop scherm problemen'
  ],
  alternates: { canonical: '/hulp-bij-laptop-problemen' },
  openGraph: {
    title: 'Hulp bij Laptop Problemen - Reparatie aan Huis',
    description: 'Laptop problemen? Onze studenten komen bij u thuis en lossen het op. Snel en betaalbaar.',
    images: ['/og-image.webp'],
    url: 'https://hulpmetit.nl/hulp-bij-laptop-problemen',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hulp bij Laptop Problemen',
    description: 'Laptop reparatie aan huis door HBO-opgeleide studenten.',
  },
  robots: { index: true, follow: true },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
