'use client'

export function FloatingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="floating-element absolute top-20 left-10 w-4 h-4 bg-primary-400/20 rounded-full blur-sm" />
      <div className="floating-element absolute top-40 right-20 w-6 h-6 bg-accent-400/20 rounded-full blur-sm" />
      <div className="floating-element absolute bottom-40 left-1/4 w-3 h-3 bg-primary-400/30 rounded-full blur-sm" />
      <div className="floating-element absolute bottom-20 right-1/3 w-5 h-5 bg-accent-400/25 rounded-full blur-sm" />
      <div className="floating-element absolute top-1/3 left-3/4 w-4 h-4 bg-primary-400/20 rounded-full blur-sm" />
    </div>
  )
}