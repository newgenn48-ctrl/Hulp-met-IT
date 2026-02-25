import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Voorne aan Zee | Hulp met IT',
  description: 'ICT Student aan huis in Voorne aan Zee voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Hellevoetsluis, Brielle, Rockanje en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis voorne aan zee',
    'computerhulp voorne aan zee',
    'ict hulp voorne aan zee',
    'computer reparatie voorne aan zee',
    'laptop hulp voorne aan zee',
    'it student voorne aan zee',
    'betaalbare computerhulp voorne aan zee',
    'computer problemen voorne aan zee',
    'wifi problemen voorne aan zee',
    'internet hulp voorne aan zee',
    'computerhulp hellevoetsluis',
    'ict hulp brielle',
    'computer reparatie rockanje',
    'laptop hulp oostvoorne',
    'student computerhulp vierpolders',
    'it hulp zwartewaal',
    'it service voorne aan zee',
    'laptop reparatie voorne aan zee',
    'it hulp aan huis voorne aan zee'
  ],
  openGraph: {
    title: 'Student aan huis Voorne aan Zee | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Voorne aan Zee. Wij komen bij u thuis in Voorne aan Zee en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-voorne-aan-zee',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Voorne aan Zee - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Voorne aan Zee | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Voorne aan Zee. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-voorne-aan-zee'
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

export default function StudentAanHuisVoorneAanZeeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
