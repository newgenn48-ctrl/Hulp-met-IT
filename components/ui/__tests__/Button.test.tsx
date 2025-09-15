// components/ui/__tests__/Button.test.tsx
import { render, screen } from '@testing-library/react'
import { Button } from '../Button'

describe('Button Component', () => {
  it('should render the button with its children', () => {
    // 1. Arrange: Zet de test-situatie op
    render(<Button>Klik hier</Button>)

    // 2. Act: Zoek naar het element op het scherm
    const buttonElement = screen.getByRole('button', { name: /klik hier/i })

    // 3. Assert: Controleer of het element voldoet aan de verwachting
    expect(buttonElement).toBeInTheDocument()
  })

  it('should apply the correct variant classes', () => {
    // Test voor een specifieke stijlvariant
    render(<Button variant="secondary">Secundaire Knop</Button>)
    const buttonElement = screen.getByRole('button', { name: /secundaire knop/i })
    
    // We verwachten dat de classlist de specifieke stijlen voor 'secondary' bevat
    expect(buttonElement.className).toContain('bg-white/10')
  })
})
