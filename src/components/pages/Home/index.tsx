import { tv, VariantProps } from 'tailwind-variants'

import { Container } from '@/components/atoms/Container'
import {
  headingBlackMock,
  headingWhiteMock
} from '@/components/atoms/Heading/mock'
import { BannerProps } from '@/components/molecules/Banner'
import { BannerCarousel } from '@/components/molecules/BannerCarousel'
import { GameCardProps } from '@/components/molecules/GameCard'
import { HighlightProps } from '@/components/molecules/Highlight'
import { PageTemplate } from '@/components/templates/Page'
import { ShowCase } from '@/components/templates/ShowCase'

const homeClasses = tv({
  slots: {
    base: '',
    BannerCarouselClass: 'z-10 lg:top-14',
    clipPathTop:
      'bg-lightBg pb-20 pt-16 [clip-path:polygon(0_0,_100%_15%,_100%_100%,_0_85%)]'
  }
})

export type HomeTemplateProps = VariantProps<typeof homeClasses> & {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcomingHighligth: HighlightProps
  upcomingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighligth: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGames,
  upcomingMoreGames,
  upcomingHighligth,
  freeGames,
  freeHighligth
}: HomeTemplateProps) => {
  const { base, BannerCarouselClass, clipPathTop } = homeClasses()

  return (
    <PageTemplate className={base()}>
      <Container>
        <BannerCarousel className={BannerCarouselClass()} banners={banners} />
      </Container>

      <div className={clipPathTop()}>
        <ShowCase title="New" heading={headingBlackMock} cards={newGames} />
      </div>

      <ShowCase
        title="Most Popular"
        heading={headingWhiteMock}
        highlight={mostPopularHighlight}
        cards={mostPopularGames}
      />

      <ShowCase
        title="Upcoming"
        heading={headingWhiteMock}
        highlight={upcomingHighligth}
        cards={upcomingGames}
      />

      <ShowCase highlight={upcomingHighligth} cards={upcomingMoreGames} />

      <ShowCase
        title="Free Games"
        heading={headingWhiteMock}
        highlight={freeHighligth}
        cards={freeGames}
      />
    </PageTemplate>
  )
}

export { Home }
