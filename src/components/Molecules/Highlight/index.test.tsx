import { render, screen } from '@testing-library/react'
import Highlight from './index'
import highlightImage from '@/assets/hightlightBanner.png'
import StoreLink from '@/components/Atoms/Link'
import Image from 'next/image'

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />
  }
}))

describe('<Highlight />', () => {
  const props = {
    title: 'Highlight Title',
    subtitle: 'Highlight Subtitle',
    backgroundImage: highlightImage.src,
    button: (
      <StoreLink button hoverEffect={false} href="/link">
        Click Here
      </StoreLink>
    ),
    image: <Image src={highlightImage} alt="Highlight Image" />
  }

  it('should render the title and subtitle', () => {
    render(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /Highlight Title/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Highlight Subtitle/i })
    ).toBeInTheDocument()
  })

  it('should render the button with correct label and link', () => {
    render(<Highlight {...props} />)

    const button = screen.getByRole('link', { name: /Click Here/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('href', '/link')
  })

  it('should render the image with correct src and alt', () => {
    render(<Highlight {...props} />)

    const image = screen.getByAltText('Highlight Image')
    expect(image).toBeInTheDocument()
  })

  it('should apply the correct background image', () => {
    render(<Highlight {...props} />)

    const highlightElement = screen.getByTestId('highlight')
    expect(highlightElement).toHaveStyle(
      `background-image: url(${highlightImage.src})`
    )
  })
})
