import { render, screen } from '@testing-library/react'

import { CreditCard } from '.'
import { creditCardMock } from './mock'

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt="image" {...props} />
  }
}))

describe('<CreditCard />', () => {
  it('should render the card', () => {
    render(<CreditCard {...creditCardMock} />)

    expect(screen.getByRole('img', { name: /mastercard/i })).toHaveAttribute('src', '/mastercard.png')
    expect(screen.getByText(/1234/)).toBeInTheDocument()
  })
})
