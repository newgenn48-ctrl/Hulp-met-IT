'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import { appointmentSchema, type AppointmentFormData } from '@/lib/validation'

// Extended form data with security fields
interface ExtendedFormData extends AppointmentFormData {
  deviceType?: string
  previousAttempts?: string
}

const initialFormData: ExtendedFormData = {
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
  problemDescription: '',
  deviceType: '',
  previousAttempts: ''
}

const serviceTypes = [
  { value: 'computerhulp', label: 'Computerhulp - Computer problemen oplossen' },
  { value: 'printerhulp', label: 'Printerhulp - Printer installatie & reparatie' },
  { value: 'internet-wifi', label: 'Internet & WiFi - Netwerk problemen' },
  { value: 'tablet-smartphone', label: 'Tablet & Smartphone hulp' },
  { value: 'uitleg-les', label: 'Uitleg & Les - Computer training' },
  { value: 'email-problemen', label: 'E-mail problemen oplossen' },
  { value: 'student-aan-huis', label: 'Student Aan Huis - Algemene IT hulp' },
  { value: 'anders', label: 'Anders - Beschrijf in opmerkingen' }
]

const urgencyLevels = [
  { value: 'normal', label: 'Zonder spoed - Vanaf 2 dagen', color: 'text-blue-400' },
  { value: 'urgent', label: 'Met spoed - Binnen 24 uur', color: 'text-orange-400' }
]

export default function AppointmentFormSecure() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<ExtendedFormData>(initialFormData)
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({})
  const [rateLimitExceeded, setRateLimitExceeded] = useState(false)
  const formRef = useRef<HTMLDivElement>(null)

  const handleInputChange = (field: keyof ExtendedFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear field-specific validation error when user starts typing
    if (validationErrors[field]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  // Scroll to top of form when success message is shown
  useEffect(() => {
    if (submitStatus === 'success' && formRef.current) {
      formRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
    }
  }, [submitStatus])

  // Real-time validation for specific fields
  const validateField = (field: keyof ExtendedFormData, value: string): string => {
    const fieldSchema = appointmentSchema.shape[field as keyof typeof appointmentSchema.shape]
    if (!fieldSchema) return ''

    try {
      fieldSchema.parse(value)
      return ''
    } catch (error: unknown) {
      const zodError = error as { errors?: Array<{ message: string }> }
      return zodError.errors?.[0]?.message || 'Ongeldige waarde'
    }
  }

  const validateStep = useCallback((step: number): boolean => {
    switch (step) {
      case 1:
        return !!(
          formData.firstName &&
          formData.lastName &&
          formData.email &&
          formData.phone &&
          formData.address &&
          formData.postalCode &&
          formData.city &&
          formData.serviceType
        )
      case 2:
        if (formData.urgency === 'urgent') {
          return !!(formData.problemDescription && formData.problemDescription.length >= 10)
        }
        return !!(
          formData.preferredDate &&
          formData.preferredTime &&
          formData.problemDescription &&
          formData.problemDescription.length >= 10
        )
      default:
        return true
    }
  }, [formData])

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 2))
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }


  const handleSubmit = async () => {
    // Form is being submitted
    setIsLoading(true)
    setSubmitStatus('idle')
    setErrorMessage('')
    setValidationErrors({})
    setRateLimitExceeded(false)

    try {

      // Clean form data before validation
      const cleanedFormData = {
        ...formData,
        // Ensure empty strings are handled properly
        preferredTime: formData.preferredTime?.trim() || '',
        preferredDate: formData.preferredDate?.trim() || ''
      }

      // Client-side validation with Zod
      const validationResult = appointmentSchema.safeParse(cleanedFormData)
      if (!validationResult.success) {
        const fieldErrors: Record<string, string> = {}
        let hasStep1Errors = false
        let hasStep2Errors = false

        validationResult.error.issues.forEach((err) => {
          if (err.path.length > 0) {
            const fieldName = err.path[0] as string
            fieldErrors[fieldName] = err.message

            // Check which step has errors
            if (['firstName', 'lastName', 'email', 'phone', 'address', 'postalCode', 'city', 'serviceType'].includes(fieldName)) {
              hasStep1Errors = true
            } else if (['preferredDate', 'preferredTime', 'problemDescription', 'urgency'].includes(fieldName)) {
              hasStep2Errors = true
            }
          }
        })

        setValidationErrors(fieldErrors)
        setErrorMessage('Corrigeer de fouten in het formulier')

        // Navigate to the first step with errors
        if (hasStep1Errors) {
          setCurrentStep(1)
        } else if (hasStep2Errors) {
          setCurrentStep(2)
        }

        return
      }

      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cleanedFormData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData(initialFormData)
        setCurrentStep(1)
      } else {
        if (response.status === 429) {
          setRateLimitExceeded(true)
          setErrorMessage('Te veel aanvragen. Probeer het over 15 minuten opnieuw.')
        } else if (response.status === 400 && result.errors) {
          // Handle validation errors from server
          const fieldErrors: Record<string, string> = {}
          let hasStep1Errors = false
          let hasStep2Errors = false

          result.errors.forEach((err: { field: string; message: string }) => {
            fieldErrors[err.field] = err.message

            // Check which step has errors
            if (['firstName', 'lastName', 'email', 'phone', 'address', 'postalCode', 'city', 'serviceType'].includes(err.field)) {
              hasStep1Errors = true
            } else if (['preferredDate', 'preferredTime', 'problemDescription', 'urgency'].includes(err.field)) {
              hasStep2Errors = true
            }
          })

          setValidationErrors(fieldErrors)
          setErrorMessage('Corrigeer de fouten in het formulier')

          // Navigate to the first step with errors
          if (hasStep1Errors) {
            setCurrentStep(1)
          } else if (hasStep2Errors) {
            setCurrentStep(2)
          }
        } else {
          setSubmitStatus('error')
          setErrorMessage(result.message || 'Er is een fout opgetreden')
        }

        // reCAPTCHA Enterprise wordt automatisch gereset
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Netwerkfout. Controleer uw internetverbinding.')
      // reCAPTCHA Enterprise error handling
    } finally {
      setIsLoading(false)
    }
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This function is kept for form element compatibility
  }

  if (submitStatus === 'success') {
    return (
      <div ref={formRef} className="max-w-2xl mx-auto p-8">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Afspraak Succesvol Aangevraagd! 🎉
          </h2>
          <div className="space-y-4 text-gray-600">
            <p className="text-lg">
              Bedankt voor uw vertrouwen in <span className="font-semibold text-blue-600">Hulp met IT</span>
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="font-medium text-blue-800">Wat gebeurt er nu?</p>
              <ul className="text-sm text-blue-700 mt-2 space-y-1">
                <li>✓ U ontvangt een bevestigingsmail</li>
                <li>✓ Wij bellen u binnen 2 werkuren</li>
                <li>✓ Datum en tijd worden definitief bevestigd</li>
              </ul>
            </div>
            <p className="text-sm">
              Dringende vragen? Bel ons direct op{' '}
              <a href="tel:+31642827860" className="text-blue-600 font-medium hover:underline">
                06-42827860
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>

      <div ref={formRef} className="max-w-2xl mx-auto p-8">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        {/* Progress indicator */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-700 px-8 py-6">
          <div className="flex items-center justify-between text-white">
            <div className="flex space-x-4">
              <div className={`flex items-center space-x-2 ${currentStep >= 1 ? 'opacity-100' : 'opacity-50'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${currentStep >= 1 ? 'bg-white text-blue-600' : 'bg-gradient-to-r from-primary-500 to-accent-500'}`}>
                  1
                </div>
                <span className="text-sm font-medium">Gegevens</span>
              </div>
              <div className="flex items-center">
                <div className={`w-8 h-0.5 ${currentStep >= 2 ? 'bg-white' : 'bg-gradient-to-r from-primary-500 to-accent-500'}`}></div>
              </div>
              <div className={`flex items-center space-x-2 ${currentStep >= 2 ? 'opacity-100' : 'opacity-50'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${currentStep >= 2 ? 'bg-white text-blue-600' : 'bg-gradient-to-r from-primary-500 to-accent-500'}`}>
                  2
                </div>
                <span className="text-sm font-medium">Afspraak</span>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleFormSubmit} className="p-8 space-y-6">
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Uw gegevens</h2>
                <p className="text-gray-600">Vul uw contactgegevens in zodat wij u kunnen bereiken.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    Voornaam *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    onBlur={(e) => {
                      const error = validateField('firstName', e.target.value)
                      if (error) {
                        setValidationErrors(prev => ({ ...prev, firstName: error }))
                      }
                    }}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      validationErrors['firstName'] ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Bijv. Jan"
                    maxLength={50}
                    required
                  />
                  {validationErrors['firstName'] && (
                    <p className="mt-1 text-sm text-red-600">{validationErrors['firstName']}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Achternaam *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    onBlur={(e) => {
                      const error = validateField('lastName', e.target.value)
                      if (error) {
                        setValidationErrors(prev => ({ ...prev, lastName: error }))
                      }
                    }}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      validationErrors['lastName'] ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Bijv. de Vries"
                    maxLength={50}
                    required
                  />
                  {validationErrors['lastName'] && (
                    <p className="mt-1 text-sm text-red-600">{validationErrors['lastName']}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mailadres *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    onBlur={(e) => {
                      const error = validateField('email', e.target.value)
                      if (error) {
                        setValidationErrors(prev => ({ ...prev, email: error }))
                      }
                    }}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      validationErrors['email'] ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="bijv. jan@example.com"
                    maxLength={254}
                    required
                  />
                  {validationErrors['email'] && (
                    <p className="mt-1 text-sm text-red-600">{validationErrors['email']}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefoonnummer *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    onBlur={(e) => {
                      const error = validateField('phone', e.target.value)
                      if (error) {
                        setValidationErrors(prev => ({ ...prev, phone: error }))
                      }
                    }}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      validationErrors['phone'] ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="06-12345678 of 010-1234567"
                    required
                  />
                  {validationErrors['phone'] && (
                    <p className="mt-1 text-sm text-red-600">{validationErrors['phone']}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Adres *
                </label>
                <input
                  type="text"
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Bijv. Kerkstraat 123"
                  maxLength={100}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-2">
                    Postcode *
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    value={formData.postalCode}
                    onChange={(e) => handleInputChange('postalCode', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="1234 AB"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                    Plaats *
                  </label>
                  <input
                    type="text"
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Bijv. Amsterdam"
                    maxLength={50}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                  Type service *
                </label>
                <select
                  id="serviceType"
                  value={formData.serviceType}
                  onChange={(e) => handleInputChange('serviceType', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                >
                  <option value="">Selecteer een service</option>
                  {serviceTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!validateStep(1)}
                  className="bg-gradient-to-r from-blue-700 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  <span>Volgende</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Afspraak details</h2>
                <p className="text-gray-600">Wanneer heeft u hulp nodig en wat is het probleem?</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Urgentie *
                </label>
                <div className="space-y-3">
                  {urgencyLevels.map((level) => (
                    <label key={level.value} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="urgency"
                        value={level.value}
                        checked={formData.urgency === level.value}
                        onChange={(e) => handleInputChange('urgency', e.target.value)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className={`font-medium ${level.color}`}>{level.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {formData.urgency !== 'urgent' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Gewenste datum *
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                      Gewenste tijd *
                    </label>
                    <div className="space-y-2">
                      <select
                        id="preferredTime"
                        value={formData.preferredTime}
                        onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                        onBlur={(e) => {
                          const error = validateField('preferredTime', e.target.value)
                          if (error) {
                            setValidationErrors(prev => ({ ...prev, preferredTime: error }))
                          }
                        }}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                          validationErrors['preferredTime'] ? 'border-red-500' : 'border-gray-300'
                        }`}
                        required
                      >
                        <option value="">Selecteer een tijd of typ hieronder</option>
                        <option value="09:00">09:00 (Ochtend)</option>
                        <option value="10:00">10:00 (Ochtend)</option>
                        <option value="11:00">11:00 (Ochtend)</option>
                        <option value="13:00">13:00 (Middag)</option>
                        <option value="14:00">14:00 (Middag)</option>
                        <option value="15:00">15:00 (Middag)</option>
                        <option value="16:00">16:00 (Middag)</option>
                        <option value="17:00">17:00 (Avond)</option>
                        <option value="custom">Anders - typ hieronder</option>
                      </select>

                      {(formData.preferredTime === 'custom' || (formData.preferredTime && !['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'].includes(formData.preferredTime))) && (
                        <input
                          type="text"
                          placeholder="Bijv. tussen 14:00 en 16:00 uur, rond 15:00, ochtend"
                          value={formData.preferredTime === 'custom' ? '' : formData.preferredTime}
                          onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                          onBlur={(e) => {
                            const error = validateField('preferredTime', e.target.value)
                            if (error) {
                              setValidationErrors(prev => ({ ...prev, preferredTime: error }))
                            }
                          }}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                            validationErrors['preferredTime'] ? 'border-red-500' : 'border-gray-300'
                          }`}
                          maxLength={50}
                        />
                      )}

                      {validationErrors['preferredTime'] && (
                        <p className="text-sm text-red-600">{validationErrors['preferredTime']}</p>
                      )}

                      <p className="text-xs text-gray-500">
                        Voorbeelden: "14:00", "tussen 14:00 en 16:00 uur", "ochtend", "rond 15:00"
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="problemDescription" className="block text-sm font-medium text-gray-700 mb-2">
                  Beschrijving van het probleem *
                </label>
                <textarea
                  id="problemDescription"
                  value={formData.problemDescription}
                  onChange={(e) => handleInputChange('problemDescription', e.target.value)}
                  onBlur={(e) => {
                    const error = validateField('problemDescription', e.target.value)
                    if (error) {
                      setValidationErrors(prev => ({ ...prev, problemDescription: error }))
                    }
                  }}
                  rows={4}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${
                    validationErrors['problemDescription'] ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Beschrijf zo duidelijk mogelijk wat het probleem is... (minimaal 10 karakters)"
                  maxLength={1000}
                  required
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>{validationErrors['problemDescription'] && (
                    <span className="text-red-600">{validationErrors['problemDescription']}</span>
                  )}</span>
                  <span>{formData.problemDescription.length}/1000</span>
                </div>
              </div>


              {/* Rate limit warning */}
              {rateLimitExceeded && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span className="text-red-800 text-sm">
                      Te veel aanvragen. Wacht 15 minuten voordat u opnieuw probeert.
                    </span>
                  </div>
                </div>
              )}

              {errorMessage && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span className="text-red-800 text-sm">{errorMessage}</span>
                  </div>
                </div>
              )}

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 flex items-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                  </svg>
                  <span>Vorige</span>
                </button>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="bg-gradient-to-r from-blue-700 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      <span>Verwerken...</span>
                    </>
                  ) : (
                    <>
                      <span>Afspraak Aanvragen</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
    </>
  )
}