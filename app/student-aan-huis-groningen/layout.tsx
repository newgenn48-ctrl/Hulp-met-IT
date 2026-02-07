import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ICT Student aan Huis Groningen | Betaalbare Computerhulp | Hulp Met IT',
  description: 'ICT Student aan huis in Groningen voor computerhulp. Betaalbare IT-studenten van de Rijksuniversiteit Groningen en Hanzehogeschool komen bij u thuis. €14,50 per kwartier. Snel, vakkundig en vriendelijk!',
  keywords: [
    'student aan huis groningen',
    'ict student aan huis groningen',
    'computerhulp groningen',
    'betaalbare computerhulp groningen',
    'IT student groningen',
    'computer reparatie groningen student',
    'laptop hulp groningen',
    'thuishulp computer groningen',
    'groningen computerhulp avond weekend',
    'studentaan huis paddepoel',
    'computerhulp haren',
    'ict hulp hoogezand'
  ],
  openGraph: {
    title: 'ICT Student aan Huis Groningen | Betaalbare Computerhulp',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Groningen. €14,50 per kwartier. Snel bij u thuis!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
    url: 'https://hulpmetit.nl/student-aan-huis-groningen'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICT Student aan Huis Groningen | Betaalbare Computerhulp',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Groningen. €14,50 per kwartier. Snel bij u thuis!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/student-aan-huis-groningen',
  },
}

export default function StudentAanHuisGroningenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
