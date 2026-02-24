import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Middelburg | Hulp met IT',
  description: 'ICT Student aan huis in Middelburg voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Middelburg Centrum, Middelburg Noord, Middelburg Oost en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis middelburg',
    'computerhulp middelburg',
    'ict hulp middelburg',
    'computer reparatie middelburg',
    'laptop hulp middelburg',
    'it student middelburg',
    'betaalbare computerhulp middelburg',
    'computer problemen middelburg',
    'wifi problemen middelburg',
    'internet hulp middelburg',
    'computerhulp middelburg centrum',
    'ict hulp middelburg noord',
    'computer reparatie middelburg oost',
    'laptop hulp middelburg west',
    'student computerhulp middelburg zuid',
    'it hulp vlissingen',
    'it service middelburg',
    'laptop reparatie middelburg',
    'it hulp aan huis middelburg'
  ],
  openGraph: {
    title: 'Student aan huis Middelburg | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Middelburg. Wij komen bij u thuis in Middelburg en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-middelburg',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Middelburg - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Middelburg | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Middelburg. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-middelburg'
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

export default function StudentAanHuisMiddelburgLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
