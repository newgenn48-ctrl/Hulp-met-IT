import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Helmond | Hulp Met IT',
  description: 'Computerhulp aan huis in Helmond voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis helmond',
    'computer reparatie helmond',
    'laptop reparatie helmond',
    'ICT student helmond',
    'pc hulp helmond',
    'computer student helmond',
    'helmond computerhulp avond',
    'helmond IT hulp weekend',
    'computerhulp helmond spoed',
    'betaalbare IT hulp helmond'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Helmond | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Helmond door HBO-opgeleide ICT-studenten. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Helmond | ICT Student aan Huis',
    description: 'Computerhulp aan huis Helmond. Student komt bij u. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-helmond',
  },
}

export default function ComputerhulpAanHuisHelmondLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
