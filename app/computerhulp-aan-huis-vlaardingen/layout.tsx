import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp Vlaardingen | Specialist komt naar u',
  description: 'Computerhulp aan huis in Vlaardingen ✓ Ervaren specialisten ✓ Heel Vlaardingen ✓ Van Centrum tot Westwijk ✓ Transparante tarieven ✓ Bel ons',
  keywords: [
    'computerhulp aan huis vlaardingen',
    'computer reparatie vlaardingen',
    'laptop reparatie vlaardingen',
    'pc hulp vlaardingen',
    'IT hulp vlaardingen',
    'computer specialist vlaardingen',
    'vlaardingen computerhulp avond',
    'vlaardingen IT hulp weekend',
    'computerhulp vlaardingen spoed',
    'betaalbare IT hulp vlaardingen'
  ],
  openGraph: {
    title: 'Computerhulp aan Huis Vlaardingen | Computer Specialist',
    description: 'Computerhulp aan huis in heel Vlaardingen ✓ Ervaren specialisten komen bij u ✓ Van Centrum tot Westwijk ✓ Transparante tarieven',
    images: ['/images/computerhulp-vlaardingen-og.webp'],
    url: '/computerhulp-aan-huis-vlaardingen',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan Huis Vlaardingen | Computer Specialist',
    description: 'Computerhulp aan huis Vlaardingen ✓ Specialist komt bij u ✓ Heel Vlaardingen ✓ Transparante tarieven',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-vlaardingen',
  },
}

export default function ComputerhulpAanHuisVlaardingenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}