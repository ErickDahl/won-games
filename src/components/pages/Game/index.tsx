import { StaticImageData } from 'next/image'
import { tv, VariantProps } from 'tailwind-variants'

import { BreakLine } from '@/components/atoms/BreakLine'
import { Container } from '@/components/atoms/Container'
import { HeadingProps } from '@/components/atoms/Heading'
import { GameCardProps } from '@/components/molecules/GameCard'
import { GameDescription, GameDescriptionProps } from '@/components/molecules/GameDescription'
import { GameInfo, GameInfoProps } from '@/components/molecules/GameInfo'
import { GameRequirements, GameRequirementsProps } from '@/components/molecules/GameRequirements'
import { HighlightProps } from '@/components/molecules/Highlight'
import { Gallery, GalleryProps } from '@/components/organisms/Gallery'
import { GameDetails, GameDetailsProps } from '@/components/organisms/GameDetails'
import { PageTemplate } from '@/components/templates/Page'
import { ShowCase } from '@/components/templates/ShowCase'

const gamePageClasses = tv({
  slots: {
    container: 'my-24',
    coverClass:
      'absolute left-0 top-0 -z-10 h-[28rem] w-full bg-cover bg-top bg-no-repeat after:absolute after:h-full after:w-full after:bg-black/60 lg:h-[40rem] lg:[clip-path:polygon(0_0,_100%_0,_100%_100%,_0_85%)]'
  }
})

export type GamePageProps = VariantProps<typeof gamePageClasses> & {
  gameCover: StaticImageData
  gameInfo: GameInfoProps
  galleryInfo: GalleryProps
  gameDescription: GameDescriptionProps
  gameDetails: GameDetailsProps
  gameRequirements: GameRequirementsProps
  headingMock: HeadingProps
  upcomingHighlight: HighlightProps
  upcomingMoreGames: GameCardProps[]
  recommendedGames: GameCardProps[]
}

const GamePage = ({
  gameCover,
  gameInfo,
  galleryInfo,
  gameDescription,
  gameDetails,
  gameRequirements,
  headingMock,
  upcomingHighlight,
  upcomingMoreGames,
  recommendedGames
}: GamePageProps) => {
  const { coverClass, container } = gamePageClasses()

  return (
    <PageTemplate>
      <div className={coverClass()} style={{ backgroundImage: `url(${gameCover.src})` }} />

      <Container className={container() + ' mt-80 lg:mt-96'} paddingMobile>
        <GameInfo {...gameInfo} />
      </Container>

      <Container className={container()} paddingMobile>
        <Gallery {...galleryInfo} />
      </Container>

      <Container className={container()} paddingMobile>
        <GameDescription {...gameDescription} />
      </Container>

      <Container className={container()} paddingMobile>
        <GameDetails {...gameDetails} />
      </Container>

      <Container className={container()} paddingMobile>
        <GameRequirements {...gameRequirements} />
      </Container>

      <Container className={container()} paddingMobile>
        <BreakLine />
      </Container>

      <ShowCase title="Upcoming" heading={headingMock} highlight={upcomingHighlight} cards={upcomingMoreGames} />

      <ShowCase className="mt-28" title="You may like these games" heading={headingMock} cards={recommendedGames} />
    </PageTemplate>
  )
}

export { GamePage }
