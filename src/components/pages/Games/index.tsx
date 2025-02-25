import { tv, VariantProps } from 'tailwind-variants'

import { Container } from '@/components/atoms/Container'
import { Filter, FilterGroup } from '@/components/organisms/Filter'
import { PageTemplate } from '@/components/templates/Page'

const gamesClasses = tv({
  slots: {
    base: ''
  }
})

type GamesProps = VariantProps<typeof gamesClasses> & {
  filters: FilterGroup[]
}

const Games = ({ filters }: GamesProps) => {
  const { base } = gamesClasses()

  return (
    <PageTemplate className={base()}>
      <Container>
        <div>
          <Filter filters={filters} />
          <div></div>
        </div>
      </Container>
    </PageTemplate>
  )
}

export { Games }
