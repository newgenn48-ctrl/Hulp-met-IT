import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Nuenen | Hulp met IT',
  description: 'ICT Student aan huis in Nuenen voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Nuenen Centrum, Gerwen, Nederwetten en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis nuenen',
    'computerhulp nuenen',
    'ict hulp nuenen',
    'computer reparatie nuenen',
    'laptop hulp nuenen',
    'it student nuenen',
    'betaalbare computerhulp nuenen',
    'computer problemen nuenen',
    'wifi problemen nuenen',
    'internet hulp nuenen',
    'computerhulp nuenen centrum',
    'ict hulp gerwen',
    'computer reparatie nederwetten',
    'laptop hulp nuenen zuid',
    'student computerhulp nuenen west',
    'it hulp eeneind',
    'it service nuenen',
    'laptop reparatie nuenen',
    'it hulp aan huis nuenen'
  ],
  openGraph: {
    title: 'Student aan huis Nuenen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Nuenen. Wij komen bij u thuis in Nuenen en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-nuenen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Nuenen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Nuenen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Nuenen. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-nuenen'
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

export default function StudentAanHuisNuenenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
