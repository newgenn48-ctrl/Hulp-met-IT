import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp Enschede | Specialist komt naar u',
  description: 'Computerhulp aan huis in Enschede ✓ Ervaren specialisten ✓ Heel Enschede ✓ Van Centrum tot Noord ✓ Transparante tarieven ✓ Bel ons',
  keywords: [
    'computerhulp aan huis enschede',
    'computer reparatie enschede',
    'laptop reparatie enschede',
    'pc hulp enschede',
    'IT hulp enschede',
    'computer specialist enschede',
    'enschede computerhulp avond',
    'enschede IT hulp weekend',
    'computerhulp enschede spoed',
    'betaalbare IT hulp enschede'
  ],
  openGraph: {
    title: 'Computerhulp aan Huis Enschede | Computer Specialist',
    description: 'Computerhulp aan huis in heel Enschede ✓ Ervaren specialisten komen bij u ✓ Van Centrum tot Noord ✓ Transparante tarieven',
    images: ['/images/computerhulp-enschede-og.webp'],
    url: '/computerhulp-aan-huis-enschede',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan Huis Enschede | Computer Specialist',
    description: 'Computerhulp aan huis Enschede ✓ Specialist komt bij u ✓ Heel Enschede ✓ Transparante tarieven',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-enschede',
  },
}

export default function ComputerhulpAanHuisEnschedeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}