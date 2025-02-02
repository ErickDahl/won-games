'use client'
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
import { GameCardProps, GameCard } from '../GameCard'
import useIsMobile from '@/hooks/useIsMobile'
import { HTMLAttributes } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const gameCardCarouselClasses = tv({
  slots: {
    base: 'mx-auto max-w-[90%]',
    carouselItemClass: 'flex-[0_0_70%] lg:flex-[0_0_33%]'
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
        {cards?.map((card) => (
          <CarouselItem className={carouselItemClass()} key={uuidv4()}>
            <GameCard className="m-auto" {...card} />
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
