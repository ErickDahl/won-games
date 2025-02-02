import { render } from '@testing-library/react'
import { Container } from '.'

describe('<Container />', () => {
  it('should render the container', () => {
    const { container } = render(<Container />)
    expect(container).toBeInTheDocument()
  })

  it('should render children correctly', () => {
    const { getByText } = render(
      <Container>
        <p>Test Child</p>
      </Container>
    )
    expect(getByText('Test Child')).toBeInTheDocument()
  })

  it('should apply additional class names', () => {
    const { container } = render(
      <Container className="additional-class">
        <p>Test Child</p>
      </Container>
    )
    expect(container.firstChild).toHaveClass('additional-class')
  })

  it('should pass HTML attributes to the container', () => {
    const { container } = render(
      <Container id="test-id" data-testid="test-container">
        <p>Test Child</p>
      </Container>
    )
    expect(container.firstChild).toHaveAttribute('id', 'test-id')
    expect(container.firstChild).toHaveAttribute(
      'data-testid',
      'test-container'
    )
  })
})
