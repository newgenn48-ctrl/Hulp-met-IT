import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Kaag en Braassem | Hulp met IT',
  description: 'ICT Student aan huis in Kaag en Braassem voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Roelofarendsveen, Oude Wetering, Leimuiden en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis kaag en braassem',
    'computerhulp kaag en braassem',
    'ict hulp kaag en braassem',
    'computer reparatie kaag en braassem',
    'laptop hulp kaag en braassem',
    'it student kaag en braassem',
    'betaalbare computerhulp kaag en braassem',
    'computer problemen kaag en braassem',
    'wifi problemen kaag en braassem',
    'internet hulp kaag en braassem',
    'computerhulp roelofarendsveen',
    'ict hulp oude wetering',
    'computer reparatie leimuiden',
    'laptop hulp rijnsaterwoude',
    'student computerhulp kaag',
    'it hulp bilderdam',
    'it service kaag en braassem',
    'laptop reparatie kaag en braassem',
    'it hulp aan huis kaag en braassem'
  ],
  openGraph: {
    title: 'Student aan huis Kaag en Braassem | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Kaag en Braassem. Wij komen bij u thuis in Kaag en Braassem en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-kaag-en-braassem',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Kaag en Braassem - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Kaag en Braassem | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Kaag en Braassem. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-kaag-en-braassem'
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

export default function StudentAanHuisKaagEnBraassemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
