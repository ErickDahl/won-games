import { tv, VariantProps } from 'tailwind-variants'

import { CreditCardProps } from '@/components/atoms/CreditCard'
import { CardsProfile } from '@/components/molecules/CardsProfile'
import { PageTemplate } from '@/components/templates/Page'
import { ProfileTemplate } from '@/components/templates/Profile'

const myCardsClasses = tv({
  slots: {
    base: ''
  }
})

export type MyCardsProps = VariantProps<typeof myCardsClasses> & {
  cards: CreditCardProps[]
}

const MyCards = ({ cards }: MyCardsProps) => {
  const { base } = myCardsClasses()

  return (
    <PageTemplate>
      <ProfileTemplate className={base()}>
        <CardsProfile cards={cards} />
      </ProfileTemplate>
    </PageTemplate>
  )
}

export { MyCards }
