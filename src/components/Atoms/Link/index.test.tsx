import { render, screen } from '@testing-library/react'
import StoreLink from '.'

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
      'relative',
      'text-center',
      'text-white',
      'after:absolute',
      'after:left-1/2',
      'after:block',
      'after:h-[0.3rem]',
      'after:w-0',
      'after:transition-all',
      'after:duration-200',
      'after:content-[""]',
      'hover:after:left-0',
      'hover:after:w-full',
      'after:bg-primary'
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

    expect(linkElement).toHaveClass(
      'relative',
      'text-center',
      'text-white',
      'after:bg-primary'
    )

    expect(linkElement).not.toHaveClass(
      'after:absolute',
      'after:left-1/2',
      'after:block',
      'after:h-[0.3rem]',
      'after:w-0',
      'after:transition-all',
      'after:duration-200',
      'after:content-[""]',
      'hover:after:left-0',
      'hover:after:w-full',
      'after:bg-primary'
    )
  })
})
