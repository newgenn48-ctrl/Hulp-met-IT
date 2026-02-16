import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Almere | Hulp Met IT',
  description: 'Computerhulp aan huis in Almere voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis almere',
    'computer reparatie almere',
    'laptop reparatie almere',
    'ICT student almere',
    'pc hulp almere',
    'computer student almere',
    'almere computerhulp avond',
    'almere IT hulp weekend',
    'computerhulp almere spoed',
    'betaalbare IT hulp almere'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Almere | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Almere door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Almere | ICT Student aan Huis',
    description: 'Computerhulp aan huis Almere. Student komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-almere',
  },
}

export default function ComputerhulpAanHuisAlmereLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
