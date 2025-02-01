import { fireEvent, render, screen } from '@testing-library/react'
import { Modal, ModalClose, ModalContent, ModalTrigger } from '.'

describe('<Modal />', () => {
  it('should render the heading', () => {
    render(
      <Modal>
        <ModalTrigger>Open Modal</ModalTrigger>
        <ModalContent>Modal Content</ModalContent>
        <ModalClose>Close Modal</ModalClose>
      </Modal>
    )

    const modalContent = screen.getByText('Modal Content')
    const overlay = screen.getByRole('presentation')

    expect(modalContent).toHaveClass('pointer-events-none')
    expect(modalContent).toHaveAttribute('aria-hidden', 'true')
    expect(overlay).toHaveClass('opacity-0')

    fireEvent.click(screen.getByText('Open Modal'))
    expect(modalContent).toHaveClass('opacity-100')
    expect(overlay).toHaveClass('opacity-80')
    expect(modalContent).toHaveAttribute('aria-hidden', 'false')

    fireEvent.click(screen.getByText('Close Modal'))
    expect(modalContent).toHaveClass('opacity-0')
    expect(overlay).toHaveClass('opacity-0')
    expect(modalContent).toHaveAttribute('aria-hidden', 'true')
  })
})
