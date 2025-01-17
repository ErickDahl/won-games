import Container from '@/components/Atoms/Container'
import Heading from '@/components/Atoms/Heading'
import Footer from '@/components/Molecules/Footer'
import Menu from '@/components/Organisms/Menu'
import { BannerProps } from '@/components/Molecules/Banner'
import { GameCardProps } from '@/components/Molecules/GameCard'
import Highlight, { HighlightProps } from '@/components/Molecules/Highlight'
import BannerCarousel from '@/components/Molecules/BannerCarousel'
import GameCardCarousel from '@/components/Molecules/GameCardCarousel'
import { tv, VariantProps } from 'tailwind-variants'

const homeClasses = tv({
  slots: {
    base: 'mx-auto mb-8 flex flex-col gap-8',
    headingClass: ''
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
  upcommingHighligth,
  upcommingMoreGames,
  freeGames,
  freeHighligth
}: HomeTemplateProps) => {
  const { base, headingClass } = homeClasses()

  return (
    <section>
      <Container className="p-0">
        <header className={base()}>
          <Menu className="mt-4 p-2" />
        </header>
        <BannerCarousel className="z-10 lg:top-14" banners={banners} />
      </Container>

      <div className="bg-lightBg pb-20 pt-16 [clip-path:polygon(0_0,_100%_15%,_100%_100%,_0_85%)]">
        <Container className={base()}>
          <Heading
            className={headingClass()}
            color="black"
            linePosition="left"
            lineColor="secondary"
          >
            News
          </Heading>
          <GameCardCarousel cards={newGames} />
        </Container>
      </div>

      <Container className={base()}>
        <Heading
          className={headingClass()}
          linePosition="left"
          lineColor="secondary"
        >
          Most Popular
        </Heading>
        <Highlight {...mostPopularHighlight} />
        <GameCardCarousel cards={mostPopularGames} />
      </Container>

      <Container className={base()}>
        <Heading
          className={headingClass()}
          linePosition="left"
          lineColor="secondary"
        >
          Upcoming
        </Heading>
        <GameCardCarousel cards={upcommingGames} />
        <Highlight {...upcommingHighligth} />
        <GameCardCarousel cards={upcommingMoreGames} />
      </Container>

      <Container className={base()}>
        <Heading
          className={headingClass()}
          linePosition="left"
          lineColor="secondary"
        >
          Free Games
        </Heading>
        <Highlight {...freeHighligth} />
        <GameCardCarousel cards={freeGames} />
      </Container>

      <div className="bg-lightBg m-0 max-w-full pb-4 pt-16 [clip-path:polygon(0_5%,_100%_0%,_100%_100%,_0_100%)] lg:[clip-path:polygon(0_15%,_100%_0%,_100%_100%,_0_100%)]">
        <Container className={base() + ' mb-0'}>
          <Footer />
        </Container>
      </div>
    </section>
  )
}

export default Home
