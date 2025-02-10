import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { WishListIcon } from '@/assets/icons'
import { TextField } from '.'

describe('<TextField />', () => {
  it('Renders with Label', () => {
    render(<TextField label="Label" labelFor="Field" id="Field" />)
    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('Renders without Label', () => {
    render(<TextField />)
    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('Renders with placeholder', () => {
    render(<TextField placeholder="hey you" />)
    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  it('Changes its value when typing', async () => {
    const onInput = jest.fn()
    render(<TextField onInput={onInput} label="TextField" labelFor="TextField" id="TextField" />)
    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)
    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })
    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('Is accessible by tab', async () => {
    render(<TextField label="TextField" labelFor="TextField" id="TextField" />)
    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()
    await userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('Renders with Icon', () => {
    render(<TextField icon={<WishListIcon data-testid="icon" />} />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('Renders with Icon on the right side', () => {
    render(<TextField icon={<WishListIcon data-testid="icon" />} iconPosition="right" />)
    expect(screen.getByTestId('icon').parentElement).toHaveClass('order-last')
  })

  it('Does not changes its value when disabled', async () => {
    const onInput = jest.fn()
    render(<TextField onInput={onInput} label="TextField" labelFor="TextField" id="TextField" disabled />)
    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()
    const text = 'This is my new text'
    userEvent.type(input, text)
    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })
    expect(onInput).not.toHaveBeenCalled()
  })

  it('Is not accessible by tab when disabled', async () => {
    render(<TextField label="TextField" labelFor="TextField" id="TextField" disabled />)
    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()
    await userEvent.tab()
    expect(input).not.toHaveFocus()
  })

  it('Renders with error', () => {
    render(
      <TextField
        icon={<WishListIcon data-testid="icon" />}
        label="TextField"
        labelFor="TextField"
        error
        errorMessage="Error message"
      />
    )
    expect(screen.getByText('Error message')).toBeInTheDocument()
  })
})
