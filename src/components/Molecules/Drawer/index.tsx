'use client'

import { HTMLAttributes, ReactNode, useState } from 'react'
import { DrawerContext, useDrawerContext } from './context/context'
import { tv, VariantProps } from 'tailwind-variants'

const drawerClasses = tv({
  slots: {
    root: 'relative',
    trigger: 'cursor-pointer',
    overlay:
      'fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300',
    content:
      'fixed z-50 flex w-full items-center justify-center bg-white text-black transition-transform duration-300',
    close: 'cursor-pointer'
  },
  variants: {
    isOpen: {
      true: {
        overlay: 'opacity-50'
      },
      false: {
        overlay: 'pointer-events-none opacity-0'
      }
    },
    from: {
      left: { content: 'left-0 top-0 h-screen w-screen' },
      right: { content: 'right-0 top-0 h-screen w-screen' },
      top: { content: 'left-0 top-0 h-screen w-screen' },
      bottom: { content: 'bottom-0 left-0 h-screen w-screen' }
    }
  },
  compoundVariants: [
    {
      isOpen: true,
      from: 'left',
      className: {
        content: 'translate-x-0'
      }
    },
    {
      isOpen: false,
      from: 'left',
      className: {
        content: '-translate-x-full'
      }
    },
    {
      isOpen: true,
      from: 'right',
      className: {
        content: 'translate-x-0'
      }
    },
    {
      isOpen: false,
      from: 'right',
      className: {
        content: 'translate-x-[100%]'
      }
    },
    {
      isOpen: true,
      from: 'top',
      className: {
        content: 'translate-y-0'
      }
    },
    {
      isOpen: false,
      from: 'top',
      className: {
        content: 'translate-y-[-100%]'
      }
    },
    {
      isOpen: true,
      from: 'bottom',
      className: {
        content: 'translate-y-0'
      }
    },
    {
      isOpen: false,
      from: 'bottom',
      className: {
        content: 'translate-y-[100%]'
      }
    }
  ],
  defaultVariants: {
    from: 'left',
    isOpen: false
  }
})

type DrawerProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof drawerClasses> & {
    children: ReactNode
    size?: number
  }

export const Drawer = ({ children, from, size, ...rest }: DrawerProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const openDrawer = () => setIsOpen(true)
  const toggleDrawer = () => setIsOpen(!isOpen)
  const closeDrawer = () => setIsOpen(false)
  const { root, overlay } = drawerClasses({ isOpen })

  return (
    <DrawerContext.Provider
      value={{ isOpen, openDrawer, closeDrawer, toggleDrawer, from, size }}
    >
      <div className={root()} {...rest}>
        {children}
      </div>
      <div className={overlay({ isOpen })} onClick={closeDrawer}></div>
    </DrawerContext.Provider>
  )
}

type DrawerTriggerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export const DrawerTrigger = ({ children, ...rest }: DrawerTriggerProps) => {
  const { openDrawer, isOpen } = useDrawerContext()
  const { trigger } = drawerClasses({ isOpen })

  return (
    <div
      onClick={openDrawer}
      aria-label="Open Drawer"
      className={trigger()}
      {...rest}
    >
      {children}
    </div>
  )
}

type DrawerCloseProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export const DrawerClose = ({ children, ...rest }: DrawerCloseProps) => {
  const { closeDrawer, isOpen } = useDrawerContext()
  const { close } = drawerClasses({ isOpen })

  return (
    <div
      onClick={closeDrawer}
      aria-hidden={!isOpen}
      aria-label="Close Drawer"
      className={close()}
      {...rest}
    >
      {children}
    </div>
  )
}

type DrawerContentProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode
}

export const DrawerContent = ({ children, ...rest }: DrawerContentProps) => {
  const { isOpen, from, size } = useDrawerContext()
  const { content } = drawerClasses({ isOpen, from })

  const dynamicStyle =
    from === 'left' || from === 'right'
      ? { width: `${size}vw` }
      : { height: `${size}vh` }

  return (
    <aside
      aria-hidden={!isOpen}
      className={content()}
      style={dynamicStyle}
      {...rest}
    >
      {children}
    </aside>
  )
}
