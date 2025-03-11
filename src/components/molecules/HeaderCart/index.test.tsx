import { render, screen } from '@testing-library/react'

import { HeaderCart } from '.'

describe('<HeaderCart />', () => {
  it('should render without badge', () => {
    render(<HeaderCart />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })

  it('should render with badge', () => {
    render(<HeaderCart count={3} />)

    expect(screen.getByLabelText(/cart items/i)).toBeInTheDocument()
    expect(screen.getByText(/3/)).toBeInTheDocument()
  })
})
