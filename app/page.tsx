import { HeroSection } from '@/components/home/HeroSection'
import { CompactServicesSection } from '@/components/home/CompactServicesSection'
import { HowItWorks } from '@/components/home/HowItWorks'
import { PricingSection } from '@/components/home/PricingSection'
import { TrustAndPricing } from '@/components/home/TrustAndPricing'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { RegionsPreview } from '@/components/home/RegionsPreview'
import { CTASection } from '@/components/home/CTASection'
import { SectionDivider } from '@/components/ui/SectionDivider'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan Huis - Binnen 24u Geholpen | Hulp met IT',
  description: 'Computerproblemen? Wij komen bij u thuis en lossen het op. Vanaf €14,50 per kwartier. Rustige, vriendelijke hulp. 7 dagen per week. Bel nu: 06-42827860!',
  keywords: [
    'computerhulp aan huis',
    'computer hulp',
    'laptop hulp thuis',
    'wifi problemen oplossen',
    'printer installeren',
    'computer reparatie thuis',
    'IT hulp aan huis',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Computerhulp aan huis | Hulp met IT',
    description: 'Computerproblemen? Wij komen bij u thuis en lossen het op. Rustige, vriendelijke hulp. Binnen 24 uur geholpen.',
    images: ['/og-image.webp'],
  },
}

export default function HomePage() {
  return (
    <>
      {/* 1. Hero - Wie zijn wij, wat doen wij */}
      <HeroSection />

      {/* Hero (donker) → Diensten (licht grijs) */}
      <SectionDivider variant="soft-curve" topColor="#1c1917" bottomColor="#fafaf9" />

      {/* 2. Diensten - Wat bieden wij aan */}
      <CompactServicesSection />

      {/* Diensten → Werkwijze */}
      <SectionDivider variant="tilt" topColor="#fafaf9" bottomColor="#ffffff" />

      {/* 3. Werkwijze - Hoe werkt het */}
      <HowItWorks />

      {/* Werkwijze → Tarieven */}
      <SectionDivider variant="wave" topColor="#ffffff" bottomColor="#fafaf9" />

      {/* 4. Tarieven - Wat kost het */}
      <PricingSection />

      <TestimonialsSection />

      {/* Tarieven → Vertrouwen (donker) */}
      <SectionDivider
        variant="layered-wave"
        topColor="#fafaf9"
        bottomColor={{ colors: ['#1c1917', '#292524', '#1c1917'], id: 'grad-trust' }}
      />

      {/* 5. Vertrouwen - Waarom ons kiezen */}
      <TrustAndPricing />

      {/* Vertrouwen (donker) → Regio's (licht grijs) */}
      <SectionDivider
        variant="swoosh"
        topColor={{ colors: ['#1c1917', '#292524', '#1c1917'], id: 'grad-trust-bot' }}
        bottomColor="#fafaf9"
      />
      {/* 6. Regio's - Waar zijn wij actief */}
      <RegionsPreview />

      {/* Regio's → CTA (blauw) */}
      <SectionDivider
        variant="tilt"
        topColor="#fafaf9"
        bottomColor={{ colors: ['#204a8e', '#2557a7', '#204a8e'], id: 'grad-cta' }}
      />

      {/* 7. CTA - Neem actie */}
      <CTASection />

      {/* CTA → Footer */}
      <SectionDivider
        variant="diagonal"
        topColor={{ colors: ['#204a8e', '#2557a7', '#204a8e'], id: 'grad-cta-bot' }}
        bottomColor="#1c1917"
      />
    </>
  )
}
