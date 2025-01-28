import { render, screen } from '@testing-library/react'
import GameInfo, { GameInfoProps } from '.'
import { IntlProvider } from 'react-intl'

describe('<GameInfo />', () => {
  const props: GameInfoProps = {
    title: 'My Game Title',
    description: 'Game Description',
    price: 210
  }

  const Component = (props: GameInfoProps) => {
    return (
      <IntlProvider locale={'en'}>
        <GameInfo {...props} />
      </IntlProvider>
    )
  }

  it('should render game information', () => {
    render(<Component {...props} />)

    expect(
      screen.getByRole('heading', { name: /my game title/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/game description/i)).toBeInTheDocument()
    expect(screen.getByText('$210.00')).toBeInTheDocument()
  })

  it('should render buttons', () => {
    render(<Component {...props} />)

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
  })
})
