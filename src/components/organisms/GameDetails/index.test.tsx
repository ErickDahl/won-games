import { render, screen } from '@testing-library/react'
import { gameDetailsMock } from './mock'
import { IntlProvider } from 'react-intl'
import { GameDetailsProps, GameDetails } from '.'

describe('<GameDetails />', () => {
  const Component = (props: GameDetailsProps) => {
    return (
      <IntlProvider locale={'en'}>
        <GameDetails {...props} />
      </IntlProvider>
    )
  }

  it('should render the headings', () => {
    render(<Component {...gameDetailsMock} />)

    expect(
      screen.getByRole('heading', { name: /Company/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Release date/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Platforms/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Editor/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Rating/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Genre/i })).toBeInTheDocument()
  })

  it('should render the platform icons', () => {
    render(<Component {...gameDetailsMock} />)

    expect(screen.getByTitle(/linux/i)).toBeInTheDocument()
    expect(screen.getByTitle(/mac/i)).toBeInTheDocument()
    expect(screen.getByTitle(/windows/i)).toBeInTheDocument()
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
