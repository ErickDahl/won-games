import { bannersMock } from '@/components/molecules/BannerCarousel/mock'
import { cardsMock } from '@/components/molecules/GameCardCarousel/mock'
import { highlightMock } from '@/components/molecules/Highlight/mock'
import { HomeTemplateProps } from '.'

const homeMockData: HomeTemplateProps = {
  banners: bannersMock,
  newGames: cardsMock,
  mostPopularHighlight: highlightMock,
  mostPopularGames: cardsMock,
  upcomingGames: cardsMock,
  upcomingHighligth: highlightMock,
  upcomingMoreGames: cardsMock,
  freeGames: cardsMock,
  freeHighligth: highlightMock
}

export { homeMockData }
