import { screen } from '@testing-library/react'
describe('<Footer />', () => {
  it('should render the heading', () => {
    expect(screen.getByRole('heading', { name: /Footer/i })).toBeInTheDocument()
  })
})
