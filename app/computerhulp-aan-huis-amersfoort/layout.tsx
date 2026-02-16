import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Amersfoort | Hulp Met IT',
  description: 'Computerhulp aan huis in Amersfoort voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis amersfoort',
    'computer reparatie amersfoort',
    'laptop reparatie amersfoort',
    'ICT student amersfoort',
    'pc hulp amersfoort',
    'computer student amersfoort',
    'amersfoort computerhulp avond',
    'amersfoort IT hulp weekend',
    'computerhulp amersfoort spoed',
    'betaalbare IT hulp amersfoort'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Amersfoort | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Amersfoort door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Amersfoort | ICT Student aan Huis',
    description: 'Computerhulp aan huis Amersfoort. Student komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-amersfoort',
  },
}

export default function ComputerhulpAanHuisAmersfoortLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
