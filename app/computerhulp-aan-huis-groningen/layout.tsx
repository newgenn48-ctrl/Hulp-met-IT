import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Groningen | Hulp Met IT',
  description: 'Computerhulp aan huis in Groningen voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. €14,50 per kwartier + €10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis groningen',
    'computer reparatie groningen',
    'laptop reparatie groningen',
    'ICT student groningen',
    'pc hulp groningen',
    'computer student groningen',
    'groningen computerhulp avond',
    'groningen IT hulp weekend',
    'computerhulp groningen spoed',
    'betaalbare IT hulp groningen'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Groningen | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Groningen door HBO-opgeleide ICT-studenten. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Groningen | ICT Student aan Huis',
    description: 'Computerhulp aan huis Groningen. Student komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-groningen',
  },
}

export default function ComputerhulpAanHuisGroningenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
