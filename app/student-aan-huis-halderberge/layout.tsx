import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Halderberge | Hulp met IT',
  description: 'ICT Student aan huis in Halderberge voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Oudenbosch, Hoeven, Oud Gastel en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis halderberge',
    'computerhulp halderberge',
    'ict hulp halderberge',
    'computer reparatie halderberge',
    'laptop hulp halderberge',
    'it student halderberge',
    'betaalbare computerhulp halderberge',
    'computer problemen halderberge',
    'wifi problemen halderberge',
    'internet hulp halderberge',
    'computerhulp oudenbosch',
    'ict hulp hoeven',
    'computer reparatie oud gastel',
    'laptop hulp bosschenhoofd',
    'student computerhulp stampersgat',
    'it hulp oudenbosch centrum',
    'it service halderberge',
    'laptop reparatie halderberge',
    'it hulp aan huis halderberge'
  ],
  openGraph: {
    title: 'Student aan huis Halderberge | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Halderberge. Wij komen bij u thuis in Halderberge en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-halderberge',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Halderberge - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Halderberge | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Halderberge. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-halderberge'
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

export default function StudentAanHuisHalderbergeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
