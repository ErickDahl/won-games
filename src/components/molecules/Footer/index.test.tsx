import { render, screen } from '@testing-library/react'

import { Footer } from './index'

describe('<Footer />', () => {
  it('should render the logo', () => {
    render(<Footer />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('should render all links', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(13)
  })

  it('should render the copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/Won Games 2020 © Todos os Direitos Reservados/i)).toBeInTheDocument()
  })
})
