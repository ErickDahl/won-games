import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { PaymentOptions } from '.'
import { paymentOptionMock } from './mock'

describe('<PaymentOptions />', () => {
  it('should render the saved card options and the add new card button', () => {
    render(<PaymentOptions {...paymentOptionMock} />)

    expect(screen.getByRole('heading', { name: /payment/i })).toBeInTheDocument()

    expect(screen.getByText(/1234/)).toBeInTheDocument()
    expect(screen.getByText(/1111/)).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /add a new credit card/i })).toBeInTheDocument()
  })

  it('should handle select card when clicking on the label', async () => {
    render(<PaymentOptions {...paymentOptionMock} />)

    userEvent.click(screen.getByText(/1234/))
    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /1234/ })).toBeChecked()
    })
  })

  it('should not call handlePayment when button is disabled', () => {
    const handlePayment = jest.fn()
    render(<PaymentOptions {...paymentOptionMock} handlePayment={handlePayment} />)

    userEvent.click(screen.getByRole('button', { name: /buy now/i }))
    expect(handlePayment).not.toHaveBeenCalled()
  })

  it('should call handlePayment when credit card is selected', async () => {
    const handlePayment = jest.fn()
    render(<PaymentOptions {...paymentOptionMock} handlePayment={handlePayment} />)

    userEvent.click(screen.getByText(/1234/))
    userEvent.click(screen.getByRole('button', { name: /buy now/i }))

    await waitFor(() => {
      expect(handlePayment).toHaveBeenCalled()
    })
  })
})
