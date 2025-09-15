import { HeroSection } from '@/components/home/HeroSection'
import { ServicesPreview } from '@/components/home/ServicesPreview'
import { Windows11UrgentSection } from '@/components/home/Windows11UrgentSection'
import { PricingSection } from '@/components/home/PricingSection'
import { RegionsPreview } from '@/components/home/RegionsPreview'
import { AboutPreview } from '@/components/home/AboutPreview'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { TrustSignals } from '@/components/home/TrustSignals'
import { BackgroundScene } from '@/components/three/BackgroundScene'
import { NoSSR } from '@/components/NoSSR'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hulp met IT - Computerhulp aan Huis | Specialist binnen 24-48u',
  description: 'Computerproblemen? Onze vriendelijke specialisten komen binnen 24-48u aan huis! ✓ Vaste tarieven ✓ Ervaren experts ✓ Alle merken ✓ Direct online afspraak maken',
  keywords: [
    'computerhulp aan huis',
    'computer specialist Nederland',
    'laptop reparatie',
    'computer problemen',
    'specialist aan huis',
    'computer service',
    'snelle hulp',
    '24 uur service'
  ],
  openGraph: {
    title: 'Hulp met IT - Computerhulp aan Huis',
    description: 'Computerproblemen? Onze vriendelijke specialisten komen binnen 24-48u aan huis!',
    images: ['/og-image.webp'],
  },
}

export default function HomePage() {
  return (
    <>
      <NoSSR fallback={<div className="fixed inset-0 pointer-events-none z-0" />}>
        <BackgroundScene />
      </NoSSR>
      <div className="relative z-10">
        <HeroSection />
        <ServicesPreview />
        <Windows11UrgentSection />
        <PricingSection />
        <NoSSR>
          <TestimonialsSection />
        </NoSSR>
        <TrustSignals />
        <RegionsPreview />
        <AboutPreview />
      </div>
    </>
  )
}