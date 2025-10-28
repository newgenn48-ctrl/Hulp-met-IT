/**
 * Application constants
 * Centralized location for all hardcoded values used across the application
 */

export const CONTACT_INFO = {
  PHONE: '+31642827860',
  PHONE_DISPLAY: '06-42827860',
  PHONE_NUMBER: '642827860',
  EMAIL: 'info@hulpmetit.nl',
  EMAIL_DISPLAY: 'info@hulpmetit.nl'
} as const

export const BUSINESS_INFO = {
  NAME: 'Hulp met IT',
  FULL_NAME: 'Hulp met IT - Computerhulp aan Huis',
  WEBSITE_URL: 'https://hulpmetit.nl',
  DESCRIPTION: 'Betaalbare computerhulp aan huis door ervaren IT-specialisten in heel Nederland',
  SLOGAN: 'Betaalbare computerhulp aan huis',
  FOUNDED_YEAR: '2020'
} as const

export const PRICING = {
  RATE_PER_QUARTER: 14.50,
  TRAVEL_COSTS: 10.00,
  MINIMUM_QUARTERS: 3,
  MINIMUM_COST: 53.50, // 3x14.50 + 10
  EMERGENCY_RATE: 18.50,
  EMERGENCY_MINIMUM: 65.50, // 3x18.50 + 10
  PRICE_RANGE: '€53,50-€100',
  CURRENCY: 'EUR'
} as const

export const SERVICE_HOURS = {
  OPENING_HOURS: 'Mo-Su 09:00-21:00',
  DESCRIPTION: '09:00 tot 21:00, 7 dagen per week'
} as const

export const SOCIAL_MEDIA = {
  // Add social media links when accounts are active
  // FACEBOOK: 'https://www.facebook.com/hulpmetit',
  // INSTAGRAM: 'https://www.instagram.com/hulpmetit',
  // LINKEDIN: 'https://nl.linkedin.com/company/hulpmetit'
} as const

export const SEO_DEFAULTS = {
  SITE_NAME: 'Hulp met IT',
  OG_IMAGE: '/og-image.webp',
  DEFAULT_LOCALE: 'nl_NL',
  COUNTRY: 'Nederland',
  REGION: 'Nederland'
} as const

export const ANALYTICS = {
  GTM_ID: 'GTM-WWZVT98T',
  GOOGLE_ADS_ID: 'AW-16646363193'
} as const