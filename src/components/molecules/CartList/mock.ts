import gameImage from '@/assets/gameCard.png'
import { CartListProps } from '.'

const cartListMock: CartListProps = {
  items: [
    {
      image: gameImage,
      title: 'Red Dead Redemption 2',
      price: 210
    },
    {
      image: gameImage,
      title: 'Red Dead Redemption 2',
      price: 210
    }
  ],
  total: 420
}

export { cartListMock }
