import { render, screen } from '@testing-library/react'

import { ProfileMenu } from '.'
import { profileMenuMock } from './mock'

describe('<ProfileMenu />', () => {
  it('should render the menu', () => {
    render(<ProfileMenu {...profileMenuMock} />)

    expect(screen.getByRole('link', { name: /my profile/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /my cards/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /my orders/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
  })

  it('should render the menu with an active link defined', () => {
    render(<ProfileMenu {...profileMenuMock} activeLink="/profile/cards" />)

    expect(screen.getByRole('link', { name: /my cards/i })).toHaveClass('bg-primary text-white')
  })
})
