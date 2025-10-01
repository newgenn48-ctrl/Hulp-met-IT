import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp Haarlem | Specialist komt naar u',
  description: 'Computerhulp aan huis in Haarlem ✓ Ervaren specialisten ✓ Heel Haarlem ✓ Van Centrum tot Noord ✓ Transparante tarieven ✓ Bel ons',
  keywords: [
    'computerhulp aan huis haarlem',
    'computer reparatie haarlem',
    'laptop reparatie haarlem',
    'pc hulp haarlem',
    'IT hulp haarlem',
    'computer specialist haarlem',
    'haarlem computerhulp avond',
    'haarlem IT hulp weekend',
    'computerhulp haarlem spoed',
    'betaalbare IT hulp haarlem'
  ],
  openGraph: {
    title: 'Computerhulp aan Huis Haarlem | Computer Specialist',
    description: 'Computerhulp aan huis in heel Haarlem ✓ Ervaren specialisten komen bij u ✓ Van Centrum tot Noord ✓ Transparante tarieven',
    images: ['/images/computerhulp-haarlem-og.webp'],
    url: '/computerhulp-aan-huis-haarlem',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan Huis Haarlem | Computer Specialist',
    description: 'Computerhulp aan huis Haarlem ✓ Specialist komt bij u ✓ Heel Haarlem ✓ Transparante tarieven',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-haarlem',
  },
}

export default function ComputerhulpAanHuisHaarlemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}