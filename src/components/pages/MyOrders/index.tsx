import { tv, VariantProps } from 'tailwind-variants'

import { GameItemProps } from '@/components/molecules/GameItem'
import { OrdersList } from '@/components/molecules/OrdersList'
import { PageTemplate } from '@/components/templates/Page'
import { ProfileTemplate } from '@/components/templates/Profile'

const myOrdersClasses = tv({
  slots: {
    base: ''
  }
})

export type MyOrdersProps = VariantProps<typeof myOrdersClasses> & {
  items?: GameItemProps[]
}

const MyOrders = (items: MyOrdersProps) => {
  const { base } = myOrdersClasses()

  return (
    <PageTemplate>
      <ProfileTemplate className={base()}>
        <OrdersList {...items} />
      </ProfileTemplate>
    </PageTemplate>
  )
}

export { MyOrders }
