import { render, screen } from '@testing-library/react'
import PageTemplate from '.'

jest.mock('components/organisms/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Menu"></div>
    }
  }
})
jest.mock('components/molecules/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Footer"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render menu and footer', () => {
    render(
      <PageTemplate>
        <h1>heading</h1>
      </PageTemplate>
    )

    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /heading/i })
    ).toBeInTheDocument()
  })
})
