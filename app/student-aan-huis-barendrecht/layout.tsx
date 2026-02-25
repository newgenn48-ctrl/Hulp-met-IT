import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Barendrecht | Hulp met IT',
  description: 'ICT Student aan huis in Barendrecht voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Barendrecht Centrum, Carnisselande, Vrouwenpolder en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis barendrecht',
    'computerhulp barendrecht',
    'ict hulp barendrecht',
    'computer reparatie barendrecht',
    'laptop hulp barendrecht',
    'it student barendrecht',
    'betaalbare computerhulp barendrecht',
    'computer problemen barendrecht',
    'wifi problemen barendrecht',
    'internet hulp barendrecht',
    'computerhulp barendrecht centrum',
    'ict hulp carnisselande',
    'computer reparatie vrouwenpolder',
    'laptop hulp oranjewijk',
    'student computerhulp riederhoek',
    'it hulp buitenoord',
    'it service barendrecht',
    'laptop reparatie barendrecht',
    'it hulp aan huis barendrecht'
  ],
  openGraph: {
    title: 'Student aan huis Barendrecht | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Barendrecht. Wij komen bij u thuis in Barendrecht en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-barendrecht',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Barendrecht - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Barendrecht | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Barendrecht. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-barendrecht'
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

export default function StudentAanHuisBarendrechtLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
