import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Amsterdam | Hulp met IT',
  description: 'ICT Student aan huis in Amsterdam voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Amsterdam Centrum, Amsterdam Noord, Amsterdam Oost en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis amsterdam',
    'computerhulp amsterdam',
    'ict hulp amsterdam',
    'computer reparatie amsterdam',
    'laptop hulp amsterdam',
    'it student amsterdam',
    'betaalbare computerhulp amsterdam',
    'computer problemen amsterdam',
    'wifi problemen amsterdam',
    'internet hulp amsterdam',
    'computerhulp amsterdam centrum',
    'ict hulp amsterdam noord',
    'computer reparatie amsterdam oost',
    'laptop hulp amsterdam west',
    'student computerhulp amsterdam zuid',
    'it hulp amsterdam zuidoost',
    'it service amsterdam',
    'laptop reparatie amsterdam',
    'it hulp aan huis amsterdam'
  ],
  openGraph: {
    title: 'Student aan huis Amsterdam | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Amsterdam. Wij komen bij u thuis in Amsterdam en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-amsterdam',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Amsterdam - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Amsterdam | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Amsterdam. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-amsterdam'
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

export default function StudentAanHuisAmsterdamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
