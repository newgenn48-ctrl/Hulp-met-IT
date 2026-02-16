import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Alphen aan den Rijn | Hulp Met IT',
  description: 'Computerhulp aan huis in Alphen aan den Rijn voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis alphen aan den rijn',
    'computer reparatie alphen aan den rijn',
    'laptop reparatie alphen aan den rijn',
    'ICT student alphen aan den rijn',
    'pc hulp alphen aan den rijn',
    'computer student alphen aan den rijn',
    'alphen aan den rijn computerhulp avond',
    'alphen aan den rijn IT hulp weekend',
    'computerhulp alphen aan den rijn spoed',
    'betaalbare IT hulp alphen aan den rijn'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Alphen aan den Rijn | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Alphen aan den Rijn door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Alphen aan den Rijn | ICT Student aan Huis',
    description: 'Computerhulp aan huis Alphen aan den Rijn. Student komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-alphen-aan-den-rijn',
  },
}

export default function ComputerhulpAanHuisAlphenaandenRijnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
