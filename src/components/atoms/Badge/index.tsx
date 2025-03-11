import { PropsWithChildren } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const badgeClasses = tv({
  slots: {
    base: 'inline-flex aspect-square max-h-5 min-h-5 min-w-5 max-w-5 rounded-full bg-secondary',
    childClass: 'flex h-full w-full items-center justify-center text-xs font-semibold text-white'
  }
})

type BadgeProps = VariantProps<typeof badgeClasses> & {
  className?: string
}

const Badge = ({ children, className, ...rest }: PropsWithChildren<BadgeProps>) => {
  const { base, childClass } = badgeClasses()

  return (
    <div className={base({ className })} {...rest}>
      <span className={childClass()}>{children}</span>
    </div>
  )
}

export { Badge }
