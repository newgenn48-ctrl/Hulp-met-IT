import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Etten-Leur | Hulp met IT',
  description: 'ICT Student aan huis in Etten-Leur voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Etten-Leur Centrum, De Keen, Attelaken en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis etten-leur',
    'computerhulp etten-leur',
    'ict hulp etten-leur',
    'computer reparatie etten-leur',
    'laptop hulp etten-leur',
    'it student etten-leur',
    'betaalbare computerhulp etten-leur',
    'computer problemen etten-leur',
    'wifi problemen etten-leur',
    'internet hulp etten-leur',
    'computerhulp etten-leur centrum',
    'ict hulp de keen',
    'computer reparatie attelaken',
    'laptop hulp grauwe polder',
    'student computerhulp bankenhoef',
    'it hulp schoenmakershoek',
    'it service etten-leur',
    'laptop reparatie etten-leur',
    'it hulp aan huis etten-leur'
  ],
  openGraph: {
    title: 'Student aan huis Etten-Leur | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Etten-Leur. Wij komen bij u thuis in Etten-Leur en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-etten-leur',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Etten-Leur - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Etten-Leur | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Etten-Leur. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-etten-leur'
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

export default function StudentAanHuisEttenLeurLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
