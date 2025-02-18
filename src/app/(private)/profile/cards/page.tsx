import { MyCards } from '@/components/pages/MyCards'
import { myCardsMock } from '@/components/pages/MyCards/mock'

export default function Index() {
  return <MyCards {...myCardsMock} />
}
