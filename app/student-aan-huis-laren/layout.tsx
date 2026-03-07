import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Laren | Hulp met IT',
  description: 'ICT Student aan huis in Laren voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Laren Centrum, Laren Noord, Laren Oost en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis laren',
    'computerhulp laren',
    'ict hulp laren',
    'computer reparatie laren',
    'laptop hulp laren',
    'it student laren',
    'betaalbare computerhulp laren',
    'computer problemen laren',
    'wifi problemen laren',
    'internet hulp laren',
    'computerhulp laren centrum',
    'ict hulp laren noord',
    'computer reparatie laren oost',
    'laptop hulp laren west',
    'student computerhulp laren zuid',
    'it hulp blaricum',
    'it service laren',
    'laptop reparatie laren',
    'it hulp aan huis laren'
  ],
  openGraph: {
    title: 'Student aan huis Laren | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Laren. Wij komen bij u thuis in Laren en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-laren',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Laren - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Laren | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Laren. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-laren'
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

export default function StudentAanHuisLarenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
