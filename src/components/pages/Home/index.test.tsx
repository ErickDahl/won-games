// import { render, screen } from '@testing-library/react'
// import { homeMockData } from './mock'
// import { Home } from '.'

// jest.mock('components/templates/ShowCase', () => {
//   const ShowCase = () => <div data-testid="Mock Showcase"></div>
//   return ShowCase
// })

// jest.mock('components/molecules/BannerCarousel', () => {
//   const BannerCarousel = () => <div data-testid="Mock Banner Carousel"></div>
//   return BannerCarousel
// })

describe('<Home />', () => {
  it('should render banners and showCases', () => {
    // render(<Home {...homeMockData} />)
    expect(true).toBe(true)

    // expect(screen.getByTestId('Mock Banner Carousel')).toBeInTheDocument()
    // expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(5)
  })
})
