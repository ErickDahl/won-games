'use client'

import { HTMLAttributes, ReactNode, useState } from 'react'
import { DrawerContext, useDrawerContext } from './context'
import { tv, VariantProps } from 'tailwind-variants'

const drawerClasses = tv({
  slots: {
    root: 'block',
    trigger: 'cursor-pointer',
    content: 'w-full opacity-0 transition-transform duration-300',
    close: 'cursor-pointer'
  },
  variants: {
    isOpen: {
      true: {
        content: 'opacity-100'
      },
      false: {
        content: 'opacity-0'
      }
    }
  }
})

type DrawerProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof drawerClasses> & {
    children: ReactNode
  }

export const Drawer = ({ children, ...rest }: DrawerProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const openDrawer = () => setIsOpen(true)
  const toggleDrawer = () => setIsOpen(!isOpen)
  const closeDrawer = () => setIsOpen(false)
  const { root } = drawerClasses({ isOpen })

  return (
    <DrawerContext.Provider
      value={{ isOpen, openDrawer, closeDrawer, toggleDrawer }}
    >
      <div className={root()} {...rest}>
        {children}
      </div>
    </DrawerContext.Provider>
  )
}

type DrawerTriggerProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof drawerClasses> & {
    children: ReactNode
  }

export const DrawerTrigger = ({ children, ...rest }: DrawerTriggerProps) => {
  const { openDrawer, isOpen } = useDrawerContext()
  const { trigger } = drawerClasses({ isOpen })

  return (
    <div onClick={openDrawer} className={trigger()} {...rest}>
      {children}
    </div>
  )
}

type DrawerCloseProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof drawerClasses> & {
    children: ReactNode
  }

export const DrawerClose = ({ children, ...rest }: DrawerCloseProps) => {
  const { closeDrawer, isOpen } = useDrawerContext()
  const { close } = drawerClasses({ isOpen })

  return (
    <div onClick={closeDrawer} className={close()} {...rest}>
      {children}
    </div>
  )
}

type DrawerContentProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof drawerClasses> & {
    children: ReactNode
  }

export const DrawerContent = ({ children, ...rest }: DrawerContentProps) => {
  const { isOpen } = useDrawerContext()
  const { content } = drawerClasses({ isOpen })

  return (
    <aside className={content()} {...rest}>
      {children}
    </aside>
  )
}
