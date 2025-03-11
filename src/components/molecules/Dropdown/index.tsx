'use client'

import { HTMLAttributes, PropsWithChildren, useState } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

import { DropdownContext, useDropdownContext } from './context/context'

const dropdownClasses = tv({
  slots: {
    content:
      'absolute -right-1 top-9 w-max border-solid bg-white p-1 transition-all duration-300 before:absolute before:-top-[1.2rem] before:right-[2.4rem]' +
      ' before:-top-2 before:right-0 before:border-b-[.8rem] before:border-l-[.8rem] before:border-r-[.8rem] before:border-solid' +
      ' before:border-b-white before:border-l-transparent before:border-r-transparent',
    trigger: 'relative w-fit'
  },
  variants: {
    isOpen: {
      true: {
        content: 'opacity-100'
      },
      false: {
        content: 'pointer-events-none opacity-0'
      }
    }
  }
})

type DropdownProps = VariantProps<typeof dropdownClasses>

export const Dropdown = ({ children }: PropsWithChildren<DropdownProps>) => {
  const [isOpen, setIsOpen] = useState(false)
  const openDropdown = () => setIsOpen(true)
  const toggleDropdown = () => setIsOpen(!isOpen)
  const closeDropdown = () => setIsOpen(false)

  return (
    <DropdownContext
      value={{
        isOpen,
        openDropdown,
        toggleDropdown,
        closeDropdown
      }}
    >
      {children}
    </DropdownContext>
  )
}

type DropDownContentProps = HTMLAttributes<HTMLElement>

export const DropdownContent = ({ children, className, ...rest }: PropsWithChildren<DropDownContentProps>) => {
  const { isOpen } = useDropdownContext()
  const { content } = dropdownClasses({ isOpen })

  return (
    <div aria-hidden={!isOpen} className={content({ className })} {...rest}>
      {children}
    </div>
  )
}

type DropdownTriggerProps = HTMLAttributes<HTMLDivElement>

export const DropdownTrigger = ({ children, className, ...rest }: DropdownTriggerProps) => {
  const { toggleDropdown, isOpen } = useDropdownContext()
  const { trigger } = dropdownClasses({ isOpen })

  return (
    <div onClick={toggleDropdown} role="button" aria-label="Open Dropdown" className={trigger({ className })} {...rest}>
      {children}
    </div>
  )
}
