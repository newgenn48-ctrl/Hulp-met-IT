import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp Tilburg | Specialist komt naar u',
  description: 'Computerhulp aan huis in Tilburg ✓ Ervaren specialisten ✓ Heel Tilburg ✓ Transparante tarieven ✓ Bel ons',
  keywords: [
    'computerhulp aan huis tilburg',
    'computer reparatie tilburg',
    'laptop reparatie tilburg',
    'pc hulp tilburg',
    'IT hulp tilburg',
    'computer specialist tilburg',
    'tilburg computerhulp avond',
    'tilburg IT hulp weekend',
    'computerhulp tilburg spoed',
    'betaalbare IT hulp tilburg'
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-tilburg',
  },
}

export default function ComputerhulpAanHuisTilburgLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}