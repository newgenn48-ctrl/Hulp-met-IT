import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Oosterhout | Hulp Met IT',
  description: 'Computerhulp aan huis in Oosterhout voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis oosterhout',
    'computer reparatie oosterhout',
    'laptop reparatie oosterhout',
    'ICT student oosterhout',
    'pc hulp oosterhout',
    'computer student oosterhout',
    'oosterhout computerhulp avond',
    'oosterhout IT hulp weekend',
    'computerhulp oosterhout spoed',
    'betaalbare IT hulp oosterhout'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Oosterhout | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Oosterhout door HBO-opgeleide ICT-studenten. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Oosterhout | ICT Student aan Huis',
    description: 'Computerhulp aan huis Oosterhout. Student komt bij u. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-oosterhout',
  },
}

export default function ComputerhulpAanHuisOosterhoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
