'use client'

import { useState } from 'react'

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

  const handleInputChange = (field: keyof AppointmentFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const validateStep = (step: number): boolean => {
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
          validatePhone(formData.phone) &&
          validateAddress(formData.address) &&
          validatePostalCode(formData.postalCode)
        )
      case 2:
        // Voor spoed: alleen probleem beschrijving vereist
        if (formData.urgency === 'urgent') {
          return !!(formData.problemDescription)
        }
        // Voor zonder spoed: datum, tijd en probleem vereist
        const minDate = getMinDateForUrgency(formData.urgency)
        const selectedDate = formData.preferredDate
        const isValidDate = selectedDate >= minDate
        
        return !!(
          formData.preferredDate && 
          formData.preferredTime && 
          formData.problemDescription &&
          isValidDate
        )
      default:
        return true
    }
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 2))
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
      } else {
        const error = await response.json()
        setSubmitStatus('error')
        setErrorMessage(error.message || 'Er is een fout opgetreden. Probeer het opnieuw.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Er is een verbindingsfout opgetreden. Controleer uw internetverbinding.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const getMinDate = () => {
    return getMinDateForUrgency(formData.urgency)
  }

  if (submitStatus === 'success') {
    return (
      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 text-center border border-white/10">
        <h3 className="text-3xl font-bold text-white mb-4">Afspraak Aangevraagd!</h3>
        <p className="text-neutral-300 mb-6 max-w-md mx-auto">
          Bedankt voor uw aanvraag. U ontvangt binnen enkele minuten een bevestiging per e-mail. 
          Wij nemen binnen 2 uur contact met u op om de afspraak te bevestigen.
        </p>
        <button 
          onClick={() => setSubmitStatus('idle')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Nieuwe Afspraak Maken
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium ${
                step <= currentStep 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                  : 'bg-neutral-700 text-neutral-400'
              }`}>
                {step}
              </div>
              {step < 2 && (
                <div className={`w-full h-1 mx-4 ${
                  step < currentStep ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-neutral-700'
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <span className="text-sm text-neutral-400">
            Stap {currentStep} van 2: {
              currentStep === 1 ? 'Contact & Adresgegevens' : 'Urgentie & Probleem'
            }
          </span>
        </div>
      </div>

      {/* Step Content */}
      {currentStep === 1 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            Contact & Adresgegevens
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-200 mb-2">Voornaam *</label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-600 text-white placeholder-neutral-400 focus:border-blue-500 focus:outline-none"
                placeholder="Uw voornaam"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-200 mb-2">Achternaam *</label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-600 text-white placeholder-neutral-400 focus:border-blue-500 focus:outline-none"
                placeholder="Uw achternaam"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-neutral-200 mb-2">E-mailadres *</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-600 text-white placeholder-neutral-400 focus:border-blue-500 focus:outline-none"
              placeholder="uw.email@example.com"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-neutral-200 mb-2">Telefoonnummer *</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className={`w-full px-4 py-3 rounded-lg bg-neutral-800 border text-white placeholder-neutral-400 focus:outline-none ${
                formData.phone && !validatePhone(formData.phone) 
                  ? 'border-red-500 focus:border-red-500' 
                  : 'border-neutral-600 focus:border-blue-500'
              }`}
              placeholder="06-12345678 of 020-1234567"
              required
            />
            {formData.phone && !validatePhone(formData.phone) && (
              <p className="text-xs text-red-400 mt-1">
                Voer een geldig Nederlands telefoonnummer in
              </p>
            )}
          </div>
          
          <div className="border-t border-neutral-600 pt-6 mt-8">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
              Waar Moeten We Zijn?
            </h4>
            
            <div>
              <label className="block text-sm font-medium text-neutral-200 mb-2">Straat + Huisnummer *</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                className={`w-full px-4 py-3 rounded-lg bg-neutral-800 border text-white placeholder-neutral-400 focus:outline-none ${
                  formData.address && !validateAddress(formData.address) 
                    ? 'border-red-500 focus:border-red-500' 
                    : 'border-neutral-600 focus:border-blue-500'
                }`}
                placeholder="Voorbeeldstraat 123"
                required
              />
              {formData.address && !validateAddress(formData.address) && (
                <p className="text-xs text-red-400 mt-1">
                  Voer een volledig adres in met straatnaam en huisnummer
                </p>
              )}
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-neutral-200 mb-2">Postcode *</label>
                <input
                  type="text"
                  value={formData.postalCode}
                  onChange={(e) => handleInputChange('postalCode', e.target.value.toUpperCase())}
                  className={`w-full px-4 py-3 rounded-lg bg-neutral-800 border text-white placeholder-neutral-400 focus:outline-none ${
                    formData.postalCode && !validatePostalCode(formData.postalCode) 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-neutral-600 focus:border-blue-500'
                  }`}
                  placeholder="1234AB"
                  maxLength={6}
                  required
                />
                {formData.postalCode && !validatePostalCode(formData.postalCode) && (
                  <p className="text-xs text-red-400 mt-1">
                    Voer een geldige Nederlandse postcode in (bijv. 1234AB)
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-neutral-200 mb-2">Stad *</label>
                <input
                  type="text"
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-600 text-white placeholder-neutral-400 focus:border-blue-500 focus:outline-none"
                  placeholder="Bijv. Amsterdam, Rotterdam, Utrecht"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            Urgentie & Probleem
          </h3>
          
          <div>
            <label className="block text-sm font-medium text-neutral-200 mb-3">Is dit met spoed? *</label>
            <div className="space-y-3">
              {urgencyLevels.map(level => (
                <label key={level.value} className="flex items-center p-4 rounded-lg border border-neutral-600 hover:border-blue-500 cursor-pointer transition-colors">
                  <input
                    type="radio"
                    name="urgency"
                    value={level.value}
                    checked={formData.urgency === level.value}
                    onChange={(e) => handleInputChange('urgency', e.target.value)}
                    className="mr-3"
                  />
                  <div>
                    <div className={`font-medium ${level.color}`}>{level.label}</div>
                    <div className="text-xs text-neutral-400 mt-1">
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
            <div className="border-t border-neutral-600 pt-6">
              <h4 className="text-lg font-semibold text-white mb-4">Kies uw gewenste datum en tijd</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-neutral-200 mb-2">Gewenste Datum *</label>
                  <input
                    type="date"
                    id="preferredDate"
                    value={formData.preferredDate}
                    onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                    min={getMinDate()}
                    className={`w-full px-4 py-3 rounded-lg bg-neutral-800 border text-white focus:outline-none ${
                      formData.preferredDate && formData.preferredDate < getMinDate()
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-neutral-600 focus:border-blue-500'
                    }`}
                    required
                  />
                  {formData.preferredDate && formData.preferredDate < getMinDate() && (
                    <p className="text-xs text-red-400 mt-1">
                      Kies een datum vanaf 2 dagen in de toekomst.
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-neutral-200 mb-2">Gewenste Tijd *</label>
                  <select
                    id="preferredTime"
                    value={formData.preferredTime}
                    onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-600 text-white focus:border-blue-500 focus:outline-none"
                    required
                  >
                    <option value="">Kies een tijdslot</option>
                    {timeSlots.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
          
          
          <div>
            <label htmlFor="problemDescription" className="block text-sm font-medium text-neutral-200 mb-2">Beschrijf uw probleem *</label>
            <textarea
              id="problemDescription"
              value={formData.problemDescription}
              onChange={(e) => handleInputChange('problemDescription', e.target.value)}
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-600 text-white placeholder-neutral-400 focus:border-blue-500 focus:outline-none"
              placeholder="Beschrijf kort wat er aan de hand is... (bijv. 'Computer installatie', 'Printer werkt niet', 'WiFi problemen')"
              required
            />
            <p className="text-xs text-neutral-400 mt-1">
              Een korte beschrijving is voldoende - we bespreken de details tijdens het bezoek.
            </p>
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
              ? 'bg-neutral-700 text-neutral-500 cursor-not-allowed' 
              : 'bg-neutral-600 text-white hover:bg-neutral-500'
          }`}
        >
          Vorige
        </button>
        
        {currentStep < 2 ? (
          <button
            type="button"
            onClick={nextStep}
            disabled={!validateStep(currentStep)}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              validateStep(currentStep)
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                : 'bg-neutral-700 text-neutral-500 cursor-not-allowed'
            }`}
          >
            Volgende
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!validateStep(2) || isSubmitting}
            className={`px-8 py-3 rounded-lg font-medium flex items-center transition-colors ${
              validateStep(2) && !isSubmitting
                ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600'
                : 'bg-neutral-700 text-neutral-500 cursor-not-allowed'
            }`}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Verzenden...
              </>
            ) : (
              <>
                Afspraak Aanvragen
              </>
            )}
          </button>
        )}
      </div>
    </div>
  )
}
