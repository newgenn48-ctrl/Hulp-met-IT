import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Goes | Hulp met IT',
  description: 'ICT Student aan huis in Goes voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Goes Centrum, Goes Noord, Goes Oost en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis goes',
    'computerhulp goes',
    'ict hulp goes',
    'computer reparatie goes',
    'laptop hulp goes',
    'it student goes',
    'betaalbare computerhulp goes',
    'computer problemen goes',
    'wifi problemen goes',
    'internet hulp goes',
    'computerhulp goes centrum',
    'ict hulp goes noord',
    'computer reparatie goes oost',
    'laptop hulp goes west',
    'student computerhulp goes zuid',
    'it hulp kloetinge',
    'it service goes',
    'laptop reparatie goes',
    'it hulp aan huis goes'
  ],
  openGraph: {
    title: 'Student aan huis Goes | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Goes. Wij komen bij u thuis in Goes en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-goes',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Goes - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Goes | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Goes. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-goes'
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

export default function StudentAanHuisGoesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
