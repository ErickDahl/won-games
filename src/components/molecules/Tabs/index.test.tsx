import { render } from '@testing-library/react'
import { Tabs } from '.'

describe('<Tabs />', () => {
  it('should render the heading', () => {
    const { container } = render(<Tabs />)

    expect(container).toBeInTheDocument()
  })
})
