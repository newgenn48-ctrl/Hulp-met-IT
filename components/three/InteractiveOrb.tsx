'use client'

export function InteractiveOrb() {
  return (
    <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2">
      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary-500/30 to-accent-500/30 animate-pulse blur-xl" />
      <div className="absolute inset-4 rounded-full bg-gradient-to-r from-primary-400/50 to-accent-400/50 animate-spin" style={{animationDuration: '10s'}} />
    </div>
  )
}