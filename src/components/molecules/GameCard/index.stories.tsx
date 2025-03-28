import { Meta, StoryObj } from '@storybook/react'
import GameCard from '.'
import gameImage from '@/assets/gameCard.png'

export default {
  title: 'Molecules/GameCard',
  component: GameCard,
  argTypes: {
    image: {
      control: false
    }
  }
} as Meta

export const Default: StoryObj = {
  render: (args) => (
    <div style={{ maxWidth: '18rem' }}>
      <GameCard
        title={'Game Title'}
        developer={'Game Developer'}
        image={gameImage}
        listPrice={100}
        price={150}
        {...args}
      />
    </div>
  )
}

export const InCart: StoryObj = {
  render: (args) => (
    <div style={{ maxWidth: '18rem' }}>
      <GameCard
        title={'Game Title'}
        developer={'Game Developer'}
        image={gameImage}
        listPrice={100}
        price={150}
        isInCart={true}
        {...args}
      />
    </div>
  )
}

export const InWishlist: StoryObj = {
  render: (args) => (
    <div style={{ maxWidth: '18rem' }}>
      <GameCard
        title={'Game Title'}
        developer={'Game Developer'}
        image={gameImage}
        listPrice={100}
        price={150}
        isInCart={true}
        isInWishlist={true}
        {...args}
      />
    </div>
  )
}
