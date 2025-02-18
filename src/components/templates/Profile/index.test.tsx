import { render } from '@testing-library/react'

import { ProfileTemplate } from '.'

describe('<ProfileTemplate />', () => {
  it('should render the profile', () => {
    render(<ProfileTemplate />)

    expect(true).toBe(true)
  })
})
