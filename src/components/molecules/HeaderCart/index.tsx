import { tv, VariantProps } from 'tailwind-variants'

import { CartIcon } from '@/assets/icons'
import { Badge } from '@/components/atoms/Badge'

const headerCartClasses = tv({
  slots: {
    base: 'relative w-fit text-white',
    badgeClass: 'absolute -right-2 -top-2'
  }
})

type HeaderCartProps = VariantProps<typeof headerCartClasses> & {
  count?: number
}

const HeaderCart = ({ count = 0, ...rest }: HeaderCartProps) => {
  const { base, badgeClass } = headerCartClasses()

  return (
    <div className={base()} {...rest}>
      {!!count && (
        <Badge className={badgeClass()} aria-label="Cart Items">
          {count}
        </Badge>
      )}
      <CartIcon aria-label="Shopping Cart" size={24} />
    </div>
  )
}

export { HeaderCart }
