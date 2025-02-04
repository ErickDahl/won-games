import { render } from '@testing-library/react'

import { GameRequirements } from '.'
import { gameRequirementsMock } from './mock'

describe('<GameRequirements />', () => {
  it('should render the heading', () => {
    const { container } = render(<GameRequirements {...gameRequirementsMock} />)

    expect(container).toBeInTheDocument()
  })
})
