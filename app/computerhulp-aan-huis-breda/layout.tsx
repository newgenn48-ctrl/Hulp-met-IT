import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp Breda | Specialist komt naar u',
  description: 'Computerhulp aan huis in Breda ✓ Ervaren specialisten ✓ Heel Breda ✓ Van Centrum tot Noord ✓ Transparante tarieven ✓ Bel ons',
  keywords: [
    'computerhulp aan huis breda',
    'computer reparatie breda',
    'laptop reparatie breda',
    'pc hulp breda',
    'IT hulp breda',
    'computer specialist breda',
    'breda computerhulp avond',
    'breda IT hulp weekend',
    'computerhulp breda spoed',
    'betaalbare IT hulp breda'
  ],
  openGraph: {
    title: 'Computerhulp aan Huis Breda | Computer Specialist',
    description: 'Computerhulp aan huis in heel Breda ✓ Ervaren specialisten komen bij u ✓ Van Centrum tot Noord ✓ Transparante tarieven',
    images: ['/images/computerhulp-breda-og.webp'],
    url: '/computerhulp-aan-huis-breda',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan Huis Breda | Computer Specialist',
    description: 'Computerhulp aan huis Breda ✓ Specialist komt bij u ✓ Heel Breda ✓ Transparante tarieven',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-breda',
  },
}

export default function ComputerhulpAanHuisBredaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}