'use client'

import { HTMLAttributes, PropsWithChildren, useEffect, useState } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

import { ModalContext, useModalContext } from './context/context'

const modalClasses = tv({
  slots: {
    base: '',
    overlay:
      'fixed inset-0 z-40 h-screen w-screen cursor-pointer bg-black opacity-0 transition-opacity duration-300',
    content:
      'fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform bg-white opacity-0 shadow-lg transition-all duration-300',
    trigger: 'text-white',
    close: ''
  },
  variants: {
    isOpen: {
      true: {
        content: 'opacity-100',
        overlay: 'opacity-80'
      },
      false: {
        overlay: 'pointer-events-none',
        content: 'pointer-events-none'
      }
    }
  }
})

type ModalProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof modalClasses> & {
    closeOnEsc?: boolean
  }

export const Modal = ({
  children,
  closeOnEsc
}: PropsWithChildren<ModalProps>) => {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () => setIsOpen(true)
  const toggleModal = () => setIsOpen(!isOpen)
  const closeModal = () => setIsOpen(false)
  const { overlay } = modalClasses()

  useEffect(() => {
    if (!closeOnEsc) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [closeOnEsc])

  return (
    <ModalContext
      value={{
        isOpen,
        openModal,
        toggleModal,
        closeModal
      }}
    >
      {children}
      <div
        className={overlay({ isOpen })}
        onClick={closeModal}
        role="presentation"
      />
    </ModalContext>
  )
}

type DrawerContentProps = HTMLAttributes<HTMLElement>

export const ModalContent = ({
  children,
  className,
  ...rest
}: PropsWithChildren<DrawerContentProps>) => {
  const { isOpen } = useModalContext()
  const { content } = modalClasses({ isOpen })

  return (
    <aside aria-hidden={!isOpen} className={content({ className })} {...rest}>
      {children}
    </aside>
  )
}

type ModalTriggerProps = HTMLAttributes<HTMLDivElement>

export const ModalTrigger = ({
  children,
  className,
  ...rest
}: ModalTriggerProps) => {
  const { openModal, isOpen } = useModalContext()
  const { trigger } = modalClasses({ isOpen })

  return (
    <div
      onClick={openModal}
      role="button"
      aria-label="Open Drawer"
      className={trigger({ className })}
      {...rest}
    >
      {children}
    </div>
  )
}

type ModalCloseProps = HTMLAttributes<HTMLDivElement>

export const ModalClose = ({
  children,
  className,
  ...rest
}: PropsWithChildren<ModalCloseProps>) => {
  const { closeModal, isOpen } = useModalContext()
  const { close } = modalClasses({ isOpen })

  return (
    <div
      onClick={closeModal}
      role="button"
      aria-hidden={!isOpen}
      aria-label="Close Drawer"
      className={close({ className })}
      {...rest}
    >
      {children}
    </div>
  )
}
