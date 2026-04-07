'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { LoadingButton } from '@/components/ui/LoadingSpinner'

interface AppointmentFormData {
  name: string
  email: string
  phone: string
  address: string
  postalCode: string
  city: string
  serviceType: string
  urgency: string
  problemDescription: string
}

const initialFormData: AppointmentFormData = {
  name: '',
  email: '',
  phone: '',
  address: '',
  postalCode: '',
  city: '',
  serviceType: '',
  urgency: 'normal',
  problemDescription: ''
}

const urgencyLevels = [
  { value: 'normal', label: 'Zonder spoed', color: 'text-primary-400' },
  { value: 'urgent', label: 'Met spoed', color: 'text-accent-400' }
]

const validatePostalCode = (postalCode: string): boolean => {
  const dutchPostalCodeRegex = /^[1-9][0-9]{3}[A-Z]{2}$/
  return dutchPostalCodeRegex.test(postalCode.replace(/\s/g, '').toUpperCase())
}

const validateAddress = (address: string): boolean => {
  const addressRegex = /^.+\s+\d+.*$/
  return addressRegex.test(address.trim()) && address.trim().length > 5
}

const validatePhone = (phone: string): boolean => {
  const dutchPhoneRegex = /^(\+31|0031|0)[1-9][0-9]{8}$|^(\+31|0031|0)[2-7][0-9]{7}$/
  return dutchPhoneRegex.test(phone.replace(/[\s-]/g, ''))
}

export function AppointmentForm() {
  const [formData, setFormData] = useState<AppointmentFormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [fieldErrors, setFieldErrors] = useState<{[key: string]: string}>({})
  const [touched, setTouched] = useState<Set<string>>(new Set())
  const formRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const handleInputChange = (field: keyof AppointmentFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (fieldErrors[field]) {
      setFieldErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const getFieldError = (field: string, value: string): string | null => {
    switch (field) {
      case 'name': return !value.trim() ? 'Naam is verplicht' : null
      case 'email':
        if (!value.trim()) return 'E-mailadres is verplicht'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Voer een geldig e-mailadres in'
        return null
      case 'phone':
        if (!value.trim()) return 'Telefoonnummer is verplicht'
        if (!validatePhone(value)) return 'Voer een geldig Nederlands telefoonnummer in (bijv. 06-12345678)'
        return null
      case 'address':
        if (!value.trim()) return 'Straat en huisnummer zijn verplicht'
        if (!validateAddress(value)) return 'Voer straat en huisnummer in (bijv. Voorbeeldstraat 12)'
        return null
      case 'postalCode':
        if (!value.trim()) return 'Postcode is verplicht'
        if (!validatePostalCode(value)) return 'Voer een geldige postcode in (bijv. 1234 AB)'
        return null
      case 'city': return !value.trim() ? 'Stad is verplicht' : null
      case 'problemDescription':
        if (!value.trim()) return 'Beschrijf kort wat het probleem is'
        if (value.trim().length < 10) return 'Geef minimaal 10 karakters'
        return null
      default: return null
    }
  }

  const handleBlur = (field: keyof AppointmentFormData) => {
    setTouched(prev => new Set(prev).add(field))
    const error = getFieldError(field, formData[field])
    setFieldErrors(prev => {
      const newErrors = { ...prev }
      if (error) {
        newErrors[field] = error
      } else {
        delete newErrors[field]
      }
      return newErrors
    })
  }

  const isFormValid = (): boolean => {
    return !!(
      formData.name.trim() &&
      formData.email.trim() &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      formData.phone.trim() &&
      validatePhone(formData.phone) &&
      formData.address.trim() &&
      validateAddress(formData.address) &&
      formData.postalCode.trim() &&
      validatePostalCode(formData.postalCode) &&
      formData.city.trim() &&
      formData.problemDescription.trim().length >= 10
    )
  }

  const validateForm = (): boolean => {
    const errors: {[key: string]: string} = {}

    if (!formData.name.trim()) errors['name'] = 'Naam is verplicht'
    if (!formData.email.trim()) {
      errors['email'] = 'E-mailadres is verplicht'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors['email'] = 'Voer een geldig e-mailadres in'
    }
    if (!formData.phone.trim()) {
      errors['phone'] = 'Telefoonnummer is verplicht'
    } else if (!validatePhone(formData.phone)) {
      errors['phone'] = 'Voer een geldig Nederlands telefoonnummer in (bijv. 06-12345678)'
    }
    if (!formData.address.trim()) {
      errors['address'] = 'Straat en huisnummer zijn verplicht'
    } else if (!validateAddress(formData.address)) {
      errors['address'] = 'Voer straat en huisnummer in (bijv. Voorbeeldstraat 12)'
    }
    if (!formData.postalCode.trim()) {
      errors['postalCode'] = 'Postcode is verplicht'
    } else if (!validatePostalCode(formData.postalCode)) {
      errors['postalCode'] = 'Voer een geldige postcode in (bijv. 1234 AB)'
    }
    if (!formData.city.trim()) errors['city'] = 'Stad is verplicht'
    if (!formData.problemDescription.trim()) {
      errors['problemDescription'] = 'Beschrijf kort wat het probleem is'
    } else if (formData.problemDescription.trim().length < 10) {
      errors['problemDescription'] = 'Geef minimaal 10 karakters'
    }

    setFieldErrors(errors)
    // Mark all fields as touched so errors show
    setTouched(new Set(Object.keys(initialFormData)))
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async () => {
    if (!validateForm()) {
      // Scroll to first error
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    setIsSubmitting(true)
    setErrorMessage('')

    try {
      const submitData = {
        ...formData,
        serviceType: formData.serviceType || 'anders',
        preferredDate: '',
        preferredTime: ''
      }

      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData),
      })

      if (response.ok) {
        await response.json()

        // Google Ads conversion tracking
        if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
          (window as any).gtag('event', 'conversion', {
            'send_to': 'AW-16646363193/afspraak',
            'value': 56.50,
            'currency': 'EUR'
          })
        }

        router.push('/afspraak/bevestiging')
        return
      } else {
        const error = await response.json()
        setSubmitStatus('error')
        setErrorMessage(error.message || 'Er is een fout opgetreden.')
      }
    } catch {
      setSubmitStatus('error')
      setErrorMessage('Verbindingsfout. Controleer uw internet.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const fieldClass = (field: string, validCheck?: boolean) => {
    const hasError = fieldErrors[field]
    const isTouched = touched.has(field)
    const isValid = validCheck !== undefined ? validCheck : isTouched && !hasError
    if (hasError) return 'border-red-500 bg-red-50'
    if (isTouched && isValid) return 'border-green-400 bg-green-50'
    return 'border-secondary-300'
  }

  return (
    <div ref={formRef} className="bg-white rounded-2xl p-8 border border-secondary-200 shadow-professional">
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-secondary-800 mb-6">Uw gegevens</h3>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-secondary-800 mb-2">Uw naam *</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            onBlur={() => handleBlur('name')}
            className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 ${fieldClass('name', !!formData.name.trim())}`}
            placeholder="Uw naam"
          />
          {fieldErrors['name'] && <p className="text-sm text-red-500 mt-1">{fieldErrors['name']}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-secondary-800 mb-2">E-mailadres *</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 ${fieldClass('email', !!formData.email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))}`}
            placeholder="uw.email@example.com"
          />
          {fieldErrors['email'] && <p className="text-sm text-red-500 mt-1">{fieldErrors['email']}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-secondary-800 mb-2">Telefoonnummer *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            onBlur={() => handleBlur('phone')}
            className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 ${fieldClass('phone', !!formData.phone.trim() && validatePhone(formData.phone))}`}
            placeholder="06-12345678"
          />
          {fieldErrors['phone'] && <p className="text-sm text-red-500 mt-1">{fieldErrors['phone']}</p>}
        </div>

        <div className="border-t border-secondary-300 pt-6 mt-8">
          <h4 className="text-lg font-semibold text-secondary-800 mb-4">Waar moeten we zijn?</h4>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-secondary-800 mb-2">Straat + Huisnummer *</label>
            <input
              type="text"
              id="address"
              name="address"
              autoComplete="street-address"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              onBlur={() => handleBlur('address')}
              className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 ${fieldClass('address', !!formData.address.trim() && validateAddress(formData.address))}`}
              placeholder="Voorbeeldstraat 123"
            />
            {fieldErrors['address'] && <p className="text-sm text-red-500 mt-1">{fieldErrors['address']}</p>}
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div>
              <label htmlFor="postalCode" className="block text-sm font-medium text-secondary-800 mb-2">Postcode *</label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                autoComplete="postal-code"
                value={formData.postalCode}
                onChange={(e) => handleInputChange('postalCode', e.target.value.toUpperCase())}
                onBlur={() => handleBlur('postalCode')}
                className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 ${fieldClass('postalCode', !!formData.postalCode.trim() && validatePostalCode(formData.postalCode))}`}
                placeholder="1234 AB"
                maxLength={7}
              />
              {fieldErrors['postalCode'] && <p className="text-sm text-red-500 mt-1">{fieldErrors['postalCode']}</p>}
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-secondary-800 mb-2">Stad *</label>
              <input
                type="text"
                id="city"
                name="city"
                autoComplete="address-level2"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                onBlur={() => handleBlur('city')}
                className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 ${fieldClass('city', !!formData.city.trim())}`}
                placeholder="Amsterdam"
              />
              {fieldErrors['city'] && <p className="text-sm text-red-500 mt-1">{fieldErrors['city']}</p>}
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-300 pt-6 mt-8">
          <h4 className="text-lg font-semibold text-secondary-800 mb-4">Uw probleem</h4>

          <fieldset className="mb-6">
            <legend className="block text-sm font-medium text-secondary-800 mb-3">Is dit met spoed? *</legend>
            <div className="grid grid-cols-2 gap-3">
              {urgencyLevels.map(level => (
                <label
                  key={level.value}
                  htmlFor={`urgency-${level.value}`}
                  className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                    formData.urgency === level.value
                      ? level.value === 'urgent' ? 'border-accent-500 bg-accent-50 shadow-sm' : 'border-primary-500 bg-primary-50 shadow-sm'
                      : 'border-secondary-200 hover:border-primary-300'
                  }`}
                >
                  <input
                    type="radio"
                    id={`urgency-${level.value}`}
                    name="urgency"
                    value={level.value}
                    checked={formData.urgency === level.value}
                    onChange={(e) => handleInputChange('urgency', e.target.value)}
                    className="mr-3"
                  />
                  <span className={`font-medium ${level.color}`}>{level.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="problemDescription" className="block text-sm font-medium text-secondary-800 mb-2">Beschrijf het probleem *</label>
            <textarea
              id="problemDescription"
              name="problemDescription"
              autoComplete="off"
              value={formData.problemDescription}
              onChange={(e) => handleInputChange('problemDescription', e.target.value)}
              onBlur={() => handleBlur('problemDescription')}
              rows={4}
              className={`w-full px-4 py-3 rounded-xl border transition-all duration-200 ${fieldClass('problemDescription', formData.problemDescription.trim().length >= 10)}`}
              placeholder="Beschrijf kort wat er aan de hand is..."
            />
            {fieldErrors['problemDescription'] && <p className="text-sm text-red-500 mt-1">{fieldErrors['problemDescription']}</p>}
          </div>
        </div>
      </div>

      {submitStatus === 'error' && (
        <div className="mt-6 p-4 bg-red-100 border border-red-300 rounded-xl">
          <span className="text-red-700">{errorMessage}</span>
        </div>
      )}

      <div className="flex justify-end mt-8">
        <LoadingButton
          type="button"
          onClick={handleSubmit}
          isLoading={isSubmitting}
          disabled={!isFormValid()}
          className={`px-8 py-3 rounded-xl font-medium transition-all duration-200 ${
            isFormValid() ? 'bg-green-500 text-white hover:bg-green-600 hover:-translate-y-0.5' : 'bg-secondary-100 text-secondary-400 cursor-not-allowed'
          }`}
        >
          Afspraak aanvragen
        </LoadingButton>
      </div>
    </div>
  )
}
