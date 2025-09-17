'use client'

import { useMemo } from 'react'

export function ParticleField() {
  // Memoize particles to prevent re-calculation on every render
  const particles = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2
    })), []
  )

  return (
    <div className="particle-field">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-primary-400/20 rounded-full animate-pulse will-change-transform"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`
          }}
        />
      ))}
    </div>
  )
}