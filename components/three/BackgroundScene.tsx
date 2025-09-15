'use client'

import { useEffect, useRef } from 'react'

export function BackgroundScene() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    
    // Clear existing particles first
    container.innerHTML = ''
    
    // Create animated background particles with CSS - optimized for performance
    const particleCount = 25
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'absolute w-1 h-1 bg-primary-400/30 rounded-full animate-pulse'
      particle.style.left = Math.random() * 100 + '%'
      particle.style.top = Math.random() * 100 + '%'
      particle.style.animationDelay = Math.random() * 3 + 's'
      particle.style.animationDuration = (3 + Math.random() * 2) + 's'
      container.appendChild(particle)
    }

    return () => {
      if (container) {
        container.innerHTML = ''
      }
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-50"
    />
  )
}