import { Meta, StoryObj } from '@storybook/react'
import GameCardImage from '@/assets/gameCard.png'
import GameCardCarousel from '.'

export default {
  title: 'Molecules/GameCardCarousel',
  component: GameCardCarousel,
  argTypes: {
    cards: {
      control: false
    }
  }
} as Meta
export const Default: StoryObj = {
  render: (args) => (
    <div style={{ maxWidth: '50rem', margin: '0 auto' }}>
      <GameCardCarousel cards={[]} {...args} />
    </div>
  ),
  args: {
    cards: [
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
        isInCart: true,
        isInWishlist: true
      },
      {
        title: 'test',
        developer: 'test',
        image: GameCardImage,
        listPrice: 100,
        price: 150,
        isInCart: true,
        isInWishlist: true
      }
    ]
  }
}
