import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Zuidplas | Hulp met IT',
  description: 'ICT Student aan huis in Zuidplas voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Nieuwerkerk aan den IJssel, Moordrecht, Zevenhuizen en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis zuidplas',
    'computerhulp zuidplas',
    'ict hulp zuidplas',
    'computer reparatie zuidplas',
    'laptop hulp zuidplas',
    'it student zuidplas',
    'betaalbare computerhulp zuidplas',
    'computer problemen zuidplas',
    'wifi problemen zuidplas',
    'internet hulp zuidplas',
    'computerhulp nieuwerkerk aan den ijssel',
    'ict hulp moordrecht',
    'computer reparatie zevenhuizen',
    'laptop hulp moerkapelle',
    'student computerhulp oud verlaat',
    'it hulp westergouwe',
    'it service zuidplas',
    'laptop reparatie zuidplas',
    'it hulp aan huis zuidplas'
  ],
  openGraph: {
    title: 'Student aan huis Zuidplas | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Zuidplas. Wij komen bij u thuis in Zuidplas en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-zuidplas',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Zuidplas - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Zuidplas | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Zuidplas. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-zuidplas'
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

export default function StudentAanHuisZuidplasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
