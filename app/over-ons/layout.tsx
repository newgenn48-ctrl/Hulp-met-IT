import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Over Hulp met IT - HBO-opgeleide ICT-studenten bij u thuis',
  description: 'Leer meer over Hulp met IT: wie we zijn, onze missie en waarom mensen ons vertrouwen. Persoonlijke computerhulp door HBO-opgeleide ICT-studenten aan huis.',
  keywords: [
    'over hulp met IT',
    'ICT studenten',
    'computerhulp aan huis',
    'wie zijn wij',
    'missie hulp met IT',
    'HBO ICT studenten',
    'student aan huis',
    'betaalbare computerhulp',
    'persoonlijke IT hulp',
    'computerhulp nederland',
    'betrouwbare computerhulp',
    'IT service aan huis',
    'hulp met IT team',
    'computerhulp ervaring',
    'geduldige computerhulp',
    'professionele IT hulp thuis'
  ],
  alternates: {
    canonical: '/over-ons',
  },
  openGraph: {
    title: 'Over Ons - Hulp met IT',
    description: 'Persoonlijke IT-service door HBO-opgeleide ICT-studenten bij u aan huis.',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Over Hulp met IT - HBO-opgeleide ICT-studenten'
      }
    ],
    url: 'https://hulpmetit.nl/over-ons',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Over Ons - Hulp met IT',
    description: 'Persoonlijke IT-service door HBO-opgeleide ICT-studenten bij u aan huis.',
    images: ['/og-image.webp']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1
    }
  },
}

export default function OverOnsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
