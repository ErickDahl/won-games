'use client'
import { v4 as uuidv4 } from 'uuid'
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import GameCard, { GameCardProps } from '../GameCard'
import useIsMobile from '@/hooks/useIsMobile'

type GameCardSliderProps = {
  cards?: GameCardProps[]
}

const GameCardSlider = ({ cards, ...rest }: GameCardSliderProps) => {
  const isMobile = useIsMobile()

  return (
    <Carousel opts={{ align: 'start' }} {...rest}>
      <CarouselContent>
        {cards?.map((card) => (
          <CarouselItem
            className={isMobile ? 'flex-[0_0_80%]' : 'flex-[0_0_40%]'}
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

export default GameCardSlider
