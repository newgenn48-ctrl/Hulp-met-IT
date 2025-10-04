import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Breda | Hulp Met IT',
  description: 'Computerhulp aan huis in Breda voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 voor 3 kwartier. Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis breda',
    'computer reparatie breda',
    'laptop reparatie breda',
    'IT specialist breda',
    'pc hulp breda',
    'computer specialist breda',
    'breda computerhulp avond',
    'breda IT hulp weekend',
    'computerhulp breda spoed',
    'betaalbare IT hulp breda'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Breda | IT-Specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Breda door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 voor 3 kwartier. Ook avond en weekend!',
    images: ['/og-image.webp'],
    url: '/computerhulp-aan-huis-breda',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Breda | IT-Specialisten',
    description: 'Computerhulp aan huis Breda. Specialist komt bij u. Vanaf €53,50 voor 3 kwartier.',
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
