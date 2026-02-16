import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Vlissingen | Hulp Met IT',
  description: 'Computerhulp aan huis in Vlissingen voor alle computerproblemen. HBO-opgeleide ICT-studenten bij u thuis. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten.',
  keywords: [
    'computerhulp aan huis vlissingen',
    'computer reparatie vlissingen',
    'laptop reparatie vlissingen',
    'ICT student vlissingen',
    'pc hulp vlissingen',
    'computer student vlissingen',
    'vlissingen computerhulp avond',
    'vlissingen IT hulp weekend',
    'computerhulp vlissingen spoed',
    'betaalbare IT hulp vlissingen'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Vlissingen | ICT Student aan Huis | Hulp Met IT',
    description: 'Computerhulp aan huis in Vlissingen door HBO-opgeleide ICT-studenten. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Vlissingen | ICT Student aan Huis',
    description: 'Computerhulp aan huis Vlissingen. Student komt bij u. \u20AC14,50 per kwartier + \u20AC10 voorrijkosten.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-vlissingen',
  },
}

export default function ComputerhulpAanHuisVlissingenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
