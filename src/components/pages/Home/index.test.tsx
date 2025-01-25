import { render, screen } from '@testing-library/react'
import homeMockData from './mock'
import Home from '.'

jest.mock('components/Templates/ShowCase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})
jest.mock('components/molecules/BannerCarousel', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Banner Carousel"></div>
    }
  }
})
describe('<Home />', () => {
  it('should render banners and showCases', () => {
    render(<Home {...homeMockData} />)

    expect(screen.getByTestId('Mock Banner Carousel')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(5)
  })
})
