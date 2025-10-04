import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis | Hulp Met IT',
  description: 'Computerhulp aan huis voor alle computerproblemen. IT-specialisten met 10+ jaar ervaring bij u thuis. Vanaf €53,50 voor 3 kwartier. Vandaag nog beschikbaar!',
  keywords: [
    'computerhulp aan huis',
    'computer reparatie aan huis',
    'laptop reparatie thuis',
    'IT specialist aan huis',
    'computerhulp thuis',
    'computer service aan huis',
    'pc hulp thuis',
    'computerhulp specialisten',
    'computer hulp aan huis',
    'IT ondersteuning thuis',
    'pc reparatie thuis',
    'laptop hulp aan huis',
    'thuishulp computer'
  ],
  openGraph: {
    title: 'Computerhulp aan huis | IT-Specialisten | Hulp Met IT',
    description: 'Computerhulp aan huis door IT-specialisten met 10+ jaar ervaring. Vanaf €53,50 voor 3 kwartier. Ook avond en weekend!',
    images: ['/og-image.webp'],
    url: '/computerhulp-aan-huis',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computerhulp aan huis - Ervaren IT-Specialisten',
    description: 'Computerhulp aan huis door IT-specialisten met 10+ jaar ervaring vanaf €53,50 voor 3 kwartier!',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/computerhulp-aan-huis',
  },
}

export default function ComputerhulpAanHuisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
