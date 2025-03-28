import GameCardImage from '@/assets/gameCard.png'
import { GameCardProps } from '../GameCard'

const cardsMock: GameCardProps[] = [
  {
    title: 'test',
    developer: 'test',
    image: GameCardImage,
    listPrice: 100,
    price: 150,
    isInCart: true,
    isInWishlist: true
  },
  {
    title: 'test',
    developer: 'test',
    image: GameCardImage,
    listPrice: 100,
    price: 150,
    isInCart: false,
    isInWishlist: false
  },
  {
    title: 'test',
    developer: 'test',
    image: GameCardImage,
    listPrice: 100,
    price: 150,
    isInCart: true,
    isInWishlist: false
  },
  {
    title: 'test',
    developer: 'test',
    image: GameCardImage,
    listPrice: 100,
    price: 150,
    isInCart: false,
    isInWishlist: true
  }
]

export default cardsMock
