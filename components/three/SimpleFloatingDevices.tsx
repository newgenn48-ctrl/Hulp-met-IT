'use client'

import { useEffect, useState } from 'react'

export function SimpleFloatingDevices() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Visible background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/40" />

      {/* Simple floating shapes that are definitely visible */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-blue-200/30 rounded-lg animate-bounce shadow-lg border border-blue-300/20"
           style={{ animationDelay: '0s', animationDuration: '3s' }}>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-8 h-8 bg-blue-400/40 rounded"></div>
        </div>
      </div>

      <div className="absolute top-20 right-20 w-12 h-12 bg-purple-200/30 rounded-full animate-pulse shadow-lg border border-purple-300/20"
           style={{ animationDelay: '1s', animationDuration: '4s' }}>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-6 h-6 bg-purple-400/40 rounded-full"></div>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/4 w-14 h-14 bg-green-200/30 rounded-lg animate-bounce shadow-lg border border-green-300/20"
           style={{ animationDelay: '2s', animationDuration: '5s' }}>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-7 h-7 bg-green-400/40 rounded"></div>
        </div>
      </div>

      <div className="absolute top-1/3 right-1/3 w-10 h-10 bg-yellow-200/30 rounded-full animate-pulse shadow-lg border border-yellow-300/20"
           style={{ animationDelay: '3s', animationDuration: '6s' }}>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-5 h-5 bg-yellow-400/40 rounded-full"></div>
        </div>
      </div>

      <div className="absolute bottom-1/4 right-10 w-12 h-12 bg-red-200/30 rounded-lg animate-bounce shadow-lg border border-red-300/20"
           style={{ animationDelay: '4s', animationDuration: '3.5s' }}>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-6 h-6 bg-red-400/40 rounded"></div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/6 w-8 h-8 bg-indigo-200/30 rounded-full animate-pulse shadow-lg border border-indigo-300/20"
           style={{ animationDelay: '5s', animationDuration: '4.5s' }}>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-4 h-4 bg-indigo-400/40 rounded-full"></div>
        </div>
      </div>

      {/* Grid overlay for tech feel */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(71, 85, 105, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(71, 85, 105, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Subtle tech pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-5 left-5 text-blue-300/10 text-6xl font-mono">{'{ }'}</div>
        <div className="absolute top-10 right-10 text-purple-300/10 text-4xl font-mono">{'< />'}</div>
        <div className="absolute bottom-10 left-10 text-green-300/10 text-5xl font-mono">{'[ ]'}</div>
        <div className="absolute bottom-5 right-5 text-indigo-300/10 text-3xl font-mono">{'( )'}</div>
      </div>
    </div>
  )
}