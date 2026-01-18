import { AppointmentFormWrapper } from '@/components/forms/AppointmentFormWrapper'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Afspraak Maken | Hulp met IT',
  description: 'Maak direct online een afspraak voor computerhulp aan huis. Binnen 24-48u service, vaste tarieven, bevestiging per e-mail.',
  keywords: [
    'afspraak maken hulp met IT',
    'online afspraak computer',
    'IT hulp inplannen',
    'computer reparatie afspraak',
    'technische ondersteuning plannen'
  ],
  openGraph: {
    title: 'Afspraak Maken | Hulp met IT',
    description: 'Direct online een afspraak inplannen voor computerhulp aan huis',
    images: ['/og-image.webp'],
  },
}

export default function AfspraakPage() {
  return (
    <div className="min-h-screen bg-secondary-50 py-12">
      <div className="max-w-2xl mx-auto px-6 sm:px-8">
        <AppointmentFormWrapper />
      </div>
    </div>
  )
}
