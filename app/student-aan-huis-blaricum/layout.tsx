import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Blaricum | Hulp met IT',
  description: 'ICT Student aan huis in Blaricum voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Blaricum Centrum, Blaricum Noord, Blaricum Oost en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis blaricum',
    'computerhulp blaricum',
    'ict hulp blaricum',
    'computer reparatie blaricum',
    'laptop hulp blaricum',
    'it student blaricum',
    'betaalbare computerhulp blaricum',
    'computer problemen blaricum',
    'wifi problemen blaricum',
    'internet hulp blaricum',
    'computerhulp blaricum centrum',
    'ict hulp blaricum noord',
    'computer reparatie blaricum oost',
    'laptop hulp blaricum west',
    'student computerhulp blaricum zuid',
    'it hulp laren',
    'it service blaricum',
    'laptop reparatie blaricum',
    'it hulp aan huis blaricum'
  ],
  openGraph: {
    title: 'Student aan huis Blaricum | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Blaricum. Wij komen bij u thuis in Blaricum en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-blaricum',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Blaricum - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Blaricum | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Blaricum. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-blaricum'
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

export default function StudentAanHuisBlaricumLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
