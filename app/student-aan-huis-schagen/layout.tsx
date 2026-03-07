import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Schagen | Hulp met IT',
  description: 'ICT Student aan huis in Schagen voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Schagen, Tuitjenhorn, Warmenhuizen en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis schagen',
    'computerhulp schagen',
    'ict hulp schagen',
    'computer reparatie schagen',
    'laptop hulp schagen',
    'it student schagen',
    'betaalbare computerhulp schagen',
    'computer problemen schagen',
    'wifi problemen schagen',
    'internet hulp schagen',
    'computerhulp schagen',
    'ict hulp tuitjenhorn',
    'computer reparatie warmenhuizen',
    'laptop hulp dirkshorn',
    'student computerhulp callantsoog',
    'it hulp sint maartensbrug',
    'it service schagen',
    'laptop reparatie schagen',
    'it hulp aan huis schagen'
  ],
  openGraph: {
    title: 'Student aan huis Schagen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Schagen. Wij komen bij u thuis in Schagen en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-schagen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Schagen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Schagen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Schagen. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-schagen'
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

export default function StudentAanHuisSchagenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
