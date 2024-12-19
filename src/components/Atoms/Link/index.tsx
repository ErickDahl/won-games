import Link, { LinkProps as NextLinkProps } from 'next/link'
import { tv, VariantProps } from 'tailwind-variants'
import { ReactNode } from 'react'

const LinkClasses = tv({
  base: 'relative text-center text-white',
  variants: {
    hoverEffect: {
      true: 'after:absolute after:left-1/2 after:block after:h-[0.3rem] after:w-0 after:transition-all after:duration-200 after:content-[""] hover:after:left-0 hover:after:w-full'
    },
    hoverEffectColor: {
      primary: 'after:bg-primary',
      secondary: 'after:bg-secondary'
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
  }

const StoreLink = ({
  children,
  hoverEffect,
  hoverEffectColor,
  ...rest
}: StoreLinkProps) => (
  <Link className={LinkClasses({ hoverEffect, hoverEffectColor })} {...rest}>
    {children}
  </Link>
)

export default StoreLink
