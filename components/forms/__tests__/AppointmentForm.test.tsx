// components/forms/__tests__/AppointmentForm.test.tsx
import { render, screen } from '@testing-library/react'
import { AppointmentForm } from '../AppointmentForm'
import userEvent from '@testing-library/user-event'

// Mock de fetch API om te voorkomen dat er echte netwerkverzoeken worden gedaan
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ message: 'Success' }),
  })
) as jest.Mock

describe('AppointmentForm', () => {
  
  // Helper functie om de eerste stap in te vullen
  const fillStepOne = async () => {
    await userEvent.type(screen.getByPlaceholderText('Uw voornaam'), 'Jan')
    await userEvent.type(screen.getByPlaceholderText('Uw achternaam'), 'Jansen')
    await userEvent.type(screen.getByPlaceholderText('uw.email@example.com'), 'jan.jansen@test.nl')
    await userEvent.type(screen.getByPlaceholderText('06-12345678 of 020-1234567'), '0612345678')
    await userEvent.type(screen.getByPlaceholderText('Voorbeeldstraat 123'), 'Teststraat 10')
    await userEvent.type(screen.getByPlaceholderText('1234AB'), '1234AB')
    await userEvent.type(screen.getByPlaceholderText('Bijv. Amsterdam, Rotterdam, Utrecht'), 'Teststad')
  }

  it('should render the first step of the form initially', () => {
    render(<AppointmentForm />)
    expect(screen.getByText('Contact & Adresgegevens')).toBeInTheDocument()
    expect(screen.queryByText('Urgentie & Probleem')).not.toBeInTheDocument()
  })

  it('should keep the "Next" button disabled until step 1 is valid', async () => {
    render(<AppointmentForm />)
    const nextButton = screen.getByRole('button', { name: /volgende/i })
    
    expect(nextButton).toBeDisabled()

    await userEvent.type(screen.getByPlaceholderText('Uw voornaam'), 'Jan')
    await userEvent.type(screen.getByPlaceholderText('Uw achternaam'), 'Jansen')
    await userEvent.type(screen.getByPlaceholderText('uw.email@example.com'), 'jan.jansen@test.nl')
    
    // Nog steeds niet volledig, dus knop moet uitgeschakeld blijven
    expect(nextButton).toBeDisabled()

    // Vul de rest in
    await fillStepOne()

    // Nu moet de knop actief zijn
    expect(nextButton).toBeEnabled()
  })

  it('should navigate to the second step after filling the first step correctly', async () => {
    render(<AppointmentForm />)
    await fillStepOne()

    const nextButton = screen.getByRole('button', { name: /volgende/i })
    await userEvent.click(nextButton)

    // Verifieer dat we op stap 2 zijn
    expect(await screen.findByText('Urgentie & Probleem')).toBeInTheDocument()
    expect(screen.queryByText('Contact & Adresgegevens')).not.toBeInTheDocument()
  })

  it('should allow form submission after filling both steps', async () => {
    render(<AppointmentForm />)
    
    // Stap 1
    await fillStepOne()
    await userEvent.click(screen.getByRole('button', { name: /volgende/i }))

    // Stap 2
    await userEvent.click(screen.getByLabelText(/zonder spoed/i))
    
    // Wacht tot de datum- en tijdvelden verschijnen
    const dateInput = await screen.findByLabelText(/gewenste datum/i)
    const timeSelect = screen.getByLabelText(/gewenste tijd/i)
    const problemTextarea = screen.getByPlaceholderText(/beschrijf kort wat er aan de hand is/i)

    // Vul datum, tijd en probleem in
    const futureDate = new Date()
    futureDate.setDate(futureDate.getDate() + 3)
    await userEvent.type(dateInput, futureDate.toISOString().split('T')[0]!)
    await userEvent.selectOptions(timeSelect, 'Tussen 10:00 en 12:00 uur')
    await userEvent.type(problemTextarea, 'Ik heb hulp nodig met computer installatie.')

    // De verzendknop moet nu actief zijn
    const submitButton = screen.getByRole('button', { name: /afspraak aanvragen/i })
    expect(submitButton).toBeEnabled()

    // Klik op de verzendknop
    await userEvent.click(submitButton)

    // Verifieer dat het succesbericht wordt getoond
    expect(await screen.findByText('Afspraak Aangevraagd!')).toBeInTheDocument()
    
    // Verifieer dat de fetch API is aangeroepen
    expect(global.fetch).toHaveBeenCalledTimes(1)
  })
})
