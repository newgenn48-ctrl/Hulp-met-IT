import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Hoeksche Waard | Hulp met IT',
  description: 'ICT Student aan huis in Hoeksche Waard voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Oud-Beijerland, Strijen, Numansdorp en omgeving. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis hoeksche waard',
    'computerhulp hoeksche waard',
    'ict hulp hoeksche waard',
    'computer reparatie hoeksche waard',
    'laptop hulp hoeksche waard',
    'it student hoeksche waard',
    'betaalbare computerhulp hoeksche waard',
    'computer problemen hoeksche waard',
    'wifi problemen hoeksche waard',
    'internet hulp hoeksche waard',
    'computerhulp oud-beijerland',
    'ict hulp strijen',
    'computer reparatie numansdorp',
    'laptop hulp klaaswaal',
    'student computerhulp \'s-gravendeel',
    'it hulp puttershoek',
    'it service hoeksche waard',
    'laptop reparatie hoeksche waard',
    'it hulp aan huis hoeksche waard'
  ],
  openGraph: {
    title: 'Student aan huis Hoeksche Waard | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Hoeksche Waard. Wij komen bij u thuis in Hoeksche Waard en omgeving. €14,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-hoeksche-waard',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Hoeksche Waard - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Hoeksche Waard | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Hoeksche Waard. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-hoeksche-waard'
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

export default function StudentAanHuisHoekscheWaardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
