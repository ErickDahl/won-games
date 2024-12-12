import { render, screen } from '@testing-library/react'
import Logo from '@/components/Logo'
import logoBlack from '@/assets/logo-black.svg'
import logoWhite from '@/assets/logoWhite.svg'
import logoCompact from '@/assets/logo-compact.svg'

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />
  }
}))

describe('<Logo />', () => {
  it('renders the default black logo when no variant is specified', () => {
    render(<Logo />)
    const logoElement = screen.getByTestId('svg-element-logo')
    expect(logoElement).toBeInTheDocument()
    expect(logoElement).toHaveAttribute('src', logoBlack.src)
  })

  it('renders the black logo when variant is "black"', () => {
    render(<Logo variant="black" />)
    const logoElement = screen.getByTestId('svg-element-logo')
    expect(logoElement).toHaveAttribute('src', logoBlack.src)
  })

  it('renders the compact logo when variant is "compact"', () => {
    render(<Logo variant="compact" />)
    const logoElement = screen.getByTestId('svg-element-logo')
    expect(logoElement).toHaveAttribute('src', logoCompact.src)
  })

  it('renders the white logo when variant is "white"', () => {
    render(<Logo variant="white" />)
    const logoElement = screen.getByTestId('svg-element-logo')
    expect(logoElement).toHaveAttribute('src', logoWhite.src)
  })

  it('renders the logo large when variant is "large"', () => {
    render(<Logo />)
    const logoElement = screen.getByTestId('svg-element-logo')
    expect(logoElement).toHaveAttribute('width', '200')
  })
  it('renders the logo large when variant is "small"', () => {
    render(<Logo size="small" />)
    const logoElement = screen.getByTestId('svg-element-logo')
    expect(logoElement).toHaveAttribute('width', '110')
  })
})
