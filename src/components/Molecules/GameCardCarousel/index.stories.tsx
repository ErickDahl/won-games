import { Meta, StoryObj } from '@storybook/react'
import GameCardCarousel from '.'
import cardsMock from './mock'

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
    cards: cardsMock
  }
}
