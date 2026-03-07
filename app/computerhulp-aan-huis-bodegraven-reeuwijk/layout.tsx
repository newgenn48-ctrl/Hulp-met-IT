import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Bodegraven-Reeuwijk | Hulp met IT',
  description: 'Computerhulp aan huis in Bodegraven-Reeuwijk door HBO-opgeleide ICT-studenten. Hulp in Bodegraven, Reeuwijk-Dorp, Reeuwijk-Brug en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis bodegraven-reeuwijk',
    'computer reparatie bodegraven-reeuwijk',
    'laptop reparatie bodegraven-reeuwijk',
    'ICT student bodegraven-reeuwijk',
    'pc hulp bodegraven-reeuwijk',
    'computer student bodegraven-reeuwijk',
    'bodegraven-reeuwijk computerhulp avond',
    'bodegraven-reeuwijk IT hulp weekend',
    'computerhulp bodegraven-reeuwijk spoed',
    'betaalbare IT hulp bodegraven-reeuwijk',
    'wifi problemen bodegraven-reeuwijk',
    'internet hulp bodegraven-reeuwijk',
    'printer installatie bodegraven-reeuwijk',
    'virus verwijderen bodegraven-reeuwijk',
    'computerhulp bodegraven',
    'ict hulp reeuwijk-dorp',
    'computer reparatie reeuwijk-brug',
    'laptop hulp nieuwerbrug',
    'pc hulp driebruggen',
    'it hulp waarder',
    'computerhulp bodegraven-reeuwijk',
    'it service bodegraven-reeuwijk',
    'computer problemen bodegraven-reeuwijk'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Bodegraven-Reeuwijk | Hulp met IT',
    description: 'Computerhulp aan huis in Bodegraven-Reeuwijk door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-bodegraven-reeuwijk',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Bodegraven-Reeuwijk - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Bodegraven-Reeuwijk | Hulp met IT',
    description: 'Computerhulp aan huis in Bodegraven-Reeuwijk. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-bodegraven-reeuwijk'
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

export default function ComputerhulpAanHuisBodegravenReeuwijkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
