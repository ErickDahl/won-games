import React from 'react'

interface DrawerContextValue {
  isOpen: boolean
  openDrawer: () => void
  toggleDrawer: () => void
  closeDrawer: () => void
  from: 'left' | 'bottom' | 'right' | 'top' | undefined
  size: number | undefined
}

export const DrawerContext = React.createContext<DrawerContextValue>({
  isOpen: false,
  from: 'left',
  size: 100,
  openDrawer: () => {},
  toggleDrawer: () => {},
  closeDrawer: () => {}
})

export const useDrawerContext = () => {
  const context = React.useContext(DrawerContext)
  if (!context) {
    throw new Error('useDrawerContext must be used within a Drawer.Root')
  }
  return context
}
