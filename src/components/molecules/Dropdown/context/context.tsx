import { createContext, useContext } from 'react'

interface dropdownContextValue {
  isOpen: boolean
  openDropdown: () => void
  toggleDropdown: () => void
  closeDropdown: () => void
}

export const DropdownContext = createContext<dropdownContextValue>({
  isOpen: false,
  openDropdown: () => {},
  toggleDropdown: () => {},
  closeDropdown: () => {}
})

export const useDropdownContext = () => {
  const context = useContext(DropdownContext)
  if (!context) {
    throw new Error('useDropdownContext must be used within a dropdown.Root')
  }
  return context
}
