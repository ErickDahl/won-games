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
      'fixed z-50 flex h-screen w-screen flex-col items-center justify-center gap-2 overflow-hidden bg-white p-4 text-black transition-transform duration-300',
    close: 'cursor-pointer'
  },
  variants: {
    haveOverlay: {
      false: {
        overlay: 'hidden'
      }
    },
    isOpen: {
      true: {
        overlay: 'opacity-50'
      },
      false: {
        overlay: 'pointer-events-none opacity-0'
      }
    },
    from: {
      left: { content: 'left-0 top-0' },
      right: { content: 'right-0 top-0' },
      top: { content: 'left-0 top-0' },
      bottom: { content: 'bottom-0 left-0' }
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
        content: '-translate-x-[101%]'
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
        content: 'translate-x-[101%]'
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
        content: 'translate-y-[-101%]'
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
        content: 'translate-y-[101%]'
      }
    }
  ]
})

type DrawerProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof drawerClasses> & {
    children: ReactNode
    size?: number
  }

export const Drawer = ({
  children,
  from = 'left',
  size = 100,
  haveOverlay = true,
  className,
  ...rest
}: DrawerProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const openDrawer = () => setIsOpen(true)
  const toggleDrawer = () => setIsOpen(!isOpen)
  const closeDrawer = () => setIsOpen(false)
  const { root, overlay } = drawerClasses({
    isOpen,
    haveOverlay,
    from
  })

  return (
    <DrawerContext.Provider
      value={{
        isOpen,
        openDrawer,
        closeDrawer,
        toggleDrawer,
        from,
        size
      }}
    >
      <div className={root({ className })} {...rest}>
        {children}
      </div>
      <div className={overlay()} onClick={closeDrawer}></div>
    </DrawerContext.Provider>
  )
}

type DrawerTriggerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export const DrawerTrigger = ({
  children,
  className,
  ...rest
}: DrawerTriggerProps) => {
  const { openDrawer, isOpen } = useDrawerContext()
  const { trigger } = drawerClasses({ isOpen })

  return (
    <div
      onClick={openDrawer}
      aria-label="Open Drawer"
      className={trigger({ className })}
      {...rest}
    >
      {children}
    </div>
  )
}

type DrawerCloseProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export const DrawerClose = ({
  children,
  className,
  ...rest
}: DrawerCloseProps) => {
  const { closeDrawer, isOpen } = useDrawerContext()
  const { close } = drawerClasses({ isOpen })

  return (
    <div
      onClick={closeDrawer}
      aria-hidden={!isOpen}
      aria-label="Close Drawer"
      className={close({ className })}
      {...rest}
    >
      {children}
    </div>
  )
}

type DrawerContentProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode
}

export const DrawerContent = ({
  children,
  className,
  ...rest
}: DrawerContentProps) => {
  const { isOpen, from, size } = useDrawerContext()
  const { content } = drawerClasses({ isOpen, from })

  const dynamicStyle = {
    ['left']: { width: `${size}vw` },
    ['right']: { width: `${size}vw` },
    ['top']: { height: `${size}vh` },
    ['bottom']: { height: `${size}vh` }
  }

  return (
    <aside
      aria-hidden={!isOpen}
      className={content({ className })}
      style={from ? dynamicStyle[from] : {}}
      {...rest}
    >
      {children}
    </aside>
  )
}
