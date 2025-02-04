import { render, screen } from '@testing-library/react'

import { Menu } from '.'

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

  it('should render the Menu with logged out state', () => {
    render(<Menu isLogged={false} />)
    const loginButton = screen.getByText('Log in now')
    const signUpLink = screen.getByText('Sign up')

    expect(loginButton).toBeInTheDocument()
    expect(signUpLink).toBeInTheDocument()
  })

  it('should render the Menu with logged in state', () => {
    render(<Menu isLogged={true} />)
    const myAccountLink = screen.getByText('My account')
    const wishlistLink = screen.getByText('Wishlist')

    expect(myAccountLink).toBeInTheDocument()
    expect(wishlistLink).toBeInTheDocument()
  })
})
