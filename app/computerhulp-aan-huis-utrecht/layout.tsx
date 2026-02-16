import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Utrecht | Hulp Met IT',
  description: 'Computerhulp aan huis in Utrecht voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis utrecht',
    'computer reparatie utrecht',
    'laptop reparatie utrecht',
    'ICT student utrecht',
    'pc hulp utrecht',
    'computer student utrecht',
    'utrecht computerhulp avond',
    'utrecht IT hulp weekend',
    'computerhulp utrecht spoed',
    'betaalbare IT hulp utrecht'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Utrecht | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Utrecht door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Utrecht | ICT Student aan Huis',
    description: 'Computerhulp aan huis Utrecht. Student komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-utrecht',
  },
}

export default function ComputerhulpAanHuisUtrechtLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
