import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Rotterdam | Hulp Met IT',
  description: 'Computerhulp aan huis in Rotterdam voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis rotterdam',
    'computer reparatie rotterdam',
    'laptop reparatie rotterdam',
    'ICT student rotterdam',
    'pc hulp rotterdam',
    'computer student rotterdam',
    'rotterdam computerhulp avond',
    'rotterdam IT hulp weekend',
    'computerhulp rotterdam spoed',
    'betaalbare IT hulp rotterdam'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Rotterdam | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Rotterdam door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Rotterdam | ICT Student aan Huis',
    description: 'Computerhulp aan huis Rotterdam. Student komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-rotterdam',
  },
}

export default function ComputerhulpAanHuisRotterdamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
