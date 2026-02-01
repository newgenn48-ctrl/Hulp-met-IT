'use client'

import { useState, useRef, useEffect } from 'react'
import { useToast } from '@/components/ui/Toast'
import { LoadingButton } from '@/components/ui/LoadingSpinner'

interface AppointmentFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  postalCode: string
  city: string
  serviceType: string
  urgency: string
  preferredDate: string
  preferredTime: string
  problemDescription: string
}

const initialFormData: AppointmentFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  postalCode: '',
  city: '',
  serviceType: '',
  urgency: 'normal',
  preferredDate: '',
  preferredTime: '',
  problemDescription: ''
}

const urgencyLevels = [
  { value: 'normal', label: 'Zonder spoed - Vanaf 2 dagen', color: 'text-blue-400' },
  { value: 'urgent', label: 'Met spoed - Binnen 24 uur', color: 'text-orange-400' }
]

const timeSlots = [
  'Tussen 10:00 en 12:00 uur',
  'Tussen 12:00 en 14:00 uur',
  'Tussen 14:00 en 16:00 uur',
  'Tussen 16:00 en 18:00 uur',
  'Tussen 18:00 en 20:00 uur',
  'Tussen 19:00 en 21:00 uur'
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

const getMinDateForUrgency = (urgency: string): string => {
  const today = new Date()
  switch (urgency) {
    case 'urgent':
      return today.toISOString().split('T')[0]!
    case 'normal':
      const twoDaysFromNow = new Date(today.getTime() + (2 * 24 * 60 * 60 * 1000))
      return twoDaysFromNow.toISOString().split('T')[0]!
    default:
      return today.toISOString().split('T')[0]!
  }
}

export function AppointmentForm() {
  const [formData, setFormData] = useState<AppointmentFormData>(initialFormData)
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [fieldErrors, setFieldErrors] = useState<{[key: string]: string}>({})
  const formRef = useRef<HTMLDivElement>(null)
  const { showToast } = useToast()

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

  useEffect(() => {
    if (submitStatus === 'success' && formRef.current) {
      formRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
    }
  }, [submitStatus])

  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(
          formData.firstName.trim() &&
          formData.lastName.trim() &&
          formData.email.trim() &&
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
          formData.phone.trim() &&
          validatePhone(formData.phone) &&
          formData.address.trim() &&
          validateAddress(formData.address) &&
          formData.postalCode.trim() &&
          validatePostalCode(formData.postalCode) &&
          formData.city.trim()
        )
      case 2:
        const hasValidDescription = formData.problemDescription.trim().length >= 10
        if (formData.urgency === 'urgent') {
          return hasValidDescription
        }
        const hasValidDate = !!(
          formData.preferredDate &&
          formData.preferredDate >= getMinDateForUrgency(formData.urgency)
        )
        return hasValidDescription && hasValidDate && !!formData.preferredTime
      default:
        return false
    }
  }

  const validateStep = (step: number): boolean => {
    const errors: {[key: string]: string} = {}

    switch (step) {
      case 1:
        if (!formData.firstName.trim()) errors['firstName'] = 'Voornaam is verplicht'
        if (!formData.lastName.trim()) errors['lastName'] = 'Achternaam is verplicht'
        if (!formData.email.trim()) {
          errors['email'] = 'E-mailadres is verplicht'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          errors['email'] = 'Voer een geldig e-mailadres in'
        }
        if (!formData.phone.trim()) {
          errors['phone'] = 'Telefoonnummer is verplicht'
        } else if (!validatePhone(formData.phone)) {
          errors['phone'] = 'Voer een geldig Nederlands telefoonnummer in'
        }
        if (!formData.address.trim()) {
          errors['address'] = 'Straat en huisnummer zijn verplicht'
        } else if (!validateAddress(formData.address)) {
          errors['address'] = 'Voer straat en huisnummer in'
        }
        if (!formData.postalCode.trim()) {
          errors['postalCode'] = 'Postcode is verplicht'
        } else if (!validatePostalCode(formData.postalCode)) {
          errors['postalCode'] = 'Voer een geldige postcode in'
        }
        if (!formData.city.trim()) errors['city'] = 'Woonplaats is verplicht'
        break
      case 2:
        if (!formData.problemDescription.trim()) {
          errors['problemDescription'] = 'Beschrijf kort wat het probleem is'
        } else if (formData.problemDescription.trim().length < 10) {
          errors['problemDescription'] = 'Geef minimaal 10 karakters'
        }
        if (formData.urgency !== 'urgent') {
          if (!formData.preferredDate) {
            errors['preferredDate'] = 'Kies een datum'
          }
          if (!formData.preferredTime) {
            errors['preferredTime'] = 'Kies een tijdslot'
          }
        }
        break
    }

    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 2))
      showToast({ type: 'success', title: 'Gegevens opgeslagen', message: 'Ga naar de volgende stap.' })
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleSubmit = async () => {
    if (!validateStep(2)) return

    setIsSubmitting(true)
    setErrorMessage('')

    try {
      const submitData = {
        ...formData,
        serviceType: formData.serviceType || 'anders'
      }

      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData(initialFormData)
        setCurrentStep(1)
        showToast({ type: 'success', title: 'Afspraak aangevraagd!', message: 'U ontvangt een bevestiging per e-mail.' })
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

  const getMinDate = () => getMinDateForUrgency(formData.urgency)

  if (submitStatus === 'success') {
    return (
      <div ref={formRef} className="bg-white rounded-xl p-8 text-center border border-green-200 shadow-lg">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-secondary-800 mb-4">Afspraak Aangevraagd!</h3>
        <p className="text-secondary-600 mb-6">U ontvangt binnen enkele minuten een bevestiging per e-mail.</p>
        <a href="/" className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg">
          Terug naar Home
        </a>
      </div>
    )
  }

  return (
    <div ref={formRef} className="bg-white rounded-xl p-8 border border-secondary-200 shadow-sm">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium ${
                step < currentStep ? 'bg-green-500 text-white'
                  : step === currentStep ? 'bg-primary-500 text-white ring-4 ring-primary-200'
                  : 'bg-secondary-100 text-secondary-400'
              }`}>
                {step < currentStep ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : step}
              </div>
              {step < 2 && (
                <div className={`w-full h-1 mx-4 ${step < currentStep ? 'bg-green-500' : 'bg-secondary-100'}`} />
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-sm font-medium text-secondary-700">
            Stap {currentStep} van 2: {currentStep === 1 ? 'Contact & Adresgegevens' : 'Urgentie & Probleem'}
          </p>
        </div>
      </div>

      {currentStep === 1 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-secondary-800 mb-6">Contact & Adresgegevens</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-secondary-800 mb-2">Voornaam *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                autoComplete="given-name"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border ${fieldErrors['firstName'] ? 'border-red-500' : 'border-secondary-300'}`}
                placeholder="Uw voornaam"
              />
              {fieldErrors['firstName'] && <p className="text-sm text-red-500 mt-1">{fieldErrors['firstName']}</p>}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-secondary-800 mb-2">Achternaam *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border ${fieldErrors['lastName'] ? 'border-red-500' : 'border-secondary-300'}`}
                placeholder="Uw achternaam"
              />
              {fieldErrors['lastName'] && <p className="text-sm text-red-500 mt-1">{fieldErrors['lastName']}</p>}
            </div>
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
              className={`w-full px-4 py-3 rounded-lg border ${fieldErrors['email'] ? 'border-red-500' : 'border-secondary-300'}`}
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
              className={`w-full px-4 py-3 rounded-lg border ${fieldErrors['phone'] ? 'border-red-500' : 'border-secondary-300'}`}
              placeholder="06-12345678"
            />
            {fieldErrors['phone'] && <p className="text-sm text-red-500 mt-1">{fieldErrors['phone']}</p>}
          </div>

          <div className="border-t border-secondary-300 pt-6 mt-8">
            <h4 className="text-lg font-semibold text-secondary-800 mb-4">Waar Moeten We Zijn?</h4>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-secondary-800 mb-2">Straat + Huisnummer *</label>
              <input
                type="text"
                id="address"
                name="address"
                autoComplete="street-address"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg border ${fieldErrors['address'] ? 'border-red-500' : 'border-secondary-300'}`}
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
                  className={`w-full px-4 py-3 rounded-lg border ${fieldErrors['postalCode'] ? 'border-red-500' : 'border-secondary-300'}`}
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
                  className={`w-full px-4 py-3 rounded-lg border ${fieldErrors['city'] ? 'border-red-500' : 'border-secondary-300'}`}
                  placeholder="Amsterdam"
                />
                {fieldErrors['city'] && <p className="text-sm text-red-500 mt-1">{fieldErrors['city']}</p>}
              </div>
            </div>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-secondary-800 mb-6">Urgentie & Probleem</h3>

          <fieldset>
            <legend className="block text-sm font-medium text-secondary-800 mb-3">Is dit met spoed? *</legend>
            <div className="space-y-3">
              {urgencyLevels.map(level => (
                <label key={level.value} htmlFor={`urgency-${level.value}`} className="flex items-center p-4 rounded-lg border border-secondary-300 hover:border-primary-500 cursor-pointer">
                  <input
                    type="radio"
                    id={`urgency-${level.value}`}
                    name="urgency"
                    value={level.value}
                    checked={formData.urgency === level.value}
                    onChange={(e) => handleInputChange('urgency', e.target.value)}
                    className="mr-3"
                  />
                  <div>
                    <div className={`font-medium ${level.color}`}>{level.label}</div>
                    <div className="text-xs text-secondary-400 mt-1">
                      {level.value === 'urgent'
                        ? 'Wij bellen u binnen 2 uur'
                        : 'Kies zelf datum en tijd'
                      }
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </fieldset>

          {formData.urgency === 'normal' && (
            <div className="border-t border-secondary-300 pt-6">
              <h4 className="text-lg font-semibold text-secondary-800 mb-4">Kies datum en tijd</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-secondary-800 mb-2">Datum *</label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    autoComplete="off"
                    value={formData.preferredDate}
                    onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                    min={getMinDate()}
                    className={`w-full px-4 py-3 rounded-lg border ${fieldErrors['preferredDate'] ? 'border-red-500' : 'border-secondary-300'}`}
                  />
                  {fieldErrors['preferredDate'] && <p className="text-sm text-red-500 mt-1">{fieldErrors['preferredDate']}</p>}
                </div>
                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-secondary-800 mb-2">Tijd *</label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    autoComplete="off"
                    value={formData.preferredTime}
                    onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border ${fieldErrors['preferredTime'] ? 'border-red-500' : 'border-secondary-300'}`}
                  >
                    <option value="">Kies een tijdslot</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                  {fieldErrors['preferredTime'] && <p className="text-sm text-red-500 mt-1">{fieldErrors['preferredTime']}</p>}
                </div>
              </div>
            </div>
          )}

          <div>
            <label htmlFor="problemDescription" className="block text-sm font-medium text-secondary-800 mb-2">Beschrijf uw probleem *</label>
            <textarea
              id="problemDescription"
              name="problemDescription"
              autoComplete="off"
              value={formData.problemDescription}
              onChange={(e) => handleInputChange('problemDescription', e.target.value)}
              rows={4}
              className={`w-full px-4 py-3 rounded-lg border ${fieldErrors['problemDescription'] ? 'border-red-500' : 'border-secondary-300'}`}
              placeholder="Beschrijf kort wat er aan de hand is..."
            />
            {fieldErrors['problemDescription'] && <p className="text-sm text-red-500 mt-1">{fieldErrors['problemDescription']}</p>}
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mt-6 p-4 bg-red-100 border border-red-300 rounded-lg">
          <span className="text-red-700">{errorMessage}</span>
        </div>
      )}

      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={prevStep}
          disabled={currentStep === 1}
          className={`px-6 py-3 rounded-lg font-medium ${
            currentStep === 1 ? 'bg-secondary-100 text-secondary-400 cursor-not-allowed' : 'bg-secondary-200 text-secondary-800 hover:bg-secondary-300'
          }`}
        >
          Vorige
        </button>

        {currentStep < 2 ? (
          <button
            type="button"
            onClick={nextStep}
            disabled={!isStepValid(currentStep)}
            className={`px-6 py-3 rounded-lg font-medium ${
              isStepValid(currentStep) ? 'bg-primary-500 text-white hover:bg-primary-600' : 'bg-secondary-100 text-secondary-400 cursor-not-allowed'
            }`}
          >
            Volgende
          </button>
        ) : (
          <LoadingButton
            type="button"
            onClick={handleSubmit}
            isLoading={isSubmitting}
            disabled={!isStepValid(2)}
            className={`px-8 py-3 rounded-lg font-medium ${
              isStepValid(2) ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-secondary-100 text-secondary-400 cursor-not-allowed'
            }`}
          >
            Afspraak Aanvragen
          </LoadingButton>
        )}
      </div>
    </div>
  )
}
