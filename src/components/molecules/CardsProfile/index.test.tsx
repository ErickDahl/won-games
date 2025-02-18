import { render, screen } from '@testing-library/react'

import { CardsProfile } from '.'
import { cardsProfileMock } from './mock'

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt="image" {...props} />
  }
}))

describe('<CardsProfile />', () => {
  it('should render the cards list', () => {
    render(<CardsProfile {...cardsProfileMock} />)
    expect(screen.getByRole('heading', { name: /my cards/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /visa/i })).toHaveAttribute('src', '/visa.png')
    expect(screen.getByRole('img', { name: /mastercard/i })).toHaveAttribute('src', '/mastercard.png')
    expect(screen.getByText(/1234/)).toBeInTheDocument()
    expect(screen.getByText(/1111/)).toBeInTheDocument()
  })
})
