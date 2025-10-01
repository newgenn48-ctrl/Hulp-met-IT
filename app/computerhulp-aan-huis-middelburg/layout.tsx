import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp Middelburg | Specialist komt naar u',
  description: 'Computerhulp aan huis in Middelburg ✓ Ervaren specialisten ✓ Heel Middelburg ✓ Van Centrum tot Noord ✓ Transparante tarieven ✓ Bel ons',
  keywords: [
    'computerhulp aan huis middelburg',
    'computer reparatie middelburg',
    'laptop reparatie middelburg',
    'pc hulp middelburg',
    'IT hulp middelburg',
    'computer specialist middelburg',
    'middelburg computerhulp avond',
    'middelburg IT hulp weekend',
    'computerhulp middelburg spoed',
    'betaalbare IT hulp middelburg'
  ],
  openGraph: {
    title: 'Computerhulp aan Huis Middelburg | Computer Specialist',
    description: 'Computerhulp aan huis in heel Middelburg ✓ Ervaren specialisten komen bij u ✓ Van Centrum tot Noord ✓ Transparante tarieven',
    images: ['/images/computerhulp-middelburg-og.webp'],
    url: '/computerhulp-aan-huis-middelburg',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan Huis Middelburg | Computer Specialist',
    description: 'Computerhulp aan huis Middelburg ✓ Specialist komt bij u ✓ Heel Middelburg ✓ Transparante tarieven',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-middelburg',
  },
}

export default function ComputerhulpAanHuisMiddelburgLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}