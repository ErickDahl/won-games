import { Meta, StoryObj } from '@storybook/react'
import { GameCardProps, GameCard } from '.'
import { IntlProvider } from 'react-intl'
import {
  gameCardMock,
  gameCardMockInCart,
  gameCardMockInWishlist
} from './mock'

export default {
  title: 'Molecules/GameCard',
  component: GameCard,
  args: gameCardMock,
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
  render: () => (
    <div style={{ maxWidth: '18rem' }}>
      <DefaultRender {...gameCardMockInCart} />
    </div>
  )
}

export const InWishlist: StoryObj<GameCardProps> = {
  render: () => (
    <div style={{ maxWidth: '18rem' }}>
      <DefaultRender {...gameCardMockInWishlist} />
    </div>
  )
}
