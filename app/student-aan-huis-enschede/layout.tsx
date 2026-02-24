import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Enschede | Hulp met IT',
  description: 'ICT Student aan huis in Enschede voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Enschede Centrum, Enschede Noord, Enschede Oost en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis enschede',
    'computerhulp enschede',
    'ict hulp enschede',
    'computer reparatie enschede',
    'laptop hulp enschede',
    'it student enschede',
    'betaalbare computerhulp enschede',
    'computer problemen enschede',
    'wifi problemen enschede',
    'internet hulp enschede',
    'computerhulp enschede centrum',
    'ict hulp enschede noord',
    'computer reparatie enschede oost',
    'laptop hulp enschede west',
    'student computerhulp enschede zuid',
    'it hulp boddenkamp',
    'it service enschede',
    'laptop reparatie enschede',
    'it hulp aan huis enschede'
  ],
  openGraph: {
    title: 'Student aan huis Enschede | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Enschede. Wij komen bij u thuis in Enschede en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-enschede',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Enschede - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Enschede | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Enschede. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-enschede'
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

export default function StudentAanHuisEnschedeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
