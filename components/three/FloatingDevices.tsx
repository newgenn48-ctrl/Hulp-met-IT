'use client'

import React, { useEffect, useRef } from 'react'

export const FloatingDevices = React.memo(function FloatingDevices() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Get responsive scale based on screen size
    const getResponsiveScale = () => {
      const width = window.innerWidth
      if (width < 640) return 1.2 // Mobile - slightly larger
      if (width < 1024) return 1.1 // Tablet - slightly larger
      return 1.0 // Desktop - normal
    }

    // Get device count based on screen size
    const getDeviceCount = () => {
      const width = window.innerWidth
      if (width < 640) return 4 // Mobile - fewer devices, more visible
      if (width < 1024) return 6 // Tablet - medium amount
      return 8 // Desktop - full amount
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Create devices based on screen size
    const createDevices = () => {
      const deviceCount = getDeviceCount()
      const width = canvas.width
      const height = canvas.height

      const allDevices = [
        // Desktop computers
        {
          type: 'desktop',
          baseX: width * 0.15,
          baseY: height * 0.3,
          z: 0,
          rotationY: 0,
          speed: 0.002,
          floatRange: 20,
          priority: 1 // High priority for mobile
        },
        {
          type: 'desktop',
          baseX: width * 0.85,
          baseY: height * 0.7,
          z: 0.5,
          rotationY: Math.PI,
          speed: 0.0015,
          floatRange: 25,
          priority: 5
        },

        // Laptops
        {
          type: 'laptop',
          baseX: width * 0.25,
          baseY: height * 0.8,
          z: 0.3,
          rotationY: -Math.PI/4,
          speed: 0.0018,
          floatRange: 15,
          priority: 2 // High priority for mobile
        },
        {
          type: 'laptop',
          baseX: width * 0.75,
          baseY: height * 0.2,
          z: 0.8,
          rotationY: Math.PI/3,
          speed: 0.0022,
          floatRange: 18,
          priority: 6
        },

        // Tablets
        {
          type: 'tablet',
          baseX: width * 0.6,
          baseY: height * 0.4,
          z: 0.2,
          rotationY: Math.PI/6,
          speed: 0.0025,
          floatRange: 12,
          priority: 3 // High priority for mobile
        },
        {
          type: 'tablet',
          baseX: width * 0.4,
          baseY: height * 0.6,
          z: 0.7,
          rotationY: -Math.PI/3,
          speed: 0.002,
          floatRange: 14,
          priority: 7
        },

        // Smartphones
        {
          type: 'phone',
          baseX: width * 0.8,
          baseY: height * 0.5,
          z: 0.1,
          rotationY: Math.PI/2,
          speed: 0.003,
          floatRange: 10,
          priority: 4 // High priority for mobile
        },
        {
          type: 'phone',
          baseX: width * 0.2,
          baseY: height * 0.5,
          z: 0.9,
          rotationY: -Math.PI/2,
          speed: 0.0028,
          floatRange: 8,
          priority: 8
        }
      ]

      // Sort by priority and take only the needed amount
      return allDevices
        .sort((a, b) => a.priority - b.priority)
        .slice(0, deviceCount)
        .map(device => ({
          ...device,
          x: device.baseX,
          y: device.baseY
        }))
    }

    let devices = createDevices()

    const drawDevice = (device: any, time: number) => {
      const { type, baseX, baseY, z, rotationY, speed, floatRange } = device

      // Calculate floating position
      const floatY = baseY + Math.sin(time * speed + z * 10) * floatRange
      const floatX = baseX + Math.cos(time * speed * 0.7 + z * 15) * (floatRange * 0.3)

      // 3D depth scaling with responsive scaling
      const responsiveScale = getResponsiveScale()
      const baseScale = 0.3 + (1 - z) * 0.5 // More moderate base scale
      const scale = baseScale * responsiveScale
      const alpha = 0.15 + (1 - z) * 0.25 // Increased visibility: 0.15-0.40 range

      ctx.save()
      ctx.translate(floatX, floatY)
      ctx.scale(scale, scale)

      // Add subtle rotation
      const rotation = rotationY + Math.sin(time * speed * 2) * 0.1
      ctx.rotate(rotation)

      // Device shadows for depth (much lighter)
      ctx.save()
      ctx.translate(3, 3)
      ctx.fillStyle = `rgba(0, 0, 0, ${alpha * 0.1})`

      if (type === 'desktop') {
        drawDesktop(ctx, true)
      } else if (type === 'laptop') {
        drawLaptop(ctx, true)
      } else if (type === 'tablet') {
        drawTablet(ctx, true)
      } else if (type === 'phone') {
        drawPhone(ctx, true)
      }

      ctx.restore()

      // Main device
      ctx.fillStyle = `rgba(71, 85, 105, ${alpha})`
      ctx.strokeStyle = `rgba(29, 78, 216, ${alpha * 0.8})`
      ctx.lineWidth = 2

      if (type === 'desktop') {
        drawDesktop(ctx, false)
      } else if (type === 'laptop') {
        drawLaptop(ctx, false)
      } else if (type === 'tablet') {
        drawTablet(ctx, false)
      } else if (type === 'phone') {
        drawPhone(ctx, false)
      }

      ctx.restore()
    }

    const drawDesktop = (ctx: CanvasRenderingContext2D, shadow: boolean) => {
      if (!shadow) {
        // Monitor
        ctx.fillRect(-45, -32, 90, 55)
        ctx.strokeRect(-45, -32, 90, 55)

        // Screen
        ctx.fillStyle = 'rgba(59, 130, 246, 0.15)'
        ctx.fillRect(-40, -27, 80, 45)

        // Stand
        ctx.fillStyle = 'rgba(71, 85, 105, 0.3)'
        ctx.fillRect(-9, 23, 18, 16)
        ctx.fillRect(-28, 39, 56, 9)
      } else {
        ctx.fillRect(-45, -32, 90, 55)
        ctx.fillRect(-9, 23, 18, 16)
        ctx.fillRect(-28, 39, 56, 9)
      }
    }

    const drawLaptop = (ctx: CanvasRenderingContext2D, shadow: boolean) => {
      if (!shadow) {
        // Base
        ctx.fillRect(-40, -6, 80, 28)
        ctx.strokeRect(-40, -6, 80, 28)

        // Screen
        ctx.fillRect(-35, -38, 70, 32)
        ctx.strokeRect(-35, -38, 70, 32)

        // Screen content
        ctx.fillStyle = 'rgba(59, 130, 246, 0.15)'
        ctx.fillRect(-30, -33, 60, 22)
      } else {
        ctx.fillRect(-40, -6, 80, 28)
        ctx.fillRect(-35, -38, 70, 32)
      }
    }

    const drawTablet = (ctx: CanvasRenderingContext2D, shadow: boolean) => {
      if (!shadow) {
        // Tablet body
        ctx.beginPath()
        ctx.roundRect(-28, -40, 56, 80, 8)
        ctx.fill()
        ctx.stroke()

        // Screen
        ctx.fillStyle = 'rgba(59, 130, 246, 0.15)'
        ctx.beginPath()
        ctx.roundRect(-23, -35, 46, 70, 5)
        ctx.fill()
      } else {
        ctx.beginPath()
        ctx.roundRect(-28, -40, 56, 80, 8)
        ctx.fill()
      }
    }

    const drawPhone = (ctx: CanvasRenderingContext2D, shadow: boolean) => {
      if (!shadow) {
        // Phone body
        ctx.beginPath()
        ctx.roundRect(-17, -28, 34, 56, 6)
        ctx.fill()
        ctx.stroke()

        // Screen
        ctx.fillStyle = 'rgba(59, 130, 246, 0.15)'
        ctx.beginPath()
        ctx.roundRect(-13, -23, 26, 46, 3)
        ctx.fill()
      } else {
        ctx.beginPath()
        ctx.roundRect(-17, -28, 34, 56, 6)
        ctx.fill()
      }
    }

    const drawBackground = () => {
      // Enhanced gradient background with more contrast
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, '#eff6ff')    // Lighter blue tint
      gradient.addColorStop(0.3, '#f8fafc')  // Very light slate
      gradient.addColorStop(0.7, '#f1f5f9')  // Light slate
      gradient.addColorStop(1, '#dbeafe')    // Light blue tint

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // More visible tech grid
      ctx.strokeStyle = 'rgba(71, 85, 105, 0.08)'
      ctx.lineWidth = 1

      const gridSize = 80
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
    }

    const animate = () => {
      const time = Date.now()

      drawBackground()

      // Sort devices by z-depth for proper layering
      const sortedDevices = [...devices].sort((a, b) => b.z - a.z)

      sortedDevices.forEach(device => {
        drawDevice(device, time)
      })

      requestAnimationFrame(animate)
    }

    // Update device positions on resize
    const updateDevicePositions = () => {
      devices = createDevices() // Recreate devices for new screen size
    }

    window.addEventListener('resize', () => {
      resizeCanvas()
      updateDevicePositions()
    })

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('resize', updateDevicePositions)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
})