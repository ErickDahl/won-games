import { render, screen } from '@testing-library/react'

import { Banner } from './index'

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt="image" {...props} />
  }
}))

describe('<Banner />', () => {
  it('should render the image', () => {
    render(
      <Banner
        img="/banner.png"
        title="Banner Title"
        subtitle="Banner Subtitle"
        buttonLabel="Click Here"
        buttonLink="/"
      />
    )
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('src', '/banner.png')
  })

  it('should render the title', () => {
    render(
      <Banner
        img="/banner.png"
        title="Banner Title"
        subtitle="Banner Subtitle"
        buttonLabel="Click Here"
        buttonLink="/"
      />
    )
    expect(screen.getByRole('heading', { name: /Banner Title/i })).toBeInTheDocument()
  })

  it('should render the subtitle', () => {
    render(
      <Banner
        img="/banner.png"
        title="Banner Title"
        subtitle="Banner Subtitle"
        buttonLabel="Click Here"
        buttonLink="/"
      />
    )
    expect(screen.getByRole('heading', { name: /Banner Subtitle/i })).toBeInTheDocument()
  })

  it('should render the button with correct label and link', () => {
    render(
      <Banner
        img="/banner.png"
        title="Banner Title"
        subtitle="Banner Subtitle"
        buttonLabel="Click Here"
        buttonLink="/"
      />
    )
    const button = screen.getByRole('link', { name: /Click Here/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('href', '/')
  })
})
