import Container from '@/components/atoms/Container'
import GameDetails from '@/components/organisms/GameDetails'
import { gameDetailsMock } from '@/components/organisms/GameDetails/mock'
import GameInfo from '@/components/molecules/GameInfo'
import { gameInfoMock } from '@/components/molecules/GameInfo/mock'
import PageTemplate from '@/components/templates/PageTemplate'
import GameDescription from '@/components/molecules/GameDescription'
import { gameDescriptionMock } from '@/components/molecules/GameDescription/mock'
import { tv } from 'tailwind-variants'

const productPageClasses = tv({
  slots: {
    container: 'sm:px-4'
  }
})

const ProductPage = () => {
  const { container } = productPageClasses()

  return (
    <PageTemplate>
      <Container className={container()}>
        <GameInfo {...gameInfoMock} />
      </Container>
      <Container className={container()}>
        <GameDescription {...gameDescriptionMock} />
      </Container>
      <Container className={container()}>
        <GameDetails {...gameDetailsMock} />
      </Container>
    </PageTemplate>
  )
}

export { ProductPage }
