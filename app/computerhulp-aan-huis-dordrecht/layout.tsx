import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp Dordrecht | Specialist komt naar u',
  description: 'Computerhulp aan huis in Dordrecht ✓ Ervaren specialisten ✓ Heel Dordrecht ✓ Van Centrum tot Sterrenburg ✓ Transparante tarieven ✓ Bel ons',
  keywords: [
    'computerhulp aan huis dordrecht',
    'computer reparatie dordrecht',
    'laptop reparatie dordrecht',
    'pc hulp dordrecht',
    'IT hulp dordrecht',
    'computer specialist dordrecht',
    'dordrecht computerhulp avond',
    'dordrecht IT hulp weekend',
    'computerhulp dordrecht spoed',
    'betaalbare IT hulp dordrecht'
  ],
  openGraph: {
    title: 'Computerhulp aan Huis Dordrecht | Computer Specialist',
    description: 'Computerhulp aan huis in heel Dordrecht ✓ Ervaren specialisten komen bij u ✓ Van Centrum tot Sterrenburg ✓ Transparante tarieven',
    images: ['/images/computerhulp-dordrecht-og.webp'],
    url: '/computerhulp-aan-huis-dordrecht',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan Huis Dordrecht | Computer Specialist',
    description: 'Computerhulp aan huis Dordrecht ✓ Specialist komt bij u ✓ Heel Dordrecht ✓ Transparante tarieven',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-dordrecht',
  },
}

export default function ComputerhulpAanHuisDordrechtLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}