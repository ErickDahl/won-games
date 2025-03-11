import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Dropdown, DropdownContent, DropdownTrigger } from '.'

describe('<Dropdown />', () => {
  beforeEach(() => {
    render(
      <Dropdown>
        <DropdownTrigger aria-label="toggle dropdown">
          <h1>Click here</h1>
        </DropdownTrigger>
        <DropdownContent>
          <span>content</span>
        </DropdownContent>
      </Dropdown>
    )
  })

  it('should render title', () => {
    expect(screen.getByLabelText(/toggle dropdown/)).toBeInTheDocument()
  })

  it('should handle open/close dropdown', async () => {
    const content = screen.getByText(/content/).parentElement!

    expect(content).toHaveClass('opacity-0')
    expect(content.getAttribute('aria-hidden')).toBe('true')

    await userEvent.click(screen.getByLabelText(/toggle dropdown/))

    expect(content).toHaveClass('opacity-100')
    expect(content.getAttribute('aria-hidden')).toBe('false')
  })
})
