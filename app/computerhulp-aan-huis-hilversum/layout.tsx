import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp Hilversum | Specialist komt naar u',
  description: 'Computerhulp aan huis in Hilversum ✓ Ervaren specialisten ✓ Heel Hilversum ✓ Van Centrum tot Kerkelanden ✓ Transparante tarieven ✓ Bel ons',
  keywords: [
    'computerhulp aan huis hilversum',
    'computer reparatie hilversum',
    'laptop reparatie hilversum',
    'pc hulp hilversum',
    'IT hulp hilversum',
    'computer specialist hilversum',
    'hilversum computerhulp avond',
    'hilversum IT hulp weekend',
    'computerhulp hilversum spoed',
    'betaalbare IT hulp hilversum'
  ],
  openGraph: {
    title: 'Computerhulp aan Huis Hilversum | Computer Specialist',
    description: 'Computerhulp aan huis in heel Hilversum ✓ Ervaren specialisten komen bij u ✓ Van Centrum tot Kerkelanden ✓ Transparante tarieven',
    images: ['/images/computerhulp-hilversum-og.webp'],
    url: '/computerhulp-aan-huis-hilversum',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan Huis Hilversum | Computer Specialist',
    description: 'Computerhulp aan huis Hilversum ✓ Specialist komt bij u ✓ Heel Hilversum ✓ Transparante tarieven',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-hilversum',
  },
}

export default function ComputerhulpAanHuisHilversumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
