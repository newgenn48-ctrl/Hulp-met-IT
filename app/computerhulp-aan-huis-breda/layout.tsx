import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Breda | Hulp Met IT',
  description: 'Computerhulp aan huis in Breda voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis breda',
    'computer reparatie breda',
    'laptop reparatie breda',
    'ICT student breda',
    'pc hulp breda',
    'computer student breda',
    'breda computerhulp avond',
    'breda IT hulp weekend',
    'computerhulp breda spoed',
    'betaalbare IT hulp breda'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Breda | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Breda door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Breda | ICT Student aan Huis',
    description: 'Computerhulp aan huis Breda. Student komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-breda',
  },
}

export default function ComputerhulpAanHuisBredaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
