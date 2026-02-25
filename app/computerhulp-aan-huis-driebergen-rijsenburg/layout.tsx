import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Driebergen-Rijsenburg | Hulp met IT',
  description: 'Computerhulp aan huis in Driebergen-Rijsenburg door HBO-opgeleide ICT-studenten. Hulp in Driebergen Centrum, Rijsenburg, Driebergen-Zuid en omgeving. €14,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis driebergen-rijsenburg',
    'computer reparatie driebergen-rijsenburg',
    'laptop reparatie driebergen-rijsenburg',
    'ICT student driebergen-rijsenburg',
    'pc hulp driebergen-rijsenburg',
    'computer student driebergen-rijsenburg',
    'driebergen-rijsenburg computerhulp avond',
    'driebergen-rijsenburg IT hulp weekend',
    'computerhulp driebergen-rijsenburg spoed',
    'betaalbare IT hulp driebergen-rijsenburg',
    'wifi problemen driebergen-rijsenburg',
    'internet hulp driebergen-rijsenburg',
    'printer installatie driebergen-rijsenburg',
    'virus verwijderen driebergen-rijsenburg',
    'computerhulp driebergen centrum',
    'ict hulp rijsenburg',
    'computer reparatie driebergen-zuid',
    'laptop hulp driebergen-noord',
    'pc hulp doorn',
    'it hulp austerlitz',
    'computerhulp driebergen-rijsenburg',
    'it service driebergen-rijsenburg',
    'computer problemen driebergen-rijsenburg'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Driebergen-Rijsenburg | Hulp met IT',
    description: 'Computerhulp aan huis in Driebergen-Rijsenburg door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-driebergen-rijsenburg',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Driebergen-Rijsenburg - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Driebergen-Rijsenburg | Hulp met IT',
    description: 'Computerhulp aan huis in Driebergen-Rijsenburg. HBO ICT-student komt bij u thuis. €14,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-driebergen-rijsenburg'
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
  }
}

export default function ComputerhulpAanHuisDriebergenRijsenburgLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
