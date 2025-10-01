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


// Validation functions
const validatePostalCode = (postalCode: string): boolean => {
  const dutchPostalCodeRegex = /^[1-9][0-9]{3}[A-Z]{2}$/
  return dutchPostalCodeRegex.test(postalCode.replace(/\s/g, '').toUpperCase())
}

const validateAddress = (address: string): boolean => {
  // Check if address contains both street name and house number
  const addressRegex = /^.+\s+\d+.*$/
  return addressRegex.test(address.trim()) && address.trim().length > 5
}

const validatePhone = (phone: string): boolean => {
  // Dutch phone number validation (mobile and landline)
  const dutchPhoneRegex = /^(\+31|0031|0)[1-9][0-9]{8}$|^(\+31|0031|0)[2-7][0-9]{7}$/
  return dutchPhoneRegex.test(phone.replace(/[\s-]/g, ''))
}

const getMinDateForUrgency = (urgency: string): string => {
  const today = new Date()
  switch (urgency) {
    case 'urgent':
      return today.toISOString().split('T')[0]! // Today (maar wordt niet gebruikt)
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
    // Clear error for this field when user starts typing
    if (fieldErrors[field]) {
      setFieldErrors(prev => {
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

  // Check if step is valid without updating state (for use in render)
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
        const hasValidDescription =
          formData.problemDescription.trim().length >= 10

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

  // Validate step and update field errors (for use in event handlers)
  const validateStep = (step: number): boolean => {
    const errors: {[key: string]: string} = {}

    switch (step) {
      case 1:
        // Validate personal info
        if (!formData.firstName.trim()) {
          errors['firstName'] = 'Voornaam is verplicht'
        }
        if (!formData.lastName.trim()) {
          errors['lastName'] = 'Achternaam is verplicht'
        }
        if (!formData.email.trim()) {
          errors['email'] = 'E-mailadres is verplicht'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          errors['email'] = 'Voer een geldig e-mailadres in (bijv. naam@voorbeeld.nl)'
        }
        if (!formData.phone.trim()) {
          errors['phone'] = 'Telefoonnummer is verplicht'
        } else if (!validatePhone(formData.phone)) {
          errors['phone'] = 'Voer een geldig Nederlands telefoonnummer in (bijv. 06-12345678 of 020-1234567)'
        }
        if (!formData.address.trim()) {
          errors['address'] = 'Straat en huisnummer zijn verplicht'
        } else if (!validateAddress(formData.address)) {
          errors['address'] = 'Voer straat en huisnummer in (bijv. Dorpsstraat 12)'
        }
        if (!formData.postalCode.trim()) {
          errors['postalCode'] = 'Postcode is verplicht'
        } else if (!validatePostalCode(formData.postalCode)) {
          errors['postalCode'] = 'Voer een geldige postcode in (bijv. 1234 AB)'
        }
        if (!formData.city.trim()) {
          errors['city'] = 'Woonplaats is verplicht'
        }
        break

      case 2:
        // Validate problem description
        if (!formData.problemDescription.trim()) {
          errors['problemDescription'] = 'Beschrijf kort wat het probleem is'
        } else if (formData.problemDescription.trim().length < 10) {
          errors['problemDescription'] = 'Geef minimaal 10 karakters beschrijving van het probleem'
        }

        // Voor spoed: alleen probleem beschrijving vereist
        if (formData.urgency !== 'urgent') {
          // Voor zonder spoed: datum en tijd ook vereist
          if (!formData.preferredDate) {
            errors['preferredDate'] = 'Kies een datum voor de afspraak'
          } else {
            const minDate = getMinDateForUrgency(formData.urgency)
            if (formData.preferredDate < minDate) {
              const minDateFormatted = new Date(minDate).toLocaleDateString('nl-NL', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              })
              errors['preferredDate'] = `Kies een datum vanaf ${minDateFormatted}`
            }
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
      showToast({
        type: 'success',
        title: 'Gegevens succesvol opgeslagen',
        message: 'U kunt nu naar de volgende stap.'
      })
    } else {
      const errorCount = Object.keys(fieldErrors).length
      showToast({
        type: 'error',
        title: `${errorCount} ${errorCount === 1 ? 'fout' : 'fouten'} gevonden`,
        message: 'Controleer de gemarkeerde velden hieronder.'
      })
      // Scroll to first error
      const firstErrorField = Object.keys(fieldErrors)[0]
      if (firstErrorField) {
        const element = document.querySelector(`[name="${firstErrorField}"]`)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }
    }
  }

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = async () => {
    if (!validateStep(2)) return

    setIsSubmitting(true)
    setErrorMessage('')

    try {
      // Zet default serviceType als niet ingevuld
      const submitData = {
        ...formData,
        serviceType: formData.serviceType || 'anders'
      }
      
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData(initialFormData)
        setCurrentStep(1)
        showToast({
          type: 'success',
          title: 'Afspraak aangevraagd!',
          message: 'U ontvangt binnen enkele minuten een bevestiging per e-mail.'
        })
      } else {
        const error = await response.json()
        setSubmitStatus('error')

        // Als de API specifieke field errors teruggeeft, toon die
        if (error.errors && Array.isArray(error.errors)) {
          const newFieldErrors: {[key: string]: string} = {}
          error.errors.forEach((err: {field: string, message: string}) => {
            newFieldErrors[err.field] = err.message
          })
          setFieldErrors(newFieldErrors)

          const errorCount = error.errors.length
          const errorMsg = `${errorCount} ${errorCount === 1 ? 'veld heeft' : 'velden hebben'} een fout. Controleer de gemarkeerde velden.`
          setErrorMessage(errorMsg)
          showToast({
            type: 'error',
            title: `${errorCount} ${errorCount === 1 ? 'fout' : 'fouten'} gevonden`,
            message: errorMsg
          })

          // Scroll to first error field
          const firstErrorField = error.errors[0]?.field
          if (firstErrorField) {
            const element = document.querySelector(`[name="${firstErrorField}"]`)
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }
          }
        } else {
          // Generieke foutmelding als er geen specifieke field errors zijn
          const errorMsg = error.message || 'Er is een fout opgetreden. Probeer het opnieuw.'
          setErrorMessage(errorMsg)
          showToast({
            type: 'error',
            title: 'Fout bij verzenden',
            message: errorMsg
          })
        }
      }
    } catch (error) {
      const errorMsg = 'Er is een verbindingsfout opgetreden. Controleer uw internetverbinding.'
      setSubmitStatus('error')
      setErrorMessage(errorMsg)
      showToast({
        type: 'error',
        title: 'Verbindingsfout',
        message: errorMsg
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const getMinDate = () => {
    return getMinDateForUrgency(formData.urgency)
  }

  if (submitStatus === 'success') {
    return (
      <div ref={formRef} className="bg-white/5 backdrop-blur-lg rounded-xl p-8 text-center border border-white/10">
        <h3 className="text-3xl font-bold text-secondary-800 mb-4">Afspraak Aangevraagd!</h3>
        <p className="text-secondary-700 mb-6 max-w-md mx-auto">
          Bedankt voor uw aanvraag. U ontvangt binnen enkele minuten een bevestiging per e-mail. 
          Wij nemen binnen 2 uur contact met u op om de afspraak te bevestigen.
        </p>
        <button
          type="button"
          onClick={() => setSubmitStatus('idle')}
          className="bg-gradient-to-r from-primary-500 to-accent-500 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Nieuwe Afspraak Maken
        </button>
      </div>
    )
  }

  return (
    <div ref={formRef} className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium ${
                step <= currentStep 
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white' 
                  : 'bg-secondary-100 text-secondary-400'
              }`}>
                {step}
              </div>
              {step < 2 && (
                <div className={`w-full h-1 mx-4 ${
                  step < currentStep ? 'bg-gradient-to-r from-primary-500 to-accent-500' : 'bg-secondary-100'
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <span className="text-sm text-secondary-400">
            Stap {currentStep} van 2: {
              currentStep === 1 ? 'Contact & Adresgegevens' : 'Urgentie & Probleem'
            }
          </span>
        </div>
      </div>

      {/* Step Content */}
      {currentStep === 1 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-secondary-800 mb-6 flex items-center">
            Contact & Adresgegevens
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-secondary-800 mb-2">Voornaam *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg bg-white border text-secondary-800 placeholder-secondary-400 focus:outline-none ${
                  fieldErrors['firstName']
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-secondary-300 focus:border-primary-500'
                }`}
                placeholder="Uw voornaam"
                required
              />
              {fieldErrors['firstName'] && (
                <p className="text-sm text-red-500 mt-1 flex items-center">
                  <span className="mr-1">⚠️</span>
                  {fieldErrors['firstName']}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-secondary-800 mb-2">Achternaam *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg bg-white border text-secondary-800 placeholder-secondary-400 focus:outline-none ${
                  fieldErrors['lastName']
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-secondary-300 focus:border-primary-500'
                }`}
                placeholder="Uw achternaam"
                required
              />
              {fieldErrors['lastName'] && (
                <p className="text-sm text-red-500 mt-1 flex items-center">
                  <span className="mr-1">⚠️</span>
                  {fieldErrors['lastName']}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-secondary-800 mb-2">E-mailadres *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg bg-white border text-secondary-800 placeholder-secondary-400 focus:outline-none ${
                fieldErrors['email']
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-secondary-300 focus:border-primary-500'
              }`}
              placeholder="uw.email@example.com"
              required
            />
            {fieldErrors['email'] && (
              <p className="text-sm text-red-500 mt-1 flex items-center">
                <span className="mr-1">⚠️</span>
                {fieldErrors['email']}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-secondary-800 mb-2">Telefoonnummer *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg bg-white border text-secondary-800 placeholder-secondary-400 focus:outline-none ${
                fieldErrors['phone']
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-secondary-300 focus:border-primary-500'
              }`}
              placeholder="06-12345678 of 020-1234567"
              required
            />
            {fieldErrors['phone'] && (
              <p className="text-sm text-red-500 mt-1 flex items-center">
                <span className="mr-1">⚠️</span>
                {fieldErrors['phone']}
              </p>
            )}
          </div>
          
          <div className="border-t border-secondary-300 pt-6 mt-8">
            <h4 className="text-lg font-semibold text-secondary-800 mb-4 flex items-center">
              Waar Moeten We Zijn?
            </h4>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-secondary-800 mb-2">Straat + Huisnummer *</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg bg-white border text-secondary-800 placeholder-secondary-400 focus:outline-none ${
                  fieldErrors['address']
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-secondary-300 focus:border-primary-500'
                }`}
                placeholder="Voorbeeldstraat 123"
                required
              />
              {fieldErrors['address'] && (
                <p className="text-sm text-red-500 mt-1 flex items-center">
                  <span className="mr-1">⚠️</span>
                  {fieldErrors['address']}
                </p>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="postalCode" className="block text-sm font-medium text-secondary-800 mb-2">Postcode *</label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={(e) => handleInputChange('postalCode', e.target.value.toUpperCase())}
                  className={`w-full px-4 py-3 rounded-lg bg-white border text-secondary-800 placeholder-secondary-400 focus:outline-none ${
                    fieldErrors['postalCode']
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-secondary-300 focus:border-primary-500'
                  }`}
                  placeholder="1234AB"
                  maxLength={6}
                  required
                />
                {fieldErrors['postalCode'] && (
                  <p className="text-sm text-red-500 mt-1 flex items-center">
                    <span className="mr-1">⚠️</span>
                    {fieldErrors['postalCode']}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-secondary-800 mb-2">Stad *</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg bg-white border text-secondary-800 placeholder-secondary-400 focus:outline-none ${
                    fieldErrors['city']
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-secondary-300 focus:border-primary-500'
                  }`}
                  placeholder="Bijv. Amsterdam, Rotterdam, Utrecht"
                  required
                />
                {fieldErrors['city'] && (
                  <p className="text-sm text-red-500 mt-1 flex items-center">
                    <span className="mr-1">⚠️</span>
                    {fieldErrors['city']}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-secondary-800 mb-6 flex items-center">
            Urgentie & Probleem
          </h3>

          <div>
            <label htmlFor="urgency" className="block text-sm font-medium text-secondary-800 mb-3">Is dit met spoed? *</label>
            <div className="space-y-3">
              {urgencyLevels.map(level => (
                <label key={level.value} className="flex items-center p-4 rounded-lg border border-secondary-300 hover:border-blue-500 cursor-pointer transition-colors">
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
                        ? 'Na het aanvragen bellen wij u binnen 2 uur om direct een afspraak in te plannen'
                        : 'U kunt zelf een datum en tijd kiezen, vanaf 2 dagen'
                      }
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>
          
          {/* Conditionele datum/tijd selectie - alleen voor "zonder spoed" */}
          {formData.urgency === 'normal' && (
            <div className="border-t border-secondary-300 pt-6">
              <h4 className="text-lg font-semibold text-secondary-800 mb-4">Kies uw gewenste datum en tijd</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-secondary-800 mb-2">Gewenste Datum *</label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                    min={getMinDate()}
                    className={`w-full px-4 py-3 rounded-lg bg-white border text-secondary-800 focus:outline-none ${
                      fieldErrors['preferredDate']
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-secondary-300 focus:border-primary-500'
                    }`}
                    required
                  />
                  {fieldErrors['preferredDate'] && (
                    <p className="text-sm text-red-500 mt-1 flex items-center">
                      <span className="mr-1">⚠️</span>
                      {fieldErrors['preferredDate']}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-secondary-800 mb-2">Gewenste Tijd *</label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg bg-white border text-secondary-800 focus:outline-none ${
                      fieldErrors['preferredTime']
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-secondary-300 focus:border-primary-500'
                    }`}
                    required
                  >
                    <option value="">Kies een tijdslot</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                  {fieldErrors['preferredTime'] && (
                    <p className="text-sm text-red-500 mt-1 flex items-center">
                      <span className="mr-1">⚠️</span>
                      {fieldErrors['preferredTime']}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
          
          
          <div>
            <label htmlFor="problemDescription" className="block text-sm font-medium text-secondary-800 mb-2">Beschrijf uw probleem *</label>
            <textarea
              id="problemDescription"
              name="problemDescription"
              value={formData.problemDescription}
              onChange={(e) => handleInputChange('problemDescription', e.target.value)}
              rows={4}
              className={`w-full px-4 py-3 rounded-lg bg-white border text-secondary-800 placeholder-secondary-400 focus:outline-none ${
                fieldErrors['problemDescription']
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-secondary-300 focus:border-primary-500'
              }`}
              placeholder="Beschrijf kort wat er aan de hand is... (bijv. 'Computer installatie', 'Printer werkt niet', 'WiFi problemen')"
              required
            />
            {fieldErrors['problemDescription'] ? (
              <p className="text-sm text-red-500 mt-1 flex items-center">
                <span className="mr-1">⚠️</span>
                {fieldErrors['problemDescription']}
              </p>
            ) : (
              <p className="text-xs text-secondary-400 mt-1">
                Een korte beschrijving is voldoende - we bespreken de details tijdens het bezoek.
              </p>
            )}
          </div>
        </div>
      )}


      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="mt-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center">
          <span className="text-red-300">{errorMessage}</span>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={prevStep}
          disabled={currentStep === 1}
          className={`px-6 py-3 rounded-lg font-medium transition-colors ${
            currentStep === 1 
              ? 'bg-secondary-100 text-secondary-500 cursor-not-allowed' 
              : 'bg-secondary-200 text-secondary-800 hover:bg-secondary-300'
          }`}
        >
          Vorige
        </button>
        
        {currentStep < 2 ? (
          <button
            type="button"
            onClick={nextStep}
            disabled={!isStepValid(currentStep)}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              isStepValid(currentStep)
                ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:from-blue-700 hover:to-blue-800'
                : 'bg-secondary-100 text-secondary-500 cursor-not-allowed'
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
            className={`px-8 py-3 rounded-lg font-medium transition-colors ${
              isStepValid(2)
                ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600'
                : 'bg-secondary-100 text-secondary-500 cursor-not-allowed'
            }`}
          >
            Afspraak Aanvragen
          </LoadingButton>
        )}
      </div>
    </div>
  )
}
