import { render, screen } from '@testing-library/react'
import { IntlProvider } from 'react-intl'

import { GameItem, GameItemProps } from '.'
import { gameItemMock } from './mock'

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt="image" {...props} />
  }
}))

const Component = (props: GameItemProps) => {
  return (
    <IntlProvider locale={'en'}>
      <GameItem {...props} timeZone="UTC" />
    </IntlProvider>
  )
}

describe('<GameItem />', () => {
  it('should render the item', () => {
    render(<Component {...gameItemMock} />)

    expect(screen.getByRole('heading', { name: gameItemMock.title })).toBeInTheDocument()
    expect(screen.getByText('$210.00')).toBeInTheDocument()
  })

  it('should render the item with download link', () => {
    render(<Component {...gameItemMock} />)

    expect(screen.getByRole('link', { name: `Download ${gameItemMock.title}` })).toHaveAttribute(
      'href',
      gameItemMock.downloadLink
    )
  })

  it('should render the item with payment info', () => {
    render(<Component {...gameItemMock} />)
    const { paymentInfo } = gameItemMock

    expect(screen.getByRole('img', { name: paymentInfo?.flag })).toHaveAttribute('src', paymentInfo?.img)

    if (paymentInfo?.number) {
      expect(screen.getByText(paymentInfo.number)).toBeInTheDocument()
    }

    if (paymentInfo?.purchaseDate) {
      expect(screen.getByText('Purchase made on 11/15/2019, 12:00 AM')).toBeInTheDocument()
    }
  })
})
