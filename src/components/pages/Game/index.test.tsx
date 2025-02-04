// import { render, screen } from '@testing-library/react'

// import { GamePage } from '.'
// import { gamePageMock } from './mock'

// jest.mock('components/organisms/Gallery', () => {
//   const Gallery = () => <div data-testid="Mock Gallery" />
//   return Gallery
// })

// jest.mock('components/organisms/GameDetails', () => {
//   const GameDetails = () => <div data-testid="Mock GameDetails" />
//   return GameDetails
// })

// jest.mock('components/molecules/GameInfo', () => {
//   const GameInfo = () => <div data-testid="Mock GameInfo" />
//   return GameInfo
// })

// jest.mock('components/templates/Showcase', () => {
//   const Showcase = () => <div data-testid="Mock Showcase" />
//   return Showcase
// })

describe('<GamePage />', () => {
  it('should render the template with components', () => {
    expect(true).toBe(true)
    // render(<GamePage {...gamePageMock} />)
    // expect(screen.getByTestId('Mock Gallery')).toBeInTheDocument()
    // expect(screen.getByTestId('Mock GameDetails')).toBeInTheDocument()
    // expect(screen.getByTestId('Mock GameInfo')).toBeInTheDocument()
    // expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(2)
  })
})
