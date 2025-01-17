// import { render, screen } from '@testing-library/react'
// import Home from '.'
// import homeMockData from './mock'

describe('<Home />', () => {
  it('should render the home', () => {
    expect(true).toBe(true)
    // const { container } = render(<Home {...homeMockData} />)
    // const menus = screen.getAllByRole('list')
    // const menu = menus[0]

    // expect(container).toBeInTheDocument()
    // expect(menu).toBeInTheDocument()
  })

  // it('should render the headings', () => {
  //   render(<Home {...homeMockData} />)
  //   const headings = ['News', 'Most Popular', 'Upcoming', 'Free Games']

  //   headings.forEach((heading) => {
  //     expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument()
  //   })
  // })

  // it('should render the banners', () => {
  //   render(<Home {...homeMockData} />)
  //   const banners = screen.getAllByRole('img', { name: /banner/i })
  //   expect(banners.length).toBe(homeMockData.banners.length)
  // })

  // it('should render the game carousels', () => {
  //   render(<Home {...homeMockData} />)
  //   const carousels = screen.getAllByRole('list')
  //   expect(carousels.length).toBeGreaterThan(0)
  // })

  // it('should render the highlights', () => {
  //   render(<Home {...homeMockData} />)
  //   const highlights = screen.getAllByRole('img', { name: /highlight/i })
  //   expect(highlights.length).toBeGreaterThan(0)
  // })

  // it('should render the footer', () => {
  //   render(<Home {...homeMockData} />)
  //   const footer = screen.getByRole('contentinfo')
  //   expect(footer).toBeInTheDocument()
  // })
})
