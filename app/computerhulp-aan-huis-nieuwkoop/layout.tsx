import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Nieuwkoop | Hulp met IT',
  description: 'Computerhulp aan huis in Nieuwkoop door HBO-opgeleide ICT-studenten. Hulp in Nieuwkoop, Ter Aar, Noorden en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis nieuwkoop',
    'computer reparatie nieuwkoop',
    'laptop reparatie nieuwkoop',
    'ICT student nieuwkoop',
    'pc hulp nieuwkoop',
    'computer student nieuwkoop',
    'nieuwkoop computerhulp avond',
    'nieuwkoop IT hulp weekend',
    'computerhulp nieuwkoop spoed',
    'betaalbare IT hulp nieuwkoop',
    'wifi problemen nieuwkoop',
    'internet hulp nieuwkoop',
    'printer installatie nieuwkoop',
    'virus verwijderen nieuwkoop',
    'computerhulp nieuwkoop',
    'ict hulp ter aar',
    'computer reparatie noorden',
    'laptop hulp zevenhoven',
    'pc hulp nieuwveen',
    'it hulp langeraar',
    'it service nieuwkoop',
    'computer problemen nieuwkoop',
    'it hulp aan huis nieuwkoop'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Nieuwkoop | Hulp met IT',
    description: 'Computerhulp aan huis in Nieuwkoop door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-nieuwkoop',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Nieuwkoop - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Nieuwkoop | Hulp met IT',
    description: 'Computerhulp aan huis in Nieuwkoop. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-nieuwkoop'
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

export default function ComputerhulpAanHuisNieuwkoopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
