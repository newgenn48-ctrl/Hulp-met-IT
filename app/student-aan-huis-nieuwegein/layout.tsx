import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Nieuwegein | Hulp met IT',
  description: 'ICT Student aan huis in Nieuwegein voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Nieuwegein Centrum, Batau, Galecop en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis nieuwegein',
    'computerhulp nieuwegein',
    'ict hulp nieuwegein',
    'computer reparatie nieuwegein',
    'laptop hulp nieuwegein',
    'it student nieuwegein',
    'betaalbare computerhulp nieuwegein',
    'computer problemen nieuwegein',
    'wifi problemen nieuwegein',
    'internet hulp nieuwegein',
    'computerhulp nieuwegein centrum',
    'ict hulp batau',
    'computer reparatie galecop',
    'laptop hulp vreeswijk',
    'student computerhulp jutphaas',
    'it hulp doorslag',
    'it service nieuwegein',
    'laptop reparatie nieuwegein',
    'it hulp aan huis nieuwegein'
  ],
  openGraph: {
    title: 'Student aan huis Nieuwegein | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Nieuwegein. Wij komen bij u thuis in Nieuwegein en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-nieuwegein',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Nieuwegein - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Nieuwegein | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Nieuwegein. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-nieuwegein'
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

export default function StudentAanHuisNieuwegeinLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
