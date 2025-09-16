import { z } from 'zod'
import validator from 'validator'

// Dutch phone number regex (mobile and landline)
const DUTCH_PHONE_REGEX = /^(?:\+31|0031|0)[6-7]\d{8}$|^(?:\+31|0031|0)[1-5]\d{8}$/

// Dutch postal code regex
const DUTCH_POSTCODE_REGEX = /^[1-9][0-9]{3} ?[A-Z]{2}$/i

// Comprehensive appointment form validation schema
export const appointmentSchema = z.object({
  firstName: z
    .string()
    .min(1, 'Voornaam is verplicht')
    .max(50, 'Voornaam mag maximaal 50 karakters bevatten')
    .regex(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\s'-]+$/u, 'Voornaam bevat ongeldige karakters'),

  lastName: z
    .string()
    .min(1, 'Achternaam is verplicht')
    .max(50, 'Achternaam mag maximaal 50 karakters bevatten')
    .regex(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\s'-]+$/u, 'Achternaam bevat ongeldige karakters'),

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
    .regex(/^[a-zA-Z0-9àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\s.,-]+$/u, 'Adres bevat ongeldige karakters'),

  postalCode: z
    .string()
    .min(1, 'Postcode is verplicht')
    .refine((code) => DUTCH_POSTCODE_REGEX.test(code), 'Ongeldige Nederlandse postcode'),

  city: z
    .string()
    .min(1, 'Plaats is verplicht')
    .max(50, 'Plaats mag maximaal 50 karakters bevatten')
    .regex(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\s'-]+$/u, 'Plaats bevat ongeldige karakters'),

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
    .refine((date) => {
      if (!date) return true
      const parsedDate = new Date(date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      parsedDate.setHours(0, 0, 0, 0)
      return parsedDate >= today
    }, 'Datum moet in de toekomst liggen'),

  preferredTime: z
    .string()
    .optional()
    .refine((time) => {
      if (!time) return true
      return /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(time)
    }, 'Ongeldige tijd format'),

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

  // Security fields
  recaptchaToken: z
    .string()
    .optional()
    .or(z.literal('')), // Make optional in development
})

export type AppointmentFormData = z.infer<typeof appointmentSchema>

// Sanitization function for text inputs
export function sanitizeInput(input: string): string {
  return validator.escape(input.trim())
}

// Rate limiting map for tracking requests
export const rateLimitMap = new Map<string, { count: number; lastReset: number }>()

// Rate limiting function
export function checkRateLimit(ip: string, maxRequests = 3, windowMs = 15 * 60 * 1000): boolean {
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

// reCAPTCHA verification function
export async function verifyRecaptcha(token: string): Promise<boolean> {
  if (!token) return false

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    })

    const data = await response.json()
    return data.success === true
  } catch (error) {
    console.error('reCAPTCHA verification error:', error)
    return false
  }
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