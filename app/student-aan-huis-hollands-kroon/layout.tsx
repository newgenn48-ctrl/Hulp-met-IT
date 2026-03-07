import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Hollands Kroon | Hulp met IT',
  description: 'ICT Student aan huis in Hollands Kroon voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Anna Paulowna, Wieringerwerf, Hippolytushoef en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis hollands kroon',
    'computerhulp hollands kroon',
    'ict hulp hollands kroon',
    'computer reparatie hollands kroon',
    'laptop hulp hollands kroon',
    'it student hollands kroon',
    'betaalbare computerhulp hollands kroon',
    'computer problemen hollands kroon',
    'wifi problemen hollands kroon',
    'internet hulp hollands kroon',
    'computerhulp anna paulowna',
    'ict hulp wieringerwerf',
    'computer reparatie hippolytushoef',
    'laptop hulp breezand',
    'student computerhulp nieuwe niedorp',
    'it hulp wieringen',
    'it service hollands kroon',
    'laptop reparatie hollands kroon',
    'it hulp aan huis hollands kroon'
  ],
  openGraph: {
    title: 'Student aan huis Hollands Kroon | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Hollands Kroon. Wij komen bij u thuis in Hollands Kroon en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-hollands-kroon',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Hollands Kroon - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Hollands Kroon | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Hollands Kroon. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-hollands-kroon'
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

export default function StudentAanHuisHollandsKroonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
