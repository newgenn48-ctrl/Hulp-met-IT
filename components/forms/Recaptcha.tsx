'use client'

import { useEffect, useState, useRef } from 'react'

// Extend window object to include grecaptcha Enterprise
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void
      enterprise: {
        execute: (siteKey: string, options: { action: string }) => Promise<string>
        render: (element: HTMLElement | string, options: any) => number
      }
    }
  }
}

interface RecaptchaEnterpriseProps {
  action: string
  onToken: (token: string) => void
  onError?: (error: Error) => void
  className?: string
  children?: React.ReactNode
}

export function RecaptchaEnterprise({ action, onToken, onError, className, children }: RecaptchaEnterpriseProps) {
  const [isReady, setIsReady] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6Lcd3csrAAAAAABxp2Fe0zZ8rR7gfG4M3VGwZKAy'

  // Callback function for reCAPTCHA Enterprise
  useEffect(() => {
    // Make callback available globally
    ;(window as any).onRecaptchaSubmit = (token: string) => {
      onToken(token)
    }

    return () => {
      delete (window as any).onRecaptchaSubmit
    }
  }, [onToken])

  useEffect(() => {
    const checkRecaptchaReady = () => {
      if (typeof window !== 'undefined' && window.grecaptcha?.enterprise) {
        window.grecaptcha.ready(() => {
          setIsReady(true)
        })
      } else {
        // Retry after a short delay if grecaptcha is not yet loaded
        setTimeout(checkRecaptchaReady, 100)
      }
    }

    checkRecaptchaReady()
  }, [])

  // Render reCAPTCHA button when ready
  useEffect(() => {
    if (isReady && buttonRef.current && window.grecaptcha?.enterprise) {
      try {
        window.grecaptcha.enterprise.render(buttonRef.current, {
          sitekey: siteKey,
          callback: 'onRecaptchaSubmit',
          action: action
        })
      } catch (error) {
        onError?.(error instanceof Error ? error : new Error('reCAPTCHA Enterprise rendering fout'))
      }
    }
  }, [isReady, siteKey, action, onError])

  return (
    <button
      ref={buttonRef}
      className={`g-recaptcha ${className || ''}`}
      data-sitekey={siteKey}
      data-callback="onRecaptchaSubmit"
      data-action={action}
      type="submit"
    >
      {children || 'Submit'}
    </button>
  )
}

// Hook for easy reCAPTCHA Enterprise usage
export function useRecaptcha() {
  const [token, setToken] = useState<string | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const executeRecaptcha = async (action: string): Promise<string | null> => {
    setIsLoading(true)
    setError(null)

    return new Promise((resolve) => {
      const handleToken = (newToken: string) => {
        setToken(newToken)
        setIsLoading(false)
        resolve(newToken)
      }

      const handleError = (newError: Error) => {
        setError(newError)
        setIsLoading(false)
        resolve(null)
      }

      // Execute reCAPTCHA Enterprise programmatically
      if (typeof window !== 'undefined' && window.grecaptcha?.enterprise) {
        window.grecaptcha.ready(async () => {
          try {
            const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6Lcd3csrAAAAAABxp2Fe0zZ8rR7gfG4M3VGwZKAy'
            const token = await window.grecaptcha.enterprise.execute(siteKey, { action })
            handleToken(token)
          } catch (error) {
            handleError(error instanceof Error ? error : new Error('reCAPTCHA Enterprise fout'))
          }
        })
      } else {
        handleError(new Error('reCAPTCHA Enterprise niet beschikbaar'))
      }
    })
  }

  return {
    token,
    error,
    isLoading,
    executeRecaptcha
  }
}