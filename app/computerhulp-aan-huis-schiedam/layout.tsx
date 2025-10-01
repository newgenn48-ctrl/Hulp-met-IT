import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp Schiedam | Specialist komt naar u',
  description: 'Computerhulp aan huis in Schiedam ✓ Ervaren specialisten ✓ Heel Schiedam ✓ Van Centrum tot Nieuwland ✓ Transparante tarieven ✓ Bel ons',
  keywords: [
    'computerhulp aan huis schiedam',
    'computer reparatie schiedam',
    'laptop reparatie schiedam',
    'pc hulp schiedam',
    'IT hulp schiedam',
    'computer specialist schiedam',
    'schiedam computerhulp avond',
    'schiedam IT hulp weekend',
    'computerhulp schiedam spoed',
    'betaalbare IT hulp schiedam'
  ],
  openGraph: {
    title: 'Computerhulp aan Huis Schiedam | Computer Specialist',
    description: 'Computerhulp aan huis in heel Schiedam ✓ Ervaren specialisten komen bij u ✓ Van Centrum tot Nieuwland ✓ Transparante tarieven',
    images: ['/images/computerhulp-schiedam-og.webp'],
    url: '/computerhulp-aan-huis-schiedam',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan Huis Schiedam | Computer Specialist',
    description: 'Computerhulp aan huis Schiedam ✓ Specialist komt bij u ✓ Heel Schiedam ✓ Transparante tarieven',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-schiedam',
  },
}

export default function ComputerhulpAanHuisSchiedamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}