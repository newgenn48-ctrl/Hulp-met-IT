import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Gemert-Bakel | Hulp met IT',
  description: 'ICT Student aan huis in Gemert-Bakel voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Gemert, Bakel, De Mortel en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis gemert-bakel',
    'computerhulp gemert-bakel',
    'ict hulp gemert-bakel',
    'computer reparatie gemert-bakel',
    'laptop hulp gemert-bakel',
    'it student gemert-bakel',
    'betaalbare computerhulp gemert-bakel',
    'computer problemen gemert-bakel',
    'wifi problemen gemert-bakel',
    'internet hulp gemert-bakel',
    'computerhulp gemert',
    'ict hulp bakel',
    'computer reparatie de mortel',
    'laptop hulp elsendorp',
    'student computerhulp de rips',
    'it hulp handel',
    'it service gemert-bakel',
    'laptop reparatie gemert-bakel',
    'it hulp aan huis gemert-bakel'
  ],
  openGraph: {
    title: 'Student aan huis Gemert-Bakel | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Gemert-Bakel. Wij komen bij u thuis in Gemert-Bakel en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-gemert-bakel',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Gemert-Bakel - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Gemert-Bakel | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Gemert-Bakel. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-gemert-bakel'
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

export default function StudentAanHuisGemertBakelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
