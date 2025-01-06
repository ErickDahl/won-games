import Link, { LinkProps as NextLinkProps } from 'next/link'
import { tv, VariantProps } from 'tailwind-variants'
import { ReactNode } from 'react'

const LinkClasses = tv({
  base: 'relative text-center text-2xl font-bold text-black',
  variants: {
    hoverEffect: {
      true: 'after:absolute after:left-1/2 after:block after:h-[0.3rem] after:w-0 after:transition-all after:duration-200 after:content-[""] hover:after:left-0 hover:after:w-full'
    },
    hoverEffectColor: {
      primary: 'after:bg-primary',
      secondary: 'after:bg-secondary'
    },
    border: {
      primary: 'border-b-2 border-primary',
      secondary: 'border-b-2 border-secondary'
    }
  },
  defaultVariants: {
    hoverEffect: true,
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
  hoverEffect,
  hoverEffectColor,
  ...rest
}: StoreLinkProps) => (
  <Link
    className={LinkClasses({
      hoverEffect,
      hoverEffectColor,
      border,
      className
    })}
    {...rest}
  >
    {children}
  </Link>
)

export default StoreLink
