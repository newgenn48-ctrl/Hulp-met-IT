import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Woerden | Hulp met IT',
  description: 'ICT Student aan huis in Woerden voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Woerden Centrum, Snel en Polanen, Molenvliet en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis woerden',
    'computerhulp woerden',
    'ict hulp woerden',
    'computer reparatie woerden',
    'laptop hulp woerden',
    'it student woerden',
    'betaalbare computerhulp woerden',
    'computer problemen woerden',
    'wifi problemen woerden',
    'internet hulp woerden',
    'computerhulp woerden centrum',
    'ict hulp snel en polanen',
    'computer reparatie molenvliet',
    'laptop hulp staatsliedenkwartier',
    'student computerhulp harmelen',
    'it hulp kamerik',
    'it service woerden',
    'laptop reparatie woerden',
    'it hulp aan huis woerden'
  ],
  openGraph: {
    title: 'Student aan huis Woerden | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Woerden. Wij komen bij u thuis in Woerden en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-woerden',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Woerden - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Woerden | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Woerden. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-woerden'
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

export default function StudentAanHuisWoerdenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
