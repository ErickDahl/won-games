import React from 'react'

interface DrawerContextValue {
  isOpen: boolean
  openDrawer: () => void
  toggleDrawer: () => void
  closeDrawer: () => void
}

export const DrawerContext = React.createContext<DrawerContextValue>({
  isOpen: false,
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
