import { tv, VariantProps } from 'tailwind-variants'
import { v4 as uuidv4 } from 'uuid'

import { Empty } from '@/components/atoms/Empty'
import { Heading } from '@/components/atoms/Heading'
import { GameItem, GameItemProps } from '../GameItem'

const ordersListClasses = tv({
  slots: {
    base: 'flex flex-col gap-6',
    headingClass: 'm-0 text-lg font-semibold',
    itemsContainerClass: 'flex flex-col gap-4'
  }
})

export type OrdersListProps = VariantProps<typeof ordersListClasses> & {
  items?: GameItemProps[]
}

const OrdersList = ({ items = [] }: OrdersListProps) => {
  const { base, headingClass, itemsContainerClass } = ordersListClasses()

  return (
    <div className={base()}>
      <Heading className={headingClass()} color="black" linePosition="bottom" lineBottomColor="primary">
        My orders
      </Heading>

      {items.length > 0 ? (
        <ul className={itemsContainerClass()}>
          {items?.map((item, index) => {
            return (
              <li key={uuidv4()}>
                <GameItem className={index === items.length - 1 ? 'border-none' : ''} {...item} />
              </li>
            )
          })}
        </ul>
      ) : (
        <Empty
          title="You have no orders yet"
          description="Go back to the store and explore great games and offers"
          hasLink
          textBlack
        />
      )}
    </div>
  )
}

export { OrdersList }
