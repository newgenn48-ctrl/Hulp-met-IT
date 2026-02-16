import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Eindhoven | Hulp Met IT',
  description: 'Computerhulp aan huis in Eindhoven voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis eindhoven',
    'computer reparatie eindhoven',
    'laptop reparatie eindhoven',
    'ICT student eindhoven',
    'pc hulp eindhoven',
    'computer student eindhoven',
    'eindhoven computerhulp avond',
    'eindhoven IT hulp weekend',
    'computerhulp eindhoven spoed',
    'betaalbare IT hulp eindhoven'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Eindhoven | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Eindhoven door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Eindhoven | ICT Student aan Huis',
    description: 'Computerhulp aan huis Eindhoven. Student komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-eindhoven',
  },
}

export default function ComputerhulpAanHuisEindhovenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
