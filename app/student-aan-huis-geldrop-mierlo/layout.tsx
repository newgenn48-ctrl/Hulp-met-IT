import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Geldrop-Mierlo | Hulp met IT',
  description: 'ICT Student aan huis in Geldrop-Mierlo voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Geldrop Centrum, Mierlo Centrum, Braakhuizen en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis geldrop-mierlo',
    'computerhulp geldrop-mierlo',
    'ict hulp geldrop-mierlo',
    'computer reparatie geldrop-mierlo',
    'laptop hulp geldrop-mierlo',
    'it student geldrop-mierlo',
    'betaalbare computerhulp geldrop-mierlo',
    'computer problemen geldrop-mierlo',
    'wifi problemen geldrop-mierlo',
    'internet hulp geldrop-mierlo',
    'computerhulp geldrop centrum',
    'ict hulp mierlo centrum',
    'computer reparatie braakhuizen',
    'laptop hulp zesgehuchten',
    'student computerhulp skandia',
    'it hulp coevering',
    'it service geldrop-mierlo',
    'laptop reparatie geldrop-mierlo',
    'it hulp aan huis geldrop-mierlo'
  ],
  openGraph: {
    title: 'Student aan huis Geldrop-Mierlo | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Geldrop-Mierlo. Wij komen bij u thuis in Geldrop-Mierlo en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-geldrop-mierlo',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Geldrop-Mierlo - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Geldrop-Mierlo | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Geldrop-Mierlo. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-geldrop-mierlo'
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

export default function StudentAanHuisGeldropMierloLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
