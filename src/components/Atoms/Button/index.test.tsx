import { screen, render, fireEvent } from '@testing-library/react'
import { MdAddShoppingCart } from 'react-icons/md'
import Button from '.'

describe('<Button />', () => {
  it('should render the medium size button by default', () => {
    render(<Button>button</Button>)
    const element = screen.getByRole('button', { name: /button/i })
    expect(element).toHaveClass('h-medium px-8 text-sm')
  })

  it('should render the small size button', () => {
    render(<Button size="small">button</Button>)
    const element = screen.getByRole('button', { name: /button/i })
    expect(element).toHaveClass('h-small px-7 text-xs')
  })

  it('should render the large size button', () => {
    render(<Button size="large">button</Button>)
    const element = screen.getByRole('button', { name: /button/i })
    expect(element).toHaveClass('h-large px-14 text-base')
  })

  it('should render a button with width 100%', () => {
    render(<Button fullWidth>button</Button>)
    const element = screen.getByRole('button', { name: /button/i })
    expect(element).toHaveClass('w-full')
  })

  it('should render a button with an icon', () => {
    render(
      <Button icon={<MdAddShoppingCart data-testid="icon" />}>button</Button>
    )
    const element = screen.getByRole('button', { name: /button/i })
    const icon = screen.getByTestId('icon')
    expect(element).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })

  it('should render a loading state', () => {
    render(<Button loading>button</Button>)
    const element = screen.getByRole('button', { name: /Loading/i })
    expect(element).toBeDisabled()
    expect(screen.getByText(/loading.../i)).toBeInTheDocument()
  })

  it('should apply click animation class when clicked', () => {
    render(<Button clickAnimation>button</Button>)
    const element = screen.getByRole('button', { name: /button/i })
    const div = element.querySelector('div')

    fireEvent.mouseDown(element)
    expect(div).toHaveClass('scale-[.97]')

    fireEvent.mouseUp(element)
    expect(div).toHaveClass('scale-[1]')

    fireEvent.mouseLeave(element)
    expect(div).toHaveClass('scale-[1]')
  })
})
