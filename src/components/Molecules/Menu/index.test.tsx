import { render, screen } from '@testing-library/react'
import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    render(<Menu />)
    expect(screen.getByLabelText(/openMenu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/openCart/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
  })
  it('should hadnle the open/close behavior the mobile menu', () => {
    render(<Menu />)
  })
})
