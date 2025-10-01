'use client'

import { useEffect, useState } from 'react'

interface Device {
  id: number
  type: 'desktop' | 'laptop' | 'tablet' | 'phone'
  x: number
  y: number
  rotation: number
  scale: number
  speed: number
  opacity: number
}

export function VisibleFloatingDevices() {
  const [devices, setDevices] = useState<Device[]>([])

  useEffect(() => {
    const createDevices = () => {
      const isMobile = window.innerWidth < 768
      const deviceCount = isMobile ? 3 : 6  // Fewer devices on mobile
      const newDevices: Device[] = []

      for (let i = 0; i < deviceCount; i++) {
        newDevices.push({
          id: i,
          type: ['desktop', 'laptop', 'tablet', 'phone'][Math.floor(Math.random() * 4)] as Device['type'],
          x: Math.random() * 100,
          y: Math.random() * 100,
          rotation: Math.random() * 360,
          scale: isMobile ? 0.4 + Math.random() * 0.4 : 0.6 + Math.random() * 0.6,  // Smaller on mobile
          speed: 0.3 + Math.random() * 0.7,
          opacity: isMobile ? 0.15 + Math.random() * 0.15 : 0.2 + Math.random() * 0.2  // More subtle on mobile: 0.15-0.3 mobile, 0.2-0.4 desktop
        })
      }

      setDevices(newDevices)
    }

    createDevices()
    window.addEventListener('resize', createDevices)

    return () => window.removeEventListener('resize', createDevices)
  }, [])

  useEffect(() => {
    const animateDevices = () => {
      setDevices(prevDevices =>
        prevDevices.map(device => ({
          ...device,
          rotation: device.rotation + device.speed,
          y: device.y + Math.sin(Date.now() * 0.001 * device.speed) * 0.2
        }))
      )
    }

    const interval = setInterval(animateDevices, 100)
    return () => clearInterval(interval)
  }, [])

  const DeviceIcon = ({ type, className, style }: {
    type: Device['type'],
    className?: string,
    style?: React.CSSProperties
  }) => {
    const baseClasses = "absolute transition-all duration-1000 ease-in-out"

    switch (type) {
      case 'desktop':
        return (
          <div className={`${baseClasses} ${className}`} style={style}>
            <svg width="60" height="45" viewBox="0 0 60 45" className="text-blue-400/40 md:text-blue-500/50">
              <rect x="3" y="3" width="42" height="24" rx="2" fill="currentColor" stroke="currentColor" strokeWidth="1"/>
              <rect x="6" y="6" width="36" height="18" rx="1" fill="rgba(59, 130, 246, 0.15)"/>
              <rect x="20" y="29" width="9" height="7" fill="currentColor"/>
              <rect x="10" y="37" width="30" height="4" rx="2" fill="currentColor"/>
            </svg>
          </div>
        )
      case 'laptop':
        return (
          <div className={`${baseClasses} ${className}`} style={style}>
            <svg width="55" height="40" viewBox="0 0 55 40" className="text-green-400/40 md:text-green-500/50">
              <rect x="6" y="16" width="43" height="16" rx="1" fill="currentColor"/>
              <rect x="9" y="6" width="37" height="21" rx="1" fill="currentColor"/>
              <rect x="12" y="9" width="31" height="14" fill="rgba(34, 197, 94, 0.15)"/>
            </svg>
          </div>
        )
      case 'tablet':
        return (
          <div className={`${baseClasses} ${className}`} style={style}>
            <svg width="35" height="50" viewBox="0 0 35 50" className="text-purple-400/40 md:text-purple-500/50">
              <rect x="3" y="3" width="29" height="44" rx="3" fill="currentColor"/>
              <rect x="6" y="8" width="23" height="34" rx="1" fill="rgba(168, 85, 247, 0.15)"/>
            </svg>
          </div>
        )
      case 'phone':
        return (
          <div className={`${baseClasses} ${className}`} style={style}>
            <svg width="25" height="40" viewBox="0 0 25 40" className="text-orange-400/40 md:text-orange-500/50">
              <rect x="3" y="3" width="19" height="34" rx="3" fill="currentColor"/>
              <rect x="5" y="7" width="15" height="26" rx="1" fill="rgba(249, 115, 22, 0.15)"/>
            </svg>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {/* Lighter background gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white/60 to-indigo-50/25" />

      {/* Floating devices */}
      {devices.map(device => (
        <DeviceIcon
          key={device.id}
          type={device.type}
          style={{
            left: `${device.x}%`,
            top: `${device.y}%`,
            transform: `rotate(${device.rotation}deg) scale(${device.scale})`,
            opacity: device.opacity
          }}
        />
      ))}

      {/* Subtle grid overlay - lighter on mobile */}
      <div
        className="absolute inset-0 opacity-10 md:opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(rgba(71, 85, 105, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(71, 85, 105, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Tech symbols - responsive and lighter */}
      <div className="absolute inset-0 text-slate-400/15 md:text-slate-400/25">
        <div className="absolute top-6 left-4 md:top-10 md:left-10 text-4xl md:text-7xl font-mono">{'{ }'}</div>
        <div className="absolute top-8 right-6 md:top-16 md:right-16 text-3xl md:text-5xl font-mono">{'< />'}</div>
        <div className="absolute bottom-12 left-6 md:bottom-16 md:left-16 text-4xl md:text-6xl font-mono">{'[ ]'}</div>
        <div className="absolute bottom-6 right-4 md:bottom-10 md:right-10 text-2xl md:text-4xl font-mono">{'( )'}</div>
        <div className="hidden md:block absolute top-1/2 left-1/4 text-3xl font-mono transform -translate-y-1/2">{'#'}</div>
        <div className="hidden md:block absolute top-1/3 right-1/3 text-3xl font-mono">{'@'}</div>
      </div>
    </div>
  )
}