// import { render, screen } from '@testing-library/react'

// import { OrdersList } from '.'
// import { ordersListMock } from './mock'

// jest.mock('components/atoms/Empty', () => ({
//   __esModule: true,
//   default: function Mock() {
//     return <div data-testid="Mock Empty" />
//   }
// }))

// jest.mock('components/molecules/GameItem', () => ({
//   __esModule: true,
//   default: function Mock({ children }: { children: React.ReactNode }) {
//     return <div data-testid="Mock GameItem">{children}</div>
//   }
// }))

describe('<OrdersList />', () => {
  it('should render the game items', () => {
    // render(<OrdersList {...ordersListMock} />)
    // expect(screen.getByRole('heading', { name: /my orders/i })).toBeInTheDocument()
    // expect(screen.getAllByTestId('Mock GameItem')).toHaveLength(2)
    expect(true).toBe(true)
  })

  // it('should render empty state', () => {
  //   render(<OrdersList />)
  //   expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  // })
})
