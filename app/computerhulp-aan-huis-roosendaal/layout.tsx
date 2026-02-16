import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Roosendaal | Hulp Met IT',
  description: 'Computerhulp aan huis in Roosendaal voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis roosendaal',
    'computer reparatie roosendaal',
    'laptop reparatie roosendaal',
    'ICT student roosendaal',
    'pc hulp roosendaal',
    'computer student roosendaal',
    'roosendaal computerhulp avond',
    'roosendaal IT hulp weekend',
    'computerhulp roosendaal spoed',
    'betaalbare IT hulp roosendaal'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Roosendaal | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Roosendaal door HBO-opgeleide ICT-studenten. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Roosendaal | ICT Student aan Huis',
    description: 'Computerhulp aan huis Roosendaal. Student komt bij u. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-roosendaal',
  },
}

export default function ComputerhulpAanHuisRoosendaalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
