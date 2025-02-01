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
import GameCard, { GameCardProps } from '../GameCard'
import useIsMobile from '@/hooks/useIsMobile'
import { HTMLAttributes } from 'react'

type GameCardCarouselProps = HTMLAttributes<HTMLDivElement> &
  CarouselProps & {
    cards: GameCardProps[]
  }

const GameCardCarousel = ({ cards, ...rest }: GameCardCarouselProps) => {
  const isMobile = useIsMobile()

  return (
    <Carousel
      className="mx-auto max-w-[90%]"
      opts={{ align: 'start' }}
      {...rest}
    >
      <CarouselContent>
        {cards?.map((card) => (
          <CarouselItem
            className={isMobile ? 'flex-[0_0_70%]' : 'flex-[0_0_33%]' + ' px-5'}
            key={uuidv4()}
          >
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

export default GameCardCarousel
