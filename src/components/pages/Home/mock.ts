import bannersMock from '@/components/Molecules/BannerCarousel/mock'
import cardsMock from '@/components/Molecules/GameCardCarousel/mock'
import highlightMock from '@/components/Molecules/Highlight/mock'
import { HomeTemplateProps } from '.'

const homeMockData: HomeTemplateProps = {
  banners: bannersMock,
  newGames: cardsMock,
  mostPopularHighlight: highlightMock,
  mostPopularGames: cardsMock,
  upcommingGames: cardsMock,
  upcommingHighligth: highlightMock,
  upcommingMoreGames: cardsMock,
  freeGames: cardsMock,
  freeHighligth: highlightMock
}

export default homeMockData
