'use client'

import { FormattedNumber } from 'react-intl'
import { tv, VariantProps } from 'tailwind-variants'
import { v4 as uuidv4 } from 'uuid'

import { useCurrency } from '@/hooks/useCurrency'
import { GameItem, GameItemProps } from '../GameItem'

const cartListClasses = tv({
  slots: {
    base: 'bg-white',
    totalTextClass: 'text-xl font-semibold text-black',
    priceTextClass: 'text-xl font-semibold text-primary',
    totalContainerClass: 'flex h-20 items-center justify-between bg-lightGray p-4'
  }
})

export type CartListProps = VariantProps<typeof cartListClasses> & {
  items: GameItemProps[]
  total: number
}

const CartList = ({ items, total }: CartListProps) => {
  const { base, totalTextClass, totalContainerClass, priceTextClass } = cartListClasses()
  const currency = useCurrency()

  return (
    <section className={base()}>
      {items.map((item) => (
        <GameItem className="justify-start" key={uuidv4()} {...item} />
      ))}

      <div className={totalContainerClass()}>
        <p className={totalTextClass()}>Total:</p>
        <p className={priceTextClass()}>
          <FormattedNumber value={total} style="currency" currency={currency} />
        </p>
      </div>
    </section>
  )
}

export { CartList }
