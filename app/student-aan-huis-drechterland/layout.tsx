import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Drechterland | Hulp met IT',
  description: 'ICT Student aan huis in Drechterland voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Hoogkarspel, Venhuizen, Hem en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis drechterland',
    'computerhulp drechterland',
    'ict hulp drechterland',
    'computer reparatie drechterland',
    'laptop hulp drechterland',
    'it student drechterland',
    'betaalbare computerhulp drechterland',
    'computer problemen drechterland',
    'wifi problemen drechterland',
    'internet hulp drechterland',
    'computerhulp hoogkarspel',
    'ict hulp venhuizen',
    'computer reparatie hem',
    'laptop hulp oosterblokker',
    'student computerhulp wijdenes',
    'it hulp westwoud',
    'it service drechterland',
    'laptop reparatie drechterland',
    'it hulp aan huis drechterland'
  ],
  openGraph: {
    title: 'Student aan huis Drechterland | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Drechterland. Wij komen bij u thuis in Drechterland en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-drechterland',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Drechterland - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Drechterland | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Drechterland. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-drechterland'
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

export default function StudentAanHuisDrechterlandLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
