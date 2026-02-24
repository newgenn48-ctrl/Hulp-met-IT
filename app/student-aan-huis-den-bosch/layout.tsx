import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Den Bosch | Hulp met IT',
  description: 'ICT Student aan huis in Den Bosch voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Den Bosch Centrum, Den Bosch Noord, Den Bosch Oost en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis den bosch',
    'computerhulp den bosch',
    'ict hulp den bosch',
    'computer reparatie den bosch',
    'laptop hulp den bosch',
    'it student den bosch',
    'betaalbare computerhulp den bosch',
    'computer problemen den bosch',
    'wifi problemen den bosch',
    'internet hulp den bosch',
    'computerhulp den bosch centrum',
    'ict hulp den bosch noord',
    'computer reparatie den bosch oost',
    'laptop hulp den bosch west',
    'student computerhulp den bosch zuid',
    'it hulp maaspoort',
    'it service den bosch',
    'laptop reparatie den bosch',
    'it hulp aan huis den bosch'
  ],
  openGraph: {
    title: 'Student aan huis Den Bosch | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Den Bosch. Wij komen bij u thuis in Den Bosch en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-den-bosch',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Den Bosch - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Den Bosch | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Den Bosch. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-den-bosch'
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

export default function StudentAanHuisDenBoschLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
