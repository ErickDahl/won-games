import { HTMLAttributes } from 'react'
import Image, { StaticImageData } from 'next/image'
import { FormattedNumber } from 'react-intl'
import { tv, VariantProps } from 'tailwind-variants'

import {
  AddCartIcon,
  InCartIcon,
  WishListFullIcon,
  WishListIcon
} from '@/assets/icons'
import { Button } from '@/components/atoms/Button'
import { Ribbon } from '@/components/atoms/Ribbon'
import { useCurrency } from '@/hooks/useCurrency'
import useIsMobile from '@/hooks/useIsMobile'

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
    divPriceClass: 'mb-2 flex items-center justify-end',
    priceClass: 'text-sm font-semibold text-gray line-through',
    listPriceClass:
      'ml-3 flex h-6 items-center justify-center rounded-sm bg-secondary px-3 text-sm font-semibold text-white',
    ribbonClass: 'top-[3%] max-w-20 font-bold',
    buyButton: 'flex h-6 rounded-sm p-0'
  }
})

export type GameCardProps = VariantProps<typeof gameCardClasses> &
  HTMLAttributes<HTMLElement> & {
    title: string
    developer: string
    image: StaticImageData
    listPrice: number
    price?: number
    isInCart?: boolean
    isInWishlist?: boolean
    disableRibbon?: boolean
  }

type RenderBuyButtonProps = Pick<GameCardProps, 'isInCart'> & {
  isMobile: boolean
}

const RenderBuyButton = ({ isInCart, isMobile }: RenderBuyButtonProps) => {
  const { buyButton } = gameCardClasses()
  const variation = isInCart ? 'secondary' : 'primary'
  const iconsProps = {
    size: 14,
    color: 'rgb(var(--color-white))'
  }

  const icon = isInCart ? (
    <InCartIcon {...iconsProps} aria-label="In Cart" />
  ) : (
    <AddCartIcon {...iconsProps} aria-label="Add to Cart" />
  )

  return (
    <Button
      className={buyButton()}
      style={
        isMobile
          ? { marginLeft: 'auto', width: '2.5rem' }
          : { marginLeft: '0.3rem', width: '1.8rem' }
      }
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
  const iconColor = 'rgb(var(--color-primary))'

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
  isInWishlist = false,
  disableRibbon = false,
  className
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

  const isMobile = useIsMobile()
  const currency = useCurrency()
  const discount = !!price && Math.round(100 - (listPrice / price) * 100)

  return (
    <article className={base({ className })}>
      {!!price && !disableRibbon && (
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
          {!!price && (
            <span className={priceClass()}>
              {
                <FormattedNumber
                  value={price}
                  style="currency"
                  currency={currency}
                />
              }
            </span>
          )}
          <span className={listPriceClass()}>
            {
              <FormattedNumber
                value={listPrice}
                style="currency"
                currency={currency}
              />
            }
          </span>
          {!isMobile && (
            <RenderBuyButton isMobile={isMobile} isInCart={isInCart} />
          )}
        </div>
        {isMobile && (
          <RenderBuyButton isMobile={isMobile} isInCart={isInCart} />
        )}
      </div>
    </article>
  )
}

export { GameCard }
