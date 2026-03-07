import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Leidschendam-Voorburg | Hulp met IT',
  description: 'ICT Student aan huis in Leidschendam-Voorburg voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Leidschendam Centrum, Voorburg Centrum, Leidschendam Noord en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis leidschendam-voorburg',
    'computerhulp leidschendam-voorburg',
    'ict hulp leidschendam-voorburg',
    'computer reparatie leidschendam-voorburg',
    'laptop hulp leidschendam-voorburg',
    'it student leidschendam-voorburg',
    'betaalbare computerhulp leidschendam-voorburg',
    'computer problemen leidschendam-voorburg',
    'wifi problemen leidschendam-voorburg',
    'internet hulp leidschendam-voorburg',
    'computerhulp leidschendam centrum',
    'ict hulp voorburg centrum',
    'computer reparatie leidschendam noord',
    'laptop hulp leidschendam zuid',
    'student computerhulp voorburg noord',
    'it hulp voorburg zuid',
    'computerhulp leidschendam',
    'computerhulp voorburg',
    'it service leidschendam'
  ],
  openGraph: {
    title: 'Student aan huis Leidschendam-Voorburg | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Leidschendam-Voorburg. Wij komen bij u thuis in Leidschendam-Voorburg en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-leidschendam-voorburg',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Leidschendam-Voorburg - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Leidschendam-Voorburg | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Leidschendam-Voorburg. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-leidschendam-voorburg'
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

export default function StudentAanHuisLeidschendamVoorburgLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
