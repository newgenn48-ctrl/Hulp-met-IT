import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Laren | Hulp met IT',
  description: 'Computerhulp aan huis in Laren door HBO-opgeleide ICT-studenten. Hulp in Laren Centrum, Laren Noord, Laren Oost en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis laren',
    'computer reparatie laren',
    'laptop reparatie laren',
    'ICT student laren',
    'pc hulp laren',
    'computer student laren',
    'laren computerhulp avond',
    'laren IT hulp weekend',
    'computerhulp laren spoed',
    'betaalbare IT hulp laren',
    'wifi problemen laren',
    'internet hulp laren',
    'printer installatie laren',
    'virus verwijderen laren',
    'computerhulp laren centrum',
    'ict hulp laren noord',
    'computer reparatie laren oost',
    'laptop hulp laren west',
    'pc hulp laren zuid',
    'it hulp blaricum',
    'computerhulp laren',
    'it service laren',
    'computer problemen laren'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Laren | Hulp met IT',
    description: 'Computerhulp aan huis in Laren door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-laren',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Laren - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Laren | Hulp met IT',
    description: 'Computerhulp aan huis in Laren. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-laren'
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

export default function ComputerhulpAanHuisLarenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
