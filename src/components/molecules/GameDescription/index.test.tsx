import { render, screen } from '@testing-library/react'

import { GameDescription } from '.'
import { gameDescriptionMock } from './mock'

describe('<GameDescription />', () => {
  it('should render the title and content', () => {
    render(
      <GameDescription {...gameDescriptionMock} content={'<h1>Content</h1>'} />
    )
    expect(
      screen.getByRole('heading', { name: /description/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /content/i })
    ).toBeInTheDocument()
  })

  it('should render without title', () => {
    render(<GameDescription content={gameDescriptionMock.content} />)
    expect(
      screen.queryByRole('heading', { name: /description/i })
    ).not.toBeInTheDocument()
  })

  it('should render the title and content', () => {
    render(<GameDescription {...gameDescriptionMock} />)
    const wrapper = screen.getByRole('heading', {
      name: /description/i
    }).parentElement
    expect(wrapper).toHaveClass('bg-white')
  })
})
