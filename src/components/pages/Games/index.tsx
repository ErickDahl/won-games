'use client'

import { tv, VariantProps } from 'tailwind-variants'
import { v4 as uuidv4 } from 'uuid'

import { SearchIcon } from '@/assets/icons'
import { Container } from '@/components/atoms/Container'
import { TextField } from '@/components/atoms/TextField'
import { GameCard, GameCardProps } from '@/components/molecules/GameCard'
import { Filter, FilterGroup } from '@/components/organisms/Filter'
import { PageTemplate } from '@/components/templates/Page'
import useIsMobile from '@/hooks/useIsMobile'

const gamesPageClasses = tv({
  slots: {
    base: 'flex flex-col gap-4 sm:grid sm:grid-cols-[15rem_1fr]',
    gamesClass: 'grid grid-cols-[repeat(auto-fill,_minmax(15rem,_1fr))] items-center gap-8'
  }
})

export type GamesPageProps = VariantProps<typeof gamesPageClasses> & {
  games?: GameCardProps[]
  filters: FilterGroup[]
}

const GamesPage = ({ filters, games = [] }: GamesPageProps) => {
  const { base, gamesClass } = gamesPageClasses()
  const isMobile = useIsMobile(640)
  const filterComponent = <Filter filters={filters} />

  return (
    <PageTemplate>
      <Container paddingMobile>
        <div className={base()}>
          {!isMobile && filterComponent}
          <section className="flex flex-col gap-4">
            <div className="flex gap-4">
              <TextField
                className="w-full rounded-sm"
                color="dark"
                placeholder="Search for"
                icon={<SearchIcon />}
                iconPosition="right"
                name="search"
              />
              {isMobile && filterComponent}
            </div>
            <div className={gamesClass()}>
              {games.map((game) => (
                <GameCard className="mx-auto" key={uuidv4()} {...game} />
              ))}
            </div>
          </section>
        </div>
      </Container>
    </PageTemplate>
  )
}

export { GamesPage }
