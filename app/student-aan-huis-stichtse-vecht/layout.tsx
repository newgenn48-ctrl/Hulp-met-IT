import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Stichtse Vecht | Hulp met IT',
  description: 'ICT Student aan huis in Stichtse Vecht voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Maarssen, Breukelen, Loenen aan de Vecht en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis stichtse vecht',
    'computerhulp stichtse vecht',
    'ict hulp stichtse vecht',
    'computer reparatie stichtse vecht',
    'laptop hulp stichtse vecht',
    'it student stichtse vecht',
    'betaalbare computerhulp stichtse vecht',
    'computer problemen stichtse vecht',
    'wifi problemen stichtse vecht',
    'internet hulp stichtse vecht',
    'computerhulp maarssen',
    'ict hulp breukelen',
    'computer reparatie loenen aan de vecht',
    'laptop hulp nieuwersluis',
    'student computerhulp nigtevecht',
    'it hulp oud-zuilen',
    'it service stichtse vecht',
    'laptop reparatie stichtse vecht',
    'it hulp aan huis stichtse vecht'
  ],
  openGraph: {
    title: 'Student aan huis Stichtse Vecht | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Stichtse Vecht. Wij komen bij u thuis in Stichtse Vecht en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-stichtse-vecht',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Stichtse Vecht - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Stichtse Vecht | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Stichtse Vecht. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-stichtse-vecht'
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

export default function StudentAanHuisStichtseVechtLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
