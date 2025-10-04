import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Amsterdam | Hulp Met IT',
  description: 'Computerhulp aan huis in Amsterdam voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 voor 3 kwartier. Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis amsterdam',
    'computer reparatie amsterdam',
    'laptop reparatie amsterdam',
    'IT specialist amsterdam',
    'pc hulp amsterdam',
    'computer specialist amsterdam',
    'amsterdam computerhulp avond',
    'amsterdam IT hulp weekend',
    'computerhulp amsterdam spoed',
    'betaalbare IT hulp amsterdam'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Amsterdam | IT-Specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Amsterdam door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 voor 3 kwartier. Ook avond en weekend!',
    images: ['/og-image.webp'],
    url: '/computerhulp-aan-huis-amsterdam',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Amsterdam | IT-Specialisten',
    description: 'Computerhulp aan huis Amsterdam. Specialist komt bij u. Vanaf €53,50 voor 3 kwartier.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-amsterdam',
  },
}

export default function ComputerhulpAanHuisAmsterdamLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
