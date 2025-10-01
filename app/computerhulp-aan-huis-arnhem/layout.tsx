import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp Arnhem | Specialist komt naar u',
  description: 'Computerhulp aan huis in Arnhem ✓ Ervaren specialisten ✓ Heel Arnhem ✓ Van Centrum tot Noord ✓ Transparante tarieven ✓ Bel ons',
  keywords: [
    'computerhulp aan huis arnhem',
    'computer reparatie arnhem',
    'laptop reparatie arnhem',
    'pc hulp arnhem',
    'IT hulp arnhem',
    'computer specialist arnhem',
    'arnhem computerhulp avond',
    'arnhem IT hulp weekend',
    'computerhulp arnhem spoed',
    'betaalbare IT hulp arnhem'
  ],
  openGraph: {
    title: 'Computerhulp aan Huis Arnhem | Computer Specialist',
    description: 'Computerhulp aan huis in heel Arnhem ✓ Ervaren specialisten komen bij u ✓ Van Centrum tot Noord ✓ Transparante tarieven',
    images: ['/images/computerhulp-arnhem-og.webp'],
    url: '/computerhulp-aan-huis-arnhem',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan Huis Arnhem | Computer Specialist',
    description: 'Computerhulp aan huis Arnhem ✓ Specialist komt bij u ✓ Heel Arnhem ✓ Transparante tarieven',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-arnhem',
  },
}

export default function ComputerhulpAanHuisArnhemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}