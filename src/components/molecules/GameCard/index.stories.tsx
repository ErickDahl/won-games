import { Meta, StoryObj } from '@storybook/react'
import GameCard, { GameCardProps } from '.'
import gameImage from '@/assets/gameCard.png'
import { IntlProvider } from 'react-intl'

export default {
  title: 'Molecules/GameCard',
  component: GameCard,
  args: {
    title: 'Game Title',
    developer: 'Game Developer',
    image: gameImage,
    listPrice: 100,
    price: 150,
    isInCart: false,
    isInWishlist: false,
    disableRibbon: false
  },
  argTypes: {
    image: {
      control: false
    }
  }
} as Meta

const DefaultRender = (props: GameCardProps) => {
  return (
    <IntlProvider locale={'en'}>
      <GameCard {...props} />
    </IntlProvider>
  )
}

export const Default: StoryObj<GameCardProps> = {
  render: (args) => (
    <div style={{ maxWidth: '18rem' }}>
      <DefaultRender {...args} />
    </div>
  )
}

export const InCart: StoryObj<GameCardProps> = {
  render: (args) => (
    <div style={{ maxWidth: '18rem' }}>
      <DefaultRender isInCart={true} {...args} />
    </div>
  )
}

export const InWishlist: StoryObj<GameCardProps> = {
  render: (args) => (
    <div style={{ maxWidth: '18rem' }}>
      <DefaultRender isInCart={true} isInWishlist={true} {...args} />
    </div>
  )
}
