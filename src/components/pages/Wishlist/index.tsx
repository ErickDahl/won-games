'use client'

import { tv, VariantProps } from 'tailwind-variants'
import { v4 as uuidv4 } from 'uuid'

import { BreakLine } from '@/components/atoms/BreakLine'
import { Container } from '@/components/atoms/Container'
import { Empty, EmptyProps } from '@/components/atoms/Empty'
import { Heading, HeadingProps } from '@/components/atoms/Heading'
import { GameCard, GameCardProps } from '@/components/molecules/GameCard'
import { HighlightProps } from '@/components/molecules/Highlight'
import { PageTemplate } from '@/components/templates/Page'
import { ShowCase } from '@/components/templates/ShowCase'

const wishlistClasses = tv({
  slots: {
    base: '',
    gamesContainer: 'grid grid-cols-[repeat(auto-fill,_minmax(15rem,_1fr))] items-center gap-8',
    containerClass: 'mb-40 px-3'
  }
})

export type WishlistProps = VariantProps<typeof wishlistClasses> & {
  games?: GameCardProps[]
  heading: HeadingProps
  recommendedHighligth: HighlightProps
  recommendedGames: GameCardProps[]
  emptyInfo: EmptyProps
}

const Wishlist = ({ games = [], heading, recommendedGames, recommendedHighligth, emptyInfo }: WishlistProps) => {
  const { base, gamesContainer, containerClass } = wishlistClasses()

  return (
    <PageTemplate className={base()}>
      <Container>
        <Heading linePosition="left" lineColor="secondary">
          Wishlist
        </Heading>
      </Container>

      <Container className={containerClass()}>
        {games?.length >= 1 ? (
          <div className={gamesContainer()}>
            {games?.map((game) => <GameCard className="mx-auto" key={uuidv4()} {...game} />)}
          </div>
        ) : (
          <Empty {...emptyInfo} />
        )}
      </Container>

      <Container>
        <BreakLine />
      </Container>

      <ShowCase
        title="You may like these games"
        heading={heading}
        highlight={recommendedHighligth}
        cards={recommendedGames}
      />
    </PageTemplate>
  )
}

export { Wishlist }
