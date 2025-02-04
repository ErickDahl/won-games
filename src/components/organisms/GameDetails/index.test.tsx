import { render, screen } from '@testing-library/react'
import { IntlProvider } from 'react-intl'

import { GameDetails, GameDetailsProps } from '.'
import { gameDetailsMock } from './mock'

describe('<GameDetails />', () => {
  const Component = (props: GameDetailsProps) => {
    return (
      <IntlProvider locale={'en'}>
        {/* needs to pass Timezone here since github timezone is different from my system */}
        <GameDetails {...props} timeZone="UTC" />
      </IntlProvider>
    )
  }

  it('should render the headings', () => {
    render(<Component {...gameDetailsMock} />)

    expect(
      screen.getByRole('heading', { name: /Developer/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Release date/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Platforms/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Publisher/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Rating/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Genre/i })).toBeInTheDocument()
  })

  it('should render the platform icons', () => {
    render(<Component {...gameDetailsMock} />)

    expect(screen.getByTitle(/linux/i)).toBeInTheDocument()
    expect(screen.getByTitle(/mac/i)).toBeInTheDocument()
    expect(screen.getByTitle(/windows/i)).toBeInTheDocument()
  })

  it('should render the developer', () => {
    render(<Component {...gameDetailsMock} />)
    expect(screen.getByText(/Gearbox Software/i)).toBeInTheDocument()
  })

  it('should render the publisher', () => {
    render(<Component {...gameDetailsMock} />)
    expect(screen.getByText(/2k/i)).toBeInTheDocument()
  })

  it('should render the formated date', () => {
    render(<Component {...gameDetailsMock} />)
    expect(screen.getByText(/Nov 15, 2019/i)).toBeInTheDocument()
  })

  it('should render the game genres', () => {
    render(<Component {...gameDetailsMock} />)
    expect(screen.getByText(/Action/i)).toBeInTheDocument()
    expect(screen.getByText(/Adventure/i)).toBeInTheDocument()
  })
})
