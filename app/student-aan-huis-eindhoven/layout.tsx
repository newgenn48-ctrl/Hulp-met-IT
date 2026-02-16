import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Eindhoven | Hulp met IT',
  description: 'ICT Student aan huis in Eindhoven voor computerhulp. HBO-opgeleide IT-studenten bij u thuis. Vanaf €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'student aan huis eindhoven',
    'ict student aan huis eindhoven',
    'computerhulp eindhoven',
    'computer hulp eindhoven',
    'laptop reparatie eindhoven',
    'IT hulp eindhoven',
    'pc hulp eindhoven',
    'thuishulp computer eindhoven',
    'computerhulp aan huis eindhoven',
    'betaalbare computerhulp eindhoven',
    'student computerhulp eindhoven',
    'TU eindhoven student hulp',
    'fontys student computerhulp',
    'eindhoven it ondersteuning',
    'computer problemen eindhoven'
  ],
  openGraph: {
    title: 'Student aan huis Eindhoven | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten van TU Eindhoven en Fontys. Snel bij u thuis in Eindhoven en omgeving. €14,50 per kwartier.',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
    url: 'https://hulpmetit.nl/student-aan-huis-eindhoven'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Eindhoven | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten van TU Eindhoven en Fontys. Snel bij u thuis in Eindhoven en omgeving.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-eindhoven'
  }
}

export default function StudentAanHuisEindhovenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
