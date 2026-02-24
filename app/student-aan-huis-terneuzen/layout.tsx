import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Terneuzen | Hulp met IT',
  description: 'ICT Student aan huis in Terneuzen voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Terneuzen Centrum, Terneuzen Noord, Terneuzen Zuid en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis terneuzen',
    'computerhulp terneuzen',
    'ict hulp terneuzen',
    'computer reparatie terneuzen',
    'laptop hulp terneuzen',
    'it student terneuzen',
    'betaalbare computerhulp terneuzen',
    'computer problemen terneuzen',
    'wifi problemen terneuzen',
    'internet hulp terneuzen',
    'computerhulp terneuzen centrum',
    'ict hulp terneuzen noord',
    'computer reparatie terneuzen zuid',
    'laptop hulp sluiskil',
    'student computerhulp biervliet',
    'it hulp hoek',
    'it service terneuzen',
    'laptop reparatie terneuzen',
    'it hulp aan huis terneuzen'
  ],
  openGraph: {
    title: 'Student aan huis Terneuzen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Terneuzen. Wij komen bij u thuis in Terneuzen en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-terneuzen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Terneuzen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Terneuzen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Terneuzen. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-terneuzen'
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

export default function StudentAanHuisTerneuzenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
