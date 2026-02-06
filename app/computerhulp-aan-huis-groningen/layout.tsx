import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Groningen | Hulp Met IT',
  description: 'Computerhulp aan huis in Groningen voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. €14,50 per kwartier + €10 voorrijkosten. Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis groningen',
    'computer reparatie groningen',
    'laptop reparatie groningen',
    'IT specialist groningen',
    'pc hulp groningen',
    'computer specialist groningen',
    'groningen computerhulp avond',
    'groningen IT hulp weekend',
    'computerhulp groningen spoed',
    'betaalbare IT hulp groningen'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Groningen | Computerhulp specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Groningen door IT-specialisten met 10+ jaar ervaring. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Groningen | Computerhulp specialisten',
    description: 'Computerhulp aan huis Groningen. Specialist komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
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
