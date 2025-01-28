import { AddToCartIcon, WishListIcon } from '@/assets/icons'
import Button from '@/components/atoms/Button'
import Heading from '@/components/atoms/Heading'
import Ribbon from '@/components/atoms/Ribbon'
import { useCurrency } from '@/hooks/useCurrency'
import { FormattedNumber } from 'react-intl'
import { tv, VariantProps } from 'tailwind-variants'

const gameInfoClasses = tv({
  slots: {
    base: ''
  }
})

export type GameInfoProps = VariantProps<typeof gameInfoClasses> & {
  title: string
  description: string
  price: number
}

const GameInfo = ({ title, description, price }: GameInfoProps) => {
  const { base } = gameInfoClasses()

  return (
    <div className={base()}>
      <Heading color="black" lineBottomColor="primary" linePosition="bottom">
        {title}
      </Heading>

      <p>{description}</p>

      <Ribbon backGroundColor="secondary">
        <FormattedNumber
          value={price}
          style="currency"
          currency={useCurrency()}
        />
      </Ribbon>

      <div>
        <Button icon={<AddToCartIcon />}>Add to Cart</Button>
        <Button icon={<WishListIcon />}>Wishlist</Button>
      </div>
    </div>
  )
}

export default GameInfo
