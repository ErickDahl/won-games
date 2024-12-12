import { render, screen } from '@testing-library/react'
import Heading from '.'
describe('<Heading />', () => {
  it('should render the heading', () => {
    render(<Heading>teste</Heading>)
    const element = screen.getByTestId('heading')
    expect(element).toBeInTheDocument()
  })
})
