import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Zwolle | Hulp Met IT',
  description: 'Computerhulp aan huis in Zwolle voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis zwolle',
    'computer reparatie zwolle',
    'laptop reparatie zwolle',
    'ICT student zwolle',
    'pc hulp zwolle',
    'computer student zwolle',
    'zwolle computerhulp avond',
    'zwolle IT hulp weekend',
    'computerhulp zwolle spoed',
    'betaalbare IT hulp zwolle'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Zwolle | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Zwolle door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Zwolle | ICT Student aan Huis',
    description: 'Computerhulp aan huis Zwolle. Student komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-zwolle',
  },
}

export default function ComputerhulpAanHuisZwolleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
