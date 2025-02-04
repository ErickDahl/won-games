import { render } from '@testing-library/react'
import { BreakLine } from '.'

describe('<BreakLine />', () => {
  it('should render the heading', () => {
    const { container } = render(<BreakLine />)

    expect(container).toBeInTheDocument()
  })
})
