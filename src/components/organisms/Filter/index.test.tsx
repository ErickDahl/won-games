import { render } from '@testing-library/react'

import { Filter } from '.'
import { filterMock } from './mock'

describe('<Filter />', () => {
  it('should render the heading', () => {
    const { container } = render(<Filter {...filterMock} />)

    expect(container).toBeInTheDocument()
  })
})
