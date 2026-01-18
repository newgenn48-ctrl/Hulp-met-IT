import { HeroSection } from '@/components/home/HeroSection'
import { TrustSignals } from '@/components/home/TrustSignals'
import { HowItWorks } from '@/components/home/HowItWorks'
import { ServicesGrid } from '@/components/services/ServicesGrid'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { PricingSection } from '@/components/home/PricingSection'
import { AboutPreview } from '@/components/home/AboutPreview'
import { RegionsPreview } from '@/components/home/RegionsPreview'
import { FAQSection } from '@/components/home/FAQSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hulp Met IT | IT-Specialist aan Huis - Snel & Vakkundig',
  description: 'Uw persoonlijke IT-expert voor computer, laptop, wifi en meer. Snel, vakkundig en bij u thuis. Bel 06-42 82 78 60 voor gratis advies.',
  keywords: [
    'IT-specialist aan huis',
    'computerhulp aan huis',
    'computer hulp ouderen',
    'laptop hulp thuis',
    'IT hulp aan huis',
    'computer reparatie thuis',
    'wifi problemen oplossen',
    'printer installeren',
    'IT-expert thuis'
  ],
  openGraph: {
    title: 'IT-Specialist aan Huis | Hulp met IT',
    description: 'Uw persoonlijke IT-expert voor computer, laptop, wifi en meer. Snel, vakkundig en bij u thuis.',
    images: ['/og-image.webp'],
  },
}

export default function HomePage() {
  return (
    <main>
      {/* Hero - Eerste indruk met foto en CTA */}
      <HeroSection />

      {/* Diensten - Wat we doen */}
      <ServicesGrid maxItems={6} />

      {/* Hoe het werkt - Duidelijke stappen */}
      <HowItWorks />

      {/* Trust signals - Waarom wij */}
      <TrustSignals />

      {/* Reviews - Social proof */}
      <TestimonialsSection />

      {/* Prijzen - Transparantie */}
      <PricingSection />

      {/* FAQ - Veelgestelde vragen */}
      <FAQSection />

      {/* Over ons - Persoonlijk */}
      <AboutPreview />

      {/* Regio's - Lokaal */}
      <RegionsPreview />
    </main>
  )
}
