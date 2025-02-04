import { GamePage } from '@/components/pages/Game'
import { gamePageMock } from '@/components/pages/Game/mock'

export default function Index() {
  return <GamePage {...gamePageMock} />
}
