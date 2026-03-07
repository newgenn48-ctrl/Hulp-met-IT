import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Wijk bij Duurstede | Hulp met IT',
  description: 'ICT Student aan huis in Wijk bij Duurstede voor betaalbare computerhulp. Ervaren IT-studenten komen bij u thuis in Wijk bij Duurstede Centrum, De Horden, De Geer en omgeving. €15,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis wijk bij duurstede',
    'computerhulp wijk bij duurstede',
    'ict hulp wijk bij duurstede',
    'computer reparatie wijk bij duurstede',
    'laptop hulp wijk bij duurstede',
    'it student wijk bij duurstede',
    'betaalbare computerhulp wijk bij duurstede',
    'computer problemen wijk bij duurstede',
    'wifi problemen wijk bij duurstede',
    'internet hulp wijk bij duurstede',
    'computerhulp wijk bij duurstede centrum',
    'ict hulp de horden',
    'computer reparatie de geer',
    'laptop hulp langbroek',
    'student computerhulp cothen',
    'it hulp leersum',
    'it service wijk bij duurstede',
    'laptop reparatie wijk bij duurstede',
    'it hulp aan huis wijk bij duurstede'
  ],
  openGraph: {
    title: 'Student aan huis Wijk bij Duurstede | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Wijk bij Duurstede. Wij komen bij u thuis in Wijk bij Duurstede en omgeving. €15,50 per kwartier.',
    url: 'https://hulpmetit.nl/student-aan-huis-wijk-bij-duurstede',
    siteName: 'Hulp met IT',
    locale: 'nl_NL',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ICT Student aan huis Wijk bij Duurstede - Hulp met IT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Wijk bij Duurstede | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Wijk bij Duurstede. Wij komen bij u thuis.',
    images: ['/og-image.webp']
  },
  alternates: {
    canonical: '/student-aan-huis-wijk-bij-duurstede'
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

export default function StudentAanHuisWijkBijDuurstedeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
