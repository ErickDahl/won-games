import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Checkbox } from '.'

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
    const onCheck = jest.fn()

    render(
      <Checkbox label="checkbox label" labelFor="action" onCheck={onCheck} />
    )

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
      expect(onCheck).toHaveBeenCalledWith(true)
    })
  })

  it('should dispatch onCheck when the status change', async () => {
    const onCheck = jest.fn()

    render(
      <Checkbox
        label="checkbox label"
        labelFor="action"
        onCheck={onCheck}
        isChecked
      />
    )

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
      expect(onCheck).toHaveBeenCalledWith(false)
    })
  })

  it('should be accessible with tab', async () => {
    render(<Checkbox label="Checkbox" labelFor="Checkbox" />)
    expect(document.body).toHaveFocus()
    await userEvent.tab()
    expect(screen.getByLabelText(/checkbox/i)).toHaveFocus()
  })
})
