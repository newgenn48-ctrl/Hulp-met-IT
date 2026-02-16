import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Zoetermeer | Hulp Met IT',
  description: 'Computerhulp aan huis in Zoetermeer voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis zoetermeer',
    'computer reparatie zoetermeer',
    'laptop reparatie zoetermeer',
    'ICT student zoetermeer',
    'pc hulp zoetermeer',
    'computer student zoetermeer',
    'zoetermeer computerhulp avond',
    'zoetermeer IT hulp weekend',
    'computerhulp zoetermeer spoed',
    'betaalbare IT hulp zoetermeer'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Zoetermeer | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Zoetermeer door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Zoetermeer | ICT Student aan Huis',
    description: 'Computerhulp aan huis Zoetermeer. Student komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-zoetermeer',
  },
}

export default function ComputerhulpAanHuisZoetermeerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
