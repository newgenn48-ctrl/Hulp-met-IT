import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Velsen | Hulp met IT',
  description: 'ICT Student aan huis in Velsen voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in IJmuiden, Velserbroek, Santpoort-Noord en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis velsen',
    'computerhulp velsen',
    'ict hulp velsen',
    'computer reparatie velsen',
    'laptop hulp velsen',
    'it student velsen',
    'betaalbare computerhulp velsen',
    'computer problemen velsen',
    'wifi problemen velsen',
    'internet hulp velsen',
    'computerhulp ijmuiden',
    'ict hulp velserbroek',
    'computer reparatie santpoort-noord',
    'laptop hulp santpoort-zuid',
    'student computerhulp velsen-noord',
    'it hulp velsen-zuid',
    'it service velsen',
    'laptop reparatie velsen',
    'it hulp aan huis velsen'
  ],
  openGraph: {
    title: 'Student aan huis Velsen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Velsen. Wij komen bij u thuis in Velsen en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-velsen',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Velsen - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Velsen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Velsen. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-velsen'
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

export default function StudentAanHuisVelsenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
