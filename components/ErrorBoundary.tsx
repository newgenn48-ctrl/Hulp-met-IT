'use client'

import React from 'react'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error: Error | null; reset: () => void }>
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  reset = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback
        return <FallbackComponent error={this.state.error} reset={this.reset} />
      }

      return <DefaultErrorFallback error={this.state.error} reset={this.reset} />
    }

    return this.props.children
  }
}

function DefaultErrorFallback({ error, reset }: { error: Error | null; reset: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-red-500" />
        </div>

        <h1 className="text-2xl font-bold text-secondary-800 mb-4">
          Er is iets misgegaan
        </h1>

        <p className="text-secondary-600 mb-6">
          Sorry, er is een onverwachte fout opgetreden. U kunt proberen de pagina te vernieuwen of naar de hoofdpagina gaan.
        </p>

        {process.env.NODE_ENV === 'development' && error && (
          <details className="text-left mb-6 p-4 bg-red-50 rounded-lg">
            <summary className="cursor-pointer text-sm font-medium text-red-700 mb-2">
              Technische details (alleen zichtbaar tijdens ontwikkeling)
            </summary>
            <pre className="text-xs text-red-600 overflow-auto">
              {error.message}
              {error.stack && '\n' + error.stack}
            </pre>
          </details>
        )}

        <div className="space-y-3">
          <button
            type="button"
            onClick={reset}
            className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-accent-600 transition-colors flex items-center justify-center"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Probeer opnieuw
          </button>

          <Link
            href="/"
            className="w-full bg-secondary-100 text-secondary-700 px-6 py-3 rounded-lg font-semibold hover:bg-secondary-200 transition-colors flex items-center justify-center"
          >
            <Home className="w-5 h-5 mr-2" />
            Naar hoofdpagina
          </Link>
        </div>

        <p className="text-sm text-secondary-500 mt-6">
          Blijft het probleem bestaan? Bel ons op{' '}
          <a href="tel:+31642827860" className="text-primary-600 hover:underline">
            06-42827860
          </a>
        </p>
      </div>
    </div>
  )
}

// Hook for handling async errors in functional components
export function useErrorHandler() {
  return (error: Error) => {
    console.error('Async error caught:', error)
    // You could also report to error tracking service here
    throw error // Re-throw to be caught by ErrorBoundary
  }
}