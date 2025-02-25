import { GamesPage } from '@/components/pages/Games'
import { gamesPageMock } from '@/components/pages/Games/mock'

export default function Index() {
  return <GamesPage {...gamesPageMock} />
}
