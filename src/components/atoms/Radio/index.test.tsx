import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Radio } from '.'

describe('<Radio />', () => {
  it('should render with label (white)', () => {
    render(<Radio label="Radio" labelFor="check" value="anyValue" name={''} />)
    const label = screen.getByText('Radio')
    expect(label).toBeInTheDocument()
    expect(label).toHaveClass('text-white')
  })

  it('should render with label (black)', () => {
    render(<Radio label="Radio" labelColor="black" name={''} />)
    const label = screen.getByText('Radio')
    expect(label).toBeInTheDocument()
    expect(label).toHaveClass('text-black')
  })

  it('should render without label', () => {
    render(<Radio name={''} />)
    expect(screen.queryByLabelText('Radio')).not.toBeInTheDocument()
  })

  it('should dispatch onCheck when label status changes', async () => {
    const onCheck = jest.fn()
    render(
      <Radio
        label="Radio"
        labelFor="Radio"
        onCheck={onCheck}
        value="anyValue"
        name={''}
      />
    )
    expect(onCheck).not.toHaveBeenCalled()
    userEvent.click(screen.getByLabelText('Radio'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith('anyValue')
  })

  it('Should be accessible with tab', async () => {
    render(<Radio label="Radio" labelFor="Radio" name={''} />)
    const radio = screen.getByLabelText('Radio')
    expect(document.body).toHaveFocus()
    await userEvent.tab()
    expect(radio).toHaveFocus()
  })
})
