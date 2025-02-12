import gamePageBackground from '@/assets/backgroundGamePage.png'
import { headingWhiteMock } from '@/components/atoms/Heading/mock'
import { cardsMock } from '@/components/molecules/GameCardCarousel/mock'
import { gameDescriptionMock } from '@/components/molecules/GameDescription/mock'
import { gameInfoMock } from '@/components/molecules/GameInfo/mock'
import { gameRequirementsMock } from '@/components/molecules/GameRequirements/mock'
import { highlightMock } from '@/components/molecules/Highlight/mock'
import { galleryMock } from '@/components/organisms/Gallery/mock'
import { gameDetailsMock } from '@/components/organisms/GameDetails/mock'
import { GamePageProps } from '.'

const gamePageMock: GamePageProps = {
  gameCover: gamePageBackground,
  gameInfo: gameInfoMock,
  galleryInfo: galleryMock,
  gameDescription: gameDescriptionMock,
  gameDetails: gameDetailsMock,
  gameRequirements: gameRequirementsMock,
  headingMock: headingWhiteMock,
  upcomingHighlight: highlightMock,
  upcomingMoreGames: cardsMock,
  recommendedGames: cardsMock
}

export { gamePageMock }
