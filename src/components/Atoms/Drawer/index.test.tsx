import { render } from '@testing-library/react'
import { Drawer } from '.'
describe('<Drawer />', () => {
  it('should render the heading', () => {
    const { container } = render(<Drawer>test</Drawer>)
    expect(container).toBeInTheDocument()
  })
})
