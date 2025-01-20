import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render the checkbox', () => {
    render(<Checkbox label="checkbox label" labelFor="action" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'action')
  })

  it('should render the without label', () => {
    render(<Checkbox labelFor="action" />)
    expect(screen.queryByLabelText('checkbox')).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    render(
      <Checkbox label="checkbox label" labelFor="action" labelColor="black" />
    )
    expect(screen.getByText(/checkbox label/i)).toHaveClass('text-black')
  })

  it('should dispatch onCheck when the status change', async () => {
    const onChange = jest.fn()

    render(
      <Checkbox label="checkbox label" labelFor="action" onChange={onChange} />
    )

    expect(onChange).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))

    await waitFor(() => {
      expect(onChange).toHaveBeenCalledTimes(1)
    })
  })
})
