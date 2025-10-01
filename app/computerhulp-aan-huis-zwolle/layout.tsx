import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp Zwolle | Specialist komt naar u',
  description: 'Computerhulp aan huis in Zwolle ✓ Ervaren specialisten ✓ Heel Zwolle ✓ Van Centrum tot Zuid ✓ Transparante tarieven ✓ Bel ons',
  keywords: [
    'computerhulp aan huis zwolle',
    'computer reparatie zwolle',
    'laptop reparatie zwolle',
    'pc hulp zwolle',
    'IT hulp zwolle',
    'computer specialist zwolle',
    'zwolle computerhulp avond',
    'zwolle IT hulp weekend',
    'computerhulp zwolle spoed',
    'betaalbare IT hulp zwolle'
  ],
  openGraph: {
    title: 'Computerhulp aan Huis Zwolle | Computer Specialist',
    description: 'Computerhulp aan huis in heel Zwolle ✓ Ervaren specialisten komen bij u ✓ Van Centrum tot Zuid ✓ Transparante tarieven',
    images: ['/images/computerhulp-zwolle-og.webp'],
    url: '/computerhulp-aan-huis-zwolle',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan Huis Zwolle | Computer Specialist',
    description: 'Computerhulp aan huis Zwolle ✓ Specialist komt bij u ✓ Heel Zwolle ✓ Transparante tarieven',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-zwolle',
  },
}

export default function ComputerhulpAanHuisZwolleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}