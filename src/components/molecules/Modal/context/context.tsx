import { createContext, useContext } from 'react'

interface ModalContextValue {
  isOpen: boolean
  openModal: () => void
  toggleModal: () => void
  closeModal: () => void
}

export const ModalContext = createContext<ModalContextValue>({
  isOpen: false,
  openModal: () => {},
  toggleModal: () => {},
  closeModal: () => {}
})

export const useModalContext = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModalContext must be used within a Modal.Root')
  }
  return context
}
