import { render, screen } from '@testing-library/react'
import Heading from '.'
describe('<Heading />', () => {
  it('should render the heading', () => {
    render(<Heading>lorem ipsum</Heading>)
    const element = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(element).toBeInTheDocument()
  })
  it('should render a white heading by default', () => {
    render(<Heading>lorem ipsum</Heading>)
    const element = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(element).toHaveClass('text-white')
  })
  it('should render a heading with a line to the left', () => {
    render(<Heading linePosition="left">lorem ipsum</Heading>)
    const element = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(element).toHaveClass('border-l-7 border-solid pl-3')
  })
  it('should render a heading with a line to the bottom', () => {
    render(<Heading linePosition="bottom">lorem ipsum</Heading>)
    const element = screen.getByRole('heading', { name: /lorem ipsum/i })
    expect(element).toHaveClass(
      'after:border-b-5 relative after:absolute after:-bottom-2 after:left-0 after:w-5 after:border-solid after:content-[""]'
    )
  })
})
