import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis | Betaalbare IT-hulp aan huis | Hulp met IT',
  description: 'ICT-student aan huis voor betaalbare computerhulp in heel Nederland. HBO-opgeleide studenten helpen met uw laptop, printer, WiFi en meer. €14,50 per kwartier. 7 dagen per week!',
  keywords: [
    'student aan huis',
    'ICT student aan huis',
    'student computerhulp',
    'betaalbare computerhulp',
    'IT student aan huis',
    'betaalbare computer reparatie',
    'student computer service',
    'computerhulp studenten',
    'computer student hulp',
    'IT hulp student',
    'student aan huis nederland',
    'ict hulp aan huis',
    'betaalbare laptop hulp',
    'student aan huis computerhulp',
    'student aan huis senioren',
    'wifi hulp student',
    'printer hulp aan huis',
    'computer hulp ouderen',
    'student it hulp thuis'
  ],
  openGraph: {
    title: 'Student aan huis | Betaalbare IT-hulp aan huis | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten aan huis. €14,50 per kwartier + €10 voorrijkosten. Heel Nederland!',
    url: 'https://hulpmetit.nl/student-aan-huis',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Student aan huis - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis | Hulp met IT',
    description: 'Betaalbare computerhulp door IT-studenten aan huis. €14,50/kwartier. 7 dagen per week!',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis'
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

export default function StudentAanHuisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
