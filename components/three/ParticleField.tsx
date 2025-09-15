'use client'

export function ParticleField() {
  return (
    <div className="particle-field">
      {Array.from({ length: 30 }, (_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary-400/20 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  )
}