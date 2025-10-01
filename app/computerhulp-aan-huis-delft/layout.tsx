import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp Delft | Specialist komt naar u',
  description: 'Computerhulp aan huis in Delft ✓ Ervaren specialisten ✓ Heel Delft ✓ Van Centrum tot Tanthof ✓ Transparante tarieven ✓ Bel ons',
  keywords: [
    'computerhulp aan huis delft',
    'computer reparatie delft',
    'laptop reparatie delft',
    'pc hulp delft',
    'IT hulp delft',
    'computer specialist delft',
    'delft computerhulp avond',
    'delft IT hulp weekend',
    'computerhulp delft spoed',
    'betaalbare IT hulp delft'
  ],
  openGraph: {
    title: 'Computerhulp aan Huis Delft | Computer Specialist',
    description: 'Computerhulp aan huis in heel Delft ✓ Ervaren specialisten komen bij u ✓ Van Centrum tot Tanthof ✓ Transparante tarieven',
    images: ['/images/computerhulp-delft-og.webp'],
    url: '/computerhulp-aan-huis-delft',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan Huis Delft | Computer Specialist',
    description: 'Computerhulp aan huis Delft ✓ Specialist komt bij u ✓ Heel Delft ✓ Transparante tarieven',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-delft',
  },
}

export default function ComputerhulpAanHuisDelftLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}