import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Leiden | Hulp Met IT',
  description: 'Computerhulp aan huis in Leiden voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis leiden',
    'computer reparatie leiden',
    'laptop reparatie leiden',
    'ICT student leiden',
    'pc hulp leiden',
    'computer student leiden',
    'leiden computerhulp avond',
    'leiden IT hulp weekend',
    'computerhulp leiden spoed',
    'betaalbare IT hulp leiden'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Leiden | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Leiden door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Leiden | ICT Student aan Huis',
    description: 'Computerhulp aan huis Leiden. Student komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-leiden',
  },
}

export default function ComputerhulpAanHuisLeidenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
