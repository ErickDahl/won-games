import { render, screen } from '@testing-library/react'
import Logo from '.'

describe('<Logo />', () => {
  it('should render the logo', () => {
    render(<Logo variant={'black'} />)
    const element = screen.getByTestId('svg-element-logo')
    expect(element).toBeInTheDocument()
  })
})
