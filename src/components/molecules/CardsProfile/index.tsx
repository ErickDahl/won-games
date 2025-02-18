import { tv, VariantProps } from 'tailwind-variants'

import { CreditCard, CreditCardProps } from '@/components/atoms/CreditCard'
import { Heading } from '@/components/atoms/Heading'

const cardsProfileClasses = tv({
  slots: {
    base: 'flex flex-col gap-6',
    headingClass: 'm-0 text-lg font-semibold',
    cardsClass: 'flex flex-col items-start justify-center gap-4',
    cardClass: 'flex w-full justify-start bg-lightGray p-4'
  }
})

export type CardsProfileProps = VariantProps<typeof cardsProfileClasses> & {
  cards: CreditCardProps[]
}

const CardsProfile = ({ cards }: CardsProfileProps) => {
  const { base, headingClass, cardsClass, cardClass } = cardsProfileClasses()

  return (
    <div className={base()}>
      <Heading className={headingClass()} color="black" linePosition="bottom" lineBottomColor="primary">
        My cards
      </Heading>

      <ul className={cardsClass()}>
        {cards?.map((card) => {
          return (
            <li className={cardClass()} key={card.number}>
              <CreditCard {...card} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export { CardsProfile }
