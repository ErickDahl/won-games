import { render, screen } from '@testing-library/react'
import Menu from '.'

describe('<Menu />', () => {
  it('should render the Menu', () => {
    render(<Menu />)
    const menu = screen.getByRole('list')
    const logo = screen.getByRole('img')
    const searchIcon = screen.getByLabelText('Search')
    const cartIcon = screen.getByLabelText('openCart')

    expect(menu).toBeInTheDocument()
    expect(logo).toBeInTheDocument()
    expect(searchIcon).toBeInTheDocument()
    expect(cartIcon).toBeInTheDocument()
  })
})
