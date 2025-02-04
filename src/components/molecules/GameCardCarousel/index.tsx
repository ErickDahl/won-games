'use client'

import { HTMLAttributes } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { v4 as uuidv4 } from 'uuid'

import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselProps
} from '@/components/ui/carousel'
import useIsMobile from '@/hooks/useIsMobile'
import { GameCard, GameCardProps } from '../GameCard'

const gameCardCarouselClasses = tv({
  slots: {
    base: 'mx-auto max-w-[90%]',
    carouselItemClass:
      'mx-3 flex w-full flex-[0_0_70%] items-center justify-center lg:flex-[0_0_33%]'
  }
})

type GameCardCarouselProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof gameCardCarouselClasses> &
  CarouselProps & {
    cards: GameCardProps[]
  }

const GameCardCarousel = ({ cards, ...rest }: GameCardCarouselProps) => {
  const isMobile = useIsMobile()
  const { base, carouselItemClass } = gameCardCarouselClasses()

  return (
    <Carousel className={base()} opts={{ align: 'start' }} {...rest}>
      <CarouselContent>
        {cards?.map((card, index) => (
          <CarouselItem
            className={carouselItemClass()}
            index={index}
            key={uuidv4()}
          >
            <GameCard {...card} />
          </CarouselItem>
        ))}
      </CarouselContent>
      {!isMobile ? (
        <>
          <CarouselNext />
          <CarouselPrevious />
        </>
      ) : (
        <CarouselDots />
      )}
    </Carousel>
  )
}

export { GameCardCarousel }
