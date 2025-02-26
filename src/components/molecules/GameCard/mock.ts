import gameImage from '@/assets/gameCard.png'
import { GameCardProps } from '.'

const gameCardMock: GameCardProps = {
  title: 'Red dead',
  developer: 'Game Developer',
  image: gameImage,
  listPrice: 100,
  price: 150,
  isInCart: false,
  isInWishlist: false,
  disableRibbon: false
}

const gameCardMockInCart: GameCardProps = {
  title: 'Test',
  developer: 'Game Developer',
  image: gameImage,
  listPrice: 100,
  price: 150,
  isInCart: true,
  isInWishlist: false,
  disableRibbon: false
}

const gameCardMockInWishlist: GameCardProps = {
  title: 'Borderlands',
  developer: 'Game Developer',
  image: gameImage,
  listPrice: 100,
  price: 150,
  isInCart: true,
  isInWishlist: true,
  disableRibbon: false
}

const gameCardMockNoRibbon: GameCardProps = {
  title: 'Game Title',
  developer: 'Game Developer',
  image: gameImage,
  listPrice: 100,
  price: 150,
  isInCart: false,
  isInWishlist: false,
  disableRibbon: true
}

export { gameCardMock, gameCardMockInCart, gameCardMockInWishlist, gameCardMockNoRibbon }
