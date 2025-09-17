import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { appointmentSchema, checkRateLimit, logSecurityEvent, sanitizeInput, verifyRecaptchaEnterprise, verifyRecaptcha, validateClientIP, sanitizeUserAgent, type AppointmentFormData } from '@/lib/validation'
import { headers } from 'next/headers'
import DOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'

// Create DOMPurify instance for server-side sanitization
const window = new JSDOM('').window
const purify = DOMPurify(window as any)

// Types for better type safety (EmailStatus removed as it's not used)

// Security headers
const securityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self'",
}

// Email configuration constants
const EMAIL_CONFIG = {
  FROM_ADDRESS: 'info@hulpmetit.nl',
  FROM_NAME: 'Hulp met IT',
  ADMIN_FROM_NAME: 'Afspraak Systeem',
  DOMAIN: 'hulpmetit.nl',
  PHONE: '06-42827860',
  WEBSITE: 'www.hulpmetit.nl'
} as const

// Service type mapping
const serviceTypeLabels: Record<string, string> = {
  'computerhulp': 'Computerhulp - Computer problemen oplossen',
  'printerhulp': 'Printerhulp - Printer installatie & reparatie',
  'internet-wifi': 'Internet & WiFi - Netwerk problemen',
  'tablet-smartphone': 'Tablet & Smartphone hulp',
  'uitleg-les': 'Uitleg & Les - Computer training',
  'email-problemen': 'E-mail problemen oplossen',
  'windows-11-overstap': 'Windows 11 Overstap Service',
  'student-aan-huis': 'Student Aan Huis - Algemene IT hulp',
  'anders': 'Anders - Zie beschrijving'
}

// Urgency level mapping
const urgencyLabels: Record<string, { label: string; priority: string }> = {
  'low': { label: 'Niet urgent - Binnen een week', priority: 'Laag' },
  'normal': { label: 'Zonder spoed - Vanaf 2 dagen', priority: 'Normaal' },
  'urgent': { label: 'Met spoed - Binnen 24 uur', priority: 'Hoog' },
  'high': { label: 'Urgent - Binnen 24 uur', priority: 'Hoog' },
  'critical': { label: 'Zeer urgent - Zelfde dag', priority: 'KRITIEK' }
}

// Create email transporter with optimized settings
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'mail.hulpmetit.nl',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER || EMAIL_CONFIG.FROM_ADDRESS,
      pass: process.env.SMTP_PASS!
    },
    tls: {
      rejectUnauthorized: false
    },
    // Optimized settings for TransIP
    pool: true,
    maxConnections: 1,
    rateDelta: 1000,
    rateLimit: 1,
    connectionTimeout: 30000,
    greetingTimeout: 30000,
    socketTimeout: 30000
  })
}

// Format date and time for Dutch locale
function formatDateTime(date: string, time: string): string {
  const dateObj = new Date(date)
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  const formattedDate = dateObj.toLocaleDateString('nl-NL', options)
  return `${formattedDate} om ${time}`
}

// Format phone number for tel: links (converts Dutch format to international)
function formatPhoneForTel(phone: string): string {
  // Remove all spaces and dashes
  const cleaned = phone.replace(/[-\s]/g, '')
  // Convert Dutch format (06-xxx or 010-xxx) to international (+31xxx)
  if (cleaned.startsWith('06')) {
    return `+31${cleaned.substring(1)}`
  } else if (cleaned.startsWith('0')) {
    return `+31${cleaned.substring(1)}`
  }
  return cleaned
}

// Generate appointment reference number
function generateReference(): string {
  const timestamp = Date.now().toString().slice(-6)
  const random = Math.random().toString(36).substring(2, 5).toUpperCase()
  return `HIT-${timestamp}-${random}`
}

// Create standardized email headers
function createEmailHeaders(reference: string): Record<string, string> {
  return {
    'X-Mailer': 'Hulp met IT Afspraak Systeem',
    'X-Priority': '3',
    'X-MSMail-Priority': 'Normal',
    'List-Unsubscribe': `<mailto:${EMAIL_CONFIG.FROM_ADDRESS}?subject=Unsubscribe>`,
    'Message-ID': `<${reference}-${Date.now()}@${EMAIL_CONFIG.DOMAIN}>`,
    'Organization': EMAIL_CONFIG.FROM_NAME,
    'X-Auto-Response-Suppress': 'OOF, DR, RN, NRN, AutoReply',
    'Return-Path': `<${EMAIL_CONFIG.FROM_ADDRESS}>`
  }
}

// Create email options with proper authentication setup
function createEmailOptions(to: string, subject: string, html: string, text: string, reference: string, isAdmin = false) {
  return {
    from: `"${isAdmin ? EMAIL_CONFIG.ADMIN_FROM_NAME : EMAIL_CONFIG.FROM_NAME}" <${EMAIL_CONFIG.FROM_ADDRESS}>`,
    to,
    replyTo: EMAIL_CONFIG.FROM_ADDRESS,
    returnPath: EMAIL_CONFIG.FROM_ADDRESS,
    envelope: {
      from: EMAIL_CONFIG.FROM_ADDRESS,
      to
    },
    subject,
    html,
    text,
    headers: createEmailHeaders(reference)
  }
}

// Customer confirmation email template
function getCustomerEmailTemplate(data: AppointmentFormData, reference: string): string {
  const serviceLabel = serviceTypeLabels[data.serviceType] || data.serviceType
  const urgencyInfo = urgencyLabels[data.urgency] || { label: data.urgency, priority: 'Normaal' }
  const appointmentDateTime = data.preferredDate && data.preferredTime
    ? formatDateTime(data.preferredDate, data.preferredTime)
    : 'Wordt telefonisch afgesproken'

  return `
<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Afspraak Bevestiging - Hulp met IT</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif; 
      line-height: 1.6; 
      color: #1f2937; 
      background-color: #f9fafb;
    }
    .email-container { 
      max-width: 600px; 
      margin: 0 auto; 
      background-color: #ffffff;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }
    .header { 
      background: linear-gradient(135deg, #1e40af 0%, #3b82f6 50%, #6366f1 100%); 
      color: white; 
      padding: 40px 30px; 
      text-align: center; 
    }
    .header h1 { 
      font-size: 28px; 
      font-weight: 700; 
      margin-bottom: 8px; 
      letter-spacing: -0.025em;
    }
    .header p { 
      font-size: 16px; 
      opacity: 0.9; 
      margin: 0;
    }
    .content { 
      padding: 40px 30px; 
      background: #ffffff;
    }
    .greeting { 
      font-size: 18px; 
      font-weight: 600; 
      color: #1f2937; 
      margin-bottom: 20px;
    }
    .intro { 
      font-size: 16px; 
      color: #4b5563; 
      margin-bottom: 30px; 
      line-height: 1.7;
    }
    .info-card { 
      background: #f8fafc; 
      border: 1px solid #e5e7eb; 
      border-left: 4px solid #3b82f6; 
      border-radius: 8px; 
      padding: 24px; 
      margin: 24px 0; 
    }
    .info-card.priority-high { border-left-color: #f59e0b; }
    .info-card.priority-critical { border-left-color: #ef4444; }
    .info-card h3 { 
      font-size: 18px; 
      font-weight: 600; 
      color: #1f2937; 
      margin-bottom: 16px;
      display: flex;
      align-items: center;
    }
    .info-card p { 
      margin-bottom: 8px; 
      font-size: 15px; 
      color: #374151;
    }
    .info-card p:last-child { margin-bottom: 0; }
    .info-card strong { font-weight: 600; color: #1f2937; }
    .steps-list { 
      list-style: none; 
      padding: 0; 
    }
    .steps-list li { 
      padding: 8px 0; 
      font-size: 15px; 
      color: #374151;
      display: flex;
      align-items: center;
    }
    .steps-list li::before {
      content: "✓";
      color: #10b981;
      font-weight: bold;
      margin-right: 12px;
      font-size: 16px;
    }
    .contact-section { 
      background: #f0f9ff; 
      border: 1px solid #e0f2fe; 
      border-radius: 8px; 
      padding: 24px; 
      margin: 30px 0; 
      text-align: center;
    }
    .contact-section p { 
      margin-bottom: 20px; 
      font-size: 15px; 
      color: #374151;
    }
    .cta-button { 
      display: inline-block; 
      background: linear-gradient(135deg, #3b82f6, #1d4ed8); 
      color: white; 
      padding: 14px 28px; 
      text-decoration: none; 
      border-radius: 6px; 
      font-weight: 600; 
      font-size: 15px;
      transition: all 0.2s;
      box-shadow: 0 2px 4px rgba(59, 130, 246, 0.2);
    }
    .reference { 
      background: #eff6ff; 
      border: 1px solid #dbeafe; 
      border-radius: 6px; 
      padding: 12px 16px; 
      font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace; 
      font-size: 14px; 
      font-weight: 600; 
      color: #1e40af; 
      text-align: center; 
      margin: 20px 0;
    }
    .footer { 
      background: #f9fafb; 
      border-top: 1px solid #e5e7eb; 
      padding: 30px; 
      text-align: center; 
    }
    .company-info { 
      font-size: 14px; 
      color: #6b7280; 
      margin-bottom: 16px;
    }
    .company-info strong { color: #374151; }
    .footer-links { 
      font-size: 13px; 
      color: #9ca3af; 
    }
    .footer-links a { 
      color: #3b82f6; 
      text-decoration: none; 
    }
    @media (max-width: 480px) {
      .email-container { margin: 0; }
      .header, .content, .footer { padding: 24px 20px; }
      .header h1 { font-size: 24px; }
      .info-card { padding: 20px; }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>Afspraak Bevestiging</h1>
      <p>Professionele IT-ondersteuning aan huis</p>
    </div>
    
    <div class="content">
      <div class="greeting">Beste ${data.firstName} ${data.lastName},</div>
      
      <div class="intro">
        Hartelijk dank voor uw vertrouwen in Hulp met IT. Wij hebben uw afspraakaanvraag in goede orde ontvangen en zullen binnen 2 werkuren telefonisch contact met u opnemen om de afspraak definitief te bevestigen.
      </div>

      <div class="reference">
        Referentienummer: <strong>${reference}</strong>
      </div>
      
      <div class="info-card ${data.urgency === 'urgent' || data.urgency === 'high' ? 'priority-high' : data.urgency === 'critical' ? 'priority-critical' : ''}">
        <h3>📋 Afspraakgegevens</h3>
        <p><strong>Service:</strong> ${serviceLabel}</p>
        <p><strong>Gewenste datum & tijd:</strong> ${appointmentDateTime}</p>
        <p><strong>Prioriteit:</strong> ${urgencyInfo.label}</p>
        <p><strong>Locatie:</strong> ${data.address}, ${data.postalCode} ${data.city}</p>
      </div>
      
      <div class="info-card">
        <h3>💭 Probleem beschrijving</h3>
        <p>${data.problemDescription}</p>
      </div>
      
      <div class="info-card">
        <h3>🔄 Vervolgstappen</h3>
        <ul class="steps-list">
          <li>Uw aanvraag is geregistreerd in ons systeem</li>
          <li>Wij nemen binnen 2 werkuren telefonisch contact op</li>
          <li>Datum en tijdstip worden definitief bevestigd</li>
          <li>Onze gecertificeerde IT-specialist komt naar u toe</li>
          <li>Uw IT-probleem wordt professioneel opgelost</li>
        </ul>
      </div>
      
      <div class="contact-section">
        <p><strong>Dringende vragen of wijzigingen?</strong><br>
        Neem direct contact met ons op via onderstaande knop of bel ons op ${EMAIL_CONFIG.PHONE}.</p>
        
        <a href="tel:${formatPhoneForTel(EMAIL_CONFIG.PHONE)}" class="cta-button" style="display: inline-block; background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 15px;">📞 Direct Contact</a>
      </div>
    </div>
    
    <div class="footer">
      <div class="company-info">
        <strong>Hulp met IT</strong><br>
        Professionele IT-ondersteuning aan huis<br>
        Telefoon: ${EMAIL_CONFIG.PHONE} | E-mail: ${EMAIL_CONFIG.FROM_ADDRESS}
      </div>
      
      <div class="footer-links">
        Website: <a href="https://${EMAIL_CONFIG.WEBSITE}">${EMAIL_CONFIG.WEBSITE}</a><br>
        © ${new Date().getFullYear()} Hulp met IT. Alle rechten voorbehouden.
      </div>
    </div>
  </div>
</body>
</html>`
}

// Customer confirmation email plain text template (for better deliverability)
function getCustomerEmailTextTemplate(data: AppointmentFormData, reference: string): string {
  const serviceLabel = serviceTypeLabels[data.serviceType] || data.serviceType
  const urgencyInfo = urgencyLabels[data.urgency] || { label: data.urgency, priority: 'Normaal' }
  const appointmentDateTime = data.preferredDate && data.preferredTime
    ? formatDateTime(data.preferredDate, data.preferredTime)
    : 'Wordt telefonisch afgesproken'

  return `
AFSPRAAK BEVESTIGING - HULP MET IT

Beste ${data.firstName} ${data.lastName},

Hartelijk dank voor uw vertrouwen in Hulp met IT. Wij hebben uw afspraakaanvraag in goede orde ontvangen en zullen binnen 2 werkuren telefonisch contact met u opnemen om de afspraak definitief te bevestigen.

Referentienummer: ${reference}

AFSPRAAKGEGEVENS:
- Service: ${serviceLabel}
- Gewenste datum & tijd: ${appointmentDateTime}
- Prioriteit: ${urgencyInfo.label}
- Locatie: ${data.address}, ${data.postalCode} ${data.city}

PROBLEEM BESCHRIJVING:
${data.problemDescription}

VERVOLGSTAPPEN:
1. Uw aanvraag is geregistreerd in ons systeem
2. Wij nemen binnen 2 werkuren telefonisch contact op
3. Datum en tijdstip worden definitief bevestigd
4. Onze gecertificeerde IT-specialist komt naar u toe
5. Uw IT-probleem wordt professioneel opgelost

DRINGENDE VRAGEN?
Neem direct contact met ons op:
Telefoon: ${EMAIL_CONFIG.PHONE}
E-mail: ${EMAIL_CONFIG.FROM_ADDRESS}

---
Hulp met IT
Professionele IT-ondersteuning aan huis
Website: ${EMAIL_CONFIG.WEBSITE}
Telefoon: ${EMAIL_CONFIG.PHONE}
E-mail: ${EMAIL_CONFIG.FROM_ADDRESS}

© ${new Date().getFullYear()} Hulp met IT. Alle rechten voorbehouden.
`
}

// Admin notification email template
function getAdminEmailTemplate(data: any, reference: string, security?: { ip: string; userAgent: string }): string {
  const serviceLabel = serviceTypeLabels[data.serviceType] || data.serviceType
  const urgencyInfo = urgencyLabels[data.urgency] || { label: data.urgency, priority: 'Normaal' }
  const appointmentDateTime = data.preferredDate && data.preferredTime
    ? formatDateTime(data.preferredDate, data.preferredTime)
    : 'SPOED - Datum/tijd wordt telefonisch afgesproken'
  const currentTime = new Date().toLocaleString('nl-NL', { 
    timeZone: 'Europe/Amsterdam',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })

  return `
<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nieuwe Afspraak Aanvraag - ${reference}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif; 
      line-height: 1.5; 
      color: #111827; 
      background-color: #f9fafb;
    }
    .email-container { 
      max-width: 700px; 
      margin: 0 auto; 
      background-color: #ffffff;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
    }
    .header { 
      background: linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%); 
      color: white; 
      padding: 30px; 
      text-align: center; 
    }
    .header.urgent { background: linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%); }
    .header.critical { background: linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #7f1d1d 100%); }
    .header h1 { 
      font-size: 24px; 
      font-weight: 700; 
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .header .reference { 
      font-size: 16px; 
      font-weight: 600;
      background: rgba(255, 255, 255, 0.2);
      padding: 8px 16px;
      border-radius: 20px;
      display: inline-block;
      margin-top: 8px;
    }
    .header .timestamp { 
      font-size: 14px; 
      opacity: 0.9; 
      margin-top: 8px;
    }
    .content { 
      padding: 30px; 
    }
    .priority-alert { 
      border-radius: 8px; 
      padding: 16px; 
      margin-bottom: 24px; 
      text-align: center; 
      font-weight: 700;
      font-size: 16px;
    }
    .priority-alert.high { 
      background: #fef3c7; 
      border: 2px solid #f59e0b; 
      color: #92400e;
    }
    .priority-alert.critical { 
      background: #fee2e2; 
      border: 2px solid #dc2626; 
      color: #991b1b;
    }
    .info-grid { 
      display: grid; 
      grid-template-columns: 1fr 1fr; 
      gap: 20px; 
      margin: 24px 0; 
    }
    .info-card { 
      background: #f8fafc; 
      border: 1px solid #e5e7eb; 
      border-left: 4px solid #3b82f6; 
      border-radius: 8px; 
      padding: 20px; 
    }
    .info-card.customer { border-left-color: #10b981; }
    .info-card.location { border-left-color: #8b5cf6; }
    .info-card h3 { 
      font-size: 16px; 
      font-weight: 700; 
      color: #111827; 
      margin-bottom: 12px;
      display: flex;
      align-items: center;
    }
    .info-card p { 
      margin-bottom: 6px; 
      font-size: 14px; 
      color: #374151;
    }
    .info-card p:last-child { margin-bottom: 0; }
    .info-card strong { font-weight: 600; color: #111827; }
    .info-card a { color: #3b82f6; text-decoration: none; }
    .info-card a:hover { text-decoration: underline; }
    .service-card { 
      background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); 
      border: 1px solid #93c5fd; 
      border-radius: 8px; 
      padding: 20px; 
      margin: 20px 0;
    }
    .service-card h3 { 
      color: #1e40af; 
      font-size: 18px; 
      font-weight: 700; 
      margin-bottom: 16px;
    }
    .service-details { 
      display: grid; 
      gap: 8px;
    }
    .service-details p { 
      font-size: 15px; 
      color: #1e40af;
    }
    .problem-card { 
      background: #fffbeb; 
      border: 1px solid #fde68a; 
      border-radius: 8px; 
      padding: 20px; 
      margin: 20px 0;
    }
    .problem-card h3 { 
      color: #92400e; 
      font-size: 16px; 
      font-weight: 700; 
      margin-bottom: 12px;
    }
    .problem-description { 
      background: white; 
      border: 1px solid #d1d5db; 
      border-radius: 6px; 
      padding: 12px; 
      font-style: italic; 
      color: #374151;
    }
    .action-card { 
      background: #ecfdf5; 
      border: 1px solid #86efac; 
      border-radius: 8px; 
      padding: 20px; 
      margin: 20px 0;
    }
    .action-card h3 { 
      color: #065f46; 
      font-size: 16px; 
      font-weight: 700; 
      margin-bottom: 16px;
    }
    .action-list { 
      list-style: none; 
      padding: 0;
    }
    .action-list li { 
      padding: 8px 0; 
      font-size: 14px; 
      color: #065f46;
      border-bottom: 1px solid #d1fae5;
    }
    .action-list li:last-child { border-bottom: none; }
    .action-list strong { color: #047857; }
    .cta-section { 
      text-align: center; 
      background: #fef2f2; 
      border: 2px solid #fca5a5; 
      border-radius: 8px; 
      padding: 24px; 
      margin: 24px 0;
    }
    .cta-button { 
      display: inline-block; 
      background: linear-gradient(135deg, #dc2626, #b91c1c); 
      color: white; 
      padding: 16px 32px; 
      text-decoration: none; 
      border-radius: 8px; 
      font-weight: 700; 
      font-size: 16px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      transition: all 0.2s;
    }
    .secondary-actions { 
      display: grid; 
      grid-template-columns: 1fr 1fr; 
      gap: 12px; 
      margin-top: 16px;
    }
    .secondary-btn { 
      padding: 10px 16px; 
      border: 2px solid #3b82f6; 
      border-radius: 6px; 
      color: #3b82f6; 
      text-decoration: none; 
      text-align: center; 
      font-weight: 600; 
      font-size: 14px;
    }
    @media (max-width: 600px) {
      .email-container { margin: 0; }
      .header, .content { padding: 20px; }
      .info-grid { grid-template-columns: 1fr; }
      .secondary-actions { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header ${data.urgency === 'urgent' || data.urgency === 'high' ? 'urgent' : data.urgency === 'critical' ? 'critical' : ''}">
      <h1>⚡ Nieuwe Afspraak Aanvraag</h1>
      <div class="reference">${reference}</div>
      <div class="timestamp">Ontvangen: ${currentTime}</div>
    </div>
    
    <div class="content">
      ${data.urgency === 'critical' ? 
        '<div class="priority-alert critical">🚨 KRITIEKE URGENTIE - ONMIDDELLIJK CONTACT VEREIST!</div>' : 
        data.urgency === 'urgent' || data.urgency === 'high' ? 
        '<div class="priority-alert high">⚠️ HOGE URGENTIE - CONTACT BINNEN 24 UUR</div>' : ''
      }
      
      <div class="info-grid">
        <div class="info-card customer">
          <h3>👤 Klantinformatie</h3>
          <p><strong>Naam:</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>E-mail:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Telefoon:</strong> <a href="tel:${formatPhoneForTel(data.phone)}">${data.phone}</a></p>
        </div>
        
        <div class="info-card location">
          <h3>📍 Locatie gegevens</h3>
          <p><strong>Adres:</strong> ${data.address}</p>
          <p><strong>Postcode:</strong> ${data.postalCode}</p>
          <p><strong>Plaats:</strong> ${data.city}</p>
        </div>
      </div>
      
      <div class="service-card">
        <h3>🔧 Service & Planning Details</h3>
        <div class="service-details">
          <p><strong>Gevraagde service:</strong> ${serviceLabel}</p>
          <p><strong>Gewenste datum & tijd:</strong> ${appointmentDateTime}</p>
          <p><strong>Urgentie niveau:</strong> ${urgencyInfo.label} (${urgencyInfo.priority})</p>
        </div>
      </div>
      
      <div class="problem-card">
        <h3>💭 Probleem beschrijving</h3>
        <div class="problem-description">
          "${data.problemDescription}"
        </div>
      </div>
      
      <div class="action-card">
        <h3>✅ Vereiste acties</h3>
        <ul class="action-list">
          <li><strong>Stap 1:</strong> Bel klant binnen 2 werkuren op ${data.phone}</li>
          <li><strong>Stap 2:</strong> Bevestig of herplan datum/tijd afspraak</li>
          <li><strong>Stap 3:</strong> Voeg afspraak toe aan agenda systeem</li>
          <li><strong>Stap 4:</strong> Verstuur definitieve bevestiging naar klant</li>
          <li><strong>Stap 5:</strong> Bereid technicus voor met probleemdetails</li>
        </ul>
      </div>

      ${security ? `
      <div class="info-card" style="background: #fef3c7; border-left-color: #f59e0b;">
        <h3>🔒 Security & Tracking Info</h3>
        <p><strong>IP Address:</strong> ${security.ip}</p>
        <p><strong>User Agent:</strong> ${security.userAgent}</p>
        <p><strong>Submission Time:</strong> ${currentTime}</p>
        <p style="font-size: 12px; color: #6b7280; margin-top: 8px;">
          Deze informatie wordt bewaard voor beveiligingsdoeleinden
        </p>
      </div>
      ` : ''}
      
      <div class="cta-section">
        <p style="margin-bottom: 16px; font-weight: 600; color: #991b1b;">
          Direct actie vereist - neem contact op met klant
        </p>
        
        <a href="tel:${formatPhoneForTel(data.phone)}" class="cta-button">
          📞 Bel klant nu
        </a>
        
        <div class="secondary-actions">
          <a href="mailto:${data.email}" class="secondary-btn">📧 E-mail sturen</a>
          <a href="sms:${data.phone}" class="secondary-btn">💬 SMS sturen</a>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`
}

export async function POST(request: NextRequest) {
  const headersList = headers()
  const ip = headersList.get('x-forwarded-for') || headersList.get('x-real-ip') || 'unknown'
  const userAgent = headersList.get('user-agent') || 'unknown'

  try {
    // Rate limiting check
    if (!checkRateLimit(ip, 3, 15 * 60 * 1000)) {
      logSecurityEvent('RATE_LIMIT_EXCEEDED', { userAgent }, ip)
      return NextResponse.json(
        { message: 'Te veel aanvragen. Probeer het over 15 minuten opnieuw.' },
        {
          status: 429,
          headers: securityHeaders
        }
      )
    }

    // Parse and validate request body
    const rawData = await request.json()

    // Log suspicious activity
    if (Object.keys(rawData).length > 20) {
      logSecurityEvent('SUSPICIOUS_REQUEST_SIZE', { fieldCount: Object.keys(rawData).length, userAgent }, ip)
    }

    // Validate with Zod schema
    const validationResult = appointmentSchema.safeParse(rawData)

    if (!validationResult.success) {
      console.log('VALIDATION ERROR OBJECT:', validationResult.error)
      console.log('VALIDATION ISSUES:', validationResult.error.issues)
      console.log('RAW FORM DATA:', JSON.stringify(rawData, null, 2))

      logSecurityEvent('VALIDATION_FAILED', {
        errors: validationResult.error.issues,
        rawData: {
          urgency: rawData.urgency,
          preferredDate: rawData.preferredDate,
          preferredTime: rawData.preferredTime,
          hasPreferredTime: !!rawData.preferredTime,
          preferredTimeType: typeof rawData.preferredTime,
          preferredTimeLength: rawData.preferredTime?.length || 0
        },
        userAgent
      }, ip)

      return NextResponse.json(
        {
          message: 'Ongeldige gegevens ingevoerd',
          errors: validationResult.error.issues?.map(err => ({
            field: err.path.join('.'),
            message: err.message
          })) || []
        },
        {
          status: 400,
          headers: securityHeaders
        }
      )
    }

    const data = validationResult.data

    // Verify reCAPTCHA Enterprise in production
    if (process.env.NODE_ENV === 'production' && data.recaptchaToken) {
      // Try reCAPTCHA Enterprise first, fallback to v2 if needed
      const useEnterprise = process.env.RECAPTCHA_ENTERPRISE_API_KEY || process.env.RECAPTCHA_ENTERPRISE_PROJECT_ID

      let isValidCaptcha = false
      if (useEnterprise) {
        isValidCaptcha = await verifyRecaptchaEnterprise(data.recaptchaToken, 'APPOINTMENT_SUBMIT')

        if (!isValidCaptcha) {
          logSecurityEvent('RECAPTCHA_ENTERPRISE_VERIFICATION_FAILED', {
            userAgent,
            hasToken: !!data.recaptchaToken,
            action: 'APPOINTMENT_SUBMIT'
          }, ip)
        }
      } else {
        // Fallback to reCAPTCHA v2
        isValidCaptcha = await verifyRecaptcha(data.recaptchaToken)

        if (!isValidCaptcha) {
          logSecurityEvent('RECAPTCHA_VERIFICATION_FAILED', {
            userAgent,
            hasToken: !!data.recaptchaToken
          }, ip)
        }
      }

      if (!isValidCaptcha) {
        return NextResponse.json(
          { message: 'reCAPTCHA verificatie mislukt. Probeer het opnieuw.' },
          {
            status: 400,
            headers: securityHeaders
          }
        )
      }
    } else if (process.env.NODE_ENV === 'production' && !data.recaptchaToken) {
      logSecurityEvent('MISSING_RECAPTCHA_TOKEN', { userAgent }, ip)

      return NextResponse.json(
        { message: 'reCAPTCHA verificatie is verplicht.' },
        {
          status: 400,
          headers: securityHeaders
        }
      )
    }

    // Additional business logic validation
    if (data.urgency !== 'urgent' && data.urgency !== 'critical') {
      if (!data.preferredDate || !data.preferredTime || data.preferredTime === '') {
        return NextResponse.json(
          { message: 'Datum en tijd zijn verplicht voor niet-urgente afspraken' },
          {
            status: 400,
            headers: securityHeaders
          }
        )
      }
    }

    // Sanitize all text inputs
    const sanitizedData = {
      ...data,
      firstName: sanitizeInput(data.firstName),
      lastName: sanitizeInput(data.lastName),
      address: sanitizeInput(data.address),
      city: sanitizeInput(data.city),
      problemDescription: purify.sanitize(data.problemDescription),
      deviceType: data.deviceType ? sanitizeInput(data.deviceType) : '',
      previousAttempts: data.previousAttempts ? purify.sanitize(data.previousAttempts) : ''
    }

    // Generate reference number
    const reference = generateReference()

    // Check if email is configured
    if (!process.env.SMTP_PASS) {
      logSecurityEvent('EMAIL_NOT_CONFIGURED', { reference }, ip)
      console.warn('Email not configured - appointment saved locally only')

      // Log appointment data for manual processing
      console.log('APPOINTMENT REQUEST:', {
        reference,
        timestamp: new Date().toISOString(),
        customer: `${sanitizedData.firstName} ${sanitizedData.lastName}`,
        email: data.email,
        phone: data.phone,
        address: `${sanitizedData.address}, ${data.postalCode} ${sanitizedData.city}`,
        service: data.serviceType,
        urgency: data.urgency,
        preferredDate: data.preferredDate,
        preferredTime: data.preferredTime,
        problem: sanitizedData.problemDescription
      })

      return NextResponse.json({
        message: 'Afspraak succesvol aangevraagd - u wordt binnenkort gebeld',
        reference,
        status: 'success'
      }, {
        headers: securityHeaders
      })
    }

    // Create email transporter
    const transporter = createTransporter()

    // Email status tracking
    let customerEmailSent = false
    let adminEmailSent = false

    // Customer confirmation email
    const customerMailOptions = createEmailOptions(
      data.email,
      `Bevestiging: Uw afspraak bij Hulp met IT (${reference})`,
      getCustomerEmailTemplate(sanitizedData, reference),
      getCustomerEmailTextTemplate(sanitizedData, reference),
      reference,
      false
    )

    // Admin notification email
    const adminMailOptions = createEmailOptions(
      EMAIL_CONFIG.FROM_ADDRESS,
      `🚨 NIEUWE AFSPRAAK - ${urgencyLabels[data.urgency]?.priority || 'NORMAAL'} - ${reference}`,
      getAdminEmailTemplate(sanitizedData, reference, { ip, userAgent }),
      '', // No text version needed for admin
      reference,
      true
    )

    // Send emails
    console.log('Sending customer email to:', data.email)
    console.log('Sending admin email to:', adminMailOptions.to)
    console.log('Admin email from:', adminMailOptions.from)
    console.log('Admin email subject:', adminMailOptions.subject)

    try {
      // Send emails individually to handle failures gracefully
      let customerError: any = null
      let adminError: any = null

      // Try to send customer email
      try {
        const customerResult = await transporter.sendMail(customerMailOptions)
        console.log('✅ Customer email sent:', customerResult.messageId)
        console.log('Customer email response:', customerResult.response)
        customerEmailSent = true
      } catch (error) {
        customerError = error
        console.error('❌ Customer email failed:', error)
        logSecurityEvent('CUSTOMER_EMAIL_FAILED', {
          error: error instanceof Error ? error.message : 'Unknown error',
          customerEmail: data.email,
          reference
        }, ip)
      }

      // Try to send admin email (always attempt, regardless of customer email result)
      try {
        const adminResult = await transporter.sendMail(adminMailOptions)
        console.log('✅ Admin email sent:', adminResult.messageId)
        console.log('Admin email response:', adminResult.response)
        adminEmailSent = true
      } catch (error) {
        adminError = error
        console.error('❌ Admin email failed:', error)
        logSecurityEvent('ADMIN_EMAIL_FAILED', {
          error: error instanceof Error ? error.message : 'Unknown error',
          reference
        }, ip)
      }

      // Log appointment creation with email status
      logSecurityEvent('APPOINTMENT_CREATED', {
        reference,
        customerEmail: data.email,
        urgency: data.urgency,
        serviceType: data.serviceType,
        customerEmailSent,
        adminEmailSent,
        emailErrors: {
          customer: customerError ? (customerError instanceof Error ? customerError.message : 'Unknown error') : null,
          admin: adminError ? (adminError instanceof Error ? adminError.message : 'Unknown error') : null
        }
      }, ip)

      // Only throw error if BOTH emails failed
      if (!customerEmailSent && !adminEmailSent) {
        throw new Error('Beide emails konden niet worden verzonden')
      }

    } catch (error) {
      logSecurityEvent('EMAIL_SENDING_CRITICAL_ERROR', {
        error: error instanceof Error ? error.message : 'Unknown error',
        reference
      }, ip)
      console.error('❌ Critical email sending error:', error)
      throw error
    }

    // Generate response message based on email delivery status
    const getResponseMessage = (customerSent: boolean, adminSent: boolean): string => {
      if (customerSent && adminSent) {
        return 'Afspraak succesvol aangevraagd. U ontvangt een bevestigingsmail.'
      } else if (!customerSent && adminSent) {
        return 'Afspraak succesvol aangevraagd. We bellen u binnen 2 werkuren voor bevestiging.'
      } else if (customerSent && !adminSent) {
        return 'Afspraak succesvol aangevraagd. U ontvangt een bevestigingsmail.'
      }
      return 'Afspraak succesvol aangevraagd'
    }

    const responseMessage = getResponseMessage(customerEmailSent, adminEmailSent)

    return NextResponse.json({
      message: responseMessage,
      reference,
      status: 'success',
      emailStatus: {
        customerEmailSent,
        adminEmailSent
      }
    }, {
      headers: securityHeaders
    })

  } catch (error) {
    // Log error securely without exposing details
    logSecurityEvent('APPOINTMENT_PROCESSING_ERROR', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.stack : undefined) : undefined
    }, ip)

    if (process.env.NODE_ENV === 'development') {
      console.error('Error processing appointment:', error)
    }

    return NextResponse.json(
      { message: 'Er is een fout opgetreden bij het verwerken van uw afspraak. Probeer het opnieuw of bel ons direct.' },
      {
        status: 500,
        headers: securityHeaders
      }
    )
  }
}