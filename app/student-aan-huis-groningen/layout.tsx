import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student aan huis Groningen | Hulp met IT',
  description: 'ICT Student aan huis in Groningen voor computerhulp. HBO-opgeleide IT-studenten bij u thuis. Vanaf €14,50 per kwartier + €10 voorrijkosten.',
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
    title: 'Student aan huis Groningen | Hulp met IT',
    description: 'Betaalbare computerhulp door ervaren IT-studenten in Groningen. €14,50 per kwartier. Snel bij u thuis!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT',
    url: 'https://hulpmetit.nl/student-aan-huis-groningen'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student aan huis Groningen | Hulp met IT',
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
