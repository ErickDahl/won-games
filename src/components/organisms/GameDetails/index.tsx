import Heading from '@/components/atoms/Heading'
import { tv, VariantProps } from 'tailwind-variants'
import GameDetail, { GameDataProps } from './components/GameDetail'
import { v4 as uuidv4 } from 'uuid'

const gameDetailsClasses = tv({
  slots: {
    base: 'flex flex-col gap-5',
    headingClass: 'm-0 hidden lg:block'
  }
})

export type GameDetailsProps = VariantProps<typeof gameDetailsClasses> &
  GameDataProps

const GameDetails = (props: GameDetailsProps) => {
  const { base, headingClass } = gameDetailsClasses()

  return (
    <div className={base()}>
      <Heading className={headingClass()} color="white" lineColor="secondary">
        Game details
      </Heading>

      <GameDetail key={uuidv4()} {...props} />
    </div>
  )
}

export default GameDetails
