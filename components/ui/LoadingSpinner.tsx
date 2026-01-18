'use client'

import { Loader2 } from 'lucide-react'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'white' | 'secondary'
  text?: string
  className?: string
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8'
}

const colorClasses = {
  primary: 'text-primary-700',
  white: 'text-white',
  secondary: 'text-secondary-500'
}

export function LoadingSpinner({
  size = 'md',
  color = 'primary',
  text,
  className = ''
}: LoadingSpinnerProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Loader2 className={`animate-spin ${sizeClasses[size]} ${colorClasses[color]}`} />
      {text && (
        <span className={`ml-2 text-sm ${colorClasses[color]}`}>
          {text}
        </span>
      )}
    </div>
  )
}

// Page-level loading overlay
export function PageLoadingOverlay({ text = 'Laden...' }: { text?: string }) {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <LoadingSpinner size="lg" text={text} />
      </div>
    </div>
  )
}

// Skeleton loading for content
export function SkeletonLoader({
  lines = 3,
  className = ''
}: {
  lines?: number
  className?: string
}) {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`bg-secondary-200 rounded h-4 mb-3 ${
            i === lines - 1 ? 'w-3/4' : 'w-full'
          }`}
        />
      ))}
    </div>
  )
}

// Button loading state
export function LoadingButton({
  children,
  isLoading,
  disabled,
  className = '',
  ...props
}: {
  children: React.ReactNode
  isLoading: boolean
  disabled?: boolean
  className?: string
  [key: string]: any
}) {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={`relative ${className} ${
        isLoading || disabled ? 'cursor-not-allowed opacity-70' : ''
      }`}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoadingSpinner size="sm" color="white" />
        </div>
      )}
      <span className={isLoading ? 'invisible' : 'visible'}>
        {children}
      </span>
    </button>
  )
}