import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Texel | Hulp met IT',
  description: 'ICT Student aan huis in Texel voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Den Burg, De Koog, Oudeschild en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis texel',
    'computerhulp texel',
    'ict hulp texel',
    'computer reparatie texel',
    'laptop hulp texel',
    'it student texel',
    'betaalbare computerhulp texel',
    'computer problemen texel',
    'wifi problemen texel',
    'internet hulp texel',
    'computerhulp den burg',
    'ict hulp de koog',
    'computer reparatie oudeschild',
    'laptop hulp den hoorn',
    'student computerhulp de cocksdorp',
    'it hulp oosterend',
    'it service texel',
    'laptop reparatie texel',
    'it hulp aan huis texel'
  ],
  openGraph: {
    title: 'Student aan huis Texel | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Texel. Wij komen bij u thuis in Texel en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-texel',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Texel - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Texel | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Texel. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-texel'
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

export default function StudentAanHuisTexelLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
