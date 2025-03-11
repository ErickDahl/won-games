import { render, screen } from '@testing-library/react'

import { Badge } from '.'

import '@testing-library/jest-dom'

describe('<Badge />', () => {
  it('should render the badge', () => {
    const { container } = render(<Badge>99+</Badge>)
    expect(container).toBeInTheDocument()
  })

  it('should display the correct text', () => {
    render(<Badge>New</Badge>)
    expect(screen.getByText('New')).toBeInTheDocument()
  })

  it('should apply the correct styles', () => {
    const { container } = render(<Badge>1</Badge>)
    const badgeElement = container.firstChild

    expect(badgeElement).toHaveClass(
      'inline-flex aspect-square max-h-5 min-h-5 min-w-5 max-w-5 rounded-full bg-secondary'
    )
  })
})
