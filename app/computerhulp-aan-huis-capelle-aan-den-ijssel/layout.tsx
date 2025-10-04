import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis Capelle aan den IJssel | Hulp Met IT',
  description: 'Computerhulp aan huis in Capelle aan den IJssel voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 voor 3 kwartier. Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis capelle aan den ijssel',
    'computer reparatie capelle aan den ijssel',
    'laptop reparatie capelle aan den ijssel',
    'IT specialist capelle aan den ijssel',
    'pc hulp capelle aan den ijssel',
    'computer specialist capelle aan den ijssel',
    'capelle aan den ijssel computerhulp avond',
    'capelle aan den ijssel IT hulp weekend',
    'computerhulp capelle aan den ijssel spoed',
    'betaalbare IT hulp capelle aan den ijssel'
  ],
  openGraph: {
    title: 'Computerhulp aan huis Capelle aan den IJssel | IT-Specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis in Capelle aan den IJssel door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 voor 3 kwartier. Ook avond en weekend!',
    images: ['/og-image.webp'],
    url: '/computerhulp-aan-huis-capelle-aan-den-ijssel',
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Hulp met IT'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis Capelle aan den IJssel | IT-Specialisten',
    description: 'Computerhulp aan huis Capelle aan den IJssel. Specialist komt bij u. Vanaf €53,50 voor 3 kwartier.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis-capelle-aan-den-ijssel',
  },
}

export default function ComputerhulpAanHuisCapelleaandenIJsselLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
