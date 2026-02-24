import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Utrecht | Hulp met IT',
  description: 'ICT Student aan huis in Utrecht voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Utrecht Centrum, Utrecht Noord, Utrecht Oost en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis utrecht',
    'computerhulp utrecht',
    'ict hulp utrecht',
    'computer reparatie utrecht',
    'laptop hulp utrecht',
    'it student utrecht',
    'betaalbare computerhulp utrecht',
    'computer problemen utrecht',
    'wifi problemen utrecht',
    'internet hulp utrecht',
    'computerhulp utrecht centrum',
    'ict hulp utrecht noord',
    'computer reparatie utrecht oost',
    'laptop hulp utrecht west',
    'student computerhulp utrecht zuid',
    'it hulp leidsche rijn',
    'it service utrecht',
    'laptop reparatie utrecht',
    'it hulp aan huis utrecht'
  ],
  openGraph: {
    title: 'Student aan huis Utrecht | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Utrecht. Wij komen bij u thuis in Utrecht en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-utrecht',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Utrecht - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Utrecht | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Utrecht. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-utrecht'
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

export default function StudentAanHuisUtrechtLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
