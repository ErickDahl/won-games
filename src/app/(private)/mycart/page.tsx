import { MyCart } from '@/components/pages/MyCart'
import { myCartMock } from '@/components/pages/MyCart/mock'

export default function Index() {
  return <MyCart {...myCartMock} />
}
