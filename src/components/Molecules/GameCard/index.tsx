import {
  AddCartIcon,
  InCartIcon,
  WishListFullIcon,
  WishListIcon
} from '@/assets/icons'
import Button from '@/components/Atoms/Button'
import Ribbon from '@/components/Atoms/Ribbon'
import Image, { StaticImageData } from 'next/image'
import { tv, VariantProps } from 'tailwind-variants'

const gameCardClasses = tv({
  slots: {
    base: 'relative flex max-w-72 flex-col',
    content: 'rounded-b-md rounded-bl-md bg-white p-2',
    topContent: 'flex h-6 items-center justify-between gap-1',
    gameClass:
      'w-[calc(100%-1.5rem)] break-words text-base font-semibold capitalize text-black',
    developerClass:
      'block w-full text-start text-xs font-medium capitalize text-gray',
    button: 'bg-transparent p-0 hover:bg-transparent',
    divPriceClass: 'flex items-center justify-end',
    priceClass: 'text-sm font-semibold text-gray line-through',
    listPriceClass:
      'ml-4 mr-1 flex h-6 items-center justify-center rounded-sm bg-secondary px-5 text-sm font-semibold text-white',
    ribbonClass: 'top-[3%] max-w-20 font-bold',
    buyButton: 'h-6 w-7 rounded-sm p-0'
  }
})

type GameCardProps = VariantProps<typeof gameCardClasses> & {
  title: string
  developer: string
  image: StaticImageData
  listPrice: number
  price?: number
  isInCart?: boolean
  isInWishlist?: boolean
}

const RenderBuyButton = ({ isInCart }: Pick<GameCardProps, 'isInCart'>) => {
  const { buyButton } = gameCardClasses()
  const variation = isInCart ? 'secondary' : 'primary'
  const iconsProps = {
    size: 14,
    color: 'var(--color-white)'
  }

  const icon = isInCart ? (
    <InCartIcon {...iconsProps} aria-label="In Cart" />
  ) : (
    <AddCartIcon {...iconsProps} aria-label="Add to Cart" />
  )

  return (
    <Button
      className={buyButton()}
      size="xsmall"
      variation={variation}
      icon={icon}
    />
  )
}

const RenderWishListButton = ({
  isInWishlist
}: Pick<GameCardProps, 'isInWishlist'>) => {
  const { button } = gameCardClasses()
  const iconColor = 'var(--color-primary)'

  const iconProps = {
    color: iconColor,
    size: 24
  }

  const icon = isInWishlist ? (
    <WishListFullIcon {...iconProps} aria-label="In Wishlist" />
  ) : (
    <WishListIcon {...iconProps} aria-label="Add to wishlist" />
  )

  return <Button className={button()} icon={icon} />
}

const GameCard = ({
  title,
  developer,
  image,
  listPrice,
  price,
  isInCart = false,
  isInWishlist = false
}: GameCardProps) => {
  const {
    base,
    content,
    topContent,
    gameClass,
    developerClass,
    divPriceClass,
    priceClass,
    listPriceClass,
    ribbonClass
  } = gameCardClasses()

  const discount = !!price && Math.round(100 - (listPrice / price) * 100)

  return (
    <article className={base()}>
      {!!price && (
        <Ribbon
          backGroundColor="tertiary"
          className={ribbonClass()}
          size="small"
        >
          {discount}% OFF
        </Ribbon>
      )}
      <Image
        src={image.src}
        width={image.width}
        height={image.height}
        alt={title}
      />
      <div className={content()}>
        <div className={topContent()}>
          <h3 className={gameClass()}>{title}</h3>
          <RenderWishListButton isInWishlist={isInWishlist} />
        </div>
        <h4 className={developerClass()}>{developer}</h4>
        <div className={divPriceClass()}>
          {!!price && <span className={priceClass()}>${price}</span>}
          <span className={listPriceClass()}>${listPrice}</span>
          <RenderBuyButton isInCart={isInCart} />
        </div>
      </div>
    </article>
  )
}

export default GameCard
