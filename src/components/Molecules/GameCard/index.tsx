import { WishListIcon } from '@/assets/icons'
import Button from '@/components/Atoms/Button'
import Ribbon from '@/components/Atoms/Ribbon'
import Image, { StaticImageData } from 'next/image'
import { tv, VariantProps } from 'tailwind-variants'

const gameCardClasses = tv({
  slots: {
    base: 'relative flex flex-col',
    content: 'rounded-b-md rounded-bl-md bg-white p-3',
    topContent: 'flex h-6 items-center justify-between',
    gameClass: 'text-base font-semibold capitalize text-black',
    developerClass:
      'block w-full text-start text-xs font-medium capitalize text-gray',
    button: 'bg-transparent p-0 hover:bg-transparent',
    divPriceClass: 'flex items-center justify-end gap-5',
    priceClass: 'text-sm font-semibold text-gray line-through',
    listPriceClass:
      'flex h-6 items-center justify-center rounded-sm bg-secondary px-5 text-sm font-semibold text-white',
    ribbonClass: 'top-[3%] max-w-20 font-bold'
  }
})

type GameCardProps = VariantProps<typeof gameCardClasses> & {
  title: string
  developer: string
  image: StaticImageData
  listPrice: number
  price?: number
}

const GameCard = ({
  title,
  developer,
  image,
  listPrice,
  price
}: GameCardProps) => {
  const {
    base,
    content,
    button,
    topContent,
    gameClass,
    developerClass,
    divPriceClass,
    priceClass,
    listPriceClass,
    ribbonClass
  } = gameCardClasses()

  const discount = price && Math.round(100 - (listPrice / price) * 100)

  return (
    <div className={base()}>
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
          <Button
            className={button()}
            icon={<WishListIcon color="var(--color-primary)" size={24} />}
          />
        </div>
        <span className={developerClass()}>{developer}</span>
        <div className={divPriceClass()}>
          {!!price && <span className={priceClass()}>${price}</span>}
          <span className={listPriceClass()}>${listPrice}</span>
        </div>
      </div>
    </div>
  )
}

export default GameCard
