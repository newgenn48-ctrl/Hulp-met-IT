import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Leusden | Hulp met IT',
  description: 'ICT Student aan huis in Leusden voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Leusden Centrum, Leusden-Zuid, Hamersveld en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis leusden',
    'computerhulp leusden',
    'ict hulp leusden',
    'computer reparatie leusden',
    'laptop hulp leusden',
    'it student leusden',
    'betaalbare computerhulp leusden',
    'computer problemen leusden',
    'wifi problemen leusden',
    'internet hulp leusden',
    'computerhulp leusden centrum',
    'ict hulp leusden-zuid',
    'computer reparatie hamersveld',
    'laptop hulp achterveld',
    'student computerhulp stoutenburg',
    'it hulp de glind',
    'it service leusden',
    'laptop reparatie leusden',
    'it hulp aan huis leusden'
  ],
  openGraph: {
    title: 'Student aan huis Leusden | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Leusden. Wij komen bij u thuis in Leusden en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-leusden',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Leusden - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Leusden | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Leusden. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-leusden'
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

export default function StudentAanHuisLeusdenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
