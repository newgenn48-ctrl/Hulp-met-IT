import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Amersfoort | Hulp met IT',
  description: 'ICT Student aan huis in Amersfoort voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Amersfoort Centrum, Amersfoort Noord, Amersfoort Oost en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis amersfoort',
    'computerhulp amersfoort',
    'ict hulp amersfoort',
    'computer reparatie amersfoort',
    'laptop hulp amersfoort',
    'it student amersfoort',
    'betaalbare computerhulp amersfoort',
    'computer problemen amersfoort',
    'wifi problemen amersfoort',
    'internet hulp amersfoort',
    'computerhulp amersfoort centrum',
    'ict hulp amersfoort noord',
    'computer reparatie amersfoort oost',
    'laptop hulp amersfoort west',
    'student computerhulp amersfoort zuid',
    'it hulp vathorst',
    'it service amersfoort',
    'laptop reparatie amersfoort',
    'it hulp aan huis amersfoort'
  ],
  openGraph: {
    title: 'Student aan huis Amersfoort | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Amersfoort. Wij komen bij u thuis in Amersfoort en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-amersfoort',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Amersfoort - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Amersfoort | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Amersfoort. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-amersfoort'
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

export default function StudentAanHuisAmersfoortLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
