import { z } from 'zod'
import validator from 'validator'

// Dutch phone number regex (mobile and landline) - More flexible
const DUTCH_PHONE_REGEX = /^(?:\+31|0031|0)?[1-9]\d{7,9}$/

// Dutch postal code regex
const DUTCH_POSTCODE_REGEX = /^[1-9][0-9]{3} ?[A-Z]{2}$/i

// Comprehensive appointment form validation schema
export const appointmentSchema = z.object({
  firstName: z
    .string()
    .min(1, 'Voornaam is verplicht')
    .max(50, 'Voornaam mag maximaal 50 karakters bevatten')
    .regex(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\s'-]+$/, 'Voornaam bevat ongeldige karakters'),

  lastName: z
    .string()
    .min(1, 'Achternaam is verplicht')
    .max(50, 'Achternaam mag maximaal 50 karakters bevatten')
    .regex(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\s'-]+$/, 'Achternaam bevat ongeldige karakters'),

  email: z
    .string()
    .min(1, 'E-mailadres is verplicht')
    .max(254, 'E-mailadres is te lang')
    .refine((email) => validator.isEmail(email), 'Ongeldig e-mailadres'),

  phone: z
    .string()
    .min(1, 'Telefoonnummer is verplicht')
    .refine((phone) => {
      const cleanPhone = phone.replace(/[\s-]/g, '')
      return DUTCH_PHONE_REGEX.test(cleanPhone)
    }, 'Ongeldig Nederlands telefoonnummer'),

  address: z
    .string()
    .min(1, 'Adres is verplicht')
    .max(100, 'Adres mag maximaal 100 karakters bevatten')
    .regex(/^[a-zA-Z0-9àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\s.,-]+$/, 'Adres bevat ongeldige karakters'),

  postalCode: z
    .string()
    .min(1, 'Postcode is verplicht')
    .refine((code) => DUTCH_POSTCODE_REGEX.test(code), 'Ongeldige Nederlandse postcode'),

  city: z
    .string()
    .min(1, 'Plaats is verplicht')
    .max(50, 'Plaats mag maximaal 50 karakters bevatten')
    .regex(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\s'-]+$/, 'Plaats bevat ongeldige karakters'),

  serviceType: z
    .string()
    .min(1, 'Service type is verplicht')
    .refine((type) => [
      'computerhulp',
      'printerhulp',
      'internet-wifi',
      'tablet-smartphone',
      'uitleg-les',
      'email-problemen',
      'windows-11-overstap',
      'student-aan-huis',
      'anders'
    ].includes(type), 'Ongeldig service type'),

  urgency: z
    .string()
    .min(1, 'Urgentie is verplicht')
    .refine((urgency) => [
      'low',
      'normal',
      'urgent',
      'high',
      'critical'
    ].includes(urgency), 'Ongeldige urgentie'),

  preferredDate: z
    .string()
    .optional()
    .nullable()
    .transform((val) => val ?? '')
    .refine((date) => {
      if (!date || date === '') return true
      const parsedDate = new Date(date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      parsedDate.setHours(0, 0, 0, 0)
      return parsedDate >= today
    }, 'Datum moet in de toekomst liggen'),

  preferredTime: z
    .string()
    .optional()
    .nullable()
    .transform((val) => val ?? '')
    .refine((time) => {
      if (!time || time === '') return true

      // Allow HH:MM format (e.g., "09:00", "13:00", "17:00")
      if (/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(time)) {
        return true
      }

      // Allow common Dutch time expressions for flexibility
      const dutchTimePatterns = [
        /^tussen\s+\d{1,2}:\d{2}\s+en\s+\d{1,2}:\d{2}\s*uur?$/i,
        /^rond\s+\d{1,2}:\d{2}\s*uur?$/i,
        /^ongeveer\s+\d{1,2}:\d{2}\s*uur?$/i,
        /^na\s+\d{1,2}:\d{2}\s*uur?$/i,
        /^voor\s+\d{1,2}:\d{2}\s*uur?$/i,
        /^ochtend$/i,
        /^middag$/i,
        /^avond$/i,
        /^\d{1,2}:\d{2}\s*-\s*\d{1,2}:\d{2}\s*uur?$/i
      ]

      return dutchTimePatterns.some(pattern => pattern.test(time))
    }, 'Ongeldige tijd format. Gebruik bijv. "14:00", "tussen 14:00 en 16:00 uur", of "ochtend"'),

  problemDescription: z
    .string()
    .min(10, 'Beschrijving moet minimaal 10 karakters bevatten')
    .max(1000, 'Beschrijving mag maximaal 1000 karakters bevatten'),

  deviceType: z
    .string()
    .max(100, 'Apparaat type mag maximaal 100 karakters bevatten')
    .optional()
    .or(z.literal('')),

  previousAttempts: z
    .string()
    .max(500, 'Eerdere pogingen mag maximaal 500 karakters bevatten')
    .optional()
    .or(z.literal('')),

})

export type AppointmentFormData = z.infer<typeof appointmentSchema>

// Sanitization function for text inputs
export function sanitizeInput(input: string): string {
  return validator.escape(input.trim())
}

// Rate limiting map for tracking requests
export const rateLimitMap = new Map<string, { count: number; lastReset: number }>()

// Helper function to clear rate limit for development testing
export function clearRateLimit(ip?: string): void {
  if (process.env.NODE_ENV === 'development') {
    if (ip) {
      rateLimitMap.delete(ip)
    } else {
      rateLimitMap.clear()
    }
  }
}

// Security helper functions
export function validateClientIP(request: Request): string {
  // Get IP from various headers (Vercel, Cloudflare, etc.)
  const forwardedFor = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  const vercelIP = request.headers.get('x-vercel-forwarded-for')

  const ip = vercelIP || forwardedFor?.split(',')[0] || realIP || 'unknown'

  // Basic IP validation (IPv4 and IPv6)
  const ipRegex = /^(?:(?:[0-9]{1,3}\.){3}[0-9]{1,3}|(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4})$/
  return ipRegex.test(ip.trim()) ? ip.trim() : 'unknown'
}

export function sanitizeUserAgent(userAgent: string | null): string {
  if (!userAgent) return 'unknown'
  // Remove potentially dangerous characters and limit length
  return userAgent.replace(/[<>'"&]/g, '').substring(0, 200)
}

// Rate limiting function
export function checkRateLimit(ip: string, maxRequests = 5, windowMs = 15 * 60 * 1000): boolean {
  // In development, be more lenient with rate limiting
  if (process.env.NODE_ENV === 'development') {
    maxRequests = 20  // Allow more requests in development
    windowMs = 5 * 60 * 1000  // Shorter window (5 minutes instead of 15)
  }

  const now = Date.now()
  const windowStart = now - windowMs

  const entry = rateLimitMap.get(ip)

  if (!entry || entry.lastReset < windowStart) {
    rateLimitMap.set(ip, { count: 1, lastReset: now })
    return true
  }

  if (entry.count >= maxRequests) {
    return false
  }

  entry.count++
  return true
}


// Security logging function
export function logSecurityEvent(event: string, details: any, ip?: string) {
  const timestamp = new Date().toISOString()
  const logEntry = {
    timestamp,
    event,
    ip,
    details,
    environment: process.env.NODE_ENV
  }

  if (process.env.NODE_ENV === 'development') {
    console.warn('🔒 Security Event:', JSON.stringify(logEntry, null, 2))
  } else {
    // In production, send to proper logging service
    console.warn('Security Event:', JSON.stringify(logEntry))
  }
}