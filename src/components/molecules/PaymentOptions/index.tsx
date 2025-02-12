'use client'

import { HTMLAttributes, useState } from 'react'
import Image from 'next/image'
import { tv, VariantProps } from 'tailwind-variants'

import { PlusIcon, ShoppingCart } from '@/assets/icons'
import { Button } from '@/components/atoms/Button'
import { Heading } from '@/components/atoms/Heading'
import { StoreLink } from '@/components/atoms/Link'
import { Radio } from '@/components/atoms/Radio'

const paymentOptionsClasses = tv({
  slots: {
    base: 'bg-white',
    contentWrapper: 'mb-8 flex flex-col gap-6 p-4',
    cardsContainer: 'flex flex-col gap-2',
    cardContainerClasses: 'flex h-12 cursor-pointer items-center justify-between bg-lightGray px-4',
    cardInfoClasses: 'flex items-center justify-center gap-3',
    addNewCartClass: 'justify-start rounded-none bg-lightGray px-4 text-black hover:bg-gray',
    footerClasses: 'flex h-20 items-center justify-between gap-2 bg-lightGray px-4',
    shoppingTextClass: 'text-sm font-medium text-primary'
  }
})

type PaymentCard = {
  flag: string
  number: string
  img: string
}

export type PaymentOptionsProps = VariantProps<typeof paymentOptionsClasses> &
  HTMLAttributes<HTMLDivElement> & {
    cards?: PaymentCard[]
    handlePayment: VoidFunction
  }

const PaymentOptions = ({ cards, handlePayment, className }: PaymentOptionsProps) => {
  const [checked, setChecked] = useState(false)
  const {
    base,
    footerClasses,
    cardContainerClasses,
    cardInfoClasses,
    cardsContainer,
    addNewCartClass,
    contentWrapper,
    shoppingTextClass
  } = paymentOptionsClasses()

  return (
    <aside className={base({ className })}>
      <div className={contentWrapper()}>
        <Heading className="m-0 text-lg font-semibold text-black" linePosition="bottom" lineBottomColor="primary">
          Payment
        </Heading>

        <div className={cardsContainer()}>
          {cards?.map((card) => {
            return (
              <label htmlFor={card.number} className={cardContainerClasses()} key={card.number}>
                <div className={cardInfoClasses()}>
                  <Image src={card.img} alt={card.flag} width={30} height={20} />
                  {card.number}
                </div>
                <Radio name="credit-card" id={card.number} value={card.number} onCheck={() => setChecked(true)} />
              </label>
            )
          })}
          <Button className={addNewCartClass()} icon={<PlusIcon />}>
            Add a new credit card
          </Button>
        </div>
      </div>

      <div className={footerClasses()}>
        <StoreLink className={shoppingTextClass()} href={'/'} hoverEffect={false}>
          Continue shopping
        </StoreLink>

        <Button icon={<ShoppingCart />} onClick={handlePayment} disabled={!checked}>
          Buy now
        </Button>
      </div>
    </aside>
  )
}

export { PaymentOptions }
