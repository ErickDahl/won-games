import Container from '@/components/atoms/Container'
import GameDetails from '@/components/organisms/GameDetails'
import { gameDetailsMock } from '@/components/organisms/GameDetails/mock'
import GameInfo from '@/components/molecules/GameInfo'
import { gameInfoMock } from '@/components/molecules/GameInfo/mock'
import PageTemplate from '@/components/templates/PageTemplate'

export default function Index() {
  return (
    <PageTemplate>
      <Container>
        <GameInfo {...gameInfoMock} />
      </Container>
      <Container>
        <GameDetails {...gameDetailsMock} />
      </Container>
    </PageTemplate>
  )
}
