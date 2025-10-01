import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp Leiden | Specialist komt naar u',
  description: 'Computerhulp aan huis in Leiden ✓ Ervaren specialisten ✓ Heel Leiden ✓ Van Centrum tot wijken ✓ Transparante tarieven ✓ Bel ons',
  keywords: [
    'computerhulp aan huis leiden',
    'computer reparatie leiden',
    'laptop reparatie leiden',
    'pc hulp leiden',
    'IT hulp leiden',
    'computer specialist leiden',
    'leiden computerhulp avond',
    'leiden IT hulp weekend',
    'computerhulp leiden spoed',
    'betaalbare IT hulp leiden'
  ],
  openGraph: {
    title: 'Computerhulp aan Huis Leiden | Computer Specialist',
    description: 'Computerhulp aan huis in heel Leiden ✓ Ervaren specialisten komen bij u ✓ Transparante tarieven',
    images: ['/images/computerhulp-leiden-og.webp'],
    url: '/computerhulp-aan-huis-leiden',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan Huis Leiden | Computer Specialist',
    description: 'Computerhulp aan huis Leiden ✓ Specialist komt bij u ✓ Heel Leiden ✓ Transparante tarieven',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-leiden',
  },
}

export default function ComputerhulpAanHuisLeidenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}