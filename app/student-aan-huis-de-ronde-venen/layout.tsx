import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis De Ronde Venen | Hulp met IT',
  description: 'ICT Student aan huis in De Ronde Venen voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Mijdrecht, Vinkeveen, Wilnis en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis de ronde venen',
    'computerhulp de ronde venen',
    'ict hulp de ronde venen',
    'computer reparatie de ronde venen',
    'laptop hulp de ronde venen',
    'it student de ronde venen',
    'betaalbare computerhulp de ronde venen',
    'computer problemen de ronde venen',
    'wifi problemen de ronde venen',
    'internet hulp de ronde venen',
    'computerhulp mijdrecht',
    'ict hulp vinkeveen',
    'computer reparatie wilnis',
    'laptop hulp abcoude',
    'student computerhulp de hoef',
    'it hulp waverveen',
    'it service de ronde venen',
    'laptop reparatie de ronde venen',
    'it hulp aan huis de ronde venen'
  ],
  openGraph: {
    title: 'Student aan huis De Ronde Venen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in De Ronde Venen. Wij komen bij u thuis in De Ronde Venen en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-de-ronde-venen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis De Ronde Venen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis De Ronde Venen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in De Ronde Venen. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-de-ronde-venen'
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

export default function StudentAanHuisDeRondeVenenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
