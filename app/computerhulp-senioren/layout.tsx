import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp voor Senioren aan Huis - Geduldig & Duidelijk | Hulp met IT',
  description: 'Computerhulp speciaal voor senioren. Geduldige uitleg in begrijpelijke taal, bij u thuis. Hulp met tablet, laptop, e-mail, internet en meer. Vanaf €14,50 per kwartier.',
  keywords: [
    'computerhulp senioren',
    'computerhulp ouderen',
    'computerhulp aan huis senioren',
    'computer hulp voor ouderen',
    'tablet hulp senioren',
    'internet hulp ouderen',
    'laptop hulp senioren',
    'e-mail hulp ouderen',
    'digitale hulp senioren',
    'computercursus senioren aan huis',
    'hulp met tablet',
    'hulp met smartphone senioren',
    'ict hulp ouderen'
  ],
  openGraph: {
    title: 'Computerhulp voor Senioren aan Huis | Hulp met IT',
    description: 'Geduldige computerhulp voor senioren bij u thuis. Begrijpelijke uitleg, geen jargon. Vanaf €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/computerhulp-senioren',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
    images: ['/og-image.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp voor Senioren aan Huis | Hulp met IT',
    description: 'Geduldige computerhulp voor senioren bij u thuis. Begrijpelijke uitleg, geen jargon.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-senioren',
  },
}

export default function ComputerhulpSeniorenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
