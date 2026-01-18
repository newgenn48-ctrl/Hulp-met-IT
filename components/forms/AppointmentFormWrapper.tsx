'use client'

import dynamic from 'next/dynamic'

const AppointmentForm = dynamic(
  () => import('@/components/forms/AppointmentForm').then(mod => ({ default: mod.AppointmentForm })),
  {
    loading: () => (
      <div className="w-full h-[500px] bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 animate-pulse flex items-center justify-center">
        <div className="text-secondary-400">Formulier wordt geladen...</div>
      </div>
    ),
    ssr: false
  }
)

export function AppointmentFormWrapper() {
  return <AppointmentForm />
}
