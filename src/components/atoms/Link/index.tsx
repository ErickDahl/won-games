import Link, { LinkProps as NextLinkProps } from 'next/link'
import { tv, VariantProps } from 'tailwind-variants'
import { ReactNode } from 'react'

const LinkClasses = tv({
  base: 'text-center text-2xl font-bold text-black',
  variants: {
    hoverEffect: {
      true: 'relative after:absolute after:left-1/2 after:block after:h-[0.3rem] after:w-0 after:transition-all after:duration-200 after:content-[""] hover:after:left-0 hover:after:w-full',
      false: 'after:hidden'
    },
    hoverEffectColor: {
      primary: 'after:bg-primary',
      secondary: 'after:bg-secondary'
    },
    border: {
      true: 'border-b-2'
    },
    borderColor: {
      primary: 'border-primary',
      secondary: 'border-secondary'
    },
    button: {
      true: 'inline-flex h-medium cursor-pointer items-center justify-center gap-2 rounded-radius bg-primary p-2 px-4 text-sm font-normal text-white hover:bg-primaryDark'
    }
  },
  defaultVariants: {
    hoverEffect: true,
    border: false,
    borderColor: 'primary',
    hoverEffectColor: 'primary'
  }
})

type StoreLinkProps = NextLinkProps &
  VariantProps<typeof LinkClasses> & {
    children: ReactNode
    className?: string
  }

const StoreLink = ({
  children,
  className,
  border,
  borderColor,
  hoverEffect,
  button,
  hoverEffectColor,
  ...rest
}: StoreLinkProps) => (
  <Link
    className={LinkClasses({
      hoverEffect,
      hoverEffectColor,
      border,
      borderColor,
      button,
      className
    })}
    {...rest}
  >
    {children}
  </Link>
)

export default StoreLink
