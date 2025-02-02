'use client'
import { AddToCartIcon, WishListIcon } from '@/assets/icons'
import { Button } from '@/components/atoms/Button'
import { Heading } from '@/components/atoms/Heading'
import { Ribbon } from '@/components/atoms/Ribbon'
import { useCurrency } from '@/hooks/useCurrency'
import { FormattedNumber } from 'react-intl'
import { tv, VariantProps } from 'tailwind-variants'

const gameInfoClasses = tv({
  slots: {
    base: 'relative flex w-full flex-col gap-8 bg-white p-5',
    titleContainer: 'flex w-full justify-between',
    headingClass: 'm-0 max-w-[90%] break-words',
    descriptionClass: 'max-w-[80%] text-sm font-normal text-gray',
    ribbonClass: 'relative top-0 w-full max-w-24 rounded-sm lg:right-0',
    buttonsDiv: 'flex flex-col gap-2 lg:flex-row-reverse'
  }
})

export type GameInfoProps = VariantProps<typeof gameInfoClasses> & {
  title: string
  description: string
  price: number
}

const GameInfo = ({ title, description, price }: GameInfoProps) => {
  const {
    base,
    buttonsDiv,
    headingClass,
    descriptionClass,
    ribbonClass,
    titleContainer
  } = gameInfoClasses()

  return (
    <div className={base()}>
      <div className={titleContainer()}>
        <Heading
          className={headingClass()}
          color="black"
          lineBottomColor="primary"
          linePosition="bottom"
        >
          {title}
        </Heading>
        <Ribbon
          className={ribbonClass()}
          backGroundColor="secondary"
          decoration={false}
        >
          <FormattedNumber
            value={price}
            style="currency"
            currency={useCurrency()}
          />
        </Ribbon>
      </div>

      <p className={descriptionClass()}>{description}</p>

      <div className={buttonsDiv()}>
        <Button icon={<AddToCartIcon />}>Add to Cart</Button>
        <Button
          className="text-primary"
          variation="noBackground"
          icon={<WishListIcon />}
        >
          Wishlist
        </Button>
      </div>
    </div>
  )
}

export { GameInfo }
