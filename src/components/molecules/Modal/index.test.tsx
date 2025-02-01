import { render } from '@testing-library/react'
import Modal from '.'

describe('<Modal />', () => {
  it('should render the heading', () => {
    const { container } = render(<Modal />)

    expect(container).toBeInTheDocument()
  })
})
