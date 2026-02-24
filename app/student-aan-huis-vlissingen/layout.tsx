import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Vlissingen | Hulp met IT',
  description: 'ICT Student aan huis in Vlissingen voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Vlissingen Centrum, Vlissingen Boulevard, Oost-Souburg en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis vlissingen',
    'computerhulp vlissingen',
    'ict hulp vlissingen',
    'computer reparatie vlissingen',
    'laptop hulp vlissingen',
    'it student vlissingen',
    'betaalbare computerhulp vlissingen',
    'computer problemen vlissingen',
    'wifi problemen vlissingen',
    'internet hulp vlissingen',
    'computerhulp vlissingen centrum',
    'ict hulp vlissingen boulevard',
    'computer reparatie oost-souburg',
    'laptop hulp paauwenburg',
    'student computerhulp westerzicht',
    'it hulp rosenburg',
    'it service vlissingen',
    'laptop reparatie vlissingen',
    'it hulp aan huis vlissingen'
  ],
  openGraph: {
    title: 'Student aan huis Vlissingen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Vlissingen. Wij komen bij u thuis in Vlissingen en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-vlissingen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Vlissingen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Vlissingen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Vlissingen. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-vlissingen'
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

export default function StudentAanHuisVlissingenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
