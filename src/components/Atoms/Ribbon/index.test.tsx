import { render, screen } from '@testing-library/react'
import Ribbon from '.'

describe('<Ribbon />', () => {
  it('should render the text correctly', () => {
    render(<Ribbon>Best Seller</Ribbon>)
    expect(screen.getByText(/Best Seller/i)).toBeInTheDocument()
  })

  it('should render with the primary background color', () => {
    render(<Ribbon backGroundColor="primary">Best Seller</Ribbon>)

    const ribbonElement = screen.getByText(/Best Seller/i).parentElement
    expect(ribbonElement).toHaveClass('bg-primary')
  })

  it('should render with the secondary background color', () => {
    render(<Ribbon backGroundColor="secondary">Best Seller</Ribbon>)

    const ribbonElement = screen.getByText(/Best Seller/i).parentElement
    expect(ribbonElement).toHaveClass('bg-secondary')
  })

  it('should render the normal size by default', () => {
    render(<Ribbon>Best Seller</Ribbon>)

    const ribbonElement = screen.getByText(/Best Seller/i).parentElement
    expect(ribbonElement).toHaveClass('h-10')
  })

  it('should render the small size', () => {
    render(<Ribbon size="small">Best Seller</Ribbon>)

    const ribbonElement = screen.getByText(/Best Seller/i).parentElement
    expect(ribbonElement).toHaveClass('h-8')
  })
})
