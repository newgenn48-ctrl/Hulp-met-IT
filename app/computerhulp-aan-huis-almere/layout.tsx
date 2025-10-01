import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp Almere | Specialist komt naar u',
  description: 'Computerhulp aan huis in Almere ✓ Ervaren specialisten ✓ Heel Almere ✓ Van Centrum tot Noord ✓ Transparante tarieven ✓ Bel ons',
  keywords: [
    'computerhulp aan huis almere',
    'computer reparatie almere',
    'laptop reparatie almere',
    'pc hulp almere',
    'IT hulp almere',
    'computer specialist almere',
    'almere computerhulp avond',
    'almere IT hulp weekend',
    'computerhulp almere spoed',
    'betaalbare IT hulp almere'
  ],
  openGraph: {
    title: 'Computerhulp aan Huis Almere | Computer Specialist',
    description: 'Computerhulp aan huis in heel Almere ✓ Ervaren specialisten komen bij u ✓ Van Centrum tot Noord ✓ Transparante tarieven',
    images: ['/images/computerhulp-almere-og.webp'],
    url: '/computerhulp-aan-huis-almere',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan Huis Almere | Computer Specialist',
    description: 'Computerhulp aan huis Almere ✓ Specialist komt bij u ✓ Heel Almere ✓ Transparante tarieven',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-almere',
  },
}

export default function ComputerhulpAanHuisAlmereLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}