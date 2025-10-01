'use client'

import { useEffect, useRef } from 'react'

export function ProfessionalBackground() {
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

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Professional geometric pattern
    const drawProfessionalPattern = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Subtle gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, '#f8fafc')
      gradient.addColorStop(0.5, '#f1f5f9')
      gradient.addColorStop(1, '#e2e8f0')

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Professional grid pattern
      ctx.strokeStyle = 'rgba(71, 85, 105, 0.08)'
      ctx.lineWidth = 1

      const gridSize = 50

      // Vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Subtle geometric shapes for depth
      const shapes = 12
      for (let i = 0; i < shapes; i++) {
        const x = (canvas.width / shapes) * i + Math.sin(Date.now() * 0.0005 + i) * 20
        const y = canvas.height * 0.3 + Math.cos(Date.now() * 0.0003 + i) * 40
        const size = 30 + Math.sin(Date.now() * 0.0002 + i) * 10

        // Hexagonal shapes for tech feel
        ctx.beginPath()
        ctx.strokeStyle = `rgba(14, 165, 233, ${0.1 + Math.sin(Date.now() * 0.001 + i) * 0.05})`
        ctx.lineWidth = 2

        for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 3) {
          const px = x + Math.cos(angle) * size
          const py = y + Math.sin(angle) * size

          if (angle === 0) {
            ctx.moveTo(px, py)
          } else {
            ctx.lineTo(px, py)
          }
        }
        ctx.closePath()
        ctx.stroke()
      }

      // Floating professional elements
      const elements = 8
      for (let i = 0; i < elements; i++) {
        const x = (canvas.width / elements) * i + Math.sin(Date.now() * 0.0008 + i * 2) * 30
        const y = canvas.height * 0.7 + Math.cos(Date.now() * 0.0006 + i * 2) * 50
        const size = 8 + Math.sin(Date.now() * 0.0004 + i) * 3

        // Clean circles for professional look
        ctx.beginPath()
        ctx.fillStyle = `rgba(71, 85, 105, ${0.15 + Math.sin(Date.now() * 0.0012 + i) * 0.1})`
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }

      // Subtle connection lines between elements
      ctx.strokeStyle = 'rgba(71, 85, 105, 0.06)'
      ctx.lineWidth = 1

      for (let i = 0; i < elements - 1; i++) {
        const x1 = (canvas.width / elements) * i + Math.sin(Date.now() * 0.0008 + i * 2) * 30
        const y1 = canvas.height * 0.7 + Math.cos(Date.now() * 0.0006 + i * 2) * 50
        const x2 = (canvas.width / elements) * (i + 1) + Math.sin(Date.now() * 0.0008 + (i + 1) * 2) * 30
        const y2 = canvas.height * 0.7 + Math.cos(Date.now() * 0.0006 + (i + 1) * 2) * 50

        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
      }
    }

    // Animation loop
    const animate = () => {
      drawProfessionalPattern()
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    />
  )
}