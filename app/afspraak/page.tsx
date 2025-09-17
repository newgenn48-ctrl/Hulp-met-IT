import { FloatingElements } from '@/components/three/FloatingElements'
import { ClientWrapper } from '@/components/ClientWrapper'
import { NoSSR } from '@/components/NoSSR'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'

// Dynamically import the form to reduce initial bundle size
const AppointmentForm = dynamic(() => import('@/components/forms/AppointmentForm').then(mod => ({ default: mod.AppointmentForm })), {
  loading: () => (
    <div className="w-full h-[500px] bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 animate-pulse flex items-center justify-center">
      <div className="text-neutral-400">Formulier wordt geladen...</div>
    </div>
  ),
  ssr: false
})

export const metadata: Metadata = {
  title: 'Afspraak Maken - Direct Online Plannen | Hulp met IT',
  description: 'Maak direct online een afspraak voor computerhulp aan huis. ✓ Kies uw gewenste tijd ✓ Binnen 24-48u service ✓ Vaste tarieven ✓ Bevestiging per e-mail',
  keywords: [
    'afspraak maken hulp met IT',
    'online afspraak computer',
    'IT hulp inplannen',
    'computer reparatie afspraak',
    'technische ondersteuning plannen'
  ],
  openGraph: {
    title: 'Afspraak Maken - Hulp met IT',
    description: 'Direct online een afspraak inplannen voor computerhulp aan huis',
    images: ['/og-image.webp'],
  },
}

export default function AfspraakPage() {
  return (
    <>      
      <div className="relative min-h-screen">
        <NoSSR fallback={<div className="absolute inset-0 pointer-events-none" />}>
          <ClientWrapper>
            <FloatingElements />
          </ClientWrapper>
        </NoSSR>
        
        <section className="hero-section relative z-10">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="text-center mb-8">
              <h1 className="text-5xl lg:text-7xl font-bold text-gradient mb-6">
                Afspraak Maken
              </h1>
              <p className="text-xl text-neural-300 max-w-3xl mx-auto leading-relaxed">
                Plan direct uw afspraak in. Bel ons en onze IT-specialist 
                komt naar u toe.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <AppointmentForm />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
