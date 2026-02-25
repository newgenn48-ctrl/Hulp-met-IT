import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Gorinchem | Hulp met IT',
  description: 'ICT Student aan huis in Gorinchem voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Gorinchem Centrum, Gorinchem Oost, Gorinchem West en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis gorinchem',
    'computerhulp gorinchem',
    'ict hulp gorinchem',
    'computer reparatie gorinchem',
    'laptop hulp gorinchem',
    'it student gorinchem',
    'betaalbare computerhulp gorinchem',
    'computer problemen gorinchem',
    'wifi problemen gorinchem',
    'internet hulp gorinchem',
    'computerhulp gorinchem centrum',
    'ict hulp gorinchem oost',
    'computer reparatie gorinchem west',
    'laptop hulp haarwijk',
    'student computerhulp stalkaarsen',
    'it hulp dalem',
    'it service gorinchem',
    'laptop reparatie gorinchem',
    'it hulp aan huis gorinchem'
  ],
  openGraph: {
    title: 'Student aan huis Gorinchem | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Gorinchem. Wij komen bij u thuis in Gorinchem en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-gorinchem',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Gorinchem - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Gorinchem | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Gorinchem. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-gorinchem'
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

export default function StudentAanHuisGorinchemLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
