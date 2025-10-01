import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp Nijmegen | Specialist komt naar u',
  description: 'Computerhulp aan huis in Nijmegen ✓ Ervaren specialisten ✓ Heel Nijmegen ✓ Van Centrum tot Noord ✓ Transparante tarieven ✓ Bel ons',
  keywords: [
    'computerhulp aan huis nijmegen',
    'computer reparatie nijmegen',
    'laptop reparatie nijmegen',
    'pc hulp nijmegen',
    'IT hulp nijmegen',
    'computer specialist nijmegen',
    'nijmegen computerhulp avond',
    'nijmegen IT hulp weekend',
    'computerhulp nijmegen spoed',
    'betaalbare IT hulp nijmegen'
  ],
  openGraph: {
    title: 'Computerhulp aan Huis Nijmegen | Computer Specialist',
    description: 'Computerhulp aan huis in heel Nijmegen ✓ Ervaren specialisten komen bij u ✓ Van Centrum tot Noord ✓ Transparante tarieven',
    images: ['/images/computerhulp-nijmegen-og.webp'],
    url: '/computerhulp-aan-huis-nijmegen',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan Huis Nijmegen | Computer Specialist',
    description: 'Computerhulp aan huis Nijmegen ✓ Specialist komt bij u ✓ Heel Nijmegen ✓ Transparante tarieven',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-nijmegen',
  },
}

export default function ComputerhulpAanHuisNijmegenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}