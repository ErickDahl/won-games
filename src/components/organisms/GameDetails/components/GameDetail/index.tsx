'use client'

import { ReactNode } from 'react'
import { FormattedDate } from 'react-intl'
import { tv } from 'tailwind-variants'
import { v4 as uuidv4 } from 'uuid'

import { AppleIcon, LinusIcon, WindowsIcon } from '@/assets/icons'

const gameDetailsClasses = tv({
  slots: {
    titleClass: 'text-sm font-normal text-gray',
    detailContainer: 'flex flex-col text-base font-medium text-white',
    detailsClass: 'grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6'
  }
})

export type GameDataProps = {
  developer?: string
  date?: string
  platforms?: ('Windows' | 'Linux' | 'Mac')[]
  publisher?: string
  rating?: string
  genres?: string[]
  timeZone?: string
}

const platformIcons: Record<'Windows' | 'Linux' | 'Mac', ReactNode> = {
  Windows: <WindowsIcon aria-label="windows" title="windows" />,
  Linux: <LinusIcon aria-label="linux" title="linux" />,
  Mac: <AppleIcon aria-label="mac" title="mac" />
}

const GetItemDetail = ({
  developer,
  date,
  platforms,
  publisher,
  rating,
  genres,
  timeZone
}: Omit<GameDataProps, 'title'>) => {
  const { titleClass, detailsClass, detailContainer } = gameDetailsClasses()

  return (
    <div className={detailsClass()}>
      {!!developer && (
        <div className={detailContainer()}>
          <h3 className={titleClass()}>Developer</h3>
          <p> {developer}</p>
        </div>
      )}
      {!!date && (
        <div className={detailContainer()}>
          <h3 className={titleClass()}>Release date</h3>
          <FormattedDate value={date} year="numeric" month="short" day="2-digit" timeZone={timeZone} />
        </div>
      )}
      {!!platforms && (
        <div className={`${detailContainer()}`}>
          <h3 className={titleClass()}>Platforms</h3>
          <ul className="flex list-none gap-2">
            {platforms.map((plat) => (
              <li key={plat}>{platformIcons[plat]}</li>
            ))}
          </ul>
        </div>
      )}
      {!!publisher && (
        <div className={detailContainer()}>
          <h3 className={titleClass()}>Publisher</h3>
          <p>{publisher}</p>
        </div>
      )}
      {!!rating && (
        <div className={detailContainer()}>
          <h3 className={titleClass()}>Rating</h3>
          <p>{rating}</p>
        </div>
      )}
      {!!genres && (
        <div className={detailContainer()}>
          <h3 className={titleClass()}>Genre</h3>
          <ul className={`inline-flex list-none gap-1`}>
            {genres.map((genre, index) => (
              <li key={uuidv4()}>
                {genre}
                {index < genres.length - 1 && <span className="mx-1">/</span>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

const GameDetail = ({ ...rest }: GameDataProps) => {
  return <GetItemDetail {...rest} />
}

export { GameDetail }
