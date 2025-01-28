import { render, screen } from '@testing-library/react'
import GameCard, { GameCardProps } from './index'
import gameImage from '@/assets/gameImage.png'
import { IntlProvider } from 'react-intl'

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />
  }
}))

describe('<GameCard />', () => {
  const props: GameCardProps = {
    title: 'Game Title',
    developer: 'Game Developer',
    image: gameImage,
    listPrice: 29.99,
    price: 59.99
  }

  const Component = (props: GameCardProps) => {
    return (
      <IntlProvider locale={'en'}>
        <GameCard {...props} />
      </IntlProvider>
    )
  }

  it('should render the title and developer', () => {
    render(<Component {...props} />)

    expect(screen.getByText(/Game Title/i)).toBeInTheDocument()
    expect(screen.getByText(/Game Developer/i)).toBeInTheDocument()
  })

  it('should render the image with correct src and alt', () => {
    render(<Component {...props} />)

    const image = screen.getByAltText('Game Title')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', gameImage.src)
  })

  it('should render the list price and price', () => {
    render(<Component {...props} />)

    expect(screen.getByText('$59.99')).toBeInTheDocument()
    expect(screen.getByText('$29.99')).toBeInTheDocument()
  })

  it('should render the discount ribbon', () => {
    render(<Component {...props} />)

    expect(screen.getByText('50% OFF')).toBeInTheDocument()
  })

  it('should not render the discount ribbon if no price is provided', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { price, ...restProps } = props
    render(<Component {...restProps} />)
    expect(screen.queryByText('50% OFF')).not.toBeInTheDocument()
  })
})
