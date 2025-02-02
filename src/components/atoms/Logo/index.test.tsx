import { render, screen } from '@testing-library/react'

import logoBlack from '@/assets/logo-black.svg'
import logoCompact from '@/assets/logo-compact.svg'
import logoWhite from '@/assets/logoWhite.svg'
import { Logo } from '.'

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt="image" {...props} />
  }
}))

describe('<Logo />', () => {
  it('renders the default black logo when no variant is specified', () => {
    render(<Logo />)
    const logoElement = screen.getByRole('img')
    expect(logoElement).toBeInTheDocument()
    expect(logoElement).toHaveAttribute('src', logoBlack.src)
  })

  it('renders the black logo when variant is "black"', () => {
    render(<Logo variant="black" />)
    const logoElement = screen.getByRole('img')
    expect(logoElement).toHaveAttribute('src', logoBlack.src)
  })

  it('renders the compact logo when variant is "compact"', () => {
    render(<Logo variant="compact" />)
    const logoElement = screen.getByRole('img')
    expect(logoElement).toHaveAttribute('src', logoCompact.src)
  })

  it('renders the white logo when variant is "white"', () => {
    render(<Logo variant="white" />)
    const logoElement = screen.getByRole('img')
    expect(logoElement).toHaveAttribute('src', logoWhite.src)
  })

  it('renders the logo large when variant is "large"', () => {
    render(<Logo />)
    const logoElement = screen.getByRole('img')
    expect(logoElement).toHaveAttribute('width', '200')
  })
  it('renders the logo large when variant is "small"', () => {
    render(<Logo size="small" />)
    const logoElement = screen.getByRole('img')
    expect(logoElement).toHaveAttribute('width', '110')
  })
})
