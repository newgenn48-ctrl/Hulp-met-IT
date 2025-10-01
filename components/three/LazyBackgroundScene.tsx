'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import 3D component with no SSR
const BackgroundScene = dynamic(() => import('./BackgroundScene').then(mod => mod.BackgroundScene), {
  ssr: false,
  loading: () => null
})

export function LazyBackgroundScene() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    // Only load 3D after critical content is rendered
    const timer = setTimeout(() => {
      // Additional check: only load if user hasn't scrolled away quickly
      if (window.scrollY < window.innerHeight * 2) {
        setShouldLoad(true)
      }
    }, 1500) // Wait 1.5s after page load

    // Also load on user interaction (scroll or click)
    const handleUserInteraction = () => {
      setShouldLoad(true)
      cleanup()
    }

    const cleanup = () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleUserInteraction)
      window.removeEventListener('click', handleUserInteraction)
    }

    window.addEventListener('scroll', handleUserInteraction, { once: true })
    window.addEventListener('click', handleUserInteraction, { once: true })

    return cleanup
  }, [])

  if (!shouldLoad) {
    return <div className="fixed inset-0 pointer-events-none z-0" />
  }

  return <BackgroundScene />
}