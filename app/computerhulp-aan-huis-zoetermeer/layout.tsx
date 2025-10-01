import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp Zoetermeer | Specialist komt naar u',
  description: 'Computerhulp aan huis in Zoetermeer ✓ Ervaren specialisten ✓ Heel Zoetermeer ✓ Van Centrum tot Rokkeveen ✓ Transparante tarieven ✓ Bel ons',
  keywords: [
    'computerhulp aan huis zoetermeer',
    'computer reparatie zoetermeer',
    'laptop reparatie zoetermeer',
    'pc hulp zoetermeer',
    'IT hulp zoetermeer',
    'computer specialist zoetermeer',
    'zoetermeer computerhulp avond',
    'zoetermeer IT hulp weekend',
    'computerhulp zoetermeer spoed',
    'betaalbare IT hulp zoetermeer'
  ],
  openGraph: {
    title: 'Computerhulp aan Huis Zoetermeer | Computer Specialist',
    description: 'Computerhulp aan huis in heel Zoetermeer ✓ Ervaren specialisten komen bij u ✓ Van Centrum tot Rokkeveen ✓ Transparante tarieven',
    images: ['/images/computerhulp-zoetermeer-og.webp'],
    url: '/computerhulp-aan-huis-zoetermeer',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan Huis Zoetermeer | Computer Specialist',
    description: 'Computerhulp aan huis Zoetermeer ✓ Specialist komt bij u ✓ Heel Zoetermeer ✓ Transparante tarieven',
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