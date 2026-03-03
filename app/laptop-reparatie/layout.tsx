import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Laptop Reparatie aan Huis - Snel & Vakkundig | Hulp met IT',
  description: 'Laptop reparatie aan huis door HBO-opgeleide ICT-studenten. Traag, vastgelopen of kapot? Wij komen langs en repareren het. Vanaf €14,50 per kwartier.',
  keywords: [
    'laptop reparatie',
    'laptop reparatie aan huis',
    'laptop laten repareren',
    'laptop kapot',
    'laptop traag',
    'laptop scherm reparatie',
    'laptop reparateur',
    'laptop hulp aan huis',
    'laptop laten maken',
    'laptop problemen oplossen',
    'laptop reparatie thuis',
    'laptop scherm kapot',
    'laptop reparatie service',
    'laptop reparatie kosten',
    'snelle laptop reparatie',
    'betaalbare laptop reparatie',
    'laptop batterij probleem',
    'laptop start niet op'
  ],
  openGraph: {
    title: 'Laptop Reparatie aan Huis | Hulp met IT',
    description: 'Laptop reparatie aan huis door HBO-opgeleide ICT-studenten. Vanaf €14,50 per kwartier + €10 voorrijkosten.',
    url: 'https://hulpmetit.nl/laptop-reparatie',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Laptop reparatie aan huis - Hulp met IT'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laptop Reparatie aan Huis | Hulp met IT',
    description: 'Laptop reparatie aan huis door HBO-opgeleide ICT-studenten. Vanaf €14,50 per kwartier.',
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
  alternates: {
    canonical: '/laptop-reparatie',
  },
}

export default function LaptopReparatieLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
