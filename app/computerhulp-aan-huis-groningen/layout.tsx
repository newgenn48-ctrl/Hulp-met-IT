import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Groningen | Hulp Met IT',
  description: 'Computerhulp aan huis in Groningen voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 voor 3 kwartier. Vandaag nog beschikbaar!',
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
    title: 'Computerhulp aan huis Groningen | IT-Specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Groningen door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 voor 3 kwartier. Ook avond en weekend!',
    images: ['/og-image.webp'],
    url: '/computerhulp-aan-huis-groningen',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Groningen | IT-Specialisten',
    description: 'Computerhulp aan huis Groningen. Specialist komt bij u. Vanaf €53,50 voor 3 kwartier.',
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
