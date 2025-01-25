import { render, screen } from '@testing-library/react'
import cardsMock from '@/components/molecules/GameCardCarousel/mock'
import highlightMock from '@/components/molecules/Highlight/mock'
import ShowCase from '.'
import { headingWhiteMock } from '@/components/atoms/Heading/mock'

const props = {
  title: 'Most Popular',
  highlight: highlightMock,
  heading: headingWhiteMock,
  cards: cardsMock.slice(0, 1)
}

// Todo: fix cards prop

describe('<ShowCase />', () => {
  // it('should render full showcase', () => {
  //   render(<Showcase {...props} />)
  //   expect(
  //     screen.getByRole('heading', { name: /most popular/i })
  //   ).toBeInTheDocument()

  //   expect(
  //     screen.getByRole('heading', { name: highlightMock.title })
  //   ).toBeInTheDocument()

  //   expect(
  //     screen.getByRole('heading', { name: cardsMock[0].title })
  //   ).toBeInTheDocument()
  // })

  // it('should render without title', () => {
  //   render(<Showcase cards={props.cards} highlight={props.highlight} />)
  //   screen.getByRole('heading', { name: highlightMock.title })
  //   screen.getByRole('heading', { name: cardsMock[0].title })
  //   expect(
  //     screen.queryByRole('heading', { name: /most popular/i })
  //   ).not.toBeInTheDocument()
  // })

  // it('should render without highlight', () => {
  //   render(
  //     <Showcase
  //       title={props.title}
  //       heading={props.heading}
  //       cards={props?.cards}
  //     />
  //   )
  //   screen.getByRole('heading', { name: /most popular/i })
  //   screen.getByRole('heading', { name: cardsMock[0].title })
  //   expect(
  //     screen.queryByRole('heading', { name: highlightMock.title })
  //   ).not.toBeInTheDocument()
  // })

  it('should render without games', () => {
    render(
      <ShowCase
        title={props.title}
        heading={props.heading}
        highlight={props.highlight}
      />
    )
    screen.getByRole('heading', { name: /most popular/i })
    screen.getByRole('heading', { name: highlightMock.title })
    expect(
      screen.queryByRole('heading', { name: cardsMock[0].title })
    ).not.toBeInTheDocument()
  })
})
