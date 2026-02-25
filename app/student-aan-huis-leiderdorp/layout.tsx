import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Leiderdorp | Hulp met IT',
  description: 'ICT Student aan huis in Leiderdorp voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Leiderdorp Centrum, Bloemerd, Buitenhof en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis leiderdorp',
    'computerhulp leiderdorp',
    'ict hulp leiderdorp',
    'computer reparatie leiderdorp',
    'laptop hulp leiderdorp',
    'it student leiderdorp',
    'betaalbare computerhulp leiderdorp',
    'computer problemen leiderdorp',
    'wifi problemen leiderdorp',
    'internet hulp leiderdorp',
    'computerhulp leiderdorp centrum',
    'ict hulp bloemerd',
    'computer reparatie buitenhof',
    'laptop hulp de houtkamp',
    'student computerhulp elisabethhof',
    'it hulp ouderzorg',
    'it service leiderdorp',
    'laptop reparatie leiderdorp',
    'it hulp aan huis leiderdorp'
  ],
  openGraph: {
    title: 'Student aan huis Leiderdorp | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Leiderdorp. Wij komen bij u thuis in Leiderdorp en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-leiderdorp',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Leiderdorp - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Leiderdorp | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Leiderdorp. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-leiderdorp'
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

export default function StudentAanHuisLeiderdorpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
