import { render, screen } from '@testing-library/react'
import { StoreLink } from '.'

describe('<StoreLink />', () => {
  it('should render the link with correct text, href, and hoverEffect classes', () => {
    const text = 'Click Me'
    const href = '/example-path'

    render(
      <StoreLink href={href} hoverEffect hoverEffectColor="primary">
        {text}
      </StoreLink>
    )

    const linkElement = screen.getByRole('link', { name: text })
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', href)

    expect(linkElement).toHaveClass(
      'after:w-0',
      'after:transition-all',
      'after:duration-200',
      'hover:after:w-full',
      'after:bg-primary'
    )
  })

  it('should render the link secondary hover color', () => {
    const text = 'Click Me'
    const href = '/example-path'

    render(
      <StoreLink href={href} hoverEffect hoverEffectColor="secondary">
        {text}
      </StoreLink>
    )

    const linkElement = screen.getByRole('link', { name: text })
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', href)

    expect(linkElement).toHaveClass(
      'after:w-0',
      'after:transition-all',
      'after:duration-200',
      'hover:after:w-full',
      'after:bg-secondary'
    )
  })

  it('should render the link without hoverEffect classes when hoverEffect is disabled', () => {
    const text = 'No Hover'
    const href = '/no-hover'

    render(
      <StoreLink href={href} hoverEffect={false}>
        {text}
      </StoreLink>
    )

    const linkElement = screen.getByRole('link', { name: text })
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', href)

    expect(linkElement).toHaveClass('text-center', 'after:bg-primary')

    expect(linkElement).not.toHaveClass(
      'after:w-0',
      'after:transition-all',
      'after:duration-200',
      'hover:after:w-full',
      'after:bg-primary'
    )
  })

  it('should render the link with border bottom with color primary ', () => {
    const text = 'No Hover'
    const href = '/no-hover'

    render(
      <StoreLink href={href} hoverEffect={false} border borderColor="primary">
        {text}
      </StoreLink>
    )

    const linkElement = screen.getByRole('link', { name: text })
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', href)

    expect(linkElement).toHaveClass('border-b-2 ', 'border-primary')
  })
  it('should render the link with border bottom with color secondary ', () => {
    const text = 'No Hover'
    const href = '/no-hover'

    render(
      <StoreLink href={href} hoverEffect={false} border borderColor="secondary">
        {text}
      </StoreLink>
    )

    const linkElement = screen.getByRole('link', { name: text })
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', href)

    expect(linkElement).toHaveClass('border-b-2 ', 'border-secondary')
  })
})
