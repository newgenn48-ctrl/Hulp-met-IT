import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Vijfheerenlanden | Hulp met IT',
  description: 'ICT Student aan huis in Vijfheerenlanden voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Vianen, Leerdam, Meerkerk en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis vijfheerenlanden',
    'computerhulp vijfheerenlanden',
    'ict hulp vijfheerenlanden',
    'computer reparatie vijfheerenlanden',
    'laptop hulp vijfheerenlanden',
    'it student vijfheerenlanden',
    'betaalbare computerhulp vijfheerenlanden',
    'computer problemen vijfheerenlanden',
    'wifi problemen vijfheerenlanden',
    'internet hulp vijfheerenlanden',
    'computerhulp vianen',
    'ict hulp leerdam',
    'computer reparatie meerkerk',
    'laptop hulp lexmond',
    'student computerhulp hagestein',
    'it hulp everdingen',
    'it service vijfheerenlanden',
    'laptop reparatie vijfheerenlanden',
    'it hulp aan huis vijfheerenlanden'
  ],
  openGraph: {
    title: 'Student aan huis Vijfheerenlanden | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Vijfheerenlanden. Wij komen bij u thuis in Vijfheerenlanden en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-vijfheerenlanden',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Vijfheerenlanden - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Vijfheerenlanden | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Vijfheerenlanden. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-vijfheerenlanden'
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

export default function StudentAanHuisVijfheerenlandenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
