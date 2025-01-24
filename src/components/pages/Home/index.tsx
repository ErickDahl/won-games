import Container from '@/components/Atoms/Container'
import { BannerProps } from '@/components/Molecules/Banner'
import { GameCardProps } from '@/components/Molecules/GameCard'
import { HighlightProps } from '@/components/Molecules/Highlight'
import BannerCarousel from '@/components/Molecules/BannerCarousel'
import { tv, VariantProps } from 'tailwind-variants'
import PageTemplate from '@/components/Templates/PageTemplate'
import ShowCase from '@/components/Templates/ShowCase'
import {
  headingBlackMock,
  headingWhiteMock
} from '@/components/Atoms/Heading/mock'

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
  upcommingGames: GameCardProps[]
  upcommingHighligth: HighlightProps
  upcommingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighligth: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingMoreGames,
  upcommingHighligth,
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
        highlight={upcommingHighligth}
        cards={upcommingGames}
      />

      <ShowCase highlight={upcommingHighligth} cards={upcommingMoreGames} />

      <ShowCase
        title="Free Games"
        heading={headingWhiteMock}
        highlight={freeHighligth}
        cards={freeGames}
      />
    </PageTemplate>
  )
}

export default Home
