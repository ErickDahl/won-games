'use client'
import { ReactNode } from 'react'
import { FormattedDate } from 'react-intl'
import { tv } from 'tailwind-variants'
import { WindowsIcon, LixusIcon, AppleIcon } from '@/assets/icons'
import { v4 as uuidv4 } from 'uuid'

const gameDetailsClasses = tv({
  slots: {
    titleClass: 'text-sm font-normal text-gray',
    detailContainer: 'flex flex-col text-base font-medium text-white',
    detailsClass: 'grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6'
  }
})

export type GameDataProps = {
  company?: string
  date?: string
  platforms?: ('Windows' | 'Linux' | 'Mac')[]
  editor?: string
  rating?: string
  genres?: string[]
}

const GetItemDetail = ({
  company,
  date,
  platforms,
  editor,
  rating,
  genres
}: Omit<GameDataProps, 'title'>) => {
  const { titleClass, detailsClass, detailContainer } = gameDetailsClasses()

  return (
    <div className={detailsClass()}>
      {!!company && (
        <div className={detailContainer()}>
          <h3 className={titleClass()}>Company</h3>
          <p> {company}</p>
        </div>
      )}
      {!!date && (
        <div className={detailContainer()}>
          <h3 className={titleClass()}>Release date</h3>
          <FormattedDate
            value={new Date(date)}
            year="numeric"
            month="short"
            day="2-digit"
          />
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
      {!!editor && (
        <div className={detailContainer()}>
          <h3 className={titleClass()}>Editor</h3>
          <p>{editor}</p>
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

const platformIcons: Record<'Windows' | 'Linux' | 'Mac', ReactNode> = {
  Windows: <WindowsIcon aria-label="windows" title="windows" />,
  Linux: <LixusIcon aria-label="linux" title="linux" />,
  Mac: <AppleIcon aria-label="mac" title="mac" />
}

const GameDetail = ({ ...rest }: GameDataProps) => {
  return <GetItemDetail {...rest} />
}

export default GameDetail
