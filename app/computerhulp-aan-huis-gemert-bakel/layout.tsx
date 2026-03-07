import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Gemert-Bakel | Hulp met IT',
  description: 'Computerhulp aan huis in Gemert-Bakel door HBO-opgeleide ICT-studenten. Hulp in Gemert, Bakel, De Mortel en omgeving. €15,50/kwartier. 7 dagen per week!',
  keywords: [
    'computerhulp aan huis gemert-bakel',
    'computer reparatie gemert-bakel',
    'laptop reparatie gemert-bakel',
    'ICT student gemert-bakel',
    'pc hulp gemert-bakel',
    'computer student gemert-bakel',
    'gemert-bakel computerhulp avond',
    'gemert-bakel IT hulp weekend',
    'computerhulp gemert-bakel spoed',
    'betaalbare IT hulp gemert-bakel',
    'wifi problemen gemert-bakel',
    'internet hulp gemert-bakel',
    'printer installatie gemert-bakel',
    'virus verwijderen gemert-bakel',
    'computerhulp gemert',
    'ict hulp bakel',
    'computer reparatie de mortel',
    'laptop hulp elsendorp',
    'pc hulp de rips',
    'it hulp handel',
    'computerhulp gemert-bakel',
    'it service gemert-bakel',
    'computer problemen gemert-bakel'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Gemert-Bakel | Hulp met IT',
    description: 'Computerhulp aan huis in Gemert-Bakel door HBO-opgeleide ICT-studenten. €15,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    url: 'https://hulpmetit.nl/computerhulp-aan-huis-gemert-bakel',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp aan huis Gemert-Bakel - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Gemert-Bakel | Hulp met IT',
    description: 'Computerhulp aan huis in Gemert-Bakel. HBO ICT-student komt bij u thuis. €15,50/kwartier + €10 voorrijkosten.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-gemert-bakel'
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

export default function ComputerhulpAanHuisGemertBakelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
