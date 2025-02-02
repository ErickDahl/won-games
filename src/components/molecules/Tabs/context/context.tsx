'use client'

import { createContext, Dispatch, SetStateAction, useContext } from 'react'

interface TabContextValue {
  currentTab: string
  setCurrentTab: Dispatch<SetStateAction<string>>
}

export const TabContext = createContext<TabContextValue>({
  currentTab: '',
  setCurrentTab: () => {}
})

export const useTabContext = () => {
  const context = useContext(TabContext)
  if (!context) {
    throw new Error('useTabContext must be used within a Tab.Root')
  }
  return context
}
