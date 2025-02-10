import { tv, VariantProps } from 'tailwind-variants'
import { v4 as uuidv4 } from 'uuid'

import { Heading } from '@/components/atoms/Heading'
import { GameDataProps, GameDetail } from './components/GameDetail'

const gameDetailsClasses = tv({
  slots: {
    base: 'flex flex-col gap-5 px-3',
    headingClass: 'm-0'
  }
})

export type GameDetailsProps = VariantProps<typeof gameDetailsClasses> & GameDataProps

const GameDetails = (props: GameDetailsProps) => {
  const { base, headingClass } = gameDetailsClasses()

  return (
    <div className={base()}>
      <Heading className={headingClass()} color="white">
        Game details
      </Heading>

      <GameDetail key={uuidv4()} {...props} />
    </div>
  )
}

export { GameDetails }
