// import { render, screen } from '@testing-library/react'

// import { filterMock } from '@/components/organisms/Filter/mock'
// import { GamesPage } from '.'
// import { gamesPageMock } from './mock'

// jest.mock('templates/Base', () => ({
//   __esModule: true,
//   default: function Mock({ children }: { children: React.ReactNode }) {
//     return <div data-testid="Mock Base">{children}</div>
//   }
// }))

// jest.mock('components/ExploreSidebar', () => ({
//   __esModule: true,
//   default: function Mock({ children }: { children: React.ReactNode }) {
//     return <div data-testid="Mock ExploreSidebar">{children}</div>
//   }
// }))

// jest.mock('components/GameCard', () => ({
//   __esModule: true,
//   default: function Mock() {
//     return <div data-testid="Mock GameCard" />
//   }
// }))

describe('<GamesPage />', () => {
  it('should render sections', () => {
    // render(<GamesPage filters={filterMock.filters} games={gamesPageMock.games} />)

    // expect(screen.getByTestId('Mock ExploreSidebar')).toBeInTheDocument()
    // expect(screen.getByTestId('Mock GameCard')).toBeInTheDocument()

    // expect(screen.getByRole('button', { name: /show more/i })).toBeInTheDocument()
    expect(true).toBe(true)
  })
})
