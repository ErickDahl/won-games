import { cardsMock } from '@/components/molecules/GameCardCarousel/mock'
import { filterMock } from '@/components/organisms/Filter/mock'
import { GamesPageProps } from '.'

const gamesPageMock: GamesPageProps = {
  filters: filterMock.filters,
  games: cardsMock
}

export { gamesPageMock }
