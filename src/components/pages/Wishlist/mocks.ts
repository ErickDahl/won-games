import { headingWhiteMock } from '@/components/atoms/Heading/mock'
import { cardsMock } from '@/components/molecules/GameCardCarousel/mock'
import { highlightMock } from '@/components/molecules/Highlight/mock'
import { WishlistProps } from '.'

const wishlistMock: WishlistProps = {
  games: cardsMock,
  heading: headingWhiteMock,
  recommendedGames: cardsMock,
  recommendedHighligth: highlightMock,
  emptyInfo: {
    title: 'Your wishlist is empty',
    description: 'Games added to your wishlist will appear here',
    hasLink: true
  }
}

export { wishlistMock }
