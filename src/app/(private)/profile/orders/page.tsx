import { MyOrders } from '@/components/pages/MyOrders'
import { myOrdersMock } from '@/components/pages/MyOrders/mock'

export default function Index() {
  return <MyOrders {...myOrdersMock} />
}
