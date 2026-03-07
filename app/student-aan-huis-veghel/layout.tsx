import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Veghel | Hulp met IT',
  description: 'ICT Student aan huis in Veghel voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Veghel Centrum, Veghel Noord, Veghel Zuid en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis veghel',
    'computerhulp veghel',
    'ict hulp veghel',
    'computer reparatie veghel',
    'laptop hulp veghel',
    'it student veghel',
    'betaalbare computerhulp veghel',
    'computer problemen veghel',
    'wifi problemen veghel',
    'internet hulp veghel',
    'computerhulp veghel centrum',
    'ict hulp veghel noord',
    'computer reparatie veghel zuid',
    'laptop hulp eerde',
    'student computerhulp zijtaart',
    'it hulp sint-oedenrode',
    'it service veghel',
    'laptop reparatie veghel',
    'it hulp aan huis veghel'
  ],
  openGraph: {
    title: 'Student aan huis Veghel | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Veghel. Wij komen bij u thuis in Veghel en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-veghel',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Veghel - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Veghel | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Veghel. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-veghel'
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

export default function StudentAanHuisVeghelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
