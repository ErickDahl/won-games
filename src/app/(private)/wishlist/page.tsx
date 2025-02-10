import { Wishlist } from '@/components/pages/Wishlist'
import { wishlistMock } from '@/components/pages/Wishlist/mocks'

export default function Index() {
  return <Wishlist {...wishlistMock} />
}
