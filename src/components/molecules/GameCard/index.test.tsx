import { render, screen } from '@testing-library/react'
import { GameCardProps, GameCard } from './index'
import gameImage from '@/assets/gameImage.png'
import { IntlProvider } from 'react-intl'
import { gameCardMock } from './mock'

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />
  }
}))

describe('<GameCard />', () => {
  const Component = (props: GameCardProps) => {
    return (
      <IntlProvider locale={'en'}>
        <GameCard {...props} />
      </IntlProvider>
    )
  }

  it('should render the title and developer', () => {
    render(<Component {...gameCardMock} />)

    expect(screen.getByText(/Game Title/i)).toBeInTheDocument()
    expect(screen.getByText(/Game Developer/i)).toBeInTheDocument()
  })

  it('should render the image with correct src and alt', () => {
    render(<Component {...gameCardMock} />)

    const image = screen.getByAltText('Game Title')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', gameImage.src)
  })

  it('should render the list price and price', () => {
    render(<Component {...gameCardMock} />)

    expect(screen.getByText('$100.00')).toBeInTheDocument()
    expect(screen.getByText('$150.00')).toBeInTheDocument()
  })

  it('should render the discount ribbon', () => {
    render(<Component {...gameCardMock} />)

    expect(screen.getByText('33% OFF')).toBeInTheDocument()
  })

  it('should not render the discount ribbon if no price is provided', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { price, ...restProps } = gameCardMock
    render(<Component {...restProps} />)
    expect(screen.queryByText('33% OFF')).not.toBeInTheDocument()
  })
})
