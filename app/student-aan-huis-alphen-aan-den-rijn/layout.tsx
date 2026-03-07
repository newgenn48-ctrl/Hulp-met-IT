import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Alphen aan den Rijn | Hulp met IT',
  description: 'ICT Student aan huis in Alphen aan den Rijn voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Alphen Centrum, Alphen Noord, Alphen Oost en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis alphen aan den rijn',
    'computerhulp alphen aan den rijn',
    'ict hulp alphen aan den rijn',
    'computer reparatie alphen aan den rijn',
    'laptop hulp alphen aan den rijn',
    'it student alphen aan den rijn',
    'betaalbare computerhulp alphen aan den rijn',
    'computer problemen alphen aan den rijn',
    'wifi problemen alphen aan den rijn',
    'internet hulp alphen aan den rijn',
    'computerhulp alphen centrum',
    'ict hulp alphen noord',
    'computer reparatie alphen oost',
    'laptop hulp alphen west',
    'student computerhulp alphen zuid',
    'it hulp koudekerk',
    'it service alphen',
    'laptop reparatie alphen',
    'computer problemen alphen'
  ],
  openGraph: {
    title: 'Student aan huis Alphen aan den Rijn | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Alphen aan den Rijn. Wij komen bij u thuis in Alphen aan den Rijn en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-alphen-aan-den-rijn',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Alphen aan den Rijn - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Alphen aan den Rijn | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Alphen aan den Rijn. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-alphen-aan-den-rijn'
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

export default function StudentAanHuisAlphenAanDenRijnLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
