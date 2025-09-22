import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan Huis Tilburg | Specialist komt bij u | Hulp met IT',
  description: 'Computerhulp aan huis in Tilburg ✓ Ervaren specialisten ✓ Heel Tilburg ✓ Transparante tarieven ✓ Bel 06-42827860',
  keywords: [
    'computerhulp aan huis tilburg',
    'computer reparatie tilburg',
    'laptop reparatie tilburg',
    'pc hulp tilburg',
    'virus verwijdering tilburg',
    'computer specialist tilburg',
    'IT hulp tilburg'
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