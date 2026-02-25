import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Krimpenerwaard | Hulp met IT',
  description: 'ICT Student aan huis in Krimpenerwaard voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Schoonhoven, Bergambacht, Lekkerkerk en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis krimpenerwaard',
    'computerhulp krimpenerwaard',
    'ict hulp krimpenerwaard',
    'computer reparatie krimpenerwaard',
    'laptop hulp krimpenerwaard',
    'it student krimpenerwaard',
    'betaalbare computerhulp krimpenerwaard',
    'computer problemen krimpenerwaard',
    'wifi problemen krimpenerwaard',
    'internet hulp krimpenerwaard',
    'computerhulp schoonhoven',
    'ict hulp bergambacht',
    'computer reparatie lekkerkerk',
    'laptop hulp haastrecht',
    'student computerhulp stolwijk',
    'it hulp vlist',
    'it service krimpenerwaard',
    'laptop reparatie krimpenerwaard',
    'it hulp aan huis krimpenerwaard'
  ],
  openGraph: {
    title: 'Student aan huis Krimpenerwaard | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Krimpenerwaard. Wij komen bij u thuis in Krimpenerwaard en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-krimpenerwaard',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Krimpenerwaard - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Krimpenerwaard | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Krimpenerwaard. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-krimpenerwaard'
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

export default function StudentAanHuisKrimpenerwaardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
