import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Terneuzen | Hulp Met IT',
  description: 'Computerhulp aan huis in Terneuzen voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis terneuzen',
    'computer reparatie terneuzen',
    'laptop reparatie terneuzen',
    'ICT student terneuzen',
    'pc hulp terneuzen',
    'computer student terneuzen',
    'terneuzen computerhulp avond',
    'terneuzen IT hulp weekend',
    'computerhulp terneuzen spoed',
    'betaalbare IT hulp terneuzen'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Terneuzen | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Terneuzen door HBO-opgeleide ICT-studenten. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Terneuzen | ICT Student aan Huis',
    description: 'Computerhulp aan huis Terneuzen. Student komt bij u. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-terneuzen',
  },
}

export default function ComputerhulpAanHuisTerneuzenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
