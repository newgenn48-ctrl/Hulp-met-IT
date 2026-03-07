import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Vught | Hulp met IT',
  description: 'ICT Student aan huis in Vught voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Vught Centrum, Cromvoirt, Helvoirt en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis vught',
    'computerhulp vught',
    'ict hulp vught',
    'computer reparatie vught',
    'laptop hulp vught',
    'it student vught',
    'betaalbare computerhulp vught',
    'computer problemen vught',
    'wifi problemen vught',
    'internet hulp vught',
    'computerhulp vught centrum',
    'ict hulp cromvoirt',
    'computer reparatie helvoirt',
    'laptop hulp villapark',
    'student computerhulp vught noord',
    'it hulp vught zuid',
    'it service vught',
    'laptop reparatie vught',
    'it hulp aan huis vught'
  ],
  openGraph: {
    title: 'Student aan huis Vught | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Vught. Wij komen bij u thuis in Vught en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-vught',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Vught - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Vught | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Vught. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-vught'
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

export default function StudentAanHuisVughtLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
