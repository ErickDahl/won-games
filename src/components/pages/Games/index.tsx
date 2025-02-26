'use client'

import { ReactNode, Suspense, useState } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { v4 as uuidv4 } from 'uuid'

import { ArrowDownIcon, SearchIcon } from '@/assets/icons'
import { Button } from '@/components/atoms/Button'
import { Container } from '@/components/atoms/Container'
import { Empty } from '@/components/atoms/Empty'
import { TextField } from '@/components/atoms/TextField'
import { GameCard, GameCardProps } from '@/components/molecules/GameCard'
import { Filter, FilterGroup } from '@/components/organisms/Filter'
import { PageTemplate } from '@/components/templates/Page'
import useIsMobile from '@/hooks/useIsMobile'

const gamesPageClasses = tv({
  slots: {
    base: 'flex flex-col gap-4 sm:grid sm:grid-cols-[15rem_1fr]',
    containerClass: 'flex flex-col gap-4',
    gamesClass: 'grid grid-cols-[repeat(auto-fill,_minmax(15rem,_1fr))] items-center gap-8',
    buttonClass: 'mx-auto w-fit text-base font-semibold text-white'
  },
  variants: {
    noGames: {
      true: {
        gamesClass: 'flex items-center justify-center'
      }
    }
  }
})

export type GamesPageProps = VariantProps<typeof gamesPageClasses> & {
  games?: GameCardProps[]
  filters: FilterGroup[]
}

const useFilteredGames = (games: GameCardProps[], searchQuery: string) => {
  return games.filter((game) => game.title.toLowerCase().includes(searchQuery.toLowerCase()))
}

const SearchBar = ({
  onSearch,
  isMobile,
  FilterComponent
}: {
  searchQuery: string
  onSearch: (value: string) => void
  isMobile: boolean
  FilterComponent: ReactNode
}) => (
  <div className="flex gap-4">
    <TextField
      className="w-full rounded-sm"
      color="dark"
      placeholder="Search for a game..."
      icon={<SearchIcon />}
      iconPosition="right"
      name="search"
      onInput={(value) => onSearch(value.toString())}
    />
    {isMobile && FilterComponent}
  </div>
)

const GameList = ({ games, gamesClass }: { games: GameCardProps[]; gamesClass: string }) => (
  <div className={gamesClass}>
    {games.length === 0 ? (
      <Empty title="No games found" description="Try another search" />
    ) : (
      games.map((game) => <GameCard className="mx-auto" key={uuidv4()} {...game} />)
    )}
  </div>
)

const ShowMoreButton = ({ thereIsGames }: { thereIsGames: boolean }) => {
  const { buttonClass } = gamesPageClasses({ noGames: !thereIsGames })

  return (
    <Button
      className={buttonClass()}
      variation="noBackground"
      iconPosition="down"
      icon={<ArrowDownIcon size={25} color="rgb(var(--color-primary))" />}
      onClick={() => console.log('Load more games...')}
    >
      Show More
    </Button>
  )
}

const GamesPage = ({ filters, games = [] }: GamesPageProps) => {
  const [searchQuery, setSearchQuery] = useState('')
  const isMobile = useIsMobile(640)
  const filteredGames = useFilteredGames(games, searchQuery)
  const thereIsGames = filteredGames.length > 0
  const { base, gamesClass, containerClass } = gamesPageClasses({ noGames: !thereIsGames })
  const FilterComponent = () => (
    <Suspense>
      <Filter filters={filters} />
    </Suspense>
  )

  const handleSearchInput = (value: string) => setSearchQuery(value)

  return (
    <PageTemplate>
      <Container paddingMobile>
        <div className={base()}>
          {!isMobile && <FilterComponent />}
          <section className={containerClass()}>
            <SearchBar
              searchQuery={searchQuery}
              onSearch={handleSearchInput}
              isMobile={isMobile}
              FilterComponent={<FilterComponent />}
            />
            <GameList games={filteredGames} gamesClass={gamesClass()} />
            {thereIsGames && <ShowMoreButton thereIsGames={thereIsGames} />}
          </section>
        </div>
      </Container>
    </PageTemplate>
  )
}

export { GamesPage }
