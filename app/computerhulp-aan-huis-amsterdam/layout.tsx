import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Amsterdam | Hulp Met IT',
  description: 'Computerhulp aan huis in Amsterdam voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. €14,50 per kwartier + €10 voorrijkosten. Vandaag nog beschikbaar!',
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
    title: 'Computerhulp aan huis Amsterdam | Computerhulp specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Amsterdam door IT-specialisten met 10+ jaar ervaring. €14,50 per kwartier + €10 voorrijkosten. Ook avond en weekend!',
    images: ['/og-image.webp'],
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Amsterdam | Computerhulp specialisten',
    description: 'Computerhulp aan huis Amsterdam. Specialist komt bij u. €14,50 per kwartier + €10 voorrijkosten.',
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
